import React from "react";
import BiryaniImg from "../../assets/logo-10.png";
import BiryaniImg2 from "../../assets/logo-11.png";
import Vector from "../../assets/vector.png";
import { MdVerified, MdSupportAgent } from "react-icons/md"; // Icon 1 & 6
import { FaHeartbeat, FaShieldAlt } from "react-icons/fa"; // Icon 2 & 5
import { GiFruitBowl, GiMeal } from "react-icons/gi"; // Icon 3 & 4

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <span id="banner"></span>
      <div className="min-h-[1100px]"> {/* Tăng chiều cao tổng thể để chứa cả hai phần */} 
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div data-aos="slide-left" data-aos-duration="400" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section for first description */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section for first description */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  <span style={{ color: "#FF8718" }}>We</span>
                  <span style={{ color: "#4CAF4F" }}>Care</span> - đồng hành cùng sức khoẻ Việt Nam
                </h1>
                <p className="text-base text-gray-500 tracking-wide leading-5">
                  WeCare là nền tảng thiết kế thực đơn dinh dưỡng dành riêng cho bệnh nhân tiểu đường và bệnh gút, đồng hành cùng người tiêu dùng cải thiện sức khoẻ và cung cấp thực đơn những bữa ăn ngon, chất lượng và bổ dưỡng.
                </p>
                <div className="flex gap-6">
                  <div data-aos="fade-left" data-aos-duration="300" data-aos-delay="500">
                    <MdVerified className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div data-aos="fade-left" data-aos-duration="300" data-aos-delay="700">
                    <FaHeartbeat className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-red-100 dark:bg-red-400" />
                  </div>
                  <div data-aos="fade-left" data-aos-duration="300" data-aos-delay="900">
                    <GiFruitBowl className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second description section */}
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div data-aos="slide-right" data-aos-duration="400" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* text content section for second description */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  <span style={{ color: "#FF8718" }}>We</span>
                  <span style={{ color: "#4CAF4F" }}>Care</span> - Cam kết chất lượng dinh dưỡng
                </h1>
                <p className="text-base text-gray-500 tracking-wide leading-5">
                  WeCare với mạng lưới các chuyên gia dinh dưỡng uy tín cùng hệ thống thực đơn dinh dưỡng chất lượng, sẽ mang đến cho người tiêu dùng những trải nghiệm cá nhân hoá đặc biệt.
                </p>
                <div className="flex gap-6">
                  <div data-aos="fade-right" data-aos-duration="300" data-aos-delay="500">
                    <GiMeal className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  </div>
                  <div data-aos="fade-right" data-aos-duration="300" data-aos-delay="700">
                    <FaShieldAlt className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-blue-100 dark:bg-blue-400" />
                  </div>
                  <div data-aos="fade-right" data-aos-duration="300" data-aos-delay="900">
                    <MdSupportAgent className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
              </div>
              {/* Image section for second description */}
              <div>
                <img
                  src={BiryaniImg2}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
