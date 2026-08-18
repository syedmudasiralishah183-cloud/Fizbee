import MainContainer from "@/constants/container/MainContainer";
import React, { memo } from "react";

const GuidLines = ({ guidelinesData }: any) => {
  return (
    <MainContainer className="pb-12">
      <div className="flex flex-col gap-8 max-md:gap-4">
        {guidelinesData.map((guideline: any, index: any) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-2xl max-md:text-xl text-primary_heading font-bold">
              {guideline.title}
            </h2>
            {guideline.description && (
              <p className="text-xl max-md:text-lg font-medium text-dark_heading pt-3">
                {guideline.description}
              </p>
            )}

            {guideline.steps && (
              <ul className="list-disc pl-5 space-y-3">
                {guideline.steps.map((step: any, stepIndex: any) => (
                  <li
                    key={stepIndex}
                    className="text-xl max-lg:text-lg max-md:text-base text-dark_heading"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </MainContainer>
  );
};
export default memo(GuidLines);
