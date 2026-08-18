import React from "react";

import logo from "@/assets/logos/logo.webp";

import Image from "next/image";

const Splash = () => {
  return (
    <div className="  w-full h-screen bg-white flex items-center justify-center">
      <Image
        src={logo}
        alt="logo not found"
        width={500}
        height={500}
        className="animate-pulse"
      />
    </div>
  );
};

export default Splash;
