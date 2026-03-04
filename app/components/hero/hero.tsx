import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeroSection = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  return (
    <section
      className={`relative h-screen w-full flex ${path === "about-us" ? " items-center lg:items-end lg:py-[5%]" : "items-center"} overflow-hidden justify-center scroll-mt-20`}
    >
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
      {path === "about-us" ? (
        <div className="max-w-7xl mx-auto px-3 sm:px-8 xl:px-0 flex flex-col lg:flex-row gap-x-10 gap-y-3 lg:gap-y-0 items-center lg:items-start justify-between w-full">
          <div className="space-y-4 text-center lg:text-left lg:w-xl xl:min-w-2xl">
            <h3 className=" font-bold text-xl text-(--secondary) lg:text-white  mx-auto lg:mx-0">
              About Us
            </h3>
            <h1 className="text-white font-semibold text-3xl sm:text-4xl lg:text-[54px] leading-[1.3]">
              Care You Can Trust, Right{" "}
              <span className="lg:text-(--secondary)"> at Home</span>
            </h1>
          </div>
          <div className="lg:place-self-end lg:py-6 lg:max-w-sm xl:max-w-lg">
            <p className=" text-sm text-center md:text-lg font-medium leading-7 text-white lg:text-justify">
              At My Elite Home Care, we provide compassionate, reliable home
              care for individuals and families across Northeast Ohio. Our goal
              is simple: to help people live safely, comfortably, and with
              dignity in the place they call home.{" "}
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-12 w-full flex justify-center items-center text-center h-full">
          <div className=" lg:max-w-4xl">
            <h1 className="text-white font-semibold text-3xl sm:text-4xl  lg:text-[64px] mb-6 leading-[1.2] lg:leading-[1.3]">
              Compassionate <br className=" max-sm:block hidden" />
              Home Care
              <br /> in Northeast Ohio
            </h1>

            <p className="text-gray-200 font-normal sm:font-medium text-sm sm:text-base md:text-lg mb-10  leading-relaxed ">
              Expert care tailored to your family's unique needs.
              <br className="max-sm:block hidden" /> We provide peace of mind{" "}
              <br className=" max-sm:hidden block" /> for seniors and their
              <br className="max-sm:block hidden" />
              loved ones through dedicated, heart-led service.
            </p>

            <div className="flex max-sm:flex-col gap-4 items-center justify-center">
              <Link
                href="/contact-us"
                className="px-4 py-3 sm:px-8 sm:py-4 bg-(--p700) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)]  hover:bg-position-[100%_0%]  text-white  rounded-full font-semibold shadow-md transition-all  duration-300 cursor-pointer"
              >
                Request a Free Consultation
              </Link>
              <Link
                href="/#services"
                className="sm:bg-white  transform hover:bg-[#FFEBEE] px-6 py-3   sm:px-6 sm:py-4 lg:w-63  rounded-full text-white sm:text-(--primary) font-bold transition-all cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
