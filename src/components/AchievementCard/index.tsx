import Image from "next/image";
import Link from "next/link";

export type AchievementItem = {
  id: string;
  tag?: string;        // e.g., "STORY 1"
  title: string;       // e.g., "TechnoFuture MMC"
  excerpt: string;     // short description
  image: string;       // /public path
  href: string;        // detail page
};

export default function AchievementCard({ item }: { item: AchievementItem }) {
  return (
    <article className="group relative h-full w-[260px] sm:w-[280px] md:w-[300px] snap-start shrink-0 overflow-hidden rounded-2xl bg-slate-900 shadow-[0_12px_32px_rgba(3,18,47,0.20)]">
      {/* background image */}
      <div className="relative h-[470px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width:1024px) 300px, 40vw"
          priority={false}
        />
      </div>

      {/* top-right arrow button */}
      <Link
        href={item.href}
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-800 shadow-md transition group-hover:translate-y-[1px]"
        aria-label={`${item.title} details`}
      >
        <Arrow className="h-4 w-4" />
      </Link>

      {/* bottom gradient + text */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        {item.tag && (
          <span className="mb-2 inline-block rounded-md bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
            {item.tag}
          </span>
        )}
        <h3 className="text-[22px] font-extrabold leading-tight text-white drop-shadow">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-white">
          {item.excerpt}
        </p>
      </div>
    </article>
  );
}

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
