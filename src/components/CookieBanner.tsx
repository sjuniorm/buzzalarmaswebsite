"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const STORAGE_KEY = "buzz_cookie_consent";

export default function CookieBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-dark-2 border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
          {t("cookie.text")}{" "}
          <a
            href="/privacy-policy"
            className="text-orange underline hover:text-orange-dark transition-colors"
          >
            {t("cookie.link")}
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm text-white/50 hover:text-white border border-white/15 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
          >
            {t("cookie.reject")}
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold bg-orange hover:bg-orange-dark text-white px-5 py-2 rounded-full transition-all duration-200"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
