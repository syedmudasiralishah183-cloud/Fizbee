import React from "react";
import TermsConditions from "../events/TermsConditions";
import { useTranslations } from "next-intl";

const MainTerms = () => {
  const t = useTranslations("events");
  const termsConditionData = {
    title: t("terms.title"),
    conditions: [
      {
        heading: t("terms.conditions.0.heading"),
        description: t("terms.conditions.0.description"),
      },
      {
        heading: t("terms.conditions.1.heading"),
        description: t("terms.conditions.1.description"),
      },
      {
        heading: t("terms.conditions.2.heading"),
        description: t("terms.conditions.2.description"),
      },
      {
        heading: t("terms.conditions.3.heading"),
        description: t("terms.conditions.3.description"),
      },
      {
        heading: t("terms.conditions.4.heading"),
        description: t("terms.conditions.4.description"),
      },
      {
        heading: t("terms.conditions.5.heading"),
        description: t("terms.conditions.5.description"),
      },
    ],
  };
  return (
    <>
      <TermsConditions termsConditionData={termsConditionData} />
    </>
  );
};

export default MainTerms;
