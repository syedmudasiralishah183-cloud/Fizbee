"use client";
import React, { useEffect } from "react";
import heroImage from "@/assets/homePage/heroImage.svg";
import Image from "next/image";
import MainContainer from "@/constants/container/MainContainer";
import heroCircle from "@/assets/homePage/heroRotate.png";
import heroMobile from "@/assets/homePage/heroMobile.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypewriterEffectSmooth } from "@/animations/TypeWrittenEffect";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");

  const words = [
    {
      text: t("title"),
      className:
        "text-2xl max-md:text-xl font-medium text-primary_heading max-lg:text-center",
    },
  ];

  const findLove = [
    {
      text: t("secHeading"),
      className:
        "text-5xl max-md:text-3xl font-bold text-primary_heading max-lg:text-center",
    },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="h-full overflow-hidden" ref={ref}>
      <Image
        src={heroImage}
        alt="shape not found"
        className="absolute left-0 md:-top-20 top-0 w-full md:h-[650px] h-[400px] drop-shadow-ms -z-10 transition-colors"
      />
      <MainContainer
        style={{ background: "none", height: "100%" }}
        className="h-full flex items-center justify-between max-lg:flex-col py-14 max-lg:gap-14"
      >
        <div className="lg:w-1/2 space-y-3 max-md:space-y-2 h-full">
          <TypewriterEffectSmooth words={words} />
          <h1 className="text-5xl max-md:text-3xl font-bold text-dark_heading max-lg:text-center">
            {t("heading_one")}
          </h1>
          <TypewriterEffectSmooth words={findLove} />
        </div>
        <div className="lg:w-1/2 relative w-full h-full flex items-center justify-center max-lg:p-5">
          <motion.div
            className="flex items-center justify-center ml-12"
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
            style={{ transformOrigin: "center" }}
          >
            <Image
              src={heroCircle}
              alt="image"
              width={450}
              height={450}
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 100, x: 0 },
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Image
              src={heroMobile}
              alt="image"
              width={400}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Hero;
