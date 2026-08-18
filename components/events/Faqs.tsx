"use client";

import MainContainer from "@/constants/container/MainContainer";
import React, { memo, useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Faqs = ({ faqsQuestion }: any) => {
  const [openSection, setOpenSection] = useState<any>(null);

  return (
    <MainContainer className="py-12">
      <h1 className=" lg:text-5xl text-3xl max-md:text-2xl text-primary_heading font-bold mb-10 text-center">
        {faqsQuestion.heading}
      </h1>
      <div className="w-full z-30">
        {faqsQuestion.questions.map((item: any, index: any) => (
          <div
            key={index}
            className="flex justify-start flex-col items-start mb-3"
          >
            <div
              className={`text-text_color lg:text-xl text-lg max-md:text-base transition-colors duration-200    font-semibold  p-5 w-full rounded  border-2  flex items-center max-sm:items-start justify-between cursor-pointer z-40 ${
                openSection === index
                  ? "bg-bg_red text-light_text shadow-sm shadow-primary_color_shade border-none"
                  : "bg_color text-dark_heading shadow-sm"
              }`}
              onClick={() =>
                setOpenSection(openSection === index ? null : index)
              }
            >
              <h1 className="mr-2 max-sm:mr-1 max-sm:text-sm">
                {item.question}
              </h1>
              {openSection === index ? (
                <FaAngleDoubleUp />
              ) : (
                <FaAngleDoubleDown />
              )}
            </div>

            <div
              className={` transition-all duration-200 ${
                openSection === index
                  ? "bg-bg_light shadow-md z-40 p-6 mt-1  text-text_color h-full w-full"
                  : "h-0 "
              }  `}
            >
              {openSection === index && (
                <p className="text-text_color z-40 hyphens-auto ">
                  {item.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default memo(Faqs);
