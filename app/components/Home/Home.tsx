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
      <section className=" border-b border-[#E2E8F0] w-full px-3 sm:px-6 py-10">
        <div className="flex mx-auto max-w-7xl justify-between">
          {sectionItems.map((i, idx) => (
            <p key={idx} className=" flex items-center gap-1.5">
              <span>
                <Image src={i?.icon} alt={i.name} />
              </span>
              {i.name}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroPage;
