import Image from "next/image";
import React from "react";
import ThreedCurverCard from "./ThreedCurverCard";

const Blog3dCard = ({ blogsCard }: any) => {
  return (
    <ThreedCurverCard className="bg-bg_light p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out flex flex-col gap-5 h-full">
      <div className="relative">
        <Image
          src={blogsCard.image}
          width={300}
          height={300}
          alt="image"
          className="object-cover w-full rounded-md hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl"
        />
        {/* <span className="bg-bg_red/50 hover:hidden w-full h-full absolute inset-0" /> */}
      </div>

      <div>
        <div className="text-primary_heading font-bold text-lg hyphens-auto pb-3">
          <h1>{blogsCard.heading}</h1>
        </div>
        <p className="text-description text-justify hyphens-auto text-sm font-semibold">
          {blogsCard.description}
        </p>
      </div>
    </ThreedCurverCard>
  );
};

export default Blog3dCard;
