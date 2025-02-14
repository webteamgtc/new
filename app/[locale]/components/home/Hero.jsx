import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "../common/Button";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home.hero");
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[1000px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image (visible until video loads) */}
      {!videoLoaded && (
        <img
          src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/gtc-brand.webp" // Change this to your actual image path
          alt="Background Placeholder"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setVideoLoaded(true)} // Set state when video loads
      >
        <source src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/overlay-gtcfx.mp4" type="video/mp4" />
      </video>
      <div className="container relative z-10 text-white">
        <Swiper
          spaceBetween={30}
          loop
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
           {/* Second Slide */}
           <SwiperSlide>
            <div className="grid grid-cols-1 md:gap-3 items-center lg:flex-row-reverse w-[100%]">
              {/* Text Section */}

              <h2 className="uppercase bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text max-w-2xl mx-auto">
                <span className="text-[20px] md:text-3xl xl:text-5xl font-bold md:mr-10">
                  {t("slider1.heading")}
                </span>
              </h2>
              <p className="text-lg md:text-2xl 2xl:text-3xl">
                {" "}
                {t("slider1.subheading")}
              </p>
              <p className="text-lg md:text-2xl 2xl:text-3xl pb-2">
                {" "}
                {t("slider1.description")}
              </p>
              <Button />
            </div>
          </SwiperSlide>

          {/* First Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 md:gap-3 items-center lg:flex-row w-[100%]">
              <h3 className="uppercase bg-gradient-to-r from-secondary via-secondary  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text text-[20px] md:text-3xl xl:text-5xl">
                <span className="font-bold">{t("slider2.heading")}</span>{" "}
                <span className="text-white text-[24px] md:text-6xl font-bold">
                  {t("slider2.heading1")}
                </span>{" "}
                <span className="font-bold">{t("slider2.heading2")}</span>{" "}
              </h3>
              <h2 className="uppercase bg-gradient-to-r from-white via-secondary  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text text-[20px] md:text-3xl xl:text-5xl mb-0">
                <span className="text-white text-[24px] md:text-5xl font-bold">
                  {t("slider2.subheading")}
                </span>{" "}
                <span className="font-bold"> {t("slider2.subheading2")}</span>
              </h2>

              <Button />
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 md:gap-3 items-center lg:flex-row w-[100%]">
              <p className="text-sm md:text-[2xl] 2xl:text-2xl uppercase">
                {t("slider3.heading")}
              </p>
              <h3 className="uppercase bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text max-w-2xl mx-auto">
                <span className="text-[20px] md:text-4xl xl:text-5xl font-bold">
                  {" "}
                  {t("slider3.subheading")}{" "}
                </span>
              </h3>
              <h2 className="text-xl lg:text-3xl uppercase">
                <span className="text-secondary text-[20px] md:text-4xl xl:text-5xl font-bold">
                  {t("slider3.description")}
                </span>
              </h2>

              <Button />
            </div>
          </SwiperSlide>

       

          {/* fourth Slide */}
          <SwiperSlide>
            <div className="grid grid-cols-1 md:gap-3 items-center lg:flex-row w-[100%]">
              <p className="text-sm md:text-[2xl] 2xl:text-2xl uppercase">
                {" "}
                Deep Liquidity Access
              </p>
              <h3 className="uppercase bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text max-w-3xl mx-auto">
                <span className="text-[20px] md:text-4xl xl:text-5xl font-bold">
                  {" "}
                  Direct Access to Top-Tier Liquidity Providers
                </span>
              </h3>

              <Button />
            </div>
          </SwiperSlide>

              {/* fiveth Slide */}
              <SwiperSlide>
            <div className="grid grid-cols-1 md:gap-3 items-center lg:flex-row w-[100%]">
              <p className="text-sm md:text-[2xl] 2xl:text-2xl uppercase">
                {" "}
                Advanced Technology
              </p>
              <h3 className="uppercase bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text max-w-3xl mx-auto">
                <span className="text-[20px] md:text-4xl xl:text-5xl font-bold">
                  {" "}
                  Experience Cutting-Edge Trading Infrastructure 
                </span>
              </h3>

              <Button />
            </div>
          </SwiperSlide>

          {/* Additional Slides Here... */}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
