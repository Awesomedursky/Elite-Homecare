import Dots from "@/public/images/Dots 8px.svg";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <div className=" bg-(--dark-blue) rounded-[40px] p-2 max-w-7xl mx-auto my-5 lg:my-10 py-5 sm:py-10 lg:py-20 flex flex-col space-y-10 relative overflow-hidden">
      <div className="flex gap-2 flex-wrap absolute top-1 z-0 opacity-10">
        {Array.from({ length: 3500 }).map((_, idx) => (
          <div key={idx} className=" size-1.5 bg-black" />
        ))}
      </div>

      <div className=" flex flex-col gap-6 z-10">
        <h2 className=" font-extrabold text-white lg:text-[50px] text-center leading-14.5">
          Ready to give them the
          <br /> care they deserve?
        </h2>
        <p className=" text-center font-medium text-xl text-white ">
          Join the families in Northeast Ohio who trust us
          <br /> with their loved ones' daily care.
        </p>
      </div>
      <div className="flex justify-center gap-x-4 z-10">
        <button className=" bg-[#D31A21] rounded-[20px] py-4 px-6 text-lg font-medium text-white cursor-pointer hover:bg-[#D31A21]/80 duration-300 transition-all">
          Request Your Consultation
        </button>
        <button className=" border-[#64748B] border rounded-[20px] py-4 px-6 text-lg font-medium text-white w-61.5 cursor-pointer hover:scale-105 duration-300 transition-all ">
          Call Us Today
        </button>
      </div>
      <p className=" text-white text-sm text-center z-10">
        Available 24/7 for urgent care inquiries
      </p>
    </div>
  );
};
