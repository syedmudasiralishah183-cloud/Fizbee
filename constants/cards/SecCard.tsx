"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SecCard = ({ blogsCard }: any) => {
  return (
    <motion.div
      className="bg-bg_light p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out flex flex-col gap-5 h-full"
      initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
      whileHover={{
        scale: 1.05,
        rotateX: -5,
        rotateY: 5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ perspective: 1000 }} // Adds a 3D perspective
    >
      {/* Image Section */}
      <div>
        <Image
          src={blogsCard.image}
          width={300}
          height={300}
          alt="image"
          className="object-cover w-full rounded-md"
        />
      </div>

      {/* Content Section */}
      <div>
        <div className="text-primary_heading font-bold text-xl hyphens-auto pb-3">
          <h1>{blogsCard.heading}</h1>
        </div>
        <p className="text-description text-justify hyphens-auto text-sm font-semibold">
          {blogsCard.description}
        </p>
      </div>
    </motion.div>
  );
};

export default SecCard;
