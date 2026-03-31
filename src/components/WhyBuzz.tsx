"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { SirenIcon, StarIcon, WifiIcon, AwardIcon } from "@/components/Icons";

const reasons = [
  { Icon: SirenIcon, titleKey: "why.police.title", descKey: "why.police.desc" },
  { Icon: StarIcon, titleKey: "why.service.title", descKey: "why.service.desc" },
  { Icon: WifiIcon, titleKey: "why.wireless.title", descKey: "why.wireless.desc" },
  { Icon: AwardIcon, titleKey: "why.experience.title", descKey: "why.experience.desc" },
];

export default function WhyBuzz() {
  const { t } = useLang();

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      {/* Gradient background: dark left to deep-orange-tinted right */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#110800]" />
      {/* Orange glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/8 rounded-full blur-[100px] pointer-events-none" />
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
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
              className="inline-flex items-center gap-3 bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange/30 hover:shadow-orange/50"
            >
              {t("nav.cta")}
            </a>
          </motion.div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ Icon, titleKey, descKey }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-2/80 border border-white/5 hover:border-orange/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-white font-bold mb-2">{t(titleKey)}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{t(descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
