import React from "react";
import { useTranslations } from "next-intl";
import HeroSection from "../gold/heroSection";
import heroImage from "@/assets/eventsPage/enentHero.png";
import sideImage from "@/assets/goldpage/logohero.png";
import LatestBlogs from "../home/LatestBlogs";
import image1 from "@/assets/eventsPage/VvrtualMatchmaking.jpg";
import image2 from "@/assets/eventsPage/cultural&Regional.jpg";
import image3 from "@/assets/eventsPage/weddingPlanning.jpg";
import image4 from "@/assets/eventsPage/speedMatching.jpg";
import image5 from "@/assets/eventsPage/personalGrowth.jpg";
import image6 from "@/assets/eventsPage/perfectMatch.webp";
import Faqs from "./Faqs";
import TermsConditions from "./TermsConditions";

const EventsMain = () => {
  const t = useTranslations("events");

  const heroSectionData = {
    title: t("title"),
    heading: t("heading"),
    btnText: t("btnText"),
    btnLink: "#",
    image: sideImage,
    heroImage: heroImage,
  };

  const latestBlogsData = {
    heading: t("latestBlogsData.heading"),
    blogsCard: [
      {
        image: image1,
        heading: t("latestBlogsData.blogsCard.0.heading"),
        description: t("latestBlogsData.blogsCard.0.description"),
      },
      {
        image: image2,
        heading: t("latestBlogsData.blogsCard.1.heading"),
        description: t("latestBlogsData.blogsCard.1.description"),
      },
      {
        image: image3,
        heading: t("latestBlogsData.blogsCard.2.heading"),
        description: t("latestBlogsData.blogsCard.2.description"),
      },
      {
        image: image4,
        heading: t("latestBlogsData.blogsCard.3.heading"),
        description: t("latestBlogsData.blogsCard.3.description"),
      },
      {
        image: image5,
        heading: t("latestBlogsData.blogsCard.4.heading"),
        description: t("latestBlogsData.blogsCard.4.description"),
      },
      {
        image: image6,
        heading: t("latestBlogsData.blogsCard.5.heading"),
        description: t("latestBlogsData.blogsCard.5.description"),
      },
    ],
    btnText: "",
    btnLink: "#",
  };

  const faqsQuestion = {
    heading: t("faqs.heading"),
    questions: [
      {
        question: t("faqs.questions.0.question"),
        answer: t("faqs.questions.0.answer"),
      },
      {
        question: t("faqs.questions.1.question"),
        answer: t("faqs.questions.1.answer"),
      },
      {
        question: t("faqs.questions.2.question"),
        answer: t("faqs.questions.2.answer"),
      },
      {
        question: t("faqs.questions.3.question"),
        answer: t("faqs.questions.3.answer"),
      },
      {
        question: t("faqs.questions.4.question"),
        answer: t("faqs.questions.4.answer"),
      },
      {
        question: t("faqs.questions.5.question"),
        answer: t("faqs.questions.5.answer"),
      },
      {
        question: t("faqs.questions.6.question"),
        answer: t("faqs.questions.6.answer"),
      },
    ],
  };

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
      <HeroSection heroSectionData={heroSectionData} />
      <LatestBlogs latestBlogsData={latestBlogsData} />
      <Faqs faqsQuestion={faqsQuestion} />
      <TermsConditions termsConditionData={termsConditionData} />
    </>
  );
};

export default EventsMain;
