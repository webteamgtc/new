import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const LiquidityCarousel = () => {
  const slides = [
    { title: "Liquidity", description: "We provide top-tier liquidity solutions globally, ensuring optimal execution and minimal slippage with deep liquidity and advanced technology." },
    { title: "Forex", description: "Gain access to deep FX liquidity with 200+ trading pairs, tight spreads, competitive margins, and lightning-fast execution." },
    { title: "Metals", description: "Enhance your business with deep metals liquidity, featuring tight spreads and dependable pricing." },
    { title: "Commodities", description: "Gain deep liquidity, competitive pricing, and seamless execution across metals, energy, and other key commodity markets." },
    { title: "Indices", description: "Tap into global indices liquidity with tight spreads, rapid execution, and competitive pricing." },
    { title: "Energy", description: "Access the energy markets with strong liquidity, tight spreads, and reliable execution." },
    { title: "Equities", description: "Trade global equities via single-stock CFDs, accessing worldwide markets from one platform with seamless execution. " }
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
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 }
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

export default LiquidityCarousel;
