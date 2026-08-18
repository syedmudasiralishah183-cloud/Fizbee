import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaSnapchatGhost,
} from "react-icons/fa";

const socialMediaLinks = [
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaTiktok />, link: "https://tiktok.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
  { icon: <FaSnapchatGhost />, link: "https://snapchat.com" },
];

const Footer = () => {
  const t = useTranslations("footer");

  const footerData = [
    {
      heading: t("footer.company"),
      items: [
        { name: t("footer.items.blog"), link: "/blogs" },
        { name: t("footer.items.events"), link: "/events" },
        { name: t("footer.items.social"), link: "/social" },
      ],
    },
    {
      heading: t("footer.product"),
      items: [
        { name: t("footer.items.gold"), link: "/gold" },
        // { name: t("footer.items.successStories"), link: "/success" },
        { name: t("footer.items.downloadNow"), link: "#" },
      ],
    },
    {
      heading: t("footer.helpSupport"),
      items: [
        { name: t("footer.items.safety"), link: "/safety" },
        { name: t("footer.items.contact"), link: "/contact-us" },
        { name: t("footer.items.behavior"), link: "/behavior" },
      ],
    },
    {
      heading: t("footer.legal"),
      items: [
        { name: t("footer.items.terms"), link: "/terms" },
        { name: t("footer.items.privacyPolicy"), link: "/privacy-policy" },
        // { name: t("footer.items.cookies"), link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-dark_heading text-light_heading py-10 px-5">
      <div className="container mx-auto text-start py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Social Media Section */}
          <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="text-4xl font-bold">{t("socialMedia.heading")}</h1>
            <div className="flex gap-4">
              {socialMediaLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:opacity-80"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <p className="text-sm text-description">
              &copy; {new Date().getFullYear()} {t("socialMedia.paraCopy")}
            </p>
          </div>

          {/* Footer Links */}
          <div className="w-full lg:col-span-4 mt-10 md:mt-0 lg:place-self-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {footerData.map((column, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4">
                    {column.heading}
                  </h3>
                  <ul className="space-y-2">
                    {column.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.link}
                          className="hover:underline text-gray-300"
                          aria-label={item.name}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
