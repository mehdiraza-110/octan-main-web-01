// app/page.tsx (or any page/layout)
"use client";
import Footer from "@/components/Footer";
import HeaderBanner from "@/components/Header";
import HomeScreen from "@/screens/homeScreen";

export default function Home() {
  return (
    <>
      {/* …your page content… */}
      <HomeScreen />
    </>
  );
}
