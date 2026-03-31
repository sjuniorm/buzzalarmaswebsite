"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { PhoneIcon, WrenchIcon, ShieldIcon } from "@/components/Icons";

const steps = [
  { Icon: PhoneIcon, titleKey: "how.step1.title", descKey: "how.step1.desc" },
  { Icon: WrenchIcon, titleKey: "how.step2.title", descKey: "how.step2.desc" },
  { Icon: ShieldIcon, titleKey: "how.step3.title", descKey: "how.step3.desc" },
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("how.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("how.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-orange/20 via-orange/60 to-orange/20" />

          {steps.map(({ Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Icon circle */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-orange bg-dark text-orange mb-6 z-10">
                <Icon className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange text-dark text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t(titleKey)}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                {t(descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
