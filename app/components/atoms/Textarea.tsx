"use client";

type TextareaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
};

export const Textarea = ({
  id,
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  required = false,
}: TextareaProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-[#1b2a4e] font-medium text-sm sm:mb-2 mb-1"
    >
      {label}
    </label>
    <textarea
      id={id}
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 sm:px-4 py-2 text-sm md:text-base sm:py-3 bg-gray-100 border border-gray-200 rounded-lg text-[#1b2a4e] placeholder:text-gray-500 focus:ring-2 focus:ring-(--primary)/30 focus:border-(--primary) outline-none transition-colors resize-none"
    />
  </div>
);
