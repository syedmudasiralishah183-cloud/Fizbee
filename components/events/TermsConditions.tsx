import MainContainer from "@/constants/container/MainContainer";
import SecText from "@/constants/texts/SecText";
import React, { memo } from "react";
import { GiCheckMark } from "react-icons/gi";
interface termsConditionProps {
  termsConditionData: {
    title: string;
    conditions: {
      heading: string;
      description: string;
    }[];
  };
}
const TermsConditions = ({ termsConditionData }: termsConditionProps) => {
  return (
    <MainContainer className="py-14">
      <h1 className="text-5xl max-lg:text-3xl text-center font-bold pb-10 text-primary_heading">
        {termsConditionData.title}
      </h1>
      <div className="flex flex-col lg:gap-10 gap-8">
        {termsConditionData.conditions.map((condition, index) => (
          <div
            key={index}
            className="flex items-start lg:gap-8 sm:gap-5 gap-4 "
          >
            <div className="bg-bg_red p-2 rounded-full lg:mt-1">
              <GiCheckMark className="text-light_text lg:text-xl text-lg max-sm:text-base" />
            </div>

            <SecText SecTextData={condition} />
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default memo(TermsConditions);
