import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    // Import messages for multiple pages
    messages: {
      home: (await import(`../messages/home/${locale}.json`)).default,
      footer: (await import(`../messages/footer/${locale}.json`)).default,
      header: (await import(`../messages/header/${locale}.json`)).default,
      events: (await import(`../messages/events/${locale}.json`)).default,
      gold: (await import(`../messages/gold/${locale}.json`)).default,
      blog: (await import(`../messages/blog/${locale}.json`)).default,
      social: (await import(`../messages/social/${locale}.json`)).default,
      safety: (await import(`../messages/safety/${locale}.json`)).default,
      contact: (await import(`../messages/contact/${locale}.json`)).default,
      behavior: (await import(`../messages/behavior/${locale}.json`)).default,
      privacy: (await import(`../messages/privacy/${locale}.json`)).default,
    },
  };
});
