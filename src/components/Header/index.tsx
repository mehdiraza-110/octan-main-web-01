// components/layout/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CaretDown, SearchIcon } from "@/components/Icons";
import { useEffect, useState } from "react";
import { NAV_ITEMS, NavItem } from "@/components/Layout/navbarData";

type HeaderProps = {
  variant?: "light" | "dark";
};

/** ===== Desktop nested submenu ===== */
function DesktopSubMenu({ items }: { items: NavItem[] }) {
  return (
    <ul className="min-w-[240px] py-2">
      {items.map((it) => {
        const hasKids = !!it.children?.length;
        return (
          <li key={it.label} className="relative group/sub">
            {/* row */}
            {it.href ? (
              <Link
                href={it.href}
                className="flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-slate-100"
              >
                <span>{it.label}</span>
                {hasKids && <CaretDown className="h-4 w-4 -rotate-90 text-slate-500" />}
              </Link>
            ) : (
              <div className="flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm text-slate-800">
                <span>{it.label}</span>
                {hasKids && <CaretDown className="h-4 w-4 -rotate-90 text-slate-500" />}
              </div>
            )}

            {/* level-2+ flyout */}
            {hasKids && (
              <div
                className="
                  invisible absolute left-full top-0 z-50 ml-2 rounded-2xl bg-white p-2 opacity-0 shadow-lg ring-1 ring-black/5
                  transition group-hover/sub:visible group-hover/sub:opacity-100
                  before:absolute before:-left-2 before:top-0 before:h-full before:w-2 before:content-['']  /* side bridge */
                "
              >
                <DesktopSubMenu items={it.children!} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** ===== Mobile recursive accordion ===== */
function MobileSubMenu({
  items,
  path,
  openSet,
  toggle,
}: {
  items: NavItem[];
  path: string;
  openSet: Set<string>;
  toggle: (k: string) => void;
}) {
  return (
    <ul className="ml-3 border-l border-slate-200 pl-3">
      {items.map((it, i) => {
        const key = `${path}-${i}`;
        const hasKids = !!it.children?.length;
        const isOpen = openSet.has(key);
        return (
          <li key={key} className="py-1">
            <div className="flex items-center justify-between">
              {it.href ? (
                <Link href={it.href} className="text-sm text-slate-700 hover:underline">
                  {it.label}
                </Link>
              ) : (
                <span className="text-sm text-slate-700">{it.label}</span>
              )}
              {hasKids && (
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-700"
                >
                  <CaretDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
            {hasKids && isOpen && (
              <MobileSubMenu items={it.children!} path={key} openSet={openSet} toggle={toggle} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());


    // classes for nav links
  const linkBase =
    "inline-flex items-center gap-1 text-lg font-medium transition";
  const linkColor =
    variant === "light"
      ? "text-white hover:opacity-90"
      : "text-slate-900 hover:text-slate-600";

  // ESC closes mobile drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMobile(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (k: string) =>
    setOpenKeys((prev) => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });

  return (
    <header className="relative z-50 overflow-visible">
      {/* Top bar */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between p-5 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white/90 shadow"
        >
          <Image src="/logo.png" alt="Logo" fill className="object-contain" sizes="44px" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const hasKids = !!item.children?.length;
            return (
              <div key={item.label} className="relative group/menu">
                {item.href ? (
                  <Link
                    href={item.href}
                     className={`${linkBase} ${linkColor}`}
                  >
                    {item.label}
                    {hasKids && <CaretDown className={`h-4 w-4 ${
                          variant === "light" ? "text-white/90" : "text-slate-600"
                        }`} />}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`${linkBase} ${linkColor}`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label}
                    {hasKids && <CaretDown className={`h-4 w-4 ${
                          variant === "light" ? "text-white/90" : "text-slate-600"
                        }`} />}
                  </button>
                )}

                {/* level-1 dropdown w/ top hover-bridge */}
                {hasKids && (
                  <div
                    className="
                      invisible absolute left-0 top-full z-50 mt-0 rounded-2xl bg-white p-2 opacity-0 shadow-lg ring-1 ring-black/5
                      transition group-hover/menu:visible group-hover/menu:opacity-100
                      before:absolute before:inset-x-0 before:-top-2 before:h-3 before:content-['']  /* top bridge */
                    "
                  >
                    <DesktopSubMenu items={item.children!} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900 shadow"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <Link
            href="/pages/membership/apply"
            className="rounded-full bg-[#3763EB] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-600"
          >
            Apply for Membership
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpenMobile((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900 shadow md:hidden"
          aria-label="Toggle menu"
        >
          <span className="i [&>*]:block [&>*]:h-0.5 [&>*]:w-5 [&>*]:rounded [&>*]:bg-slate-900">
            <span />
            <span className="my-1" />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {openMobile && (
        <div className="mx-auto max-w-[1200px] px-4 md:hidden">
          <div className="mb-3 rounded-2xl bg-white/95 p-4 shadow">
            <ul className="space-y-1">
              {NAV_ITEMS.map((it, i) => {
                const key = `${i}`;
                const hasKids = !!it.children?.length;
                const isOpen = openKeys.has(key);
                return (
                  <li key={key}>
                    <div className="flex items-center justify-between">
                      {it.href ? (
                        <Link
                          href={it.href}
                          className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                          onClick={() => setOpenMobile(false)}
                        >
                          {it.label}
                        </Link>
                      ) : (
                        <span className="px-2 py-2 text-sm font-medium text-slate-800">{it.label}</span>
                      )}

                      {hasKids && (
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700"
                        >
                          <CaretDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {hasKids && isOpen && (
                      <MobileSubMenu items={it.children!} path={key} openSet={openKeys} toggle={toggle} />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                aria-label="Search"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-900"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
              <Link
                href="/contact"
                onClick={() => setOpenMobile(false)}
                className="rounded-full bg-[#3763EB] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
