// app/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import HeroBanner from "@/components/Header/HeroBanner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {/* Header only on non-home */}
      {!isHome && <Header variant={isHome ? "light" : "dark"} />}

      {/* Hero (with Header inside) only on home */}
      {isHome && (
        <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      {/* Large card (use first item) */}
             <HeroBanner
        imageSrc="/banner.png" // put the image under /public/hero/
        titleLines={[
          "Bridging the Turkish World",
          "Trade, Innovation & Shared",
          "Prosperity",
        ]}
        cta={{ label: "Free Consultation", href: "/contact" }}
      />
    </div>
      )}

      <main className="flex-1">{children}</main>
    </>
  );
}
