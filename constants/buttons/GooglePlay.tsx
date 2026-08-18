import Link from "next/link";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const GooglePlay = () => {
  return (
    <div>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <div className="bg-bg_dark hover:bg-primary_color hover:shadow-xl transition-colors duration-300 rounded-md 2xl:px-5 px-3 py-2 xl:gap-2 gap-2 text-light_text font-semibold flex items-center cursor-pointer">
          <div className="text-light_text 2xl:text-5xl text-4xl max-xl:text-3xl max-md:text-4xl max-sm:text-3xl   drop-shadow">
            <FaGooglePlay />
          </div>
          <div>
            <div className="font-normal xl:text-sm text-xs text-light_text">
              DownLoad on the
            </div>
            <div className="2xl:text-xl lg:text-lg text-lg max-md:text-xl max-sm:text-base mt-[-3px] max-sm:mt-[-2px] text-light_text ">
              Google Play
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GooglePlay;
