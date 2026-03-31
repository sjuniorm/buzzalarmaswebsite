"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

export default function Coverage() {
  const { t } = useLang();

  return (
    <section id="coverage" className="py-24 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("coverage.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("coverage.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Canary Islands */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-3 border border-orange/20 rounded-2xl p-8"
          >
            <div className="text-5xl mb-4">🏝️</div>
            <h3 className="text-2xl font-black text-white mb-2">
              {t("coverage.canary")}
            </h3>
            <div className="w-10 h-0.5 bg-orange mb-4 rounded-full" />
            <p className="text-white/50 text-sm leading-relaxed">
              {t("coverage.canary.desc")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Tenerife",
                "Gran Canaria",
                "Lanzarote",
                "Fuerteventura",
                "La Palma",
                "La Gomera",
                "El Hierro",
                "La Graciosa",
              ].map((island) => (
                <span
                  key={island}
                  className="bg-orange/10 border border-orange/20 text-orange text-xs px-3 py-1 rounded-full"
                >
                  {island}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Alicante */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-3 border border-orange/20 rounded-2xl p-8"
          >
            <div className="text-5xl mb-4">🌞</div>
            <h3 className="text-2xl font-black text-white mb-2">
              {t("coverage.alicante")}
            </h3>
            <div className="w-10 h-0.5 bg-orange mb-4 rounded-full" />
            <p className="text-white/50 text-sm leading-relaxed">
              {t("coverage.alicante.desc")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Alicante",
                "Benidorm",
                "Torrevieja",
                "Denia",
                "Javea",
                "Calpe",
                "Altea",
                "Orihuela Costa",
              ].map((city) => (
                <span
                  key={city}
                  className="bg-orange/10 border border-orange/20 text-orange text-xs px-3 py-1 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
