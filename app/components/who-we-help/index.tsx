import man from "@/public/images/senior-citizen.png";
import family from "@/public/images/families.png";
import recovery from "@/public/images/recovery.png";
import Image from "next/image";

export const WhoWeHelp = () => {
  const whoWeHelp = [
    {
      title: "Seniors Citizens",
      subtitle:
        "Dedicated support for aging in place with dignity, independence, and safety in the comfort of home.",
      image: man,
      color: "#B4D5ED",
    },
    {
      title: "Families",
      subtitle:
        "We step in so you can take a well-deserved break, with the comfort of knowing your loved one is safe and cared for.",
      image: family,
      color: "#E6E9F4",
    },
    {
      title: "Recovery",
      subtitle:
        "Short-term or ongoing support for individuals recovering from illness, injury, or surgery at home.",
      image: recovery,
      color: "#F3F0E3",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl px-6 mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className=" text-(--dark-blue) font-bold text-3xl md:text-[40px]">
            Who We Help
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            We provide specialized care solutions for every stage of life's
            transitions, ensuring comfort and dignity.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {whoWeHelp.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: item.color }}
              className={`relative overflow-hidden rounded-[40px] p-8 md:p-12 min-h-44 flex flex-col justify-start 
                ${idx === 2 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              {/* Text Content */}
              <div className="relative z-10 max-w-xs md:max-w-md">
                <h4 className="font-bold text-2xl md:text-[34px] text-[#001953] mb-4">
                  {item.title}
                </h4>
                <p className="text-[#64748B] font-medium text-base md:text-[18px] leading-relaxed max-w-sm">
                  {item.subtitle}
                </p>
              </div>

              {/* Character Image */}
              <div
                className={`absolute ${idx == 0 ? "-right-20 -bottom-10" : idx == 1 ? "-right-20 -bottom-20" : "-right-2 -bottom-3"}   w-[45%] md:w-[40%] lg:w-auto h-auto max-h-[90%] flex justify-end items-end overflow-clip`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} character`}
                  className="object-contain object-bottom-right"
                  width={300} // Adjust based on your actual assets
                  height={222}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
