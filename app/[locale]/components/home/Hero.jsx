import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "../common/Button";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {

  const [isFourthSlide, setIsFourthSlide] = useState(false);
  const t = useTranslations("home.hero")

  return (
    <section className={`relative py-10 lg:py-[46px] transition-all duration-500 ${isFourthSlide ? "bg-[url('/fal-bg.webp')]" : "bg-[url('/gtcfx-bg.webp')]"} bg-cover bg-center bg-opacity-35`}>
      <div className="container relative z-10">
        <Swiper 
          spaceBetween={30} 
          loop 
          pagination={{ clickable: true }} 
          modules={[Pagination, Autoplay]} 
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setIsFourthSlide(swiper.realIndex === 3)}
        >

          {/* Second Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row-reverse w-[100%]">
             
              {/* Text Section */}
              <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-cover bg-left order-2 lg:order-none">
                <h2 className="text-center lg:text-left mb-3 uppercase max-w-72 mx-auto md:max-w-full ">
                  <span className="text-secondary text-[20px] md:text-3xl xl:text-5xl font-bold md:mr-10">{t("slider1.heading")}</span>
                </h2>
                <p className="text-lg md:text-2xl 2xl:text-3xl mb-2"> {t("slider1.subheading")}</p>
                <p className="text-lg md:text-2xl 2xl:text-3xl mb-4"> {t("slider1.description")}</p>
                <Button />
              </div>

               {/* Image Section */}
               <div className="relative w-full h-[160px] md:h-[340px]">
                <Image src="/gtc-assets.png" fill alt="Banner" className="object-contain" /> 
              </div>
            </div> 
          </SwiperSlide>

          {/* First Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
             

              <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-contain bg-left order-2 md:order-none">
                <h3 className="text-xl md:text-2xl 2xl:text-3xl md:mb-2 uppercase">{t("slider2.heading")} <span className="text-secondary text-[24px] md:text-4xl font-bold">{t("slider2.heading1")}</span> {t("slider2.heading2")}</h3>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl mb-2 uppercase">
                  <span className="text-secondary text-[24px] md:text-4xl font-bold">{t("slider2.subheading")}</span> {t("slider2.subheading2")}
                </h2>
                <p className="text-sm xl:text-base text-gray-600 md:my-6 uppercase max-w-72 mx-auto md:max-w-full pb-5">
                {t("slider2.description")}
                </p>
                <Button />
              </div>

               {/* Image Section */}
               <div className="relative w-full h-[160px] md:h-[340px]">
                <Image src="/Assets-22.png" fill alt="Banner" className="object-contain" /> 
              </div>
            
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
             
              {/* Text Section */}
              <div className="text-center lg:text-left text-primary bg-[url('/bg-new.webp')] bg-contain bg-left order-2 lg:order-none">
                <p className="text-sm md:text-[2xl] 2xl:text-2xl md:max-w-xs xl:max-w-lg uppercase pb-2">{t("slider3.heading")}</p>
                <h3 className="uppercase"><span className="text-secondary text-[20px] md:text-4xl xl:text-5xl font-bold"> {t("slider3.subheading")} </span></h3>
                <h2 className="text-xl lg:text-3xl mb-3 uppercase">
                  <span className="text-secondary text-[20px] md:text-4xl xl:text-5xl font-bold">{t("slider3.description")}</span>
                </h2>
                <p className="text-sm lg:text-base text-gray-600 my-2 uppercase">{t("slider3.extra")}</p>
                <Button />
              </div>

               {/* Image Section */}
               <div className="relative w-full h-[160px] md:h-[340px]">
                <Image src="/gtc-product.png" fill alt="Banner" className="object-contain" />
              </div>
            </div>
          </SwiperSlide>


  {/* fourth Slide */}
  <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:flex-row w-[100%]">
             
              {/* Text Section */}
              <div className="text-center lg:text-left text-white order-2 lg:order-none">
                <p className="text-sm md:text-[xl] 2xl:text-2xl md:max-w-xs xl:max-w-lg uppercase pb-1 md:pb-3">{t("slider4.subheading")}</p>
                <h3 className="uppercase bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text"><span className="text-[20px] md:text-3xl xl:text-5xl font-bold py-4 leading-normal"> {t("slider4.heading")} </span>
                </h3>
                <p className="text-sm md:text-[xl] 2xl:text-2xl max-w-72 mx-auto md:mx-0 md:max-w-80 xl:max-w-lg py-2 md:py-4">{t("slider4.description")}</p>
           
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                      <LiveAccountButton />
                      <Link href="https://www.gtcfx.com/company-news/gtcfx-celebrates-12-years-of-excellence-with-the-golden-falcon-awards-night-in-dubai" className="bg-secondary text-white text-sm 3xl:text-xl px-8 py-2 text-center md:w-auto w-[300px] md:m-0 uppercase mx-auto transition-colors duration-900 hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e] duration-500">
                      {t("slider4.buttonText")}
                      </Link>
                </div>
              </div>

               {/* Image Section */}
               <div className="relative w-full h-[160px] md:h-[400px]">
                <Image src="/falconaward.png" fill alt="Banner" className="object-contain" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
