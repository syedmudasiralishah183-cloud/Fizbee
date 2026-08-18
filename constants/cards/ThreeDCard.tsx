"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./MainThreeDCard";

export default function ThreeDCard({ blog }: any) {
  return (
    <CardContainer className="inter-var h-full w-full mt-0 pt-0">
      <CardBody className="bg-bg_light relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg_light dark:border-white/[0.2] border-black/[0.1] w-full  h-full rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full ">
          <Image
            src={blog.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="h-full">
          {" "}
          <CardItem
            translateZ="50"
            className="text-xl h-full font-bold text-primary_heading dark:text-primary_heading mt-4"
          >
            {blog.heading}
          </CardItem>
        </div>

        <div className="h-full">
          {" "}
          <CardItem
            as="p"
            translateZ="60"
            className="text-description h-full w-full text-sm  mt-2 mb-5 dark:text-description"
          >
            {blog.description}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
