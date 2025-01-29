import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "../common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-10 lg:py-[46px] bg-[url('/gtcfx-bg.webp')] bg-cover bg-center bg-opacity-35">
      <div className="container relative z-10">
        <Swiper spaceBetween={30} loop pagination={{ clickable: true }} modules={[Pagination]}>

           {/* Second Slide */}
           <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row-reverse w-[100%]">
               {/* Image Section */}
               <div className="relative w-full h-[180px] md:h-[340px]">
                <Image src="/Assets-21.png" fill alt="Banner" className="object-contain" /> 
              </div>
                {/* Text Section */}
                <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-cover bg-left  order-2 lg:order-none">
                <h2 className="text-center lg:text-left mb-3 uppercase  max-w-72 mx-auto md:max-w-full "><span className="text-secondary text-[20px] md:text-3xl xl:text-5xl font-bold md:mr-10">Trade, Invest & Partner</span></h2>
                <p className="text-lg md:text-2xl 2xl:text-3xl  mb-2 md:pl-12  2xl:pl-28"> with the Globally Trusted & Regulated
                </p>
                <p className="text-lg md:text-2xl 2xl:text-3xl  mb-4 md:pl-36 2xl:pl-52"> Leader in Financial Derivatives
                </p>
                <Button />
              </div>
            </div> 
          </SwiperSlide>

          {/* First Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
              {/* Image Section */}
              {/* Text Section */}
              <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-contain bg-left order-2 lg:order-none">
                <h3 className="text-xl md:text-2xl 2xl:text-3xl md:mb-2 uppercase">Access to <span className="text-secondary text-[24px] md:text-4xl font-bold">8</span> Markets with</h3>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl mb-2 uppercase md:pl-10 font"><span className="text-secondary text-[24px] md:text-4xl font-bold">+27,000</span> Trading Instruments</h2>
                <p className="text-sm xl:text-base text-gray-600 md:my-6 uppercase max-w-72 mx-auto md:max-w-full pb-5">
                  Forex | CFDs | Metals | Shares | Commodities | Stocks | Energies
                </p>
                
                <Button />
              </div>
              <div className="relative w-full h-[180px] md:h-[340px]">
                <Image src="/Assets-22.png" fill alt="Banner" className="object-contain" /> 
              </div>
              
            </div>
          </SwiperSlide>

         

          {/* Third Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
               {/* Image Section */}
               <div className="relative w-full h-[180px] md:h-[340px]">
                <Image src="/Asset-09.webp" fill alt="Banner" className="object-contain" />
              </div>
               {/* Text Section */}
               <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-contain bg-left  order-2 lg:order-none">
                <p className="text-sm md:text-[2xl] 2xl:text-3xl  md:max-w-xs xl:max-w-lg uppercase pb-2">Experience Cutting-Edge Trading Tools on the</p>
                <h3 className="uppercase"><span className="text-secondary text-[20px] md:text-4xl xl:text-5xl  font-bold"> Most Stable </span></h3>
                <h2 className="text-xl lg:text-3xl  mb-3 uppercase md:pl-10 font"><span className="text-secondary text-[20px] md:text-4xl xl:text-5xl  font-bold">Trading Platform</span></h2>
                <p className="text-sm lg:text-base text-gray-600 my-2 uppercase">
                  MT4 | MT5
                </p>
                <Button />
              </div>
             
             
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;