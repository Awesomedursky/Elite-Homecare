"use client";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

export const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}: InputProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-[#1b2a4e] font-medium text-sm sm:mb-2 mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full text-sm md:text-base px-4 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg text-[#1b2a4e] placeholder:text-gray-500 focus:ring-2 focus:ring-(--primary)/30 focus:border-(--primary) outline-none transition-colors"
    />
  </div>
);
