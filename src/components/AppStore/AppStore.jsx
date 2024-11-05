import React from "react";
import UpToDownStoreImg from "../../assets/uptodown.png";
import PlayStoreImg from "../../assets/play_store.png";
import Gif from "../../assets/mobile_bike.gif";
import WelcomePage from "../../assets/welcome_page_app.png";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Khám phá thêm nhiều tính năng của
                <span style={{ color: "#FF8718" }}> We</span>
                <span style={{ color: "#4CAF4F" }}>Care</span>
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="https://wecare.vi.uptodown.com/android" target="_blank" rel="noopener noreferrer">
                  <img
                    src={UpToDownStoreImg}
                    alt="UpToDown store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="flex justify-center items-center space-x-4"
            >
              {/* Thêm hai ảnh nằm cạnh nhau */}
              
              <img
                src={Gif}
                alt="mobile bike"
                className="w-[45%] sm:max-w-[45%] block rounded-md mix-blend-multiply dark:mix-blend-difference"
              />

              <img
                src={WelcomePage}
                alt="welcome page"
                className="w-[20%] sm:max-w-[20%] block rounded-md mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
