import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './Slide.css'

// import required modules
import { Navigation } from "swiper";

// Data
import { projects } from "../../../data/data";

const Slide = ({ setSelectedProject }) => {
  return (
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="w-100 flex flex-row items-center justify-center"
      >
        {projects.map((project) => (
          <SwiperSlide
            id="swiper-slide"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-[250px] m-0 mt-20 px-5 cursor-pointer items-center justify-center"
          >
            <p className="text-center w-100">{project.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Slide;
