// components/ContactMapFooter.tsx

"use client";
import Link from "next/link";
import { FormEvent } from "react";

/** Simple phone/email icons (no extra deps) */
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M3 5c0-1.1.9-2 2-2h2.2c.9 0 1.7.6 1.9 1.5l.7 2.8c.2.8-.1 1.6-.8 2.1l-1 0.8a14.9 14.9 0 0 0 6.7 6.7l.8-1c.5-.7 1.3-1 2.1-.8l2.8.7c.9.2 1.5 1 1.5 1.9V19c0 1.1-.9 2-2 2h-1C10.6 21 3 13.4 3 4v1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook this up to your API route / form tool
    alert("Form submitted (demo).");
  };

  return (
    <section className="w-full bg-white p-5">
      {/* === Floating Card on Map === */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Big rounded map container */}
        <div className="relative mt-10 overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_rgba(2,24,62,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Card */}
            <div className="p-6 sm:p-8 md:py-20 md:px-10
             bg-gradient-to-b from-[#F2F2F2] to-[#F2F2">
              <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600">
                SCHEDULE CONSULTATION
              </span>
              <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-slate-900 sm:text-[40px]">
                Let’s Connect
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Connect with our experts for a free consultation and tailored
                solutions.
              </p>

              <form onSubmit={submitForm} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. John Smith"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none ring-primary/20 transition focus:border-primary focus:ring"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. john@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none ring-primary/20 transition focus:border-primary focus:ring"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +1 222 444 66"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none ring-primary/20 transition focus:border-primary focus:ring"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="company">
                      Company name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. Execor"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none ring-primary/20 transition focus:border-primary focus:ring"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="sr-only" htmlFor="message">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Type here …"
                      rows={3}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none ring-primary/20 transition focus:border-primary focus:ring"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#3763EB] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:translate-y-px hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                  >
                    Book a Call Now
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                      <ArrowIcon className="h-4 w-4 text-white" />
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Map */}
            <div className="relative h-[380px] w-full md:h-auto">
              <iframe
                title="Office Map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19898.698!2d-0.1276!3d51.5072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3ALondon!2sLondon!"
              />
              {/* Callout bubble */}
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 mx-auto flex max-w-[520px] items-start gap-3 rounded-2xl bg-white/90 p-3 text-sm text-slate-700 shadow-xl backdrop-blur md:left-6 md:right-auto">
                <span className="inline-flex h-10 w-12 items-center justify-center rounded-full bg-[#3763EB] text-indigo-700">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <p className="leading-snug">
                  Call us at{" "}
                  <a
                    href="tel:+1015000200"
                    className="font-semibold text-slate-900 underline decoration-indigo-400 underline-offset-2 hover:text-indigo-700"
                  >
                    (101) 500 0200
                  </a>{" "}
                  or fill out our form, and we’ll contact you within one
                  business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Newsletter strip === */}
      <div className="mt-[-90px] bg-[#032E6A] pt-[150px] pb-[50px] text-slate-10 rounded-t-3xl">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="max-w-[680px] text-center text-white text-sm md:text-left">
              Subscribe to Execor Insights, our monthly look at the critical
              issues facing global businesses.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed (demo).");
              }}
              className="flex w-full max-w-md items-stretch gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border-0 px-5 py-3 text-sm text-slate-900 outline-none ring-2 ring-white/20 placeholder:text-slate-500 focus:ring-white"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-20 place-items-center rounded-full bg-white text-[#062e66] shadow"
              >
                <ArrowIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* === Footer === */}
      <footer className="bg-[#001F4A] pb-10 pt-8 text-slate-100 rounded-b-3xl">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          {/* Top row: address + columns */}
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
            {/* Address / badge */}
            <div className="space-y-4">
              <div className="h-14 w-14 rounded-full bg-white/10"><img src="logo.png" /></div>
              <address className="not-italic text-sm leading-relaxed text-slate-200/90">
                Atatürk 7-8-9-10 Mah., Çobançeşme E5<br />
                Yan yol Cad., No:84, Bakırköy / İstanbul
                <br />
                <a
                  href="mailto:musiaid@musiaid.org.tr"
                  className="underline decoration-white/30 underline-offset-4"
                >
                  musiaid@musiaid.org.tr
                </a>
                <br />
                Telephone : +90 (212) 395 00 00
              </address>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#062e66] shadow"
              >
                Contact Us
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#062e66]/10">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* Columns */}
            <FooterColumn
              title="Industries"
              links={[
                ["Automotive", "/industries/automotive"],
                ["Defense, Security & Justice", "/industries/defense-security-justice"],
                ["Energy & Chemicals", "/industries/energy-chemicals"],
                ["Health Care", "/industries/health-care"],
                ["Investment Management", "/industries/investment-management"],
                ["Telecommunications", "/industries/telecommunications"],
              ]}
            />

            <FooterColumn
              title="Services"
              links={[
                ["Consulting", "/services/consulting"],
                ["Audit & Assurance", "/services/audit-assurance"],
                ["Risk & Financial Advisory", "/services/risk-financial-advisory"],
                ["AI & Analytics", "/services/ai-analytics"],
                ["M&A & Restructuring", "/services/ma-restructuring"],
                ["Tax", "/services/tax"],
              ]}
            />

            <FooterColumn
              title="Quick Links"
              links={[
                ["Our philosophy", "/about/philosophy"],
                ["Insights", "/insights"],
                ["Success story", "/success"],
                ["Careers", "/careers"],
                ["Our team", "/team"],
              ]}
            />
          </div>

          {/* Bottom row */}
          <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-slate-300 md:flex-row">
            <p>© 2025 COPYRIGHT. ALL RIGHTS RESERVED</p>
            <div className="flex items-center gap-6">
              <Link className="hover:underline" href="/terms">
                TERMS
              </Link>
              <Link className="hover:underline" href="/privacy">
                PRIVACY
              </Link>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="X" className="opacity-90 hover:opacity-100">
                  X
                </a>
                <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100">
                  in
                </a>
                <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100">
                  f
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [label: string, href: string][];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-200">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-slate-300 hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
