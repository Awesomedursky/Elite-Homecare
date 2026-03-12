"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import dots from "@/public/images/Dots.svg";

export const CallToAction = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handleCallClick = () => {
    if (!showNumber) {
      setShowNumber(true);
    } else {
      window.location.href = "tel:+12343270909";
    }
  };

  return (
    <div className=" lg:px-10 xl:px-0">
      <div className=" bg-[#002270] lg:rounded-[40px]  max-w-7xl mx-auto my-5 lg:my-10 py-10 lg:py-20 flex flex-col space-y-10 relative overflow-hidden px-6">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={dots}
            alt="dots"
            fill
            priority
            className="object-cover "
            // placeholder="blur"
          />
        </div>

        <div className=" flex flex-col gap-6 z-10">
          <h2 className=" font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl  xl:text-[50px] text-center  xl:leading-14.5 max-w-144.25 mx-auto">
            Ready to give them the
            <br /> care they deserve?
          </h2>
          <p className=" text-center font-medium text-sm lg:text-xl text-white  mx-auto ">
            Join the families in Northeast Ohio who trust{" "}
            <br className=" max-sm:block hidden" /> us with{" "}
            <br className=" max-sm:hidden block" /> their loved ones' daily
            care.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-x-4 z-10 gap-y-4">
          <Link
            href="/contact-us"
            className=" bg-[#D31A21] rounded-[20px] py-2 px-3 lg:py-4 lg:px-4 xl:px-6 text-sm md:text-base xl:text-lg font-medium text-white cursor-pointer hover:bg-[#D31A21]/80 duration-300 transition-all"
          >
            Request Your Consultation
          </Link>

          <button
            onClick={handleCallClick}
            className={`border-[#64748B] border rounded-[20px] py-2 px-3 lg:py-4 lg:px-6 text-sm md:text-base xl:text-lg font-medium  xl:w-61.5 cursor-pointer hover:bg-(--primary) hover:text-white duration-300 transition-all flex items-center justify-center gap-2 ${
              showNumber ? "bg-white text-(--primary)" : "text-white"
            }`}
          >
            {showNumber ? (
              <>
                <FiPhone />
                +1 (234) 327-0909
              </>
            ) : (
              "Call Us Today"
            )}
          </button>
        </div>
        <p className=" text-white text-sm text-center z-10">
          Available 24/7 for urgent care inquiries
        </p>
      </div>
    </div>
  );
};
