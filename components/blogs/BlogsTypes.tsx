"use client";
import React, { memo, useEffect } from "react";
import MainContainer from "@/constants/container/MainContainer";
import relationshipImage from "@/assets/blogsPages/relationship.png";
import relationshipWhite from "@/assets/blogsPages/relationshipWhite.png";
import lifeSyleImage from "@/assets/blogsPages/lifeSyle.png";
import lifeSyleWhite from "@/assets/blogsPages/lifeStyleWhite.png";
import communityImage from "@/assets/blogsPages/community.png";
import communityWhite from "@/assets/blogsPages/commuintyWhite.png";
import fizzzbeeImage from "@/assets/blogsPages/fizzzbee.png";
import fizzzbeeWhite from "@/assets/blogsPages/fizzzbeeWhite.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import ThreedCurverCard from "@/constants/cards/ThreedCurverCard";
import { useInView } from "react-intersection-observer";

const BlogsTypes = () => {
  const blogsTypeData = [
    {
      image: relationshipImage,
      image2: relationshipWhite,
      title: "Relationship",
    },
    {
      image: lifeSyleImage,
      image2: lifeSyleWhite,
      title: "Lifestyle",
    },
    {
      image: communityImage,
      image2: communityWhite,
      title: "Community",
    },
    {
      image: fizzzbeeImage,
      image2: fizzzbeeWhite,
      title: "Fizzbee",
    },
  ];
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <MainContainer className="pb-10">
      <div
        className="flex items-center w-full lg:gap-10 gap-7 max-sm:gap-5 justify-between max-md:flex-col"
        ref={ref}
      >
        {blogsTypeData.map((type, index) => (
          <ThreedCurverCard
            key={index}
            className="flex flex-col items-center w-full h-full bg-bg_light hover:bg-bg_red p-10 rounded-lg hover:rounded-2xl shadow-sm hover:shadow-xl justify-center md:mt-[-40] z-40 group"
          >
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate={controls}
              whileHover="hover"
              className="group"
            >
              <Image
                src={type.image}
                alt={type.title}
                width={100}
                height={100}
                className="brightness-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </motion.div>

            <h2 className="mt-4 text-lg font-semibold text-primary_heading group-hover:text-light_text">
              {type.title}
            </h2>
          </ThreedCurverCard>
        ))}
      </div>
    </MainContainer>
  );
};

export default memo(BlogsTypes);
