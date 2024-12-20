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
import Link from "next/link";

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
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-auto">
            <div className="relative rounded">
              <Image src="/aa_logo_green.jpg" objectFit="cover" alt="aa" fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Aobauan X TCDC</h3>
              <Link
                href="https://www.aobauan.com/tcdc"
                className="underline text-blue-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                Checkout the site
              </Link>
              <p>
                Created a product display website for a small inhaler business
                venture as a supplement for an exhibition display at Thailand
                Creative & Design Center (TCDC). Now it is being used as a
                product catalogue for store partners.
              </p>
              <p className="pt-3">
                The site yield great success and is currently in talks to expand
                the utility of the website to become more than just a product
                display.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-auto">
            <div className="relative rounded">
              <Image src="/mnemosyne2.png" objectFit="cover" alt="aa" fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Asset Management (IXL)</h3>
              <p>This is the project's description</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-2 h-full w-full bg-white shadow-md rounded overflow-hidden">
            <div className="relative rounded">
              <Image src="/techecosys2.png" objectFit="cover" alt="aa" fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Dependency Tracker (IXL)</h3>
              <p>This is the project's description</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
