// context/TranslationContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "tr";

type TranslationContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    hero_title1: "Bridging the Turkish World",
    hero_title2: "Trade, Innovation & Shared",
    hero_title3: "Prosperity",
    cta: "Free Consultation",
  },
  tr: {
    hero_title1: "Türk Dünyasını Birleştiriyoruz",
    hero_title2: "Ticaret, İnovasyon ve Ortak",
    hero_title3: "Refah",
    cta: "Ücretsiz Danışmanlık",
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved) setLanguage(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  const t = (key: string) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}
