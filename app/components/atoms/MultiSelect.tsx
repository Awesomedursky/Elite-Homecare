"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export type MultiSelectOption = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  label: string;
  placeholder?: string;
  options: MultiSelectOption[];
  value: string[];
  onChange: (selected: string[]) => void;
  required?: boolean;
};

export const MultiSelect = ({
  label,
  placeholder = "Select all that apply",
  options,
  value,
  onChange,
  required = false,
}: MultiSelectProps) => {
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

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const removeCapsule = (e: React.MouseEvent, optionValue: string) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== optionValue));
  };

  const getLabel = (val: string) =>
    options.find((o) => o.value === val)?.label ?? val;

  return (
    <div ref={containerRef} className="relative w-full">
      {required && (
        <input
          tabIndex={-1}
          autoComplete="off"
          className="absolute inset-0 w-full h-full opacity-0 -z-10"
          value={value.join(",")}
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
        className="sm:min-h-12 min-h-10 px-2 md:px-3 py-2 sm:py-2.5 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer flex items-center flex-wrap gap-1 sm:gap-2 focus-within:ring-2 focus-within:ring-(--primary)/30 focus-within:border-(--primary)"
      >
        <div className="flex flex-wrap gap-2 flex-1 min-w-0">
          {value.length > 0 ? (
            value.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2.5 py-1 bg-(--primary) text-white text-xs sm:text-sm font-medium rounded-full"
              >
                {getLabel(val)}
                <button
                  type="button"
                  onClick={(e) => removeCapsule(e, val)}
                  className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  aria-label={`Remove ${getLabel(val)}`}
                >
                  <RxCross2 size={14} />
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-sm">{placeholder}</span>
          )}
        </div>
        <IoChevronDown
          className={`shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 max-h-56 overflow-y-auto overflow-x-hidden">
          {options.map((opt) => {
            const isChecked = value.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleOption(opt.value)}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-left transition-all hover:translate-x-2 duration-500"
              >
                <span
                  className={`shrink-0 w-4 h-4 border-2 rounded flex items-center justify-center ${
                    isChecked
                      ? "bg-(--primary) border-(--primary)"
                      : "border-gray-400"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-[#1b2a4e] font-medium text-sm">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
