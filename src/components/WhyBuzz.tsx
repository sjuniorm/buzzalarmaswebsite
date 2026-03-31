"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const reasons = [
  {
    icon: "🚔",
    titleKey: "why.police.title",
    descKey: "why.police.desc",
  },
  {
    icon: "⭐",
    titleKey: "why.service.title",
    descKey: "why.service.desc",
  },
  {
    icon: "📶",
    titleKey: "why.wireless.title",
    descKey: "why.wireless.desc",
  },
  {
    icon: "🛡️",
    titleKey: "why.experience.title",
    descKey: "why.experience.desc",
  },
];

export default function WhyBuzz() {
  const { t } = useLang();

  return (
    <section id="why" className="py-24 bg-dark relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {t("why.title")}
            </h2>
            <p className="text-white/50 text-lg mb-8">{t("why.sub")}</p>
            <div className="w-16 h-1 bg-orange rounded-full mb-10" />

            <a
              href="#contact"
              className="inline-flex bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange/30"
            >
              {t("nav.cta")}
            </a>
          </motion.div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-2 border border-white/5 rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-white font-bold mb-2">{t(r.titleKey)}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t(r.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
