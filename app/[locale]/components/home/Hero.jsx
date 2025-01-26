import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "../common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-10 lg:py-12">
      <div className="container relative z-10">
        <Swiper spaceBetween={30} loop pagination={{ clickable: true }} modules={[Pagination]}>
          {/* First Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
              {/* Image Section */}
              {/* Text Section */}
              <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-cover bg-left order-2 lg:order-none">
                <h3 className="text-2xl lg:text-3xl mb-3 uppercase">Access to <span className="text-secondary text-[28px] md:text-4xl xl:text-5xl font-bold">8</span> Markets with</h3>
                <h2 className="text-2xl lg:text-3xl  mb-4 uppercase md:pl-10 font"><span className="text-secondary text-[28px] md:text-4xl xl:text-5xl  font-bold">+27,000</span> Trading Instruments</h2>
                <p className="text-base lg:text-base text-gray-600 my-6 uppercase max-w-72 mx-auto md:max-w-full pb-5">
                  Forex | CFDs | Metals | Shares | Commodities | Stocks | Energies
                </p>
                
                <Button />
              </div>
              <div className="relative w-full h-[180px] md:h-[340px]">
                <Image src="/Assets-22.png" fill alt="Banner" className="object-contain" /> 
              </div>
              
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row-reverse w-[100%]">
               {/* Image Section */}
               <div className="relative w-full h-[180px] md:h-[340px]">
                <Image src="/Assets-21.png" fill alt="Banner" className="object-contain" /> 
              </div>
                {/* Text Section */}
                <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-cover bg-left  order-2 lg:order-none">
                <h1 className="text-2xl lg:text-3xl text-center lg:text-left mb-3 uppercase font-medium  max-w-72 mx-auto md:max-w-full "><span className="text-secondary text-[28px] md:text-4xl xl:text-5xl font-bold md:mr-10">Trade, Invest & Partner</span></h1>
                <h2 className="text-xl lg:text-3xl  mb-2  md:pl-28 font"> with the Globally Trusted & Regulated
                </h2>
                <h2 className="text-xl lg:text-3xl  mb-4  md:pl-52 font"> Leader in Financial Derivatives
                </h2>
                <Button />
              </div>
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
               {/* Text Section */}
               <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-cover bg-left  order-2 lg:order-none">
                <p className="text-xl md:text-3xl md:max-w-lg uppercase font-medium pb-2">Experience Cutting-Edge Trading Tools on the</p>
                <h3 className="uppercase"><span className="text-secondary text-[28px] md:text-4xl xl:text-5xl  font-bold"> Most Stable </span></h3>
                <h2 className="text-xl lg:text-3xl  mb-4 uppercase md:pl-10 font"><span className="text-secondary text-[28px] md:text-4xl xl:text-5xl  font-bold">Trading Platform</span></h2>
                <p className="text-sm lg:text-base text-gray-600 my-6 uppercase">
                  MT4 | MT5
                </p>
                <Button />
              </div>
              {/* Image Section */}
              <div className="relative w-full h-[180px] md:h-[340px]">
                <Image src="/Asset-09.webp" fill alt="Banner" className="object-contain" />
              </div>
             
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;