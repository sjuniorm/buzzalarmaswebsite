"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { AlertTriangleIcon, LockIcon, ShieldIcon } from "@/components/Icons";

const threats = [
  { Icon: AlertTriangleIcon, titleKey: "urgency.robbery.title", descKey: "urgency.robbery.desc" },
  { Icon: LockIcon, titleKey: "urgency.squatter.title", descKey: "urgency.squatter.desc" },
  { Icon: ShieldIcon, titleKey: "urgency.solution.title", descKey: "urgency.solution.desc", highlight: true },
];

export default function Urgency() {
  const { t } = useLang();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("urgency.title")}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t("urgency.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {threats.map(({ Icon, titleKey, descKey, highlight }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 border ${
                highlight
                  ? "bg-orange/10 border-orange/40"
                  : "bg-dark-2 border-white/5"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                highlight ? "bg-orange/20" : "bg-white/5"
              }`}>
                <Icon className={`w-6 h-6 ${highlight ? "text-orange" : "text-white/40"}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${highlight ? "text-orange" : "text-white"}`}>
                {t(titleKey)}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {t(descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-dark to-orange" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(0,0,0,0.3),_transparent)]" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                {t("urgency.cta.title")}
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                {t("urgency.cta.sub")}
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-dark hover:bg-dark-2 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-lg whitespace-nowrap"
            >
              {t("nav.cta")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
