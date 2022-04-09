import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./sliderProduct.css";
import { Autoplay, Pagination } from "swiper";

const SliderProduct = () => {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderImage firstImageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage secondImageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage thirdImageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage fourthImageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage fifthmageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage sixthImageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage seventhImageSlider"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderImage eighthImageSlider"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderProduct;
