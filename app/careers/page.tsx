"use client";

import { useState, useCallback } from "react";
import type { SubmitEvent } from "react";
import Image from "next/image";
import caregiverBeforeJob from "@/public/images/woman.png";
import { CVUpload } from "@/app/components/atoms/CVUpload";
import { Input } from "@/app/components/atoms/Input";
import { Textarea } from "@/app/components/atoms/Textarea";
import { Select } from "@/app/components/atoms/Select";
import { Toast } from "@/app/components/atoms/Toast";
import { Button } from "../components/atoms/CustomButton";

const POSITION_OPTIONS = [
  { value: "pca-caregiver", label: "PCA / Caregiver" },
  { value: "home-health-aide", label: "Home Health Aide" },
  { value: "lpn", label: "(Licensed Practical Nurse" },
  { value: "pca-trainer-rn", label: "PCA Trainer (RN)" },
  { value: "field-rn", label: "Field RN" },
  { value: "administration", label: "Administration" },
];

const AVAILABILITY_OPTIONS = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part Time" },
  { value: "prn", label: "PRN (As Needed)" },
];

const CAREGIVING_EXPERIENCE_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export default function CareersPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [availability, setAvailability] = useState("");
  const [caregivingExperience, setCaregivingExperience] = useState("");
  const [experienceNote, setExperienceNote] = useState("");
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

  const resetForm = useCallback(() => {
    setUploadedFile(null);
    setUploadedFileUrl(null);
    setUploadProgress(0);
    setFullName("");
    setPhone("");
    setEmail("");
    setPosition("");
    setAvailability("");
    setCaregivingExperience("");
    setExperienceNote("");
  }, []);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("position", position);
    formData.append("availability", availability);
    formData.append("caregivingExperience", caregivingExperience);
    formData.append("experienceNote", experienceNote);
    if (uploadedFileUrl) formData.append("attachment", uploadedFileUrl);

    try {
      const res = await fetch("https://formspree.io/f/mykddlzw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        showToast(
          "Thank you! Your application has been submitted. We will be in touch soon.",
          "success",
        );
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
      <section className="md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-3 py-8 sm:py-0 sm:px-6">
          <div className="bg-white">
            <div className="md:flex gap-5 lg:gap-10 items-start ">
              {/* Left: Image and description */}
              <div className="hidden lg:block lg:w-[40%] md:h-[65vh] flex flex-col lg:gap-y-10">
                <div className="relative overflow-hidden bg-[#e8f4fc]  rounded-4xl md:h-[90%] lg:full">
                  <Image
                    src={caregiverBeforeJob}
                    alt="caregiver job"
                    // fill
                    className=" object-cover object-top"
                    placeholder="blur"
                  />
                </div>
                <p className="text-[#64748B] md:text-sm lg:text-base leading-relaxed font-medium mt-5">
                  If you&apos;re compassionate, dependable, and passionate about
                  caring for others, we&apos;d love to hear from you. Apply and
                  take the first step toward meaningful work.
                </p>
              </div>

              {/* Right: Application form */}
              <div className="lg:w-[60%] bg-white rounded-2xl drop-shadow-[#D8E0E9] shadow-md border border-gray-100 p-6 sm:p-6 lg:p-8 lg:h-[75vh] scrollbar-hide overflow-y-auto w-full">
                <p className="text-(--secondary) font-bold text-sm sm:text-base lg:text-lg  mb-2">
                  Join Our Care Team
                </p>
                <h2 className="text-(--dark-blue) font-bold text-xl sm:text-2xl lg:text-3xl mb-6">
                  Let&apos;s Begin with The Basics
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <CVUpload
                    file={uploadedFile}
                    fileUrl={uploadedFileUrl}
                    uploadProgress={uploadProgress}
                    isUploading={isUploading}
                    onFileChange={(f, url) => {
                      setUploadedFile(f);
                      setUploadedFileUrl(url);
                    }}
                    onUploadProgress={setUploadProgress}
                    onUploading={setIsUploading}
                    onError={(msg) => showToast(msg, "error")}
                    onSuccess={(msg) => showToast(msg, "success")}
                    required
                  />

                  <Input
                    id="fullName"
                    label="Full Name"
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

                  <Select
                    label="Position Applying For"
                    placeholder="Please select"
                    options={POSITION_OPTIONS}
                    value={position}
                    onChange={setPosition}
                    required
                  />
                  <Select
                    label="Availability"
                    placeholder="Please select"
                    options={AVAILABILITY_OPTIONS}
                    value={availability}
                    onChange={setAvailability}
                    required
                  />
                  <Select
                    label="Do you have caregiving experience?"
                    placeholder="Please select"
                    options={CAREGIVING_EXPERIENCE_OPTIONS}
                    value={caregivingExperience}
                    onChange={setCaregivingExperience}
                    required
                  />

                  <Textarea
                    id="experienceNote"
                    label="Tell us about your experience or interest in caregiving"
                    value={experienceNote}
                    onChange={setExperienceNote}
                    placeholder="Briefly share about your caregiving experience, background and interest."
                    rows={4}
                  />

                  <p className="text-[#64748B] text-xs">
                    By submitting, you agree to our recruitment privacy policy.
                  </p>

                  <Button text="Submit Application" loading={isSubmitting} />
                </form>
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
}
