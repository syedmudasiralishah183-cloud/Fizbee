import SocialContainer from "@/constants/container/SocialContainer";
import React from "react";
import social from "@/assets/socialPage/memberships.png";
import GooglePlay from "@/constants/buttons/GooglePlay";
import AppPlay from "@/constants/buttons/AppPlay";
import Link from "next/link";
import PrimaryButton from "@/constants/buttons/primaryButton";
import ThreedCurverCard from "@/constants/cards/ThreedCurverCard";
import { useTranslations } from "next-intl";

const Membership = () => {
  const t = useTranslations("social");

  const makeFriendData = {
    title: "",
    mainHeading: t("makeFriendData2.mainHeading"),
    subHeading: t("makeFriendData2.subHeading"),
    secSubHeading: t("makeFriendData2.secSubHeading"),
    desciption: "",
    btnText: "",
    btnLink: "#",
    cardHeading: t("makeFriendData2.cardHeading"),
    cardBtnText: t("makeFriendData2.cardBtnText"),
    cardBtnLink: "#",

    Images: { image: social },
  };
  return (
    <SocialContainer makeFriendData={makeFriendData}>
      <div className=" pb-5 space-y-5 max-lg:space-y-3 lg:w-1/2 ">
        <h3 className="text-dark_heading font-bold text-xl max-lg:text-lg ">
          {makeFriendData?.title}
        </h3>
        <h1 className="text-primary_heading font-bold text-4xl max-lg:text-3xl ">
          {makeFriendData.mainHeading}
        </h1>
        <h2 className="text-2xl max-lg:text-xl font-bold text-dark_heading">
          {makeFriendData.subHeading}
        </h2>
        <h2 className="text-xl max-lg:text-lg font-medium  text-dark_heading">
          {makeFriendData.secSubHeading}
        </h2>
        <div className="flex items-center gap-5 py-5">
          <GooglePlay />
          <AppPlay />
        </div>
        <p className="text-description text-lg max-lg:text-lg max-sm:text-base">
          {makeFriendData.desciption}
        </p>
        {makeFriendData.btnText && (
          <div className="flex items-start lg:pt-10 pt-5">
            <Link href={makeFriendData.btnLink}>
              <PrimaryButton>{makeFriendData.btnText}</PrimaryButton>
            </Link>
          </div>
        )}
        <ThreedCurverCard className="bg-bg_light shadow-md hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg p-5">
          <h1 className="font-semibold text-xl max-lg:text-lg">
            {makeFriendData.cardHeading}
          </h1>
          <div className="flex items-start lg:pt-10 pt-5">
            <Link href={makeFriendData.cardBtnLink}>
              <PrimaryButton>{makeFriendData.cardBtnText}</PrimaryButton>
            </Link>
          </div>
        </ThreedCurverCard>
      </div>
    </SocialContainer>
  );
};

export default Membership;
