"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import logoSmall from "@/public/images/logoSmall.png";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/#services",
      submenu: [
        {
          title: "Personalized Homecare",
          href: "/#1",
        },
        {
          title: "Household Support",
          href: "/#2",
        },
        {
          title: "Companionship",
          href: "/#3",
        },
        {
          title: "Mobility Support",
          href: "/#4",
        },
        {
          title: "Palliative Support",
          href: "/#5",
        },
      ],
    },
    { name: "How it works", href: "/#how-it-works" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
  ];

  const navItemsMobile = [
    {
      name: "Services",
      href: "/#services",
    },
    { name: "How it works", href: "#how-it-works" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" },
  ];

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-1000 bg-background/80 backdrop-blur-md border-b border-gray-100 scroll-mt-20">
      <div className=" mx-auto  lg:px-0 max-w-7xl">
        <div className="flex justify-between items-center h-[8vh] lg:h-[12vh] px-3 xl:px-0">
          {/* Logo */}
          <Link href="/">
            <div className=" flex items-center h-16  lg:h-20 ">
              <Image
                src={width !== null && width > 1024 ? logo : logoSmall}
                alt="Elite-Homecare"
                priority
                className="w-auto h-24 lg:h-40"
              />
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group flex items-center h-full"
              >
                <Link
                  href={item.href}
                  className="text-(--text-color) hover:text-(--primary) font-medium transition-colors duration-300 flex items-center text-sm lg:text-base"
                >
                  {item.name}
                  {item.submenu && (
                    <span className="ml-1.5  transition-transform group-hover:rotate-180 duration-300">
                      <IoIosArrowUp />
                    </span>
                  )}
                </Link>

                {/* Centralized Submenu */}
                {item.submenu && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden py-2">
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block px-5 py-3 text-sm text-text-navy hover:bg-gray-50 hover:text-primary transition-colors relative z-10"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="lg:flex items-center hidden">
            <button className="bg-(--primary) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%] hover:shadow-xl text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all  duration-300 cursor-pointer">
              <Link href="/contact-us">Request Consultation</Link>
            </button>
          </div>

          <div className="block lg:hidden">
            {isMobileMenuOpen ? (
              <button onClick={toggleMobileMenu}>
                <RxCross1 size={30} />
              </button>
            ) : (
              <button onClick={toggleMobileMenu}>
                <GiHamburgerMenu size={30} />
              </button>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`overflow-hidden left-0   w-full flex flex-col items-center bg-[#FFFFFF] gap-10 justify-between" ${isMobileMenuOpen ? " h-[90vh]" : "h-0"} transition-all duration-300 ease-in-out`}
        >
          {navItemsMobile?.map((item) => (
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              key={item.name}
              href={item.href}
              className="text-text-navy hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-(--primary) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%] hover:shadow-xl text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all  duration-300 cursor-pointer">
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
              Request Consultation
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
