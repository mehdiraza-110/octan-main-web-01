"use client";

import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  active?: boolean;          // selected state
  onClick?: () => void;      // to toggle/select from parent
  className?: string;
};

export default function FeatureCard({
  title,
  subtitle,
  icon,
  active = false,
  onClick,
  className = "",
}: FeatureCardProps) {
  const base =
    "group relative flex flex-col justify-between h-[390px] w-full rounded-2xl pt-10 p-3 text-left shadow-sm ring-1 transition duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";

  const outer = active
    ? "bg-indigo-600 ring-indigo-500 hover:bg-indigo-700"
    : "bg-white ring-black/10 hover:bg-indigo-50 hover:ring-indigo-300 active:bg-indigo-100 active:ring-indigo-400";

  const badge =
    "grid h-10 w-10 place-items-center rounded-full transition";
  const badgeColors = active
    ? "bg-white text-indigo-600 group-hover:bg-white/90"
    : "bg-indigo-600 text-white group-hover:bg-indigo-700";

  const inset =
    "mt-4 rounded-xl p-5 transition h-[210px]";
  const insetColors = active
    ? "bg-white ring-white/30"
    : "bg-[#F6F5F2]  group-hover:none";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[base, outer, className].join(" ")}
    >
      {/* Icon bubble */}
      <div className={[badge, badgeColors].join(" ")}>{icon}</div>

      {/* Inset panel */}
      <div className={[inset, insetColors].join(" ")}>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}
