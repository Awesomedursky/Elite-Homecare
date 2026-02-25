"use client";
import Link from "next/link";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";

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
    <div className=" bg-(--dark-blue) lg:rounded-[40px] p-2 max-w-7xl mx-auto my-5 lg:my-10 py-10 lg:py-20 flex flex-col space-y-10 relative overflow-hidden">
      <div className="flex gap-2 flex-wrap absolute top-1 z-0 opacity-10">
        {Array.from({ length: 3500 }).map((_, idx) => (
          <div key={idx} className=" size-1.5 bg-black" />
        ))}
      </div>

      <div className=" flex flex-col gap-6 z-10">
        <h2 className=" font-extrabold text-white text-3xl lg:text-[50px] text-center  lg:leading-14.5 max-w-144.25 mx-auto">
          Ready to give them the care they deserve?
        </h2>
        <p className=" text-center font-medium text-sm lg:text-xl text-white max-w-144.25 mx-auto ">
          Join the families in Northeast Ohio who trust us with their loved
          ones' daily care.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-x-4 z-10 gap-y-4">
        <Link
          href="/contact-us"
          className=" bg-[#D31A21] rounded-[20px] py-2 px-3 lg:py-4 lg:px-6 text-lg font-medium text-white cursor-pointer hover:bg-[#D31A21]/80 duration-300 transition-all"
        >
          Request Your Consultation
        </Link>

        <button
          onClick={handleCallClick}
          className={`border-[#64748B] border rounded-[20px] py-2 px-3 lg:py-4 lg:px-6 text-lg font-medium w-61.5 cursor-pointer hover:bg-(--primary)duration-300 transition-all flex items-center justify-center gap-2 ${
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
  );
};
