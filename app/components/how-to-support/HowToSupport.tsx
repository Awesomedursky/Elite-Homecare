import { FaRegHeart } from "react-icons/fa";
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

  return (
    <div className=" max-w-7xl mx-auto rounded-[40px] bg-[#F1F5F9] py-5 sm:py-10 lg:py-25 text-center px-10 flex flex-col space-y-5 m-10">
      <div className=" space-y-3.5 max-w-191.25 mx-auto">
        <h3 className="text-[40px]  font-bold text-(--dark-blue)">
          How Can You Support
        </h3>
        <p className=" text-[#64748B] text-lg font-medium text-center">
          Our mission of compassion thrives through community involvement. Join
          us in making Northeast Ohio a better place for our seniors and
          families.
        </p>
      </div>

      <div className=" grid grid-cols-3 space-x-6">
        {items.map(({ icon, title, p }, idx) => (
          <div
            key={idx}
            className="flex p-7.5 bg-[#FEFEFE] rounded-[20px] flex-col items-center gap-7.5"
          >
            <div className=" bg-[#FFEBEE] rounded-full size-20 items-center flex justify-center">
              <Image src={icon} alt="icon-img" />
            </div>

            <div className=" space-y-2.5">
              <h3 className=" text-[#64748B] font-bold text-lg">{title}</h3>
              <p className=" font-medium text-base">{p}</p>
            </div>
            {idx == 0 ? (
              <Link
                href="/"
                className="flex items-center gap-x-1 text-base font-medium text-[#1C469D]"
              >
                Get Invlolved <GoArrowUpRight />
              </Link>
            ) : idx == 1 ? (
              <Link
                href=""
                className="flex items-center gap-x-1 text-base font-medium text-[#1C469D]"
              >
                Share our Mission <TbShare />
              </Link>
            ) : (
              <button className="bg-(--dark-blue) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)] hover:bg-position-[100%_0%] hover:shadow-xl text-white px-6 py-4 w-57.75 rounded-[20px] font-semibold shadow-md transition-all  duration-300 cursor-pointer">
                Contribute Today
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
