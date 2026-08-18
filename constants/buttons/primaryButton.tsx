"use client";
import React, { ReactNode } from "react";
const PrimaryButton = ({
  children,
  className = "",
  onClick = () => {},
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: any;
  onClick?: any;
}) => {
  return (
    <button
      type="button"
      className={`text-light_text bg-gradient-to-r from-primary_color to-secondary_color_shade hover:bg-gradient-to-l  focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg text-base max-md:text-sm max-sm:text-xs px-5 py-2.5 max-sm:px-3 max-sm:py-2 text-center me-2 mb-2 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-primary_color_shade ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
