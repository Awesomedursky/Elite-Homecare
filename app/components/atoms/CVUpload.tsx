"use client";

import { useRef } from "react";
import { FaMinus } from "react-icons/fa6";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = [".pdf", ".docx"];

type CVUploadProps = {
  file: File | null;
  fileUrl: string | null;
  uploadProgress: number;
  isUploading: boolean;
  onFileChange: (file: File | null, url: string | null) => void;
  onUploadProgress: (progress: number) => void;
  onUploading: (uploading: boolean) => void;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
  label?: string;
  required?: boolean;
};

export const CVUpload = ({
  file,
  fileUrl,
  uploadProgress,
  isUploading,
  onFileChange,
  onUploadProgress,
  onUploading,
  onError,
  onSuccess,
  label = "Upload your Resume *",
  required = false,
}: CVUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (f: File): string => {
    const ext = "." + f.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_TYPES.includes(ext)) {
      return "Only PDF and DOCX files are allowed.";
    }
    if (f.size > MAX_FILE_SIZE) {
      return "File size must be 2MB or less.";
    }
    return "";
  };

  const uploadToCloudinary = (f: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", f);
      formData.append("upload_preset", "documents");

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          onUploadProgress(Math.round((e.loaded / e.total) * 100));
        }
      });

      xhr.addEventListener("load", () => {
        onUploading(false);
        onUploadProgress(0);
        if (xhr.status >= 200 && xhr.status < 300) {
          const res = JSON.parse(xhr.responseText);
          resolve(res.secure_url);
        } else {
          reject(new Error("Upload failed"));
        }
      });

      xhr.addEventListener("error", () => {
        onUploading(false);
        onUploadProgress(0);
        reject(new Error("Upload failed"));
      });

      onUploading(true);
      onUploadProgress(0);
      xhr.open("POST", "/api/upload");
      xhr.send(formData);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) {
      onFileChange(null, null);
      return;
    }
    const err = validateFile(f);
    if (err) {
      onError(err);
      e.target.value = "";
      return;
    }
    try {
      const url = await uploadToCloudinary(f);
      onFileChange(f, url);
      onSuccess("Document uploaded successfully");
    } catch {
      onFileChange(null, null);
      onError("Failed to upload document. Please try again.");
    }
    e.target.value = "";
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    const err = validateFile(f);
    if (err) {
      onError(err);
      return;
    }
    try {
      const url = await uploadToCloudinary(f);
      onFileChange(f, url);
      onSuccess("Document uploaded successfully");
    } catch {
      onFileChange(null, null);
      onError("Failed to upload document. Please try again.");
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const removeFile = () => {
    onFileChange(null, null);
    onUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const hasFile = !!file || !!fileUrl;

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        id="cv-upload"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        disabled={isUploading}
        className="hidden"
      />
      {hasFile ? (
        <div className="space-y-2">
          <div className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 bg-[#64748B]  rounded-lg">
            <span className="text-white text-sm truncate flex-1">
              {file?.name ?? "Document"}
            </span>
            {!isUploading && (
              <button
                type="button"
                onClick={removeFile}
                className="shrink-0 p-1.5 rounded-full bg-white text-[#64748B] transition-all hover:scale-105 duration-500 cursor-pointer"
                aria-label="Remove file"
              >
                <FaMinus size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-(--primary) h-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      ) : (
        <label
          htmlFor="cv-upload"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="flex items-center justify-between gap-4 w-full px-3 md:px-4 py-2 md:py-3   rounded-lg cursor-pointer bg-[#64748B] hover:bg-[#64748B]/90 duration-500 transition-colors min-h-12"
        >
          <span className="text-white text-sm flex items-center">{label}</span>
          <span className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
            <svg
              className="w-4 h-4 text-[#64748B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </label>
      )}
    </div>
  );
};
