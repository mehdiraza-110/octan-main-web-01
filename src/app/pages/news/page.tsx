// app/page.tsx (or any page/layout)
"use client";
import Footer from "@/components/Footer";
import HeaderBanner from "@/components/Header";
import News from "@/screens/newsScreen/index";
export default function NewsPage() {
  return (
    <>
      {/* …your page content… */}
      <News />
    </>
  );
}
