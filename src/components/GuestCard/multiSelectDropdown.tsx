"use client";

import { useState } from "react";

export type Option = { label: string; value: string };

export default function MultiSelect({
  label,
  value,
  onChange,
  options = [],
}: {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
  options: Option[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: optionValue, checked } = e.target;
    if (checked) {
      onChange([...value, optionValue]);
    } else {
      onChange(value.filter((item) => item !== optionValue));
    }
  };

  const selectedLabels = value.map((val) => options.find(o => o.value === val)?.label).filter(Boolean);
  const displayValue = selectedLabels.length > 0 ? selectedLabels.join(', ') : "Select...";

  return (
    <div className="relative">
      <label className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      <div
        className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 pr-10 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-[#3B5BFF] cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{displayValue}</span>
        <span className="text-slate-400">
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-60 overflow-y-auto">
          <div className="py-1">
            {options.map((o) => (
              <div key={o.value} className="flex items-center px-4 py-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  value={o.value}
                  checked={value.includes(o.value)}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#3B5BFF] rounded border-gray-300 focus:ring-0"
                  id={`checkbox-${o.value}`}
                />
                <label htmlFor={`checkbox-${o.value}`} className="ml-2 text-sm text-slate-700 cursor-pointer">
                  {o.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}