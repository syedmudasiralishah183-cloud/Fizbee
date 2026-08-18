"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ThreedCurverCard = ({ children, className = "", style }: any) => {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
  const handleMouseMove = (event: any) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full w-full hover:scale-105 transition-all duration-500 ease-in-out"
    >
      <motion.div
        className={` h-full cursor-pointer hover:shadow-inner ${className}`}
        style={{
          ...style,
          transformStyle: "preserve-3d", // Enables 3D transformations
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ThreedCurverCard;
