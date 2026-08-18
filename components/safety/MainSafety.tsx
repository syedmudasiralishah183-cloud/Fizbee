import React from "react";
import SafetyHeroSection from "./SafetyHeroSection";
import GuidLines from "./GuidLines";
import { useTranslations } from "next-intl";

const MainSafety = () => {
  const t = useTranslations("safety");

  const safetyHeroData = {
    heading: t("safetyHeroData.heading"),
    description: t("safetyHeroData.description"),
  };
  const guidelinesData = [
    {
      title: t("guidelinesData.0.title"),
      steps: [t("guidelinesData.0.title")],
    },
    {
      title: t("guidelinesData.1.title"),
      steps: [t("guidelinesData.1.title")],
    },
    {
      title: t("guidelinesData.2.title"),
      steps: [t("guidelinesData.2.title")],
    },
    {
      title: t("guidelinesData.3.title"),
      steps: [t("guidelinesData.3.title")],
    },
  ];
  return (
    <>
      <SafetyHeroSection safetyHeroData={safetyHeroData} />
      <GuidLines guidelinesData={guidelinesData} />
    </>
  );
};

export default MainSafety;
