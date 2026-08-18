"use client";
import MainContainer from "@/constants/container/MainContainer";
import React, { memo, useEffect } from "react";
import PrimaryButton from "@/constants/buttons/primaryButton";
import Link from "next/link";
import Blog3dCard from "@/constants/cards/Blog3dCard";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaggerSec } from "@/animations/StaggerSec";
const AllBlogs = ({ latestBlogsData }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <MainContainer className="py-14 overflow-hidden h-full">
      <motion.div
        className="flex items-center lg:pb-10 pb-8 "
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { width: "0%" },
          visible: { width: "100%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-bg_red h-[3px] z-40 w-full"></div>
        <h1 className="text-5xl max-lg:text-text-3xl max-md:text-2xl font-bold text-center text-primary_heading px-3 ">
          {latestBlogsData.heading}
        </h1>
        <div className="bg-bg_red h-[3px] z-40 w-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  h-full lg:gap-8 gap-5 ">
        {latestBlogsData.blogsCard.map((blog: any, index: any) => (
          <motion.div
            key={index}
            className={`h-full flex-1  `}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={StaggerSec}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <Blog3dCard blogsCard={blog} />
          </motion.div>
        ))}
      </div>
      {latestBlogsData.btnText && (
        <div className="flex justify-center items-center pt-5">
          <Link href={latestBlogsData.btnLink}>
            <PrimaryButton>{latestBlogsData.btnText}</PrimaryButton>
          </Link>
        </div>
      )}
    </MainContainer>
  );
};

export default memo(AllBlogs);
