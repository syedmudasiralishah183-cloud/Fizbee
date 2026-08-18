"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import MainContainer from "../container/MainContainer";
import { useTranslations } from "next-intl";

const LogoSwiper = () => {

  const t = useTranslations("home");

  const logos = [
    "/featureLogos/1.png",
    "/featureLogos/2.png",
    "/featureLogos/3.png",
    "/featureLogos/4.png",
    "/featureLogos/5.png",
    "/featureLogos/6.png",
    "/featureLogos/7.png",
    "/featureLogos/8.png",
    "/featureLogos/9.png",
    "/featureLogos/10.png",
    "/featureLogos/11.png",
  ];

  return (
    <div className="bg-secondary_color_shade">
      <MainContainer className="py-20" style={{ background: "none" }}>
        <h1 className="text-5xl max-lg:text-3xl font-bold text-center pb-10 text-light_heading">
          {t("features")}
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 6,
            },
            992: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 3,
            },
            // 375: {
            //   slidePerView: 2,
            // },
          }}
          speed={1000}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper h-full"
        >
          {logos.map((logo: any, index: any) => (
            <SwiperSlide
              key={index}
              className="bg-bg_light p-3 rounded-xl hover:shadow-lg cursor-pointer shadow-primary_color_shade h-full flex items-center justify-center"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={logo}
                  width={120}
                  height={120}
                  alt={`Logo ${index + 1}`}
                  className="h-auto w-auto object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MainContainer>
    </div>
  );
};

export default LogoSwiper;
