"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import NewsCard, { NewsItem } from "./";

type Props = {
  items: NewsItem[];
  title?: string;
  subtitle?: string;
  headerTag?: string;
  sideCount?: number;
  initialIndex?: number;
};

export default function NewsChooseSection({
  items,
  title = "Latest News & Announcements",
  subtitle = "Stay updated on our latest initiatives, tenders, events and member milestones.",
  headerTag = "NEWS & ANNOUNCEMENTS",
  sideCount = 2,
  initialIndex = 0,
}: Props) {
  const [active, setActive] = useState(initialIndex);

  // active item first; side shows next N
  const ordered = useMemo(
    () => [...items.slice(active), ...items.slice(0, active)],
    [items, active]
  );
  const feature = ordered[0];
  const sideList = ordered.slice(1, sideCount + 1);

  const next = () => setActive((i) => (i + 1) % items.length);
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);

  return (
    <section className="rounded-[34px] bg-[#3B5BFF] px-4 py-10 text-white sm:px-6 md:px-10 md:py-14">
      {/* header */}
      <div className="mx-auto max-w-[1400px] p-5 text-center">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
          {headerTag}
        </span>
        <h2 className="mt-3 text-[34px] font-extrabold leading-tight md:text-[40px]">
          {title}
        </h2>
        <p className="mx-auto mt-2 max-w-[62ch] text-sm text-white/90">{subtitle}</p>
      </div>

      {/* main grid */}
      <div className="mx-auto max-w-[1400px] p-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="rounded-[22px] bg-white p-3 shadow-[0_16px_44px_rgba(3,18,47,0.14)] ">
            <NewsCard item={feature} variant="large" onPrevClick={prev} onNextClick={next} />
          </div>

          <div className="grid gap-5">
            {sideList.map((n, idx) => (
              <NewsCard
                key={n.id}
                item={n}
                variant="small"
                onSelect={() => setActive((active + (idx + 1)) % items.length)}
              />
            ))}
          </div>
        </div>

        {/* bottom CTA pill */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1d2b6f] shadow transition hover:translate-y-px"
          >
            View all News
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1d2b6f]/10 transition group-hover:bg-[#1d2b6f]/20">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1d2b6f]" fill="none">
                <path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
