import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";

export const HeroSection = () => {
  return (
    <section className="relative h-[88vh] w-full flex items-center overflow-hidden justify-center">
      {/* 1. Background Image using Next.js Image Component */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={HeroImage}
          alt="Compassionate home care background"
          fill
          priority
          className="object-cover opacity-80"
          placeholder="blur"
        />
        {/* 2. Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#001953]/40 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* 3. Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex justify-center items-center text-center h-full">
        <div className="max-w-4xl">
          <h1 className="text-white font-semibold text-[54px] md:text-[64px] mb-6">
            Compassionate Home Care
            <br /> in Northeast Ohio
          </h1>

          <p className="text-gray-200 font-medium text-base md:text-lg mb-10  leading-relaxed ">
            Expert care tailored to your family's unique needs. We provide peace
            of mind <br /> for seniors and their loved ones through dedicated,
            heart-led service.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="px-8 py-4 bg-(--p700) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%] hover:shadow-xl text-white  rounded-full font-semibold shadow-md transition-all  duration-300 cursor-pointer">
              Request a Free Consultation
            </button>
            <button className="bg-white  transform hover:bg-[#FFEBEE]   px-6 w-63 py-4 rounded-full text-(--primary) font-bold transition-all cursor-pointer">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
