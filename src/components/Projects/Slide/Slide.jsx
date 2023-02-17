import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slide.css";

// import required modules
import { Navigation } from "swiper";

// Data
import { projects } from "../../../data/data";

const Slide = ({ setSelectedProject }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
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
      navigation={true}
      modules={[Navigation]}
      className="w-100 flex flex-row items-center justify-center "
    >
      {projects.map((project) => (
        <SwiperSlide
          id="swiper-slide"
          key={project.id}
          onClick={() => setSelectedProject(project)}
          className="group relative flex !z-0 w-[150px] mx-10 h-[80px] bg-[rgba(0,0,0,0.1)] border border-cyan-400 shadow-[0_0_5px_#0000003e] mt-20 cursor-pointer items-center justify-center rounded-3xl"
        >
          <p className="w-100 truncate absolute !z-[1] top-[50px] font-mark text-center text-2xl text-black">
            {project.title}
          </p>
          {project.logo.length === 0 ? (
            <p id='teste' className="w-100 truncate absolute font-mont text-[#CD0C02] text-xl font-[900] uppercase">{project.title}</p>
          ) : (
            <img
              className="absolute bottom-[10px] w-20 rounded-[40%] transition-all ease-in-out duration-300 group-hover:scale-[1.05]"
              src={project.logo}
              alt=""
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
