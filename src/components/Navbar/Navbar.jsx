import React from "react";
import Logo from "../../assets/wecare_logo_size36.png";
import { FaFacebook } from "react-icons/fa"; // Import biểu tượng Facebook
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    name: "Gói Premium",
    link: "/#services", // Sẽ được thay thế bằng sự kiện cuộn
  },
  {
    id: 3,
    name: "Về chúng tôi",
    link: "/#banner", // Sẽ được thay thế bằng sự kiện cuộn
  },
];

const Navbar = ({ servicesRef, bannerRef }) => {
  // Hàm cuộn đến phần Services
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Hàm cuộn đến phần Banner
  const scrollToBanner = () => {
    bannerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-28" />
              <span></span>
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <DarkMode />
            </div>
            {/* Menu items */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  {menu.name === "Gói Premium" ? (
                    <button
                      onClick={scrollToServices}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </button>
                  ) : menu.name === "Về chúng tôi" ? (
                    <button
                      onClick={scrollToBanner}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </button>
                  ) : (
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {/* Nút Liên hệ với biểu tượng Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61566267626726"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Liên hệ
                <FaFacebook className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
