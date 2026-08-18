import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavBar from "@/constants/shared/header/NavBar";
import Footer from "@/constants/shared/footer";
import "../../styles/global.css";
import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "fizzzbee",
  description: "A community of people to find true love",
  icons: {
    icon: "/logo.webp",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <body className={`${montserrat.className} ${syne.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
