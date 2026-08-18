"use client";
import dynamic from "next/dynamic";
import React from "react";
const MainContactUs = dynamic(
  () => import("@/components/contactUs/MainContactUs"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      <MainContactUs />
    </>
  );
};

export default page;
