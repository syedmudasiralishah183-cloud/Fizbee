import React from "react";
import SafetyHeroSection from "../safety/SafetyHeroSection";
import GuidLines from "../safety/GuidLines";
import { useTranslations } from "next-intl";

const MainBehavior = () => {
  const t = useTranslations("behavior");

  const safetyHeroData = {
    heading: t("safetyHeroDataa.heading"),
    description: t("safetyHeroDataa.description"),
  };
  const guidelinesData = [
    {
      title: t("guidelinesDataa.0.title"),
      steps: t.raw("guidelinesDataa.0.steps"), // Use raw to get an array
    },
    {
      title: t("guidelinesDataa.1.title"),
      steps: t.raw("guidelinesDataa.1.steps"),
    },
    {
      title: t("guidelinesDataa.2.title"),
      steps: t.raw("guidelinesDataa.2.steps"),
    },
    {
      title: t("guidelinesDataa.3.title"),
      steps: t.raw("guidelinesDataa.3.steps"),
    },
    {
      title: t("guidelinesDataa.4.title"),
      steps: t.raw("guidelinesDataa.4.steps"),
    },
  ];

  return (
    <>
      <SafetyHeroSection safetyHeroData={safetyHeroData} />
      <GuidLines guidelinesData={guidelinesData} />
    </>
  );
};

export default MainBehavior;
