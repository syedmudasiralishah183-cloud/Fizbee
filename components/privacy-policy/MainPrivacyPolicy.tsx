import React from "react";
import SafetyHeroSection from "../safety/SafetyHeroSection";
import GuidLines from "../safety/GuidLines";
import { useTranslations } from "next-intl";

const MainPrivacyPolicy = () => {
  const t = useTranslations("privacy");

  // Dynamically get safetyHeroData and guidelinesData from translations
  const safetyHeroData = t("safetyHeroData");
  interface Guideline {
    title: string;
    description: string;
    steps: string[];
  }

  const guidelinesData: Guideline[] = t
    .raw("guidelinesData")
    .map((guideline: any, index: number) => ({
      title: t(`guidelinesData.${index}.title`),
      description: t(`guidelinesData.${index}.description`),
      steps: guideline.steps ? t.raw(`guidelinesData.${index}.steps`) : [], // Ensure steps is correctly retrieved
    }));

  return (
    <>
      <SafetyHeroSection safetyHeroData={safetyHeroData} />
      <GuidLines guidelinesData={guidelinesData} />
    </>
  );
};

export default MainPrivacyPolicy;
