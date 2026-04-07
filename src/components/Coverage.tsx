"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { MapPinIcon } from "@/components/Icons";

export default function Coverage() {
  const { t } = useLang();

  return (
    <section id="coverage" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark to-dark-2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
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

        {/* Google Maps embed */}
        {/*
          HOW TO USE YOUR OWN MAP:
          1. Go to your Google Business Profile (business.google.com)
          2. Click "Share" → "Embed a map" → copy the iframe src URL
          3. Replace the src below with your URL
          Current placeholder shows the Canary Islands region.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border border-white/10"
          style={{ height: 320 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Tenerife,+Canary+Islands,+Spain&output=embed&z=8"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Buzz Alarmas coverage area"
          />
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-orange" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {t("coverage.canary")}
              </h3>
            </div>
            <div className="w-10 h-0.5 bg-orange mb-4 rounded-full" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("coverage.canary.desc")}
            </p>
            <div className="flex flex-wrap gap-2">
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-orange" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {t("coverage.alicante")}
              </h3>
            </div>
            <div className="w-10 h-0.5 bg-orange mb-4 rounded-full" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("coverage.alicante.desc")}
            </p>
            <div className="flex flex-wrap gap-2">
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
