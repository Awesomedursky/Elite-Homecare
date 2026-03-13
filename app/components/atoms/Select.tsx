"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

export const Select = ({
  label,
  placeholder = "Please select",
  options,
  value,
  onChange,
  required = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? "";

  return (
    <div ref={containerRef} className="relative w-full">
      {required && (
        <input
          tabIndex={-1}
          autoComplete="off"
          className="absolute inset-0 w-full h-full opacity-0 -z-10"
          value={value}
          onChange={() => {}}
          onFocus={() => setIsOpen(true)}
          required={required}
        />
      )}
      <label className="block text-[#1b2a4e] font-medium text-sm sm:mb-2 mb-1">
        {label}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="sm:min-h-12 min-h-10 px-4 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer flex items-center justify-between focus-within:ring-2 focus-within:ring-(--primary)/30 focus-within:border-(--primary)"
      >
        <span
          className={`text-sm ${value ? "text-[#1b2a4e]" : "text-gray-500"}`}
        >
          {selectedLabel || placeholder}
        </span>
        <IoChevronDown
          className={`shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 max-h-56 overflow-y-auto overflow-x-hidden">
          {options.map((opt) => {
            const isSelected = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 flex items-center text-left transition-colors hover:bg-gray-50 ${
                  isSelected ? "bg-gray-50 font-medium" : ""
                }`}
              >
                <span className="text-[#1b2a4e] text-sm">{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
