"use client";

import { useState, useMemo } from "react";
import { Guest } from "./guests";
import MultiSelect, { Option } from "./multiSelectDropdown"; // <-- Import MultiSelect from its new file

export type SearchConfig = {
  show?: boolean;
  keyword?: { enabled?: boolean; placeholder?: string };
  country?: { enabled?: boolean; options?: Option[] };
  city?:    { enabled?: boolean; options?: Option[] };
  sector?:  { enabled?: boolean; options?: Option[] };
  onChange?: (filters: {
    keyword?: string;
    country?: string[];
    city?: string[];
    sector?: string[];
  }) => void;
};

export default function KeywordFilters({
  config,
  guests,
}: { config?: SearchConfig; guests: Guest[] }) {
  const enabled = config?.show ?? false;
  const [filters, setFilters] = useState({
    keyword: "",
    country: [],
    city: [],
    sector: [],
  });

  const set = (k: keyof typeof filters, v: string | string[]) => {
    const next = { ...filters, [k]: v };
    setFilters(next);
    config?.onChange?.(next);
  };

  const options = useMemo(() => {
    const countries = new Set<string>();
    const cities = new Set<string>();
    const sectors = new Set<string>();
    
    guests.forEach((g) => {
      const add = (set: Set<string>, value: string | string[]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => set.add(v));
        } else {
          set.add(value);
        }
      };

      add(countries, g.country);
      add(cities, g.city);
      add(sectors, g.sector);
    });

    const toOption = (value: string) => ({ label: value, value });
    
    return {
      countries: Array.from(countries).sort().map(toOption),
      cities: Array.from(cities).sort().map(toOption),
      sectors: Array.from(sectors).sort().map(toOption),
    };
  }, [guests]);


  const showAnything = useMemo(
    () =>
      enabled &&
      (config?.keyword?.enabled ||
        config?.country?.enabled ||
        config?.city?.enabled ||
        config?.sector?.enabled),
    [enabled, config]
  );

  if (!showAnything) return null;

  return (
    <div
      className="rounded-3xl px-4 py-6 sm:px-6 md:px-0 max-w-[1400px] mx-auto"
    >
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Keyword Search</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {config?.keyword?.enabled && (
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">
              Search by Keyword
            </label>
            <div className="relative">
              <input
                type="text"
                value={filters.keyword}
                onChange={(e) => set("keyword", e.target.value)}
                placeholder={config.keyword.placeholder ?? "Search"}
                className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 pr-10 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-[#3B5BFF]"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7"/>
                  <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
        )}

        {config?.country?.enabled && (
          <MultiSelect
            label="Country"
            value={filters.country}
            options={options.countries}
            onChange={(v: any) => set("country", v)}
          />
        )}

        {config?.city?.enabled && (
          <MultiSelect
            label="City"
            value={filters.city}
            options={options.cities}
            onChange={(v: any) => set("city", v)}
          />
        )}

        {config?.sector?.enabled && (
          <MultiSelect
            label="Sector"
            value={filters.sector}
            options={options.sectors}
            onChange={(v: any) => set("sector", v)}
          />
        )}
      </div>
    </div>
  );
}