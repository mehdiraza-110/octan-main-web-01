// components/GoogleTranslate.tsx
"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,tr",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const handleTranslate = (lang: string) => {
    const select = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo"
    );
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }

    // Wait 2 seconds, then hide the ugly top bar
    setTimeout(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        .skiptranslate {
          display: none !important;
        }
          body { top: 0 !important; }
      `;
      document.head.appendChild(style);
    }, 2000);
  };

  return (
    <>
      {/* Hidden Google widget */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom floating buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex gap-2 rounded-full bg-black/80 p-2 shadow-lg">
        <button
          onClick={() => handleTranslate("en")}
          className="rounded-full bg-white px-3 py-1 text-sm font-medium text-black hover:bg-gray-200"
        >
          🇬🇧 EN
        </button>
        <button
          onClick={() => handleTranslate("tr")}
          className="rounded-full bg-white px-3 py-1 text-sm font-medium text-black hover:bg-gray-200"
        >
          🇹🇷 TR
        </button>
      </div>
    </>
  );
}
