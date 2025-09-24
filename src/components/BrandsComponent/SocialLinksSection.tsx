
"use client";
import Link from "next/link";

/** Optional: pass a single handle to reuse across all platforms */
type Props = {
  handle?: string; // defaults to "TurkDunyasi"
};

export default function SocialLinksSection({ handle = "TurkDunyasi" }: Props) {
  const username = `/${handle}`;

  const links = [
    {
      name: "Facebook",
      href: `https://facebook.com/${handle}`,
      // deep → light blue
      bg: "bg-gradient-to-r from-[#1B4DB1] to-[#1877F2]",
      icon: (
        // Facebook "f"
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.95 8.44-9.94z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: `https://twitter.com/${handle}`,
      bg: "bg-gradient-to-r from-[#0C8BD9] to-[#1DA1F2]",
      icon: (
        // Twitter bird
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.18 4.18 0 0 0 1.84-2.31 8.34 8.34 0 0 1-2.64 1.01 4.16 4.16 0 0 0-7.24 2.84c0 .33.04.65.1.96A11.8 11.8 0 0 1 3.15 4.9a4.16 4.16 0 0 0 1.29 5.55 4.06 4.06 0 0 1-1.88-.52v.05c0 2.03 1.45 3.72 3.37 4.1-.35.1-.73.15-1.12.15-.27 0-.54-.03-.79-.07a4.17 4.17 0 0 0 3.89 2.89A8.36 8.36 0 0 1 2 19.54a11.8 11.8 0 0 0 6.39 1.87c7.66 0 11.86-6.35 11.86-11.86 0-.18 0-.36-.01-.53A8.4 8.4 0 0 0 22.46 6z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: `https://instagram.com/${handle}`,
      // official-ish IG gradient
      bg: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4]",
      icon: (
        // Instagram glyph
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.8z"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/message/${handle}`,
      bg: "bg-gradient-to-r from-[#128C7E] to-[#25D366]",
      icon: (
        // WhatsApp phone-in-bubble
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.4 0 .03 5.37.03 11.97c0 2.11.55 4.15 1.58 5.96L0 24l6.22-1.62a11.88 11.88 0 0 0 5.79 1.49h.01c6.6 0 11.97-5.37 11.97-11.98a11.86 11.86 0 0 0-3.47-8.41zM12.02 21.4h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.69.96.99-3.6-.22-.37a9.44 9.44 0 1 1 8.27 4.53zm5.42-6.99c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.47.13-.62.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.06 1.03-1.06 2.52s1.09 2.92 1.25 3.12c.15.2 2.14 3.27 5.19 4.58.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="mx-auto max-w-[1100px] mt-20 px-4 py-10">
      {/* Chip */}
      <div className="flex justify-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600">
          SOCIAL LINKS
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-3 text-center text-3xl md:text-4xl font-semibold text-slate-900">
        Find Us on Social Platforms
      </h2>

      {/* Buttons */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((l) => (
          <Link
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${l.bg} group flex items-center gap-3 rounded-lg px-5 py-3 text-white shadow-sm transition hover:translate-y-[1px] hover:shadow-md`}
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
              {l.icon}
            </span>
            <span className="font-semibold tracking-wide">{username}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
