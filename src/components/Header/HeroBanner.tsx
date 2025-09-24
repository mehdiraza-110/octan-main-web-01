// components/hero/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

type Props = {
  titleLines: string[];           // split heading lines as in the design
  cta?: { label: string; href: string };
  imageSrc: string;               // hero background image
};

// components/icons.tsx
export const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroBanner({ titleLines, cta, imageSrc }: Props) {
  return (
    <section className="relative h-[657px] mx-auto max-w-full overflow-hidden rounded-[24px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        {/* Left dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
      </div>

      {/* Header layered on top */}
      <Header />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 pt-10 sm:px-6 md:pt-30">
        <h1 className="max-w-[720px] text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow md:text-5xl">
          {titleLines.map((l, i) => (
            <span key={i} className="block">{l}</span>
          ))}
        </h1>

        {cta && (
          <div className="mt-6">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[#3763EB] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-600"
            >
              {cta.label}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Spacer to keep rounded bottom visible (matches screenshot) */}
      <div className="pt-4" />
    </section>
  );
}
