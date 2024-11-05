import React, { useRef, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    // Khởi động AOS
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    // Đặt trang về đầu mỗi khi tải lại
    window.scrollTo(0, 0);
  }, []); // Chạy chỉ khi component được mount

  // Tạo ref cho phần Services, AppStore và Banner
  const servicesRef = useRef(null);
  const appStoreRef = useRef(null);
  const bannerRef = useRef(null);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar servicesRef={servicesRef} bannerRef={bannerRef} />
      <Hero appStoreRef={appStoreRef} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={appStoreRef}>
        <AppStore />
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
