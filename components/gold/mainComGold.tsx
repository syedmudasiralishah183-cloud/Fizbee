import React from "react";
import heroImage from "@/assets/goldpage/heroSection.jpg";
import CallingCard from "@/constants/container/CallingCard";
import sideImage from "@/assets/goldpage/logohero.png";
import HeroSection from "./heroSection";
import goldMock1st from "@/assets/goldpage/goldMock1.png";
import goldMock2nd from "@/assets/goldpage/goldMock2.png";
import goldMock3rd from "@/assets/goldpage/goldMock3.png";
import goldMock4th from "@/assets/goldpage/goldMock4.png";
import goldMock5th from "@/assets/imagesMockup/freeChat.png";
import goldMock6th from "@/assets/imagesMockup/videoCall.png";
import { useTranslations } from "next-intl";

const MainComGold = () => {
  const t = useTranslations("gold");

  const heroSectionData = {
    title: t("title"),
    heading: t("heading"),
    btnText: t("btnText"),
    btnLink: "#",
    image: sideImage,
    heroImage: heroImage,
  };

  const cardData = [
    {
      Images: { image: goldMock1st },
      primTextData: {
        heading: t("cardData.0.heading"),
        description: t("cardData.0.description"),
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: goldMock2nd },
      primTextData: {
        heading: t("cardData.1.heading"),
        description: t("cardData.1.description"),
      },
      textOrder: 3,
      imageOrder: 1,
    },
    {
      Images: { image: goldMock3rd },
      primTextData: {
        heading: t("cardData.2.heading"),
        description: t("cardData.2.description"),
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: goldMock4th },
      primTextData: {
        heading: t("cardData.3.heading"),
        description: t("cardData.3.description"),
      },
      textOrder: 3,
      imageOrder: 1,
    },
    {
      Images: { image: goldMock5th },
      primTextData: {
        heading: t("cardData.4.heading"),
        description: t("cardData.4.description"),
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: goldMock6th },
      primTextData: {
        heading: t("cardData.5.heading"),
        description: t("cardData.5.description"),
      },
      textOrder: 3,
      imageOrder: 1,
    },
  ];

  return (
    <>
      <HeroSection heroSectionData={heroSectionData} />
      {cardData.map((card, index) => (
        <CallingCard key={index} callingCardData={card} />
      ))}
    </>
  );
};

export default MainComGold;
