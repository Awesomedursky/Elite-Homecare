"use client";
import personalizedIcon from "@/public/images/personalized-home-careIcon.svg";
import personalizedHomecare from "@/public/images/personalized-in-home-care.png";
import houseHoldSupportICon from "@/public/images/house-holdSupportIcon.svg";
import houseHoldSupport from "@/public/images/household-support.png";
import companionshipIcon from "@/public/images/companionship-careIcon.svg";
import companionship from "@/public/images/companioship-care.png";
import palliativeIcon from "@/public/images/palliative-careIcon.svg";
import palliativeCare from "@/public/images/palliative-care.png";
import mobilityIcon from "@/public/images/mobility-supportIcon.svg";
import mobility from "@/public/images/mobility-support.png";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const TrustedHomeCareServices = () => {
  const [activeCards, setActiveCards] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const toggleCard = (id: string) => {
    setActiveCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector(".snap-center") as HTMLElement;

    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // include gap

    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const sliderItem = [
    {
      id: "1",
      icon: personalizedIcon,
      image: personalizedHomecare,
      title: "Personalized Home Care",
      subtitle:
        "Assistance with daily living activities including bathing, dressing, and personal hygiene with utmost respect.",
    },
    {
      id: "2",
      icon: houseHoldSupportICon,
      image: houseHoldSupport,
      title: "Household Support",
      subtitle:
        "Light housekeeping, meal preparation, and grocery shopping to keep the home environment comfortable, safe and healthy.",
    },
    {
      id: "3",
      icon: companionshipIcon,
      image: companionship,
      title: "Companionship Care",
      subtitle:
        "Meaningful social interaction, accompaniment to appointments, and participation in hobbies and activities.",
    },
    {
      id: "4",
      icon: palliativeIcon,
      image: palliativeCare,
      title: "Palliative Care",
      subtitle:
        "Supportive care focused on comfort and quality of life for those facing serious or chronic illnesses.",
    },
    {
      id: "5",
      icon: mobilityIcon,
      image: mobility,
      title: "Mobility Support",
      subtitle:
        "Our compassionate caregivers support safe, enjoyable movement to help your loved one stay active and confident.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-(--dark-blue) font-bold text-3xl md:text-[40px]">
            Our Trusted{" "}
            <span className="text-(--secondary) italic">Homecare</span> Services
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Our services are as unique as the individuals we serve. We create
            custom plans that adapt to your evolving needs.
          </p>
        </div>
        {/* Cards */}
        <div
          ref={scrollRef}
          className={` 
            ${activeCards.size == 5 ? "grid grid-cols-5" : "flex"}  gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth p-5 `}
        >
          {sliderItem.map(({ id, icon, image, title, subtitle }) => {
            const isActive = activeCards.has(id);

            return (
              <div
                key={id}
                onClick={() => toggleCard(id)}
                className={`
                  relative flex-none h-116.25 rounded-[40px] overflow-hidden snap-center cursor-pointer
                  transition-all duration-500 ease-out hover:scale-105
                  ${isActive ? "w-58" : "md:w-136 "}
                `}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#00348533] z-10" />

                {/* Content */}
                <div
                  className={`absolute z-20 bg-[linear-gradient(180deg,rgba(0,52,133,0.12)_14.04%,#003991_114.49%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]    flex items-center justify-center    transition-all duration-500
    ${
      isActive
        ? `  block w-lg text-center h-24
          top-full left-0
          -rotate-90
          origin-top-left 
          p-6
        `
        : "bottom-0 left-0 right-0 p-8 gap-4 items-start"
    }
  `}
                >
                  {/* Icon */}
                  {!isActive && (
                    <div className="shrink-0 shadow-lg transition-all duration-300">
                      <Image src={icon} alt="icon" />
                    </div>
                  )}

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-white whitespace-nowrap">
                      {title}
                    </h3>

                    {!isActive && (
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div className="mt-2 flex justify-between items-center pl-5">
          <div className="flex gap-4">
            <button
              className="text-(--secondary) font-bold  cursor-pointer"
              onClick={() => scroll("left")}
            >
              <BsArrowLeft size={30} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="text-(--secondary) font-bold cursor-pointer"
            >
              <BsArrowRight size={30} />
            </button>
          </div>

          <p className="text-gray-500">
            Need a Custom Plan?{" "}
            <Link href="#" className="text-primary font-bold underline">
              Get Started
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
