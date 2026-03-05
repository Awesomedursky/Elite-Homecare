"use client";
import Love from "@/public/images/heart.svg";
import Speak from "@/public/images/speaker.svg";
import Beg from "@/public/images/beg.svg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { TbShare } from "react-icons/tb";

export const HowToSupport = () => {
  const items = [
    {
      icon: Love,
      title: "Volunteer Your Time",
      p: "Lend your time for companionship or community events. Your presence makes a world of difference.",
    },
    {
      icon: Speak,
      title: "Spread The Word",
      p: "Follow us and share our mission with friends and family. Helping us grow means helping more families.",
    },
    {
      icon: Beg,
      title: "Donations",
      p: "Willing contributions support our community programs and accessibility for families in need.",
    },
  ];

  const handleShare = async () => {
    const shareData = {
      title: "Support Our Mission",
      text: "Join us in making a difference in our community.",
      url: window.location.href,
    };

    try {
      // If browser supports native share
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div
      id="donation"
      className="max-w-7xl mx-auto lg:px-10 xl:px-0 lg:py-10 scroll-m-20"
    >
      <section className="  lg:rounded-[40px] bg-[#F1F5F9] py-10 lg:py-25 text-center px-6  flex flex-col space-y-5">
        <div className=" space-y-3.5 max-w-191.25 mx-auto">
          <h3 className=" text-2xl sm:text-[30px] lg:text-3xl xl:text-[40px]  font-bold text-(--dark-blue)">
            How Can You Support
          </h3>
          <p className=" text-[#64748B] text-sm sm:text-base xl:text-lg font-medium text-center max-w-xl mx-auto">
            Our mission of compassion thrives through community involvement.
            Join us in making Northeast Ohio a better place for our seniors and
            families.
          </p>
        </div>

        <div className=" grid md:grid-cols-3 gap-4 lg:gap-6">
          {items.map(({ icon, title, p }, idx) => (
            <div
              key={idx}
              className="flex p-5 lg:p-7.5 bg-[#FEFEFE] rounded-[20px] md:flex-col md:items-center gap-2.5 md:gap-7.5 items-start"
            >
              <div className=" bg-[#FFEBEE] rounded-full size-10 lg:size-20 items-center flex justify-center shrink-0">
                <Image
                  src={icon}
                  alt="icon-img"
                  className=" object-contain size-4 md:size-6 lg:size-10"
                />
              </div>

              <div className=" space-y-4 flex flex-col items-start md:justify-center md:items-center">
                <div className="space-y-2.5 text-start md:text-center">
                  <h3 className=" text-[#64748B] font-bold text-sm md:text-base lg:text-lg">
                    {title}
                  </h3>
                  <p className=" font-medium text-xs lg:text-sm xl:text-base text-[#718199]">
                    {p}
                  </p>
                </div>

                <div className=" md:text-center">
                  {idx == 0 ? (
                    <Link
                      href="/donate"
                      className="flex items-center gap-x-1 text-sm lg:text-base font-medium text-[#1C469D]"
                    >
                      Get Invlolved <GoArrowUpRight />
                    </Link>
                  ) : idx == 1 ? (
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-x-1 text-sm lg:text-base font-medium text-[#1C469D] cursor-pointer"
                    >
                      Share our Mission <TbShare />
                    </button>
                  ) : (
                    <Link
                      href="/"
                      className="bg-(--dark-blue) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)] hover:bg-position-[100%_0%] hover:shadow-xl text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3  lg:py-4 rounded-xl md:rounded-[20px] font-semibold shadow-md transition-all  duration-300 cursor-pointer block"
                    >
                      Contribute Today
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
