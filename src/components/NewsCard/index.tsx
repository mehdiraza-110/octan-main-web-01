"use client";

import Image from "next/image";
import Link from "next/link";

export type NewsItem = {
  id: string;
  tag?: string;
  title: string;
  excerpt?: string;
  image: string;
  href: string;
};

type Props = {
  item: NewsItem;
  variant?: "large" | "small";
  className?: string;
  onSelect?: () => void;            // used by small card to promote to large
  onPrevClick?: () => void;         // large card nav
  onNextClick?: () => void;         // large card nav
};

export default function NewsCard({
  item,
  variant = "large",
  className = "",
  onSelect,
  onPrevClick,
  onNextClick,
}: Props) {
  if (variant === "small") {
    // === RIGHT COLUMN (vertical) ===
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect?.()}
        className={`rounded-[18px] bg-white p-3 shadow-[0_10px_28px_rgba(3,18,47,0.10)] outline-none ring-offset-2 hover:shadow-lg focus:ring-2 focus:ring-[#3B5BFF] ${className}`}
      >
        <div className="relative h-[151px] w-full overflow-hidden rounded-[14px]">
          <Image src={item.image} alt={item.title} fill className="object-cover" sizes="320px" />
          {/* corner fold (top-right) */}
          <span className="pointer-events-none absolute -right-6 -top-3 h-16 w-24 rotate-[-25deg] rounded-2xl bg-white/90" />
        </div>

        <div className="mt-3 flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              {item.tag || "PRESS"}
            </div>
            <h4 className="mt-1 line-clamp-2 text-[13px] font-medium text-slate-900">
              {item.title}
            </h4>
          </div>

          <Link
            href={item.href}
            onClick={(e) => e.stopPropagation()}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-800"
            aria-label="Open"
          >
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // === LEFT LARGE CARD (image left, content right, inline nav row) ===
  return (
    <article className={`${className}`}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {/* Image with white frame */}
        <div className="">
          <div className="rounded-[16px] bg-white p-2">
            <div className="relative h-[550px] w-full overflow-hidden rounded-[14px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 640px, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content with tilted cap + actions row */}
        <div className="relative flex flex-col items-end justify-between p-5">
          {/* tilted soft cap */}
          <div className="pointer-events-none absolute right-3 top-2 h-16 w-40 -rotate-6 rounded-2xl bg-slate-100" />

          <div className="relative rounded-2xl bg-slate-50">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              {item.tag || "LOREM IPSUM"}
            </div>

            <h3 className="text-[20px] font-extrabold leading-snug text-slate-900 md:text-[25px]">
              {item.title}
            </h3>

            {item.excerpt && (
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                {item.excerpt}
              </p>
            )}
          </div>

                      {/* Actions row: View details + Prev/Next (inline like mock) */}
            <div className="mt-5 flex items-center gap-3">
              <Link
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full bg-[#3B5BFF] px-3.5 py-2 text-xs font-semibold text-white shadow transition hover:translate-y-px hover:bg-indigo-600"
              >
                View details
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                  <Arrow className="h-4 w-4" />
                </span>
              </Link>

              <button
                type="button"
                onClick={onPrevClick}
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-700 cursor-pointer"
                aria-label="Previous"
              >
                <Arrow className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={onNextClick}
                className="grid h-10 w-10 place-items-center rounded-full bg-[#3B5BFF] text-white cursor-pointer"
                aria-label="Next"
              >
                <Arrow className="h-5 w-5" />
              </button>
            </div>
        </div>

        
      </div>
    </article>
  );
}

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14m-6-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
