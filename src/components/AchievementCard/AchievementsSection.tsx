"use client";

import { useRef } from "react";
import Link from "next/link";
import AchievementCard, { AchievementItem } from "./";

type Props = {
  headerTag?: string;   // e.g., "SUCCESS STORIES"
  title: string;        // e.g., "Achievements That Inspire"
  items: AchievementItem[];
  className?: string;
};

export default function AchievementsSection({
  headerTag = "SUCCESS STORIES",
  title,
  items,
  className = "",
}: Props) {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "prev" | "next") => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.clientWidth + 20 : el.clientWidth * 0.9; // ~one card
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className={`px-4 py-10 sm:px-6 md:px-10 ${className}`}>
      {/* header */}
      <div className="mx-auto max-w-[1400px] text-center">
        <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
          {headerTag}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          {title}
        </h2>
      </div>

      {/* slider rail */}
      <div className="mx-auto mt-8 max-w-[1400px] bg-white">
        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it) => (
            <div key={it.id} data-card>
              <AchievementCard item={it} />
            </div>
          ))}
        </div>

        {/* nav buttons centered below */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => scrollBy("prev")}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full bg-slate-200 text-slate-800 transition hover:translate-y-[1px]"
          >
            <Arrow className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={() => scrollBy("next")}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#3B5BFF] text-white shadow transition hover:translate-y-[1px]"
          >
            <Arrow className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
