import Image from "next/image";
import Link from "next/link";
import caregiverBeforeJob from "@/public/images/care-giver-before-application.png";
import caregiverhappy from "@/public/images/imporeveItwithCaregiver.png";

export const JoinOurCareTeam = () => {
  return (
    <div className=" max-w-208.5 mx-auto text-center px-6 md:px-10  xl:px-0 py-10 space-y-12.5">
      <div className=" flex flex-col space-y-7.5 items-center">
        <div className=" space-y-1.5 lg:space-y-3.5 px-3">
          <p className=" text-base lg:text-xl font-bold text-(--secondary)">
            Join Our Care Team
          </p>
          <h3 className=" text-[28px] md:text-3xl lg:text-4xl xl:text-[40px]  font-bold text-(--dark-blue)">
            Make a Meaningful Difference
          </h3>
          <p className=" text-[#64748B] text-sm md:text-base lg:text-lg font-medium text-center">
            If you’re compassionate, dependable, and passionate about caring for
            others, we’d love to hear from you. Apply below and take the first
            step toward meaningful work.
          </p>
        </div>

        <div className="flex items-center">
          <Link
            href="/careers"
            className="bg-(--dark-blue) bg-size-[200%_100%] bg-position-[0%_0%]  hover:bg-[linear-gradient(90deg,#003485_0%,#003485_50%,#CF5364_100%)] hover:bg-position-[100%_0%]  text-white py-2 px-4 md:px-6 md:py-4 w-57.75 rounded-[20px] font-semibold transition-all  duration-300 cursor-pointer"
          >
            Submit Application
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-6xl h-60  md:h-75 lg:h-96.25 overflow-hidden ">
        {/* Left Image */}
        <div className="absolute left-0 top-0 z-10 w-[56%] h-full rounded-2xl lg:rounded-[40px] overflow-hidden">
          <Image
            src={caregiverBeforeJob}
            alt="Caregiver before getting a job"
            priority
            className="object-cover grayscale h-full"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-0 z-20 w-[60%] h-full overflow-hidden rounded-2xl lg:rounded-[40px]">
          <Image
            src={caregiverhappy}
            alt="Caregiver happy after getting a job offer"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
