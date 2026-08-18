"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainContainer from "@/constants/container/MainContainer";
import image from "@/assets/homePage/connectsMuslim.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ConnectsMuslims = () => {
  const t = useTranslations("home");

  const connectsMuslims = [
    { number: "600,000", text: t("stats.successes") },
    { number: "13", text: t("stats.millionMuslim") },
  ];

  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, controls]);

  return (
    <MainContainer className="py-14 overflow-x-hidden">
      <div
        ref={ref}
        className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 max-lg:gap-10 overflow-hidden"
      >
        {/* Image Section */}
        <motion.div
          className="w-full h-full  z-40 max-lg:order-1 "
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 0, width: "180%", height: "auto", y: 70 },
            visible: { x: "0", width: "100%", height: "500px", y: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="side image"
            className="w-full h-full 2xl:object-fill object-cover top-0"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full h-full flex justify-center flex-col lg:gap-10 gap-5 max-lg:order-2 z-20"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        >
          <div className="2xl:w-3/4 w-full p-10 hover:rounded-xl bg-bg_light hover:bg-bg_red  shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group">
            <h2 className=" text-2xl max-sm:text-xl max-sm:text-start text-start  hyphens-auto max-md:text-xl font-bold text-dark_heading  group-hover:text-light_text">
              {t("heading_three")}
            </h2>
          </div>
          <motion.div
            className="flex items-center gap-5"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 70 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
          >
            {connectsMuslims.map((box, index) => (
              <div
                key={index}
                className="p-5 bg-bg_light border-2 border-primary_color_shade shadow-xl"
              >
                <div className="text-2xl max-md:text-xl font-semibold text-center">
                  {box.number}
                </div>
                <div className="text-2xl max-md:text-xl max-sm:text-base text-center text-primary_heading font-bold">
                  {box.text}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </MainContainer>
  );
};

export default ConnectsMuslims;
