"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "buzz_cookie_consent";

// Text is hardcoded here so this component works on all pages
// (including legal pages and 404) without needing LanguageProvider.
const copy = {
  es: {
    text: "Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico. Al hacer clic en Aceptar, consientes el uso de cookies. Para más información, consulta nuestra",
    link: "Política de Privacidad",
    accept: "Aceptar",
    reject: "Rechazar",
  },
  en: {
    text: "We use cookies to improve your browsing experience and analyse traffic. By clicking Accept you consent to our use of cookies. For more information, see our",
    link: "Privacy Policy",
    accept: "Accept",
    reject: "Reject",
  },
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
    // Detect language from the html element (set by layout.tsx)
    const htmlLang = document.documentElement.lang;
    if (htmlLang === "en") setLang("en");
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  const c = copy[lang];

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-dark-2 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
          {c.text}{" "}
          <a
            href="/privacy-policy"
            className="text-orange underline hover:text-orange-dark transition-colors"
          >
            {c.link}
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm text-white/50 hover:text-white border border-white/15 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
          >
            {c.reject}
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold bg-orange hover:bg-orange-dark text-white px-5 py-2 rounded-full transition-all duration-200"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
