"use client";
import MainContainer from "@/constants/container/MainContainer";
import React, { memo } from "react";
import dynamic from "next/dynamic";
const ThreeDCard = dynamic(() => import("@/constants/cards/ThreeDCard"), {});

import PrimaryButton from "@/constants/buttons/primaryButton";
import Link from "next/link";

const LatestBlogs = ({ latestBlogsData }: any) => {
  return (
    <MainContainer className="py-14 overflow-x-hidden ">
      <h1 className="text-5xl max-lg:text-text-3xl max-md:text-2xl font-bold text-center text-primary_heading xl:pb-8 pb-5">
        {latestBlogsData.heading}
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2  h-full lg:gap-5  overflow-x-hidden">
        {latestBlogsData.blogsCard.map((blog: any, index: any) => (
          <div key={index} className={`h-full flex-1  `}>
            <ThreeDCard blog={blog} />
          </div>
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

export default memo(LatestBlogs);
