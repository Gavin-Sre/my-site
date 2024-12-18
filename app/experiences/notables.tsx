import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../custom-style/swiper-button.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Notables() {
  return (
    <>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper w-full h-full rounded-md"
        slidesPerView={1.2}
        spaceBetween={10}
        centeredSlides
        breakpoints={{
          800: {
            slidesPerView: 2.2,
            spaceBetween: 30,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 3.2,
            spaceBetween: 40,
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <div className="relative">
              <p>This is the project's description</p>
              {/* <div className="bottom-10 absolute">
                <ProjectOverlay />
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <p>This is the project's description</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <p>This is the project's description</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <p>This is the project's description</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <p>This is the project's description</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <p>This is the project's description</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
