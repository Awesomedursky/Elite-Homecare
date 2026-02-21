"use client";

import { useEffect } from "react";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
};

export const Toast = ({
  message,
  type,
  onClose,
  duration = 4000,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isSuccess = type === "success";
  const Icon = isSuccess ? IoCheckmarkCircle : IoCloseCircle;

  return (
    <div
      role="alert"
      className={`fixed top-30 right-6 z-1000 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
        isSuccess ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      <Icon className="shrink-0" size={24} />
      <p className="font-medium">{message}</p>
    </div>
  );
};
