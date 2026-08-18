import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import Image from "next/image";
import uk from "../../../assets/flags/uk.png";
import uae from "../../../assets/flags/uae.png";
import german from "../../../assets/flags/german.png";
import { usePathname, useRouter } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import { setCookie, getCookie } from "cookies-next";

interface Country {
  code: string;
  label: string;
  flag: any;
  locale: string;
}

const Flag: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  const localePath = pathName.split("/")[1];
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false); // New state

  const countries: Country[] = useMemo(
    () => [
      { code: "en", label: "UK", flag: uk, locale: "en" },
      { code: "ar", label: "UAE", flag: uae, locale: "ar" },
      { code: "de", label: "GER", flag: german, locale: "de" },
    ],
    []
  );

  const [selected, setSelected] = useState<string>("en");

  useLayoutEffect(() => {
    const initialize = async () => {
      setIsMounted(true);

      const storedLang =
        localStorage.getItem("selectedLanguage") ||
        (await getCookie("selectedLanguage"));
      if (storedLang) {
        if (typeof storedLang === "string") {
          setSelected(storedLang);
        }
        router.push(`/${storedLang}${pathName.substring(3)}`);
      } else if (localePath) {
        const foundCountry = countries.find(
          (country) => country.locale === localePath
        );
        if (foundCountry) {
          setSelected(foundCountry.code);
          localStorage.setItem("selectedLanguage", foundCountry.code);
        }
      }
    };

    initialize();
  }, [localePath, countries, pathName, router]);

  const selectedCountry = useMemo(
    () => countries.find((country) => country.code === selected),
    [countries, selected]
  );

  const handleSelect = useCallback(
    (code: string) => {
      const selectedCountry = countries.find(
        (country) => country.code === code
      );
      if (selectedCountry) {
        setCookie("selectedLanguage", code);
        localStorage.setItem("selectedLanguage", code);
        setSelected(code);
        setIsDropdownOpen(false);
        router.push(`/${selectedCountry.locale}${pathName.substring(3)}`);
      }
      window.location.reload();
    },
    [countries, router, pathName]
  );
  if (!isMounted) return null;

  return (
    <div className="relative w-36 z-50">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-darkText rounded-full"
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="flex items-center gap-1">
          <Image
            src={selectedCountry?.flag || ""}
            alt={selected}
            className="w-9 h-6 max-sm:w-6 mr-2 rounded-md"
          />
          <span className="text-sm font-bold">{selectedCountry?.label}</span>
          <span
            className={`ml-1 text-base transition-all duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            <FaCaretDown />
          </span>
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-10">
          {countries.map((country) => (
            <button
              key={country.code}
              className={`flex items-center w-full px-4 py-2 text-left ${
                country.code === selected
                  ? "bg-bg_red text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSelect(country.code)}
            >
              <Image
                src={country.flag}
                alt={country.label}
                className="w-6 h-4 mr-2"
              />
              <span>{country.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flag;
