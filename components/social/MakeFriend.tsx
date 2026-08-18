"use client";
import ImageContainer from "@/constants/container/ImageContainer";
import MainContainer from "@/constants/container/MainContainer";
import React, { useEffect } from "react";
import makeFriendImage from "@/assets/socialPage/socialFriend.webp";
import PrimaryButton from "@/constants/buttons/primaryButton";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const MakeFriend = () => {
  const t = useTranslations("social");

  const makeFriendData = {
    title: t("makeFriendData.title"),
    mainHeading: t("makeFriendData.mainHeading"),
    subHeading: t("makeFriendData.subHeading"),
    secSubHeading: t("makeFriendData.secSubHeading"),
    desciption: t("makeFriendData.description"),
    btnText: t("makeFriendData.btnText"),
    btnLink: "#",

    Images: { image: makeFriendImage },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <MainContainer className="grid grid-cols-2 max-lg:grid-cols-1  py-5 gap-10">
      <motion.div
        className="max-lg:order-2"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 100 },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <ImageContainer Images={makeFriendData.Images} />
      </motion.div>
      <motion.div
        className="lg:py-14 pt-10 pb-5 space-y-5 max-lg:space-y-3 max-lg:order-1 "
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 100 },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-primary_heading font-bold text-5xl  max-lg:text-3xl max-sm:text-2xl">
          {makeFriendData.mainHeading}
        </h1>
        <h2 className="text-xl max-lg:text-lg font-bold text-dark_heading ">
          {makeFriendData.subHeading}
        </h2>
        <p className="text-description text-lg max-lg:text-lg max-sm:text-sm">
          {makeFriendData.desciption}
        </p>
        {makeFriendData.btnText && (
          <motion.div
            className="flex items-start lg:pt-8 pt-5"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 100 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <Link href={makeFriendData.btnLink}>
              <PrimaryButton>{makeFriendData.btnText}</PrimaryButton>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </MainContainer>
  );
};

export default MakeFriend;
