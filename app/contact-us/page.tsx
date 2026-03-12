"use client";

import { useState, useCallback } from "react";
import type { SubmitEvent } from "react";
import Image from "next/image";
import { MultiSelect } from "@/app/components/atoms/MultiSelect";
import { Select } from "@/app/components/atoms/Select";
import { Input } from "@/app/components/atoms/Input";
import { Textarea } from "@/app/components/atoms/Textarea";
import { Toast } from "@/app/components/atoms/Toast";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import RemoveTheStars from "@/public/images/removeTheStars.png";
import { Button } from "../components/atoms/CustomButton";
import { useRouter } from "next/navigation";

const WHO_CARE_FOR_OPTIONS = [
  { value: "myself", label: "Myself" },
  { value: "parent", label: "A Parent" },
  { value: "spouse", label: "A Spouse" },
  { value: "loved-one", label: "Another Loved One" },
];

const TYPE_OF_CARE_OPTIONS = [
  { value: "personal-care", label: "Personal care" },
  { value: "companionship", label: "Companionship" },
  { value: "mobility-support", label: "Mobility Support" },
  { value: "housework-support", label: "Housework Support" },
  { value: "recovery-care", label: "Recovery Care" },
  { value: "unsure", label: "Unsure (Help me decide)" },
];

const REACH_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
];

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [whoCareFor, setWhoCareFor] = useState<string[]>([]);
  const [typeOfCare, setTypeOfCare] = useState<string[]>([]);
  const [tellUsMore, setTellUsMore] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const router = useRouter();

  const resetForm = useCallback(() => {
    setFullName("");
    setPhone("");
    setEmail("");
    setWhoCareFor([]);
    setTypeOfCare([]);
    setTellUsMore("");
    setPreferredContact("");
    setMarketingConsent(false);
  }, []);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("whoCareFor", whoCareFor.join(", "));
    formData.append("typeOfCare", typeOfCare.join(", "));
    formData.append("tellUsMore", tellUsMore);
    formData.append("preferredContact", preferredContact);
    formData.append("marketingConsent", marketingConsent ? "Yes" : "No");

    try {
      const res = await fetch("https://formspree.io/f/xykddggy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        router.push("/success/contact");
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
    <main className="min-h-screen bg-white scroll-mt-20 relative">
      <section className="max-w-7xl mx-auto px-6 md:px-10  xl:px-0 py-8 lg:py-12">
        <div className=" lg:flex gap-10 lg:gap-12 items-start ">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl drop-shadow-[#D8E0E9] shadow-md border border-gray-100 p-3 sm:p-6 lg:p-8 scrollbar-hide overflow-y-auto w-full lg:w-[60%]">
            <h2 className="text-(--secondary) font-bold text-sm sm:text-base lg:text-lg  mb-2">
              Get In Touch
            </h2>
            <h3 className="text-(--dark-blue) font-bold text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:mb-4 mb-1">
              Let&apos;s Start with a Conversation
            </h3>
            <p className="text-[#64748B] text-xs sm:text-sm md:text-base sm:mb-8 mb-4  font-medium text-justify md:text-left">
              Tell us a little about your situation, and a care specialist will
              reach out to listen, answer your questions, and guide you through
              next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* Who is the care for? - Multi-select */}
              <MultiSelect
                label="Who is the care for?"
                placeholder="Select all that apply"
                options={WHO_CARE_FOR_OPTIONS}
                value={whoCareFor}
                onChange={setWhoCareFor}
              />

              {/* Type of care needed - Multi-select */}
              <MultiSelect
                label="Type of care needed"
                placeholder="Select all that apply"
                options={TYPE_OF_CARE_OPTIONS}
                value={typeOfCare}
                onChange={setTypeOfCare}
              />

              <Textarea
                id="tellUsMore"
                label="Tell us more (optional)"
                value={tellUsMore}
                onChange={setTellUsMore}
                placeholder="Share anything you feel is important, we're here to listen."
                rows={4}
              />

              {/* How would you like us to reach you? - Single select */}
              <Select
                label="How would you like us to reach you?"
                placeholder="Please select"
                options={REACH_OPTIONS}
                value={preferredContact}
                onChange={setPreferredContact}
                required
              />

              {/* Marketing consent checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="marketingConsent"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-400 text-(--primary) focus:ring-(--primary)"
                />
                <label
                  htmlFor="marketingConsent"
                  className="text-[#1b2a4e] text-xs sm:text-sm lg:leading-relaxed cursor-pointer text-justify"
                >
                  By checking this box, you are authorizing Elite Homecare
                  Caregiving to send you marketing emails.
                </label>
              </div>

              {/* Submit button */}
              <Button text="Request Free Consultation" loading={isSubmitting} />
            </form>
          </div>

          {/* Right: Contact info & image */}
          <div className="hidden lg:block  w-[40%] sticky top-20">
            <div className="relative overflow-hidden bg-[#e8f4fc]  rounded-4xl w-full h-[63vh]">
              <Image
                src={RemoveTheStars}
                alt="Remove the stars"
                fill
                className="object-cover object-top"
                placeholder="blur"
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <IoLocationOutline
                  className="shrink-0 text-(--primary) mt-0.5"
                  size={22}
                />
                <span className="text-[#1b2a4e] font-medium text-sm lg:text-base">
                  600 Megglen Avenue. Akron Ohio 44303
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IoCallOutline
                  className="shrink-0 text-(--primary)"
                  size={22}
                />
                <a
                  href="tel:+12343270909"
                  className="text-[#1b2a4e] font-medium text-sm lg:text-base hover:text-(--primary) transition-colors"
                >
                  +1 (234) 327-0909
                </a>
              </div>
              <div className="flex items-center gap-3">
                <IoMailOutline
                  className="shrink-0 text-(--primary)"
                  size={22}
                />
                <a
                  href="mailto:myelitehomecare@gmail.com"
                  className="text-[#1b2a4e] font-medium text-sm lg:text-base hover:text-(--primary) transition-colors"
                >
                  myelitehomecare@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
};

export default ContactUs;
