import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const BridgeCarousel = () => {
  const slides = [
    { title: "oneZero Hub", description: "Experience deep liquidity, ultra-fast execution, real-time data, and a customizable trading environment—secure and efficient trading at its best." },
    { title: "PrimeXM XCORE", description: "Trade faster, smarter, and safer with deep liquidity, ultra-low latency execution, real-time insights, and secure, flexible trading solutions." },
    { title: "Centroid Hub", description: "Enhance trading efficiency with deep liquidity, ultra-fast execution, real-time insights, and seamless market connectivity—all secured for optimal performance." },
    { title: "GTC Prime Bridges", description: "Seamlessly connect to multiple platforms and liquidity providers with fast execution, optimized performance, and secure data transmission." }
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

export default BridgeCarousel