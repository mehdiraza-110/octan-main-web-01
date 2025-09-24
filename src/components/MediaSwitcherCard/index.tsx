// components/cards/MediaSwitcherCard.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Item = {
  label: string;
  poster: { src: string; alt?: string }; // always show image first
  videoSrc?: string;                      // optional; if given, clicking image plays video
  href?: string;
};

type Props = {
  items: Item[];
  initialIndex?: number;
  donate?: { text: string; href: string };
  className?: string;
};

export default function MediaSwitcherCard({
  items,
  initialIndex = 0,
  donate,
  className = "",
}: Props) {
  const [active, setActive] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const current = items[active];

  // Stop video when switching item
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [active]);

  // Auto play when toggled
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {/* ignore autoplay block */});
    }
  }, [isPlaying]);

  const handleMediaClick = () => {
    if (!current.videoSrc) return; // nothing to play
    setIsPlaying(true);
  };

  return (
    <section className={`grid w-full grid-cols-1 items-start gap-6 sm:gap-10 md:grid-cols-2 ${className}`}>
      {/* LEFT: Poster always; swaps to video after click */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_15px_40px_rgba(3,18,47,0.10)]">
        <div className="relative aspect-[16/9] w-full">
          {!isPlaying ? (
            <button
              type="button"
              onClick={handleMediaClick}
              className="group absolute inset-0"
              aria-label={current.videoSrc ? "Play video" : "Image"}
            >
              <Image
                src={current.poster.src}
                alt={current.poster.alt ?? current.label}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 640px, 100vw"
                priority
              />
              {/* Play overlay (only if video exists) */}
              {current.videoSrc && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/85 shadow transition group-hover:scale-105">
                    <span className="ml-1 inline-block border-l-[18px] border-t-[12px] border-b-[12px] border-l-blue-600 border-t-transparent border-b-transparent" />
                  </span>
                </span>
              )}
            </button>
          ) : (
            <video
              ref={videoRef}
              key={current.videoSrc}
              className="h-full w-full object-cover"
              controls
              autoPlay
              playsInline
              onEnded={() => setIsPlaying(false)} // return to poster when video ends
              poster={current.poster.src}
            >
              <source src={current.videoSrc} />
            </video>
          )}
        </div>
      </div>

      {/* RIGHT: selectable options + donate */}
      <div className="w-full">
        <ul className="divide-y divide-slate-200 rounded-2xl">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`cursor-pointer group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                    isActive ? "bg-[#3763EB] text-white" : "bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className={`grid h-8 w-8 place-items-center rounded-full transition ${isActive ? "bg-white text-[#3763EB]" : "bg-slate-100 text-slate-700"}`}>
                    <Arrow className="h-4 w-4" />
                  </span>
                </button>
              </li>
            );

          })}
        </ul>

        {donate && (
          <div className="mt-4">
            <Link
              href={donate.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[#3B5BFF] px-4 py-2 text-sm font-semibold text-white shadow transition hover:translate-y-px hover:bg-indigo-600"
            >
              {donate.text}
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                <Arrow className="h-4 w-4" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
