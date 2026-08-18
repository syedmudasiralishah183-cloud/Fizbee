import CallingCard from "@/constants/container/CallingCard";
import React from "react";
import makeConnection from "@/assets/homePage/makeConnection.png";
import findGroup from "@/assets/homePage/findGroup.png";
import representMuslim from "@/assets/socialPage/representingMuslim.webp";
import MakeFriend from "./MakeFriend";
import SocialHero from "./SocialHero";
import Membership from "./Membership";
import { useTranslations } from "next-intl";

const MainSocial = () => {
  const t = useTranslations("social");

  const callingCards = [
    {
      Images: { image: makeConnection },
      primTextData: {
        heading: t("callingCards.0.heading"), // Fetch from JSON
        description: t("callingCards.0.description"),
        btnText: t("callingCards.0.btnText"),
        btnLink: "#",
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: findGroup },
      primTextData: {
        heading: t("callingCards.1.heading"),
        description: t("callingCards.1.description"),
        btnText: t("callingCards.1.btnText"),
        btnLink: "#",
      },
      textOrder: 3,
      imageOrder: 1,
    },
    {
      Images: { image: representMuslim },
      primTextData: {
        heading: t("callingCards.2.heading"),
        description: t("callingCards.2.description"),
        btnText: t("callingCards.2.btnText"),
        btnLink: "#",
      },
      textOrder: 1,
      imageOrder: 3,
    },
  ];

  return (
    <>
      <SocialHero />
      <MakeFriend />
      {callingCards?.map((data, index) => (
        <CallingCard key={index} callingCardData={data} />
      ))}
      <Membership />
    </>
  );
};

export default MainSocial;
