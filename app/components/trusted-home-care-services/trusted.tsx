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
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    isDragging.current = true;
    scrollRef.current.classList.add("cursor-grabbing");

    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // speed multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
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
      icon: mobilityIcon,
      image: mobility,
      title: "Mobility Support",
      subtitle:
        "Our compassionate caregivers support safe, enjoyable movement to help your loved one stay active and confident.",
    },
    {
      id: "5",
      icon: palliativeIcon,
      image: palliativeCare,
      title: "Palliative Care",
      subtitle:
        "Supportive care focused on comfort and quality of life for those facing serious or chronic illnesses.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-white scroll-mt-20" id="services">
      <div className="max-w-7xl px-6 md:px-10 xl:px-0 mx-auto">
        {/* Title Section */}
        <div className="text-center mb-4 md:mb-8 lg:mb-16 space-y-3 lg:space-y-4">
          <h2 className="text-(--dark-blue) font-bold text-[28px] md:text-3xl lg:text-4xl xl:text-[40px]">
            Our Trusted
            <br className=" max-sm:block hidden" />{" "}
            <span className="text-(--secondary) italic">Homecare</span> Services
          </h2>
          <p className="text-[#64748B] text-sm  lg:text-lg max-w-sm lg:max-w-2xl mx-auto">
            Our services are as unique as the individuals we serve. We create
            custom plans that adapt to your evolving needs.
          </p>
        </div>
        {/* Cards */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            flex gap-3  lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth p-2 lg:p-5 scroll-mt-20 cursor-grab`}
        >
          {sliderItem.map(({ id, icon, image, title, subtitle }) => {
            return (
              <div
                id={id}
                key={id}
                className={`
                  relative flex-none h-64 md:h-75 lg:h-95 xl:h-116.25 rounded-2xl lg:rounded-[40px] overflow-hidden snap-center cursor-pointer
                  transition-all duration-500 ease-out hover:scale-105 active:scale-105
                  w-70 md:w-78 lg:w-105 xl:w-136
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
                  className={`absolute z-20 bg-[linear-gradient(180deg,rgba(0,52,133,0.12)_14.04%,#003991_114.49%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]    flex items-center lg:justify-center    transition-all duration-500
      bottom-0 left-0 right-0 p-1.5 lg:p-6 xl:p-8 gap-1.5 lg:gap-4
    
  `}
                >
                  {/* Icon */}
                  {/* {!isActive && (
                    <div className="shrink lg:shrink-0 shadow-lg transition-all duration-300">
                      <Image src={icon} alt="icon" />
                    </div>
                  )} */}

                  {/* Text */}
                  <div className=" space-y-1 lg:space-y-2">
                    <h3 className=" font-bold text-sm md:text-base lg:text-xl text-white whitespace-nowrap">
                      {title}
                    </h3>

                    {/* {!isActive && ( */}
                    <p className="text-white/90 text-xs md:text-xs lg:text-sm lg:leading-relaxed ">
                      {subtitle}
                    </p>
                    {/* )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div className="mt-2 flex justify-between items-center pl-5">
          <div className="flex gap-1.5 lg:gap-4">
            <button
              className="text-(--secondary) font-bold  cursor-pointer text-lg lg:text-2xl"
              onClick={() => scroll("left")}
            >
              <BsArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="text-(--secondary) font-bold cursor-pointer text-lg lg:text-2xl"
            >
              <BsArrowRight />
            </button>
          </div>

          <p className="text-gray-500 text-xs lg:text-base">
            Need a Custom Plan?{" "}
            <Link
              href="#"
              className="text-primary font-bold underline text-xs lg:text-base"
            >
              Get Started
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
