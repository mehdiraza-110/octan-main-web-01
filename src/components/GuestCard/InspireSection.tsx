"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import GuestCard from "@/components/GuestCard";
import type { Guest } from "@/components/GuestCard/guests";
import KeywordFilters, { SearchConfig } from "@/components/GuestCard/KeywordFilters";

export default function InspireSection({
  guests,
  headerTag,
  title,
  subtitle,
  ctaHref,
  ctaText = "View all",
  initialActive = 1,
  limit = 4,
  offset = 0,
  className = "",
  gradientBg = true,
  search,     
}: {
  guests: Guest[];
  headerTag?: string | null;
  title?: string | null;
  subtitle?: string | null;
  ctaHref?: string | null;
  ctaText?: string;
  initialActive?: number;
  limit?: number;
  offset?: number;
  className?: string;
  gradientBg?: boolean;
    search?: SearchConfig;
}) {
  const [filteredGuests, setFilteredGuests] = useState(guests);
  const visible = filteredGuests.slice(offset, offset + limit);
  const [active, setActive] = useState(
    Math.min(initialActive ?? 0, Math.max(0, visible.length - 1))
  );

  const showHeader = Boolean(headerTag || title || subtitle);
  const showCTA = Boolean(ctaHref);

  const handleFilterChange = (filters: {
    keyword?: string;
    country?: string[];
    city?: string[];
    sector?: string[];
  }) => {
    const nextFiltered = guests.filter((guest) => {
      // Filter by keyword
      const keywordMatch = !filters.keyword || 
        guest.name.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        guest.role.toLowerCase().includes(filters.keyword.toLowerCase());

      // Filter by country
      const countryMatch = !filters.country?.length ||
        (Array.isArray(guest.country)
          ? guest.country.some((c) => filters.country!.includes(c))
          : filters.country.includes(guest.country));

      // Filter by city
      const cityMatch = !filters.city?.length ||
        (Array.isArray(guest.city)
          ? guest.city.some((c) => filters.city!.includes(c))
          : filters.city.includes(guest.city));

      // Filter by sector
      const sectorMatch = !filters.sector?.length ||
        (Array.isArray(guest.sector)
          ? guest.sector.some((s) => filters.sector!.includes(s))
          : filters.sector.includes(guest.sector));

      return keywordMatch && countryMatch && cityMatch && sectorMatch;
    });
    setFilteredGuests(nextFiltered);
  };

  return (
    <section
      className={[
        "rounded-[32px] px-4 py-10 sm:px-6 md:px-10",
        className,
      ].join(" ")}
      style={
        gradientBg
          ? { background: "linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%)" }
          : undefined
      }
    >
      {/* Header (only if any piece exists) */}
      {showHeader && (
        <div className="mx-auto max-w-[1400px] text-center">
          {headerTag && (
            <span className="inline-block rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 shadow">
              {headerTag}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {search?.show && (
        <div className={showHeader ? "mt-6" : "mt-2"}>
          <KeywordFilters config={{ ...search, onChange: handleFilterChange }} guests={guests} />
        </div>
      )}
      
      {/* Cards */}
      <div
        className={[
          "mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
          showHeader ? "mt-8" : "mt-2",
        ].join(" ")}
      >
        {visible.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(i)}
            className="rounded-3xl text-left focus:outline-none focus:ring-2 focus:ring-[#3B5BFF]"
            aria-pressed={active === i}
          >
            <GuestCard guest={g} active={active === i} />
          </button>
        ))}
      </div>

      {/* CTA (only if ctaHref provided) */}
      {showCTA && (
        <div className="mt-8 flex items-center justify-center">
          <Link
            href={ctaHref!}
            className="group inline-flex items-center gap-2 rounded-full bg-[#3B5BFF] px-5 py-2 text-sm font-semibold text-white shadow transition hover:translate-y-[1px]"
          >
            {ctaText}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:bg-white/30">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M5 12h14m-6-7 7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}