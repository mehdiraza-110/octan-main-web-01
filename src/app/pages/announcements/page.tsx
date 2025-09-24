// app/page.tsx (or any page/layout)
"use client";
import Footer from "@/components/Footer";
import HeaderBanner from "@/components/Header";
import Announcements from "@/screens/announcementScreen/index";
export default function AnnouncementsPage() {
  return (
    <>
      {/* …your page content… */}
      <Announcements />
    </>
  );
}
