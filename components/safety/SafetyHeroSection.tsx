import MainContainer from "@/constants/container/MainContainer";
import PrimText from "@/constants/texts/PrimText";
import React, { memo } from "react";

const SafetyHeroSection = ({ safetyHeroData }: any) => {
  return (
    <MainContainer className="pt-14 pb-10">
      <PrimText primTextData={safetyHeroData} />
    </MainContainer>
  );
};

export default memo(SafetyHeroSection);
