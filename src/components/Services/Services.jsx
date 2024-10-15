import React from "react";
import sivler from "../../assets/big-silver.png";
import gold from "../../assets/big-gold.png";
import diamond from "../../assets/big-diamond2.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: sivler,
    name: "WeCare Bạc",
    price: "199.000 VND/tháng",
    description:
      "Tư vấn từ chuyên gia dinh dưỡng mỗi tháng,  và các tính năng gói cơ bản.",
  },
  {
    id: 2,
    img: gold,
    name: "WeCare Vàng",
    price: "349.000 VND/tháng",
    description:
      "Tư vấn video call 2 lần/tháng, kiểm tra sức khỏe 6 tháng/lần, và lợi ích gói Bạc.",
  },
  {
    id: 3,
    img: diamond,
    name: "WeCare Kim Cương",
    price: "499.000 VND/tháng",
    description:
      "Hỗ trợ 24/7, kiểm tra sức khỏe 3 tháng/lần, tư vấn cá nhân hóa, và lợi ích gói Vàng.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold">Gói Premium</h1>
            <p className="text-xl text-gray-500">
              Nâng cấp trải nghiệm sử dụng bằng cách nâng cấp các gọi Premium đa dạng cho từng cá nhân.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-[#4CAF4F] hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">
                    {service.name} <br />
                    <span className="text-base text-orange-500 group-hover:text-white duration-high">
                      {service.price}
                    </span>
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
