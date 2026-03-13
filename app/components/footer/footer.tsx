"use client";
import logo from "@/public/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import donate from "@/public/images/donate.svg";
import request from "@/public/images/call.svg";
import phone from "@/public/images/phone.svg";
import message from "@/public/images/message.svg";
import { BsArrowUp } from "react-icons/bs";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const quicklinks = [
    {
      name: "Our Services",
      href: "/#services",
    },
    {
      name: "How it Works",
      href: "/#how-it-works",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Careers",
      href: "/careers",
    },
  ];

  const contacts = [
    {
      icon: donate,
      name: "Donate",
      href: "/#donation",
    },
    {
      icon: request,
      name: "Request Consultation",
      href: "/contact-us",
    },
    {
      icon: phone,
      name: "+1 (234) 327-0909",
      href: "tel:+12343270909",
    },
    {
      icon: message,
      name: "contact@myelitehomecare.org",
      href: "mailto:contact@myelitehomecare.org",
    },
  ];

  return (
    <div className="relative bg-(--dark-blue)">
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-2 right-2 z-50 bg-(--secondary) hover:scale-110 text-white 
             p-2 sm:p-3 lg:p-4 
             rounded-full shadow-xl transition-all duration-300"
      >
        <BsArrowUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      <div className="mx-auto w-full px-6 md:px-10  xl:px-6 2xl:px-0  2xl:max-w-7xl xl:max-w-6xl flex justify-between lg:pt-20 pb-10 py-10 flex-col md:flex-row gap-5 sm:gap-10 md:gap-0 ">
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
          <p className=" hidden md:block text-sm md:text-base xl:text-lg leading-6 xl:leading-8  max-w-xs lg:max-w-md  xl:max-w-lg font-medium text-white">
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
            <div className=" flex flex-col gap-2 justify-between">
              {quicklinks.map((i, idx) => (
                <Link
                  key={idx}
                  href={i.href}
                  onClick={(e) => {
                    if (
                      window.location.pathname === "/" &&
                      i.href.startsWith("/#")
                    ) {
                      e.preventDefault();
                      const targetId = i.href.replace(/^\/?#/, "");
                      window.history.pushState(null, "", i.href);
                      const element = document.getElementById(targetId);
                      if (element) {
                        const navBar = document.querySelector("nav");
                        const navHeight = navBar ? navBar.offsetHeight : 80;
                        const elementPosition =
                          element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                          top: elementPosition - navHeight,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                  className=" text-white font-medium text-xs sm:text-sm lg:text-base pb-3.5 hover:scale-105 transition-all duration-300 text-nowrap"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col gap-2.5 lg:gap-5 ">
            <h4 className=" text-(--secondary) font-bold  text-sm lg:text-base">
              CONTACT
            </h4>
            <div className=" flex flex-col gap-2">
              {contacts.map((i, idx) => {
                const isExternal =
                  i.href.startsWith("mailto:") || i.href.startsWith("tel:");
                return isExternal ? (
                  <a
                    key={idx}
                    href={i.href}
                    className=" text-white font-medium text-xs sm:text-sm lg:text-base pb-3.5 hover:scale-105 transition-all duration-300 flex items-center gap-x-1.5"
                  >
                    <span className="block">
                      <Image
                        src={i.icon}
                        alt="icon"
                        className=" size-4 sm:size-5 lg:size-6"
                      />
                    </span>
                    {i.name}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    href={i.href}
                    onClick={(e) => {
                      if (
                        window.location.pathname === "/" &&
                        i.href.startsWith("/#")
                      ) {
                        e.preventDefault();
                        const targetId = i.href.replace(/^\/?#/, "");
                        window.history.pushState(null, "", i.href);
                        const element = document.getElementById(targetId);
                        if (element) {
                          const navBar = document.querySelector("nav");
                          const navHeight = navBar ? navBar.offsetHeight : 80;
                          const elementPosition =
                            element.getBoundingClientRect().top +
                            window.scrollY;
                          window.scrollTo({
                            top: elementPosition - navHeight,
                            behavior: "smooth",
                          });
                        }
                      }
                    }}
                    className=" text-white font-medium text-xs sm:text-sm lg:text-base pb-3.5 hover:scale-105 transition-all duration-300 flex items-center gap-x-1.5"
                  >
                    <span className="block">
                      <Image
                        src={i.icon}
                        alt="icon"
                        className=" size-4 sm:size-5 lg:size-6"
                      />
                    </span>
                    {i.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#072E87] max-w-5xl py-8 mx-auto">
        <h3 className=" text-center mx-auto  font-medium text-xs sm:text-sm text-white">
          &copy; {new Date().getUTCFullYear()} Elite Homecare Services LLC. All
          rights reserved.
        </h3>
      </div>
    </div>
  );
};
