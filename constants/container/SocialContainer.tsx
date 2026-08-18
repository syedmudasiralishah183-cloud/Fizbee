import Image from "next/image";
import React from "react";
import MainContainer from "./MainContainer";

const SocialContainer = ({ makeFriendData, children }: any) => {
  return (
    <div className="relative pt-5  overflow-hidden shadow-inner">
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 max-md:hidden">
        <Image
          src={makeFriendData?.Images.image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="opacity-100 pl-5"
        />
      </div>

      <MainContainer
        className="flex items-center justify-start md:py-14 py-10 relative z-20 "
        style={{ background: "none" }}
      >
        {children}
      </MainContainer>
      <div className="absolute inset-0  bg-bg_color z-0"></div>
    </div>
  );
};

export default SocialContainer;
