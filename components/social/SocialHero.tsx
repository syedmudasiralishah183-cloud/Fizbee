"use client";
import PrimaryButton from "@/constants/buttons/primaryButton";
import MainContainer from "@/constants/container/MainContainer";
import Link from "next/link";
import social from "@/assets/socialPage/social.png";
import React, { useEffect } from "react";
import Image from "next/image";
import GooglePlay from "@/constants/buttons/GooglePlay";
import AppPlay from "@/constants/buttons/AppPlay";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const SocialHero = () => {
  const t = useTranslations("social");
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const makeFriendData = {
    title: t("makeFriendData3.title"),
    mainHeading: t("makeFriendData3.mainHeading"),
    subHeading: t("makeFriendData3.subHeading"),
    secSubHeading: t("makeFriendData3.secSubHeading"),
    desciption: t("makeFriendData3.description"),
    btnText: "",
    btnLink: "#",

    Images: { image: social },
  };
  return (
    <div className="relative pt-5 overflow-hidden shadow-inner" ref={ref}>
      {/* Background Image */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 max-md:hidden">
        <Image
          src={makeFriendData.Images.image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="opacity-100"
        />
      </div>

      <MainContainer
        className="flex items-center justify-start md:py-14 py-10 relative z-20"
        style={{ background: "none" }}
      >
        <motion.div
          className=" pb-5 space-y-5 max-lg:space-y-3 lg:w-1/2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 100 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h3 className="text-dark_heading font-bold text-xl max-lg:text-lg ">
            {makeFriendData.title}
          </h3>
          <h1 className="text-primary_heading font-bold text-5xl max-lg:text-3xl ">
            {makeFriendData.mainHeading}
          </h1>
          <h2 className="text-2xl max-lg:text-xl font-bold text-dark_heading">
            {makeFriendData.subHeading}
          </h2>
          <h2 className="text-xl max-lg:text-lg font-medium  text-dark_heading">
            {makeFriendData.secSubHeading}
          </h2>
          <motion.div
            className="flex items-center gap-5 py-5"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 100 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <GooglePlay />
            <AppPlay />
          </motion.div>
          <p className="text-description text-lg max-lg:text-lg max-sm:text-base">
            {makeFriendData.desciption}
          </p>
          {makeFriendData.btnText && (
            <div className="flex items-start lg:pt-10 pt-5">
              <Link href={makeFriendData.btnLink}>
                <PrimaryButton>{makeFriendData.btnText}</PrimaryButton>
              </Link>
            </div>
          )}
        </motion.div>
      </MainContainer>
      {/* Optional Overlay */}
      <div className="absolute inset-0  bg-bg_color z-0"></div>
    </div>
  );
};

export default SocialHero;
