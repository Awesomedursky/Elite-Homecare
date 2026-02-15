import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

export const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      submenu: [
        "Personalized Homecare",
        "Household Support",
        "Companionship",
        "Mobility Support",
        "Palliative Support",
      ],
    },
    { name: "How it works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav className="sticky top-0 z-1000 bg-background/80 backdrop-blur-md border-b border-gray-100">
      <div className=" mx-auto px-3 sm:px-6  2xl:max-w-7xl">
        <div className="flex justify-between items-center h-[12vh]">
          {/* Logo */}
          <div className=" flex items-center  h-20 ">
            <Image
              src={logo}
              alt="Elite-Homecare"
              priority
              className="  w-auto object-contain"
            />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group flex items-center h-full"
              >
                <Link
                  href={item.href}
                  className="text-(--text-color) hover:text-(--primary) font-medium transition-colors duration-300 flex items-center hover:scale-3d"
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
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub}
                          href="#"
                          className="block px-5 py-3 text-sm text-text-navy hover:bg-gray-50 hover:text-primary transition-colors relative z-10"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex items-center">
            <button className="bg-(--primary) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%] hover:shadow-xl text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all  duration-300 cursor-pointer">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
