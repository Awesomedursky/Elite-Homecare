"use client";
import Image from "next/image";
import supportImage from "@/public/images/support.png";
import supportImageSmall from "@/public/images/supportImageSmall.png";
import supportLogo from "@/public/images/supportLogo.png";
import { Input } from "../components/atoms/Input";
import { SubmitEvent, useCallback, useState } from "react";
import { MultiSelect } from "../components/atoms/MultiSelect";
import { Button } from "../components/atoms/CustomButton";
import { Textarea } from "../components/atoms/Textarea";
import { useRouter } from "next/navigation";
import { Toast } from "../components/atoms/Toast";

const Donate = () => {
  const HOW_WOULD_YOU_LIKE_TO_HELP = [
    { value: "volunteer-your-time", label: "Volunteer your time" },
    { value: "social-media-sharing", label: "Social Media Sharing" },
    { value: "business-partnership", label: "Business Partnership" },
    { value: "other-inquiries", label: "Other Inquiries" },
  ];

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [howToHelp, setHowToHelp] = useState<string[]>([]);
  const [tellUsMore, setTellUsMore] = useState("");

  const resetForm = useCallback(() => {
    setFullName("");
    setPhone("");
    setEmail("");
    setHowToHelp([]);
    setTellUsMore("");
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = useCallback(
    (message: string, type: "success" | "error") => {
      setToast({ message, type });
    },
    [],
  );

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("howToHelp", howToHelp.join(", "));
    formData.append("tellUsMore", tellUsMore);

    try {
      const res = await fetch("https://formspree.io/f/mjgarvqe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        router.push("/success/volunteer");
        resetForm();
      } else {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      showToast(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="2xl:max-w-7xl xl:max-w-6xl w-full mx-auto lg:px-10 xl:px-0   scroll-mt-20">
      <div className="lg:rounded-[40px] lg:border border-[#D8E0E9] my-6 drop-shadow-[0_4px_4px_rgba(216,224,233,0.5)] flex flex-col lg:flex-row w-full justify-between gap-5 lg:gap-x-10 overflow-hidden lg:h-[86vh]">
        {/* LEFT SIDE — IMAGE */}
        <div
          className="
      relative
      flex flex-col lg:justify-end
      w-full
       h-38.25 sm:h-40 md:h-[30vh]
      lg:h-auto
      lg:w-117.5
      lg:min-w-[35%] lg:max-w-[40%]
      p-6 sm:p-8 lg:p-10
    "
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={supportImage}
              alt="Support Our Mission"
              fill
              placeholder="blur"
              className="object-cover object-center max-md:hidden block"
              priority
            />
            <Image
              src={supportImageSmall}
              alt="Support Our Mission"
              fill
              placeholder="blur"
              className=" object-cover  max-md:block hidden"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(26,53,91,0.6)] mix-blend-multiply -z-10" />

          {/* Text Content */}
          <div className="relative text-white space-y-3 z-10">
            <Image
              src={supportLogo}
              alt="Support Logo"
              width={30}
              height={30}
              className="w-auto h-8 max-lg:hidden"
            />

            <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">
              Support Our Mission
            </div>

            <p className="text-sm text-white/90 text-justify max-lg:hidden">
              Join us in strengthening Northeast Ohio through care and
              companionship. Together, we can make a difference for our seniors.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="w-full py-2.5 px-6 md:px-10   xl:p-12 lg:overflow-y-scroll scrollbar-hide">
          <div>
            <h3 className="text-(--dark-blue) font-bold text-base sm:text-xl md:text-2xl lg:text-4xl sm:mb-4 mb-1">
              I Want to Help
            </h3>

            <p className="text-[#64748B] text-xs sm:text-sm md:text-base sm:mb-8 mb-4 font-medium text-justify md:text-left">
              Complete the form below and we’ll be in touch soon. We value every
              minute of support you can offer.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              id="fullName"
              label="Full Name"
              type="text"
              value={fullName}
              onChange={setFullName}
              placeholder="So we know who we're speaking with"
              required
            />

            <Input
              id="phone"
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={setPhone}
              placeholder="Preferred for quicker follow-up"
              required
            />

            <Input
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="For confirmations or additional details"
              required
            />

            <MultiSelect
              label="How would you like to help?"
              placeholder="Select all that applies"
              options={HOW_WOULD_YOU_LIKE_TO_HELP}
              value={howToHelp}
              onChange={setHowToHelp}
              required
            />

            <Textarea
              id="tellUsMore"
              label="Tell Us More"
              value={tellUsMore}
              onChange={setTellUsMore}
              required
            />

            <Button text="Submit Interest" loading={isSubmitting} />
          </form>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Donate;
