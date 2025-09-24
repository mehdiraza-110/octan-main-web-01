// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import ClientLayout from "./ClientLayout"; // 👈 new wrapper
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turkish Dunyasi",
  description: "Turkish Dunyasi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        <ClientLayout>
          {children}
          <Toaster position="top-right" richColors />
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
