"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const stats = [
  { number: "20+", labelKey: "stats.years" },
  { number: "8", labelKey: "stats.islands" },
  { number: "24/7", labelKey: "stats.monitoring" },
  { number: "100%", labelKey: "stats.wireless" },
];

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deep orange-black gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-[#1a0900] to-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange/5 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map(({ number, labelKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-orange mb-2 leading-none">
                {number}
              </div>
              <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
                {t(labelKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
