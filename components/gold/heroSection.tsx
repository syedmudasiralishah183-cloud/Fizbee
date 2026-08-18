"use client";
import React, { useEffect } from "react";

import Image from "next/image";
import MainContainer from "@/constants/container/MainContainer";
import PrimaryButton from "@/constants/buttons/primaryButton";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = ({ heroSectionData }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="relative  " ref={ref}>
      {/* Background Image */}
      <div className="absolute w-full h-full ">
        <Image
          src={heroSectionData.heroImage}
          alt="Background image"
          width={1000}
          height={1000}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layer with Secondary Color Shade */}
      <div className="absolute w-full h-full inset-0 bg-primary_color_shade/40"></div>

      {/* Main Content */}
      <MainContainer
        style={{ background: "none", height: "100%" }}
        className="relative flex items-center justify-between py-28 z-10"
      >
        <motion.div
          className="lg:w-1/2 space-y-3 max-sm:space-y-2 h-full"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.5, y: 50, x: -100 },
            visible: { opacity: 100, scale: 1, y: 0, x: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl hyphens-auto font-bold text-light_text">
            {heroSectionData.title}
          </h1>
          <p className="text-xl max-lg:text-lg max-sm:text-base text-light_text py-4">
            {heroSectionData.heading}
          </p>
          {heroSectionData.btnText && (
            <Link href={heroSectionData.btnLink}>
              <PrimaryButton>{heroSectionData.btnText}</PrimaryButton>
            </Link>
          )}
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50, x: 100 },
            visible: { opacity: 100, y: 0, x: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={heroSectionData.image}
            alt="shape not found"
            height={400}
            width={400}
            className="hidden lg:block "
          />
        </motion.div>
      </MainContainer>
    </div>
  );
};

export default HeroSection;
