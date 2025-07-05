"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const MultiItemCarousel = () => {
  const slides = [
    { id: 1, img: "/images/services/knee-replacement.jpg", title: "Knee Replacement" },
    { id: 2, img: "/images/services/robotic-spine.jpg", title: "Robotic Spine Surgery" },
    { id: 3, img: "/images/services/total-knee-replacement.jpg", title: "Total Knee Replacement" },
    { id: 4, img: "/images/services/nerve-roots-decompression.jpg", title: "Nerve Roots Decompression" },
    { id: 5, img: "/images/services/vertebroplasty.jpg", title: "Vertebroplasty" },
    { id: 6, img: "/images/services/endoscopic-spine-surgery.jpg", title: "Endoscopic Spine Surgery" },
    { id: 7, img: "/images/services/hip-replacement.jpg", title: "Hip Replacement" },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center my-8 px-4">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">Gallery</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-white rounded shadow p-0 hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden">
              <div className="h-100 w-full">
                <img
                  src={slide.img} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="py-2 font-bold text-xl text-blue-700 bg-green-100">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       
    </div>
  );
};

export default MultiItemCarousel;
