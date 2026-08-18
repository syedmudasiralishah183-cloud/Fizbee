"use client";
import React, { memo, useEffect } from "react";
import PrimaryButton from "../buttons/primaryButton";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrimText = ({ primTextData }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <div className="flex justify-start flex-col" ref={ref}>
      <h1 className="text-4xl max-lg:text-3xl max-sm:text-xl font-bold text-start text-dark_heading pb-5 max-lg:pb-3 max-sm:pb-2">
        {primTextData?.heading}
      </h1>
      <p className="text-xl max-lg:text-lg  max-sm:text-sm font-medium text-description">
        {primTextData?.description}
      </p>
      {primTextData?.btnText && (
        <motion.div
          className="flex items-center justify-start pt-10"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 100 },
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <Link href={primTextData?.btnLink}>
            <PrimaryButton>{primTextData?.btnText}</PrimaryButton>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default memo(PrimText);
