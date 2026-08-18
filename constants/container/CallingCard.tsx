"use client";
import React, { memo, useEffect } from "react";
import MainContainer from "./MainContainer";
import PrimText from "../texts/PrimText";
import ImageContainer from "./ImageContainer";

import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const BlackLogo = dynamic(() => import("../logos/BlackLogo"));

const CallingCard = ({ callingCardData }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [inView, controls]);
  return (
    <MainContainer className="py-12 max-lg:py-10">
      <div
        className="grid grid-cols-9 max-lg:grid-cols-8 max-md:grid-cols-4 max-lg:gap-3"
        ref={ref}
      >
        <motion.div
          className={`col-span-4  flex items-center justify-start  ${
            callingCardData.textOrder === 1 ? "md:order-1" : "md:order-3"
          }`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 0, y: 110, opacity: 0 },
            visible: {
              y: 0,
              opacity: 100,
            },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <PrimText primTextData={callingCardData.primTextData} />
        </motion.div>
        <div className="flex flex-col items-center justify-center relative max-lg:hidden order-2">
          <motion.div
            className="z-40"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: 0, scale: 1.5, y: -110 },
              visible: {
                rotate: 360,
                scale: 1,
                y: 0,
              },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <BlackLogo />
          </motion.div>
          <div className=" absolute w-[2px] h-full bg-bg_dark z-10"></div>
        </div>
        <motion.div
          className={`col-span-4 max-md:pt-4 flex items-center justify-center w-full  ${
            callingCardData.imageOrder === 1 ? "md:order-1" : "md:order-3"
          }`}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="exit"
          variants={{
            hidden:
              callingCardData?.imageOrder === 1
                ? { x: 110, y: -110, opacity: 0 }
                : { x: -110, y: -110, opacity: 0 },
            visible: {
              x: 0,
              y: 0,
              opacity: 1,
            },
            exit: () => ({
              x: callingCardData.imageOrder === 1 ? 110 : -110,
              y: 110,
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }),
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ImageContainer Images={callingCardData.Images} />
        </motion.div>
      </div>
    </MainContainer>
  );
};
export default memo(CallingCard);
