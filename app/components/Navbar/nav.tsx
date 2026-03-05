"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import logoSmall from "@/public/images/logoSmall.png";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const onClick = () => {
    router.push("/success/application");
  };

  const navItemsMobile = [
    {
      name: "Services",
      href: "/#services",
    },
    { name: "How it works", href: "#how-it-works" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/donate" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className=" mx-auto  max-w-7xl">
        <div
          className={`flex px-6 md:px-10  xl:px-0 justify-between items-center h-[8vh] lg:h-20.5   ${isMobileMenuOpen ? " shadow-[0_8px_20px_rgba(0,0,0,0.06)] drop-shadow-2xl" : ""}`}
        >
          {/* Logo */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="  ">
              <Image
                src={logo}
                alt="Elite-Homecare"
                priority
                className="hidden lg:block w-auto h-24 lg:h-34"
              />

              <Image
                src={logoSmall}
                alt="Elite-Homecare"
                priority
                className="block lg:hidden w-auto h-24"
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
                  className="text-(--text-color) hover:text-(--primary) font-medium transition-colors duration-300 flex items-center text-sm xl:text-base"
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
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
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
            <Link
              href="/contact-us"
              className="bg-(--primary) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%] text-white  px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold  transition-all  duration-300 cursor-pointer text-sm xl:text-base"
            >
              Request Consultation
            </Link>
          </div>

          <div className="block lg:hidden">
            {isMobileMenuOpen ? (
              <button onClick={toggleMobileMenu}>
                <RxCross1 size={20} />
              </button>
            ) : (
              <button onClick={toggleMobileMenu}>
                <GiHamburgerMenu size={20} />
              </button>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`overflow-hidden left-0    w-full flex flex-col items-center   bg-[#FFFFFF] gap-8  ${isMobileMenuOpen ? " h-screen pt-12" : "h-0"} transition-all duration-300 ease-in-out`}
        >
          {navItemsMobile?.map((item) => (
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              key={item.name}
              href={item.href}
              className="text-[rgba(0,19,63,1)] font-medium text-base"
            >
              {item.name}
            </Link>
          ))}
          <Link
            className="bg-(--primary) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%] hover:shadow-xl text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all  duration-300 cursor-pointer"
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};
