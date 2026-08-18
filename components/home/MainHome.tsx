import React from "react";
import Hero from "./Hero";
import image1 from "@/assets/homePage/blogs1st.jpg";
import image2 from "@/assets/homePage/blogs2nd.jpg";
import image3 from "@/assets/homePage/blogs3rd.jpg";
import freeChat from "@/assets/imagesMockup/freeChat.png";
import freeCall from "@/assets/imagesMockup/videoCall.png";
import perfectMatch from "@/assets/imagesMockup/perfectMatch.png";
import profile from "@/assets/imagesMockup/showProfile.png";
import likeProfile from "@/assets/imagesMockup/likes.png";
import inviteFrineds from "@/assets/imagesMockup/inviteFriends.png";
import MuslimsMeet from "./MuslimsMeet";
import LogoSwiper from "@/constants/slider/LogoSwaperSlider";
import LatestBlogs from "./LatestBlogs";
import ConnectsMuslims from "./ConnectsMuslims";
import CallingCard from "@/constants/container/CallingCard";
import { useTranslations } from "next-intl";

const MainHome = () => {
  const t = useTranslations("home");

  const callingCards = [
    {
      Images: { image: profile },
      primTextData: {
        heading: t("likeHeading"),
        description: t("likeDes"),
        btnText: "",
        btnLink: "",
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: inviteFrineds },
      primTextData: {
        heading: t("inviteHeading"),
        description: t("inviteDes"),
        btnText: "",
        btnLink: "",
      },
      textOrder: 3,
      imageOrder: 1,
    },
    {
      Images: { image: likeProfile },
      primTextData: {
        heading: t("shareHeading"),
        description: t("shareDes"),
        btnText: "",
        btnLink: "",
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: perfectMatch },
      primTextData: {
        heading: t("matchHeading"),
        description: t("matchDes"),
        btnText: "",
        btnLink: "",
      },
      textOrder: 3,
      imageOrder: 1,
    },
    {
      Images: { image: freeChat },
      primTextData: {
        heading: t("chatHeading"),
        description: t("chatDes"),
        btnText: "",
        btnLink: "",
      },
      textOrder: 1,
      imageOrder: 3,
    },
    {
      Images: { image: freeCall },
      primTextData: {
        heading: t("videoHeading"),
        description: t("videoDes"),
        btnText: "",
        btnLink: "",
      },
      textOrder: 3,
      imageOrder: 1,
    },

    // Add other cards similarly using translations
  ];

  const latestBlogsData = {
    heading: t("latestStories"),
    blogsCard: [
      {
        image: image1,
        heading: t("blog1Heading"),
        description: t("blog1Description"),
      },
      {
        image: image2,
        heading: t("blog2Heading"),
        description: t("blog2Description"),
      },
      {
        image: image3,
        heading: t("blog3Heading"),
        description: t("blog3Description"),
      },
    ],
    btnText: "",
    btnLink: "#",
  };

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <MuslimsMeet />
      <ConnectsMuslims />
      {callingCards.map((data, index) => (
        <CallingCard key={index} callingCardData={data} />
      ))}
      <LatestBlogs latestBlogsData={latestBlogsData} />
      <LogoSwiper />
    </div>
  );
};

export default MainHome;
