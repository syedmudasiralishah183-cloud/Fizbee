"use client";
import React, { useEffect } from "react";
import woman from "@/assets/homePage/woman.webp";
import man from "@/assets/homePage/man.webp";
import Image from "next/image";
import MainContainer from "@/constants/container/MainContainer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";



const MuslimsMeet = () => {

  const t = useTranslations('home');
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <section
      className="bg-secondary_color_shade text-white relative  overflow-hidden"
      ref={ref}
    >
      <div className="hidden md:flex justify-start h-full pt-12 ">
        <motion.div
          className="w-24 h-24  rounded-full flex items-center justify-center "
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -70, rotate: -30 },
            visible: { opacity: 100, x: 0, rotate: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <Image src={woman} width={300} height={300} alt="image" />
        </motion.div>
      </div>
      <MainContainer style={{ background: "none" }} className="max-lg:py-10">
        <motion.div
          className="col-span-1 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 1.5 },
            visible: { opacity: 100, scale: 1 },
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold antialiased mb-4">
          {t('heading_two')}
       
          </h2>
          <p className="text-lg max-sm:text-base md:text-xl font-semibold lg:mb-4 mb-3">
        
          {t('subheading')}
          </p>
          <p className="text-base md:text-lg max-sm:text-sm max-sm:text-justify hyphens-auto font-light mb-4">
          
          {t('paragraph1')}
          </p>
          <p className="text-lg md:text-xl font-semibold">
    
          {t('paragraph2')}
          </p>
        </motion.div>
      </MainContainer>
      <div className="hidden md:flex justify-end h-full pb-3">
        <motion.div
          className="w-36 h-36  rounded-full flex items-center justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 70, rotate: 30 },
            visible: { opacity: 100, x: 0, rotate: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <Image src={man} width={300} height={300} alt="image" />
        </motion.div>
      </div>
    </section>
  );
};

export default MuslimsMeet;
