"use client";

import { useLang } from "@/context/LanguageContext";
import { AwardIcon, ClockIcon, SirenIcon, CheckCircleIcon, WrenchIcon } from "@/components/Icons";

const stats = [
  { Icon: AwardIcon, key: "trust.years" },
  { Icon: ClockIcon, key: "trust.monitoring" },
  { Icon: SirenIcon, key: "trust.police" },
  { Icon: CheckCircleIcon, key: "trust.certified" },
  { Icon: WrenchIcon, key: "trust.free" },
];

export default function TrustBar() {
  const { t } = useLang();

  return (
    <section className="relative bg-orange py-5 overflow-hidden">
      {/* Subtle shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-dark/40 via-transparent to-orange-dark/40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {stats.map(({ Icon, key }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-dark/70 shrink-0" />
              <span className="text-dark font-bold text-sm md:text-base whitespace-nowrap">
                {t(key)}
              </span>
              {i < stats.length - 1 && (
                <span className="hidden md:block text-dark/30 ml-4">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
