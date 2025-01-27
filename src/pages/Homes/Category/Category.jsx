import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide3.jpg";
import slide5 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle.jsx";

const Category = () => {
  return (
    <div className="my-28">
      <SectionTitle title="Oder Online" secandTitle="Form 11.00am to 10.00pm" />

      <Swiper
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white  ">
            salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white ">
            pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white ">
            sups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white ">
            sups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white ">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white  ">
            salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white ">
            sups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white ">
            desserts
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
