import { Carousel } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const HomeCarousel = () => {
  const banners = useSelector((state) => {
    return state.booking.banners;
  });
  return (
    <div>
      <Carousel autoplay>
        {banners.map((item) => {
          return (
            <div key={item.maBanner}>
              <img
                src={item.hinhAnh}
                alt=""
                className="w-full h-99 object-cover"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
