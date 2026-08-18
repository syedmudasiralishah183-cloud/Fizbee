import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar", "hi", "de"],
  defaultLocale: "en",
  pathnames: {
    "/": { en: "/", ar: "/", hi: "/", de: "/" },
    "/pathnames": {
      en: "/pathnames",
      ar: "/pathnames-ar",
      hi: "/pathnames-hi",
      de: "/pfadnamen",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
