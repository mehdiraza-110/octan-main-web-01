// app/page.tsx (or any page/layout)
"use client";
import Footer from "@/components/Footer";
import HeaderBanner from "@/components/Header";
import Tenders from "@/screens/tenderScreen";
export default function TendersPage() {
  return (
    <>
      {/* …your page content… */}
      <Tenders />
    </>
  );
}
