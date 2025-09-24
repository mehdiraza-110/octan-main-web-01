// components/cards/CardHero.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

type CardHeroProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  highlight?: string;
  ctaText: string;
  ctaHref: string;
  openInNewTab?: boolean;
  showBadge?: boolean; // toggle badge on/off
};

export default function CardHero({
  imageSrc,
  imageAlt = "",
  title,
  highlight,
  ctaText,
  ctaHref,
  openInNewTab,
  showBadge = true,
}: CardHeroProps) {
  // Split title to inject highlight (optional)
  const parts = highlight && title.includes(highlight)
    ? title.split(new RegExp(`(${highlight})`, "i"))
    : [title];

  return (
    <article className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-[0_15px_40px_rgba(3,18,47,0.18)]">
      {/* Background image */}
      <div className="relative h-[280px] w-full sm:h-[360px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 640px) 960px, 100vw"
        />
      </div>

      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-black/70 via-black/30 to-black/5" />

      {/* badge (top-left) */}
      {showBadge && (
        <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur">
          {/* Inline Chart Badge Icon */}
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 14v4M12 10v8M18 6v12"
              stroke="#0f172a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* content */}
      <div className="absolute inset-0 flex items-end p-5 sm:p-8">
        <div className="flex w-full items-end justify-between gap-4">
          {/* Title */}
          <h2 className="max-w-[600px] text-[33px] font-extrabold leading-snug text-white sm:text-[28px]">
            {parts.map((p, idx) =>
              highlight && p.toLowerCase() === highlight.toLowerCase() ? (
                <span key={idx} className="text-[#ffb156]">{p}</span>
              ) : (
                <span key={idx}>{p}</span>
              )
            )}
          </h2>

          {/* CTA */}
          <Link
            href={ctaHref}
            // target={openInNewTab ? "_blank" : undefined}
            // rel={openInNewTab ? "noreferrer noopener" : undefined}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3763EB] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:translate-y-px hover:bg-indigo-700"
          >
            {ctaText}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition group-hover:bg-white/30">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
