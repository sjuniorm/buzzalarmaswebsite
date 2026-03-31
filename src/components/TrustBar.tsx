"use client";

import { useLang } from "@/context/LanguageContext";

const stats = [
  { icon: "🏆", key: "trust.years" },
  { icon: "👁️", key: "trust.monitoring" },
  { icon: "🚔", key: "trust.police" },
  { icon: "✅", key: "trust.certified" },
  { icon: "🔧", key: "trust.free" },
];

export default function TrustBar() {
  const { t } = useLang();

  return (
    <section className="bg-orange py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg">{stat.icon}</span>
              <span className="text-dark font-bold text-sm md:text-base whitespace-nowrap">
                {t(stat.key)}
              </span>
              {i < stats.length - 1 && (
                <span className="hidden md:block text-dark/40 ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
