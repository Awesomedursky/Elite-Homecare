import logo from "@/public/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import donate from "@/public/images/donate.svg";
import request from "@/public/images/call.svg";
import phone from "@/public/images/phone.svg";
import message from "@/public/images/message.svg";

export const Footer = () => {
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
    <div className=" bg-(--dark-blue)">
      <div className="mx-auto  sm:px-6  2xl:max-w-7xl flex justify-between md:pt-20 pb-10 py-10">
        {/*footer image and text */}
        <div className="flex flex-col gap-3.5 ">
          <div className=" flex items-center h-20 ">
            <Image
              src={logo}
              alt="Elite-Homecare"
              priority
              className="w-auto object-contain"
            />
          </div>
          <p className=" text-lg leading-8 max-w-106.75 font-medium text-white">
            Providing premier in-home care services across Northeast Ohio. Our
            mission is to enhance the quality of life for our clients and
            provide peace of mind for their families
          </p>
        </div>

        <div className="flex justify-between gap-x-24">
          {/* links */}
          <div className="flex flex-col gap-5">
            <h4 className=" text-(--secondary) font-bold text-base">
              QUICK LINKS
            </h4>
            <div className=" flex flex-col gap-2">
              {quicklinks.map((i, idx) => (
                <Link
                  key={idx}
                  href={i.href}
                  className=" text-white font-medium text-base pb-3.5 hover:scale-105 transition-all duration-300"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col gap-5 ">
            <h4 className=" text-(--secondary) font-bold text-base">CONTACT</h4>
            <div className=" flex flex-col gap-2">
              {contacts.map((i, idx) => (
                <Link
                  key={idx}
                  href={i.href}
                  className=" text-white font-medium text-base pb-3.5 hover:scale-105 transition-all duration-300 flex items-center gap-x-1.5"
                >
                  <span>
                    <Image src={i.icon} alt="icon" />
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
