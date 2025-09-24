"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Rocket } from "lucide-react";
import type { BrandItem, BrandFAQ } from "./brandsData";
import SocialLinksSection from "./SocialLinksSection";

function FAQAccordion({ items }: { items: BrandFAQ[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((it, idx) => (
        <details
          key={idx}
          className="group divide-y divide-slate-200 first:rounded-t-2xl last:rounded-b-2xl [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-slate-50 transition">
            <span className="text-slate-900 font-medium">{it.question}</span>
            <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-slate-300 text-slate-600">
              <Plus className="h-4 w-4 group-open:hidden" />
              <Minus className="h-4 w-4 hidden group-open:block" />
            </span>
          </summary>
          <div className="px-5 pb-5 text-slate-600 leading-7">{it.answer}</div>
        </details>
      ))}
    </div>
  );
}

export default function BrandDetailSections({ brand }: { brand: BrandItem }) {
  const d = brand.detail;

  return (
    <>
    <div className="mx-auto max-w-[1400px] mt-10">
      {/* ===== Top: Intro (left) + Policies FAQ (right) ===== */}
      <section className="grid gap-10 md:grid-cols-2 items-end">
        {/* Left: Title + copy + CTA */}
        <div className="space-y-5">
          <h1 className="text-[34px] md:text-[38px] font-semibold leading-tight text-slate-900">
            {/* thick blue underline like the design */}
            <span className=" decoration-4 underline-offset-[10px]">
              {d?.intro?.heading ?? brand.name}
            </span>
          </h1>

          <p className="text-slate-700 leading-7 max-w-[48ch]">
            {d?.intro?.description ?? brand.description ?? ""}
          </p>

          {d?.intro?.cta && (
            <Link
              href={d.intro.cta.href}
              className="inline-flex items-center rounded-full bg-[rgba(55,99,235,1)] px-5 py-2.5 text-white font-medium shadow-sm hover:opacity-90"
            >
              {d.intro.cta.label}
            </Link>
          )}
        </div>

        {/* Right: Policies FAQ (no heading in the mock, just the list) */}
        <div className="space-y-3">
          {d?.policiesFaq && d.policiesFaq.length > 0 && (
            <FAQAccordion items={d.policiesFaq} />
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="my-10 border-t border-slate-200" />

      {/* ===== Bottom: Image (left) + Mission card (right) ===== */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Left image with large radius */}
        <div className="rounded-[22px] overflow-hidden bg-slate-100">
          <div className="relative aspect-[16/10]">
            <Image
              src={d?.mission?.image ?? "/images/brands/placeholder-hero.jpg"}
              alt={brand.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right mission card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-sm">
          <div className="flex items-start justify-between">
            {/* small tag top-left */}
            {d?.mission?.tag && (
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700 border border-slate-200">
                {d.mission.tag}
              </span>
            )}
            {/* icon pill top-right */}
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(55,99,235,0.12)] text-[rgba(55,99,235,1)]">
              <Rocket className="h-4 w-4" />
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            {d?.mission?.title ?? "Mission"}
          </h2>

          <p className="mt-2 text-slate-700 leading-7">
            {d?.mission?.description ??
              "We support members with connections, development, and innovation."}
          </p>

          {d?.mission?.bullets && d.mission.bullets.length > 0 && (
            <ul className="mt-5 space-y-2 text-slate-700 leading-7">
              {d.mission.bullets.map((b, i) => (
                <li key={i}>
                  <span className="font-semibold">{b.label} — </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          )}

          {d?.mission?.cta && (
            <Link
              href={d.mission.cta.href}
              className="mt-6 inline-flex items-center rounded-full bg-[rgba(55,99,235,1)] px-5 py-2.5 text-white font-medium shadow-sm hover:opacity-90"
            >
              {d.mission.cta.label}
            </Link>
          )}
        </div>
      </section>


      <SocialLinksSection />

      </div>
    </>
  );
}
