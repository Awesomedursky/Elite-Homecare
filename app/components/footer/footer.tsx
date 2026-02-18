"use client";
import logo from "@/public/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import donate from "@/public/images/donate.svg";
import request from "@/public/images/call.svg";
import phone from "@/public/images/phone.svg";
import message from "@/public/images/message.svg";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const quicklinks = [
    {
      name: "Our Services",
      href: "#",
    },
    {
      name: "How it Works",
      href: "#",
    },
    {
      name: "About Us",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
  ];

  const contacts = [
    {
      icon: donate,
      name: "Donate",
      href: "#",
    },
    {
      icon: request,
      name: "Request Consultation",
      href: "#",
    },
    {
      icon: phone,
      name: "+1 (234) 327-0909",
      href: "#",
    },
    {
      icon: message,
      name: "myelitehomecare@gmail.com",
      href: "#",
    },
  ];

  return (
    <div className="relative bg-(--dark-blue)">
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-(--secondary) hover:scale-110 text-white p-4 rounded-full shadow-xl transition-all duration-300"
      >
        <BsArrowUp size={20} />
      </button>

      <div className="mx-auto  sm:px-6  2xl:max-w-7xl flex justify-between lg:pt-20 pb-10 py-10 flex-col md:flex-row gap-5 sm:gap-10 md:gap-0 px-2">
        {/*footer image and text */}
        <div className="flex flex-col gap-3.5 ">
          <Link href="/">
            <div className=" flex items-center h-16  lg:h-20 ">
              <Image
                src={logo}
                alt="Elite-Homecare"
                priority
                className="w-auto h-24 lg:h-40"
              />
            </div>
          </Link>
          <p className=" hidden md:block text-sm lg:text-lg leading-tight lg:leading-8 max-w-106.75 font-medium text-white">
            Providing premier in-home care services across Northeast Ohio. Our
            mission is to enhance the quality of life for our clients and
            provide peace of mind for their families
          </p>
        </div>

        <div className="flex justify-between gap-x-3.5 lg:gap-x-24">
          {/* links */}
          <div className="flex flex-col gap-2.5 lg:gap-5">
            <h4 className=" text-(--secondary) font-bold text-sm lg:text-base text-nowrap">
              QUICK LINKS
            </h4>
            <div className=" flex flex-col gap-2">
              {quicklinks.map((i, idx) => (
                <Link
                  key={idx}
                  href={i.href}
                  className=" text-white font-medium text-sm lg:text-base pb-3.5 hover:scale-105 transition-all duration-300 text-nowrap"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col gap-5 ">
            <h4 className=" text-(--secondary) font-bold  text-sm lg:text-base">
              CONTACT
            </h4>
            <div className=" flex flex-col gap-2">
              {contacts.map((i, idx) => (
                <Link
                  key={idx}
                  href={i.href}
                  className=" text-white font-medium text-sm lg:text-base pb-3.5 hover:scale-105 transition-all duration-300 flex items-center gap-x-1.5"
                >
                  <span>
                    <Image
                      src={i.icon}
                      alt="icon"
                      className="shrink-0 size-5"
                    />
                  </span>
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#072E87] max-w-5xl py-8 mx-auto">
        <h3 className=" text-center mx-auto  font-medium text-sm text-white">
          &copy; {new Date().getUTCFullYear()} Elite Homecare Services LLC. All
          rights reserved.
        </h3>
      </div>
    </div>
  );
};
