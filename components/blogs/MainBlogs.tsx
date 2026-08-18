import React from "react";
import HeroSection from "../gold/heroSection";
import heroImage from "@/assets/blogsPages/blogsHero.png";
import sideImage from "@/assets/goldpage/logohero.png";
import BlogsTypes from "./BlogsTypes";
import fizzzbee1 from "@/assets/blogsPages/1stfizzzbee.jpg";
import fizzzbee2 from "@/assets/blogsPages/2ndfizzzbee.jpg";
import fizzzbee3 from "@/assets/blogsPages/3rdfizzzbee.jpg";
import community1 from "@/assets/blogsPages/1stcommunity.jpg";
import community2 from "@/assets/blogsPages/2ndcommunity.jpg";
import community3 from "@/assets/blogsPages/3rdcommunity.jpg";
import relationship1 from "@/assets/blogsPages/1strelationship.jpg";
import relationship2 from "@/assets/blogsPages/2ndrelationship.jpg";
import relationship3 from "@/assets/blogsPages/3rdrelationship.jpg";
import lifeStyle1 from "@/assets/blogsPages/1stlifestyle.jpg";
import lifeStyle2 from "@/assets/blogsPages/2ndlifestyle.jpg";
import lifeStyle3 from "@/assets/blogsPages/3rdlifestyle.jpg";
import AllBlogs from "./AllBlogs";
import { useTranslations } from "next-intl";
const MainBlogs = () => {
  const t = useTranslations("blog");
  const heroSectionData = {
    title: t("title"),
    heading: t("heading"),
    btnText: "",
    btnLink: "#",
    image: sideImage,
    heroImage: heroImage,
  };
  const latestBlogs = [
    {
      heading: t("latestBlogs.fizzzbeeHeading"),
      blogsCard: [
        {
          image: fizzzbee1,
          heading: t("latestBlogs.howToChoosePlatform"),
          description: t("latestBlogs.howToChoosePlatformDescription"),
        },
        {
          image: fizzzbee2,
          heading: t("latestBlogs.tipsForProfile"),
          description: t("latestBlogs.tipsForProfileDescription"),
        },
        {
          image: fizzzbee3,
          heading: t("latestBlogs.importanceOfCommunication"),
          description: t("latestBlogs.importanceOfCommunicationDescription"),
        },
      ],
      btnText: "",
      btnLink: "#",
    },
    {
      heading: t("latestBlogs.communityHeading"),
      blogsCard: [
        {
          image: community1,
          heading: t("latestBlogs.safeguardPrivacy"),
          description: t("latestBlogs.safeguardPrivacyDescription"),
        },
        {
          image: community2,
          heading: t("latestBlogs.mistakesToAvoid"),
          description: t("latestBlogs.mistakesToAvoidDescription"),
        },
        {
          image: community3,
          heading: t("latestBlogs.buildTrust"),
          description: t("latestBlogs.buildTrustDescription"),
        },
      ],
      btnText: "",
      btnLink: "#",
    },
    {
      heading: t("latestBlogs.relationshipHeading"),
      blogsCard: [
        {
          image: relationship1,
          heading: t("latestBlogs.culturalDifferences"),
          description: t("latestBlogs.culturalDifferencesDescription"),
        },
        {
          image: relationship2,
          heading: t("latestBlogs.understandingCompatibility"),
          description: t("latestBlogs.understandingCompatibilityDescription"),
        },
        {
          image: relationship3,
          heading: t("latestBlogs.whyMatrimonialWebsites"),
          description: t("latestBlogs.whyMatrimonialWebsitesDescription"),
        },
      ],
      btnText: "",
      btnLink: "#",
    },
    {
      heading: t("latestBlogs.lifestyleHeading"),
      blogsCard: [
        {
          image: lifeStyle1,
          heading: t("latestBlogs.roleOfFamilyAndFriends"),
          description: t("latestBlogs.roleOfFamilyAndFriendsDescription"),
        },
        {
          image: lifeStyle2,
          heading: t("latestBlogs.handleRejections"),
          description: t("latestBlogs.handleRejectionsDescription"),
        },
        {
          image: lifeStyle3,
          heading: t("latestBlogs.successStories"),
          description: t("latestBlogs.successStoriesDescription"),
        },
      ],
      btnText: "",
      btnLink: "#",
    },
  ];
  return (
    <>
      <HeroSection heroSectionData={heroSectionData} />
      <BlogsTypes />
      {latestBlogs.map((latestBlogsData, index) => (
        <div key={index} className="h-full">
          <AllBlogs latestBlogsData={latestBlogsData} />
        </div>
      ))}
    </>
  );
};

export default MainBlogs;
