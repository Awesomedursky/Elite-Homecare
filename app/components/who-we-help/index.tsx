import man from "@/public/images/senior-citizen.png";
import family from "@/public/images/families.png";
import recovery from "@/public/images/recovery.png";
import Image from "next/image";

export const WhoWeHelp = () => {
  const whoWeHelp = [
    {
      title: "Seniors Citizens",
      subtitle: (
        <p>
          Dedicated support for aging in <br className="max-sm:hidden block" />{" "}
          place with dignity, independence,
          <br className="max-sm:hidden block" /> and safety in the comfort of
          <br className="max-sm:hidden block" /> home
        </p>
      ),
      image: man,
      color: "#B4D5ED",
    },
    {
      title: "Families",
      subtitle: (
        <p>
          We step in so you can take a well-
          <br className="max-sm:hidden block" />
          deserved break, with the comfort of
          <br className="max-sm:hidden block" /> knowing your loved one is safe
          and <br className="max-sm:hidden block" />
          cared for.
        </p>
      ),
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
    <section className=" py-6 md:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl px-6 md:px-10 xl:px-0 mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className=" text-(--dark-blue) font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">
            Who We Help
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base xl:text-lg max-w-xl mx-auto">
            We provide specialized care solutions for every stage of life's
            transitions, ensuring comfort and dignity.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {whoWeHelp.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: item.color }}
              className={`relative sm:min-h-50 lg:min-h-40 xl:min-h-60 overflow-hidden rounded-[20px] lg:rounded-[40px] p-4 sm:p-6 lg:py-8 xl:p-12   flex flex-col justify-start 
                ${idx === 2 ? "md:col-span-2 " : "md:col-span-1 "}`}
            >
              {/* Text Content */}
              <div className="relative z-10 max-w-45 sm:max-w-50 md:max-w-xs lg:max-w-md">
                <h4 className="font-bold text-lg lg:text-2xl xl:text-[34px] text-[#001953] mb-4">
                  {item.title}
                </h4>
                <div
                  className={`text-[#64748B] font-medium text-xs lg:text-base xl:text-[18px] leading-relaxed  `}
                >
                  {item.subtitle}
                </div>
              </div>

              {/* Character Image */}
              <div
                className={`absolute ${idx == 0 ? "-right-10 bottom-0 lg:-right-20 lg:-bottom-10" : idx == 1 ? "-right-10 -bottom-5 lg:-right-20 lg:-bottom-20" : "right-0 bottom-0 lg:-right-2 lg:-bottom-10"}   w-[45%] md:w-[40%] lg:w-auto h-auto max-h-[90%] flex justify-end items-end `}
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
