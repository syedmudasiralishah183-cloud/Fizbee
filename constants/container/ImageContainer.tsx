import Image from "next/image";
import React, { memo } from "react";

const ImageContainer = ({ Images }: any) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={Images.image}
        alt="image"
        width="400"
        height="400"
        priority
        className="obeject-cover  rounded-md"
      ></Image>
    </div>
  );
};

export default memo(ImageContainer);
