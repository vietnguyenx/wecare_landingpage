import React from "react";
import {
  FaFacebook,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/wecare_logo_size36.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[100px]" />
            </h1>
            <p className="">
              Hãy tham gia cùng chúng tôi trên hành trình hướng đến sức khỏe tốt hơn!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>TP. Thủ Đức, TP. Hồ Chí Minh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+84 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61566267626726&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="https://www.tiktok.com/@wecarebusiness?_t=8qZQEqip4zM&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Aligning the columns with flexbox */}
          <div className="flex flex-col col-span-2 md:pl-10">
            <div className="flex justify-between w-full">
              <div className="py-16 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Công ty
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Trang Chủ</li>
                  <li className="cursor-pointer">Giới Thiệu</li>
                  <li className="cursor-pointer">Dịch Vụ</li>
                  <li className="cursor-pointer">Liên Hệ</li>
                </ul>
              </div>
              <div className="py-16 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Dịch Vụ
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Kế Hoạch</li>
                  <li className="cursor-pointer">Tập Luyện</li>
                  <li className="cursor-pointer">Tư Vấn</li>
                  <li className="cursor-pointer">Hướng Dẫn</li>
                </ul>
              </div>
              <div className="py-16 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Thông Tin Khác
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Chính Sách Bảo Mật</li>
                  <li className="cursor-pointer">Điều Khoản Dịch Vụ</li>
                  <li className="cursor-pointer">Câu Hỏi Thường Gặp</li>
                  <li className="cursor-pointer">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            © 2024 WeCare. All rights reserved || Made with ❤️ by WeCare
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
