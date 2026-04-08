"use client";

import { useLang } from "@/context/LanguageContext";
import { AwardIcon, ClockIcon, SirenIcon, CheckCircleIcon, WrenchIcon } from "@/components/Icons";

const items = [
  { Icon: AwardIcon,       key: "trust.years" },
  { Icon: ClockIcon,       key: "trust.monitoring" },
  { Icon: SirenIcon,       key: "trust.police" },
  { Icon: CheckCircleIcon, key: "trust.certified" },
  { Icon: WrenchIcon,      key: "trust.free" },
];

export default function TrustBar() {
  const { t } = useLang();

  // Duplicate 4× so the marquee is seamlessly loopable
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <section className="relative bg-orange py-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-dark/50 via-transparent to-orange-dark/50 pointer-events-none" />

      <div className="pause-on-hover flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee-fast gap-0">
          {doubled.map(({ Icon, key }, i) => (
            <div key={i} className="flex items-center gap-2 px-8 whitespace-nowrap">
              <Icon className="w-4 h-4 text-dark/70 shrink-0" />
              <span className="text-dark font-bold text-sm">
                {t(key)}
              </span>
              <span className="text-dark/30 ml-6">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
