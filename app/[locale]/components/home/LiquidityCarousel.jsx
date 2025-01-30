import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const LiquidityCarousel = () => {
  const slides = [
    { title: "LIQUIDITY", description: "Unlock deep liquidity access across 10 assets in one platform. Meet your trading needs with our unique multi-asset offers." },
    { title: "FOREX", description: "Access deep FX liquidity with over 100 trading pairs, low spreads, competitive margins, and fast execution." },
    { title: "METALS", description: "Expand your business with competitive metals liquidity. Benefit from tight spreads and reliable pricing." },
    { title: "INDICES", description: "Access global indices liquidity with tight spreads, fast execution, and competitive pricing." },
    { title: "ENERGY", description: "Gain reliable energy market access with competitive spreads and robust liquidity." },
    { title: "EQUITIES", description: "Access global equities liquidity through single-stock CFDs, gain worldwide equity market exposure from a single platform with efficient execution." }
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
          1280: { slidesPerView: 4 }
        }}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 border  shadow-md bg-white text-center h-[250px] items-center flex flex-col">
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
