import Image from "next/image";
import Link from "next/link";

export type Guest = {
  id: string;
  name: string;
  role: string;
  avatar: string;     // /public path
  href: string;       // profile/details
  featured?: boolean; // crown badge
};

export default function GuestCard({
  guest,
  active = false,
  className = "",
}: {
  guest: Guest;
  active?: boolean;
  className?: string;
}) {
  return (
    <article
      className={[
        "group relative h-[315px] flex flex-col justify-between w-full overflow-hidden rounded-3xl shadow-[0_12px_32px_rgba(3,18,47,0.12)] transition",
        active
          ? "bg-[#3B5BFF] text-white"
          : "bg-gradient-to-b from-[#F2F2F2] to-white text-slate-900 hover:shadow-lg",
        className,
      ].join(" ")}
    >
      {/* crown badge */}
      {guest.featured && (
        <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-amber-500 shadow">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M5 17h14l-1 3H6l-1-3Zm0-9 4 3 3-5 3 5 4-3v7H5V8Z" />
          </svg>
        </span>
      )}

      {/* avatar */}
      <div className="flex flex-col items-center px-6 pt-8">
        <div className={`grid h-28 w-28 place-items-center rounded-full ${active ? "bg-white/15" : "bg-white"} shadow`}>
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/5">
            <Image src={guest.avatar} alt={guest.name} fill className="object-cover" sizes="96px" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={["mt-6 flex items-center justify-between rounded-b-3xl px-5 py-4", active ? "bg-[#2E51E6] border-t-[0.8px] border-white/60" : "bg-white/70  border-t-[0.8px] border-black/10"].join(" ")}>
        <div>
          <h3 className="text-[15px] font-semibold leading-tight">{guest.name}</h3>
          <p className={["text-[11px] uppercase tracking-wide", active ? "text-white/80" : "text-slate-500"].join(" ")}>{guest.role}</p>
        </div>

        <Link
          href={guest.href}
          className={[
            "grid h-10 w-10 place-items-center rounded-full transition",
            active ? "bg-white text-[#2E51E6]" : "bg-slate-100 text-slate-800 group-hover:bg-[#3B5BFF] group-hover:text-white",
          ].join(" ")}
          aria-label={`${guest.name} details`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* hover ring (inactive only) */}
      {!active && <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 transition group-hover:ring-2 group-hover:ring-[#3B5BFF]/50" />}
    </article>
  );
}
