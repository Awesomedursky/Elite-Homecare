import overlay from "@/public/images/Overlay.png";
import Image from "next/image";
export const HowItWorks = () => {
  const items = [
    {
      title: "Reach Out",
      subtitle:
        "Contact us by phone or online to share your situation, ask questions, and tell us about your loved one’s care needs",
    },
    {
      title: "Free Care Consultation",
      subtitle:
        "We listen, ask thoughtful questions, and work with you to understand the level of care that’s right for your loved one.",
    },
    {
      title: "Personalized Care Begins",
      subtitle:
        "We match your loved one with a compassionate caregiver and create a flexible care plan that can adjust as needs change.",
    },
  ];
  return (
    <div className="relative w-full py-20 px-10 overflow-hidden">
      {/* Layer 1: Base Image */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={overlay}
          alt="overlay"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="max-w-7xl flex flex-col mx-auto space-y-12">
        {/* Title Section */}
        <div className="text-center md:space-y-4">
          <h3 className="text-[#001953] font-bold text-3xl md:text-[40px]">
            How it Works
          </h3>
          <p className="text-[#64748B] text-lg font-medium leading-tight">
            We make the process simple, so you can focus on what matters most,
            <br />
            <span className="text-red-600">your loved one’s care.</span>
          </p>
        </div>

        <div className="relative w-full">
          {/* The Connecting Line Background */}
          {/* Positioned at the top to align specifically with the balls' vertical center */}
          <div className="absolute top-7.5 left-0 w-full h-0.5 bg-[#E2E8F0] z-0" />

          {/* Integrated Ball and Details Container */}
          <div className="relative z-10 flex justify-around gap-x-21 items-start">
            {items.map(({ title, subtitle }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-y-3 sm:gap-y-4 lg:gap-y-6 "
              >
                {/* Progress Ball */}
                <div className="flex items-center justify-center rounded-full size-15 bg-[#FFCDD2] text-(--dark-blue) text-2xl font-extrabold ">
                  {idx + 1}
                </div>

                {/* Details Section */}
                <div className="space-y-3">
                  <h3 className=" font-bold text-lg text-(--dark-blue)">
                    {title}
                  </h3>
                  <p className="text-[#64748B] text-sm font-medium leading-relaxed px-4">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
