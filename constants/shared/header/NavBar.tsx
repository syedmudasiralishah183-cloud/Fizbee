"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logos/name__logo.webp";
import secLogo from "@/assets/logos/logo.webp";
import { useState } from "react";
import { Squash as HamburgerSquash } from "hamburger-react";
import FlagSelect from "./Flag";
import DropDown from "./DropDown";
import Link from "next/link";
import MainContainer from "@/constants/container/MainContainer";
import PrimaryButton from "@/constants/buttons/primaryButton";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useWindowScroll } from "react-use";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { y } = useWindowScroll();
  const t = useTranslations("header");
  const pathName = usePathname();
  const navList = [
    {
      title: t("gold"),
      url: "/gold",
    },
    {
      title: t("event"),
      url: "/events",
    },
    {
      title: t("blog"),
      url: "/blogs",
    },
    {
      title: t("social"),
      url: "/social",
    },
  ];

  return (
    <nav
      className={`z-50 w-full  top-0 transition-all duration-300  ${
        y > 50 ? "bg-white fixed shadow-xl " : ""
      }`}
    >
      <MainContainer
        className={`z-20   flex items-center justify-between  ${
          y > 50 ? "py-5" : "py-10"
        }`}
        style={pathName === "/" ? { background: "none" } : undefined}
      >
        <div className="relative lg:hidden">
          <div className="z-50">
            <HamburgerSquash toggled={isOpen} toggle={setIsOpen} />
            {isOpen && (
              <div className="w-full ">
                <DropDown
                  navList={navList}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              </div>
            )}
          </div>
        </div>
        <ul className="flex items-center xl:gap-6 gap-4 max-lg:hidden">
          {navList.map((item, index) => {
            // const itemUrl = `/${locale}${item.url}`;
            const isActive = pathName === item.url;
            return (
              <li
                key={index}
                className={`cursor-pointe  font-bold transition-all duration-500 text-dark_heading hover:text-primary_heading group hover:scale-110  ${
                  isActive ? "text-primary_heading scale-110 " : ""
                }`}
              >
                <Link href={item.url} className="relative group-hover:w-full">
                  {item.title}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-0 bg-primary_heading transition-all duration-500 group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
        <div className="lg:hover:scale-110  hover:scale-105 transition-all duration-500 ">
          <Link href="/">
            <Image
              src={logo}
              alt="logo not found"
              width={180}
              height={120}
              priority
              className="max-sm:hidden"
              placeholder="blur"
            />
          </Link>
          <Link href="/">
            <Image
              src={secLogo}
              alt="logo not found"
              width={70}
              height={70}
              priority
              className="sm:hidden"
              placeholder="blur"
            />
          </Link>
        </div>

        <div className="flex lg:gap-5 gap-3 max-sm:gap-1 items-center">
          <FlagSelect />
          <PrimaryButton>{t("signIn")}</PrimaryButton>
        </div>
      </MainContainer>
    </nav>
  );
};

export default NavBar;
