"use client";
import Link from "next/link";
import { memo } from "react";
const Dropdown = ({ navList, isOpen, setIsOpen }: any) => {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-28 left-0 w-full   bg-bg_light shadow-lg shadow-primary_color_shade/60 text-white flex  items-center justify-center z-50`}
        >
          <div className="container px-5">
            <ul className="flex flex-col justify-start items-start  w-full py-5">
              {navList.map((item: any, index: any) => (
                <li
                  className="text-lg max-sm:text-base  font-bold text-dark_heading hover:text-light_heading px-4 py-3 hover:bg-primary_color w-full"
                  key={index}
                >
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Dropdown);
