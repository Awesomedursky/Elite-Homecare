"use client";
import { HeroSection } from "../hero/hero";
import check from "@/public/images/check.svg";
import calender from "@/public/images/calender.svg";
import time from "@/public/images/time.svg";
import help from "@/public/images/donate.svg";
import Image from "next/image";

export const HeroPage = () => {
  const sectionItems = [
    { icon: check, name: "Licensed & Insured Caregivers" },
    { icon: calender, name: "Personalized Care Plans" },
    { icon: time, name: "24/7 Support Available" },
    { icon: help, name: "Heart-Led Compassion" },
  ];

  return (
    <>
      <HeroSection />
      <section className=" border-b border-[#E2E8F0] w-full px-6 md:px-10  py-5 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-x-10 overflow-x-auto scrollbar-hide">
            {sectionItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 md:gap-x-3 whitespace-nowrap cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="size-5 lg:size-6 object-contain"
                />

                <p className="font-semibold text-sm sm:text-base lg:text-lg text-(--text-color)">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
