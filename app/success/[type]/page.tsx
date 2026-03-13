import Image from "next/image";
import Link from "next/link";
import nurseImage from "@/public/images/female-doctor.jpg";

type PageProps = {
  params: Promise<{
    type: string;
  }>;
};

const successContent = {
  volunteer: {
    title: "Interest Sent Successfully",
    message:
      "Thank you for your willingness to help. We will reach out shortly with the next steps. We truly appreciate your time and support. ❤️",
  },
  application: {
    title: "Application Submitted",
    message:
      "Thank you for applying to My Elite Home Care. We’ve received your application and appreciate your interest in joining our care team.",
  },
  payment: {
    title: "Payment Successful",
    message:
      "Thank you for your donation. Your support helps us continue our mission to provide exceptional care",
  },
  contact: {
    title: "We’ve Got Your Request",
    message:
      "Thank you for reaching out. A member of our care team will be in touch soon to listen, answer your questions, and help you take the next step. We’re here to support you and your family.",
  },
};

const SuccessPage = async ({ params }: PageProps) => {
  const { type } = await params;

  const content = successContent[type as keyof typeof successContent];

  if (!content) {
    return <div className="text-center py-20">Invalid success type.</div>;
  }

  return (
    <section className="py-12 flex items-center justify-center bg-gray-50 px-6">
      <div className="2xl:max-w-7xl xl:max-w-6xl mx-auto w-full bg-white rounded-xl md:rounded-[30px] shadow-lg p-6 md:p-12 text-center space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-4xl font-bold text-[#002270]">
          {content.title}
        </h1>

        <p className="text-[#64748B] text-sm lg:text-base font-medium  max-w-lg mx-auto">
          {content.message}
        </p>

        <div className="relative h-38 sm:h-50 md:h-72 rounded-2xl overflow-hidden">
          <Image
            src={nurseImage}
            alt="Success Image"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="bg-red-600 text-sm md:text-base text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full font-semibold"
          >
            Return to Home
          </Link>

          <Link
            href="/about-us"
            className="bg-gray-200 text-sm md:text-base py-2 px-3 lg:px-6 lg:py-3 rounded-full font-semibold text-[#0F2E6E]"
          >
            Learn more About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
