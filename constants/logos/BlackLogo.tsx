import React from "react";
import Image from "next/image";
import image from "@/assets/logos/blackLogo.png";

const BlackLogo = () => {
  return (
    <div className="bg-bg_light border-2 border-bg_dark rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center hover:cursor-pointer hover:shadow-md shadow-bg_dark">
      <Image
        src={image}
        alt="image"
        width={40}
        height={40}
        className="rotate-animation"
      />
    </div>
  );
};

export default BlackLogo;
