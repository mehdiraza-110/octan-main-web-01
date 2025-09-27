// components/LanguageToggle.tsx
"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-black px-4 py-2 text-white shadow-lg hover:bg-gray-800 transition"
    >
      {language === "en" ? "🇬🇧 EN" : "🇹🇷 TR"}
    </button>
  );
}
