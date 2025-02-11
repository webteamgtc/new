import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TechnologyCarousel = () => {
  const slides = [
    { title: "Technology", description: "We leverage cutting-edge technology for high-speed trading and advanced analytics, keeping clients ahead in the market." },
    { title: "Fix API", description: "Our FIX API ensures lightning-fast order execution, low-latency trading, and seamless integration with trading algorithms." },
    { title: "VPS", description: "Our VPS ensures advanced security, low latency, remote access, uninterrupted trading, easy customization, and automated trading." },
    { title: "Algo hosting service ", description: "We offers a comprehensive algo hosting service designed to empower traders with the tools and resources they need to optimize their trading strategies" },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 }
        }}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
             <div className="p-6 border shadow-md bg-white text-center h-[250px] flex flex-col justify-center items-center">
              <h3 className="text-lg font-bold text-gray-800">{slide.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechnologyCarousel