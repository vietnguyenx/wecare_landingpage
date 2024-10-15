import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    text: "Tôi đã sử dụng WeCare trong suốt 3 tháng và thấy sức khỏe của mình cải thiện rõ rệt. Thực đơn rất dễ theo và phù hợp với tình trạng tiểu đường của tôi.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Lê Văn An",
    text: "WeCare giúp tôi kiểm soát chế độ ăn uống một cách khoa học. Thực đơn đa dạng và đội ngũ hỗ trợ nhiệt tình. Tôi rất hài lòng với trải nghiệm.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Trần Minh Tâm",
    text: "Sự tư vấn từ các chuyên gia dinh dưỡng tại WeCare thật sự rất hữu ích. Nhờ vào các kế hoạch dinh dưỡng cá nhân hóa, tôi đã giảm cân và duy trì sức khỏe tốt.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Phạm Quang Huy",
    text: "WeCare là lựa chọn tuyệt vời cho sức khỏe của tôi. Chế độ ăn uống được cá nhân hóa và dễ dàng theo dõi.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Nguyễn Thị Hồng",
    text: "Tôi rất hài lòng với sự hỗ trợ của WeCare. Đội ngũ nhiệt tình và thực đơn rất phong phú.",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 6,
    name: "Đặng Văn Long",
    text: "Thực đơn của WeCare giúp tôi cải thiện sức khỏe đáng kể. Tôi sẽ tiếp tục sử dụng dịch vụ này.",
    img: "https://picsum.photos/106/106",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768, // Điểm ngắt cho thiết bị nhỏ hơn
        settings: {
          slidesToShow: 1, // Hiển thị 1 ô trên màn hình nhỏ
        },
      },
      {
        breakpoint: 1024, // Điểm ngắt cho thiết bị trung bình
        settings: {
          slidesToShow: 2, // Hiển thị 2 ô trên màn hình trung bình
        },
      },
    ],
  };
  
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Đánh giá từ khách hàng</h1>
            <p className="text-xl text-gray-400">
              Những chia sẻ chân thực từ người dùng đã và đang sử dụng dịch vụ của WeCare.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1200px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6" key={data.id}>
                    <div
                      className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                      style={{ minHeight: "250px" }} // Đặt chiều cao tối thiểu để các ô đều nhau
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt={data.name}
                      />
                      <p
                        className="text-gray-500 text-sm overflow-hidden"
                        style={{ maxHeight: "60px", textOverflow: "ellipsis" }} // Giới hạn chiều cao và cắt bớt nội dung nếu quá dài
                      >
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
