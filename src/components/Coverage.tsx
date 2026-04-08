"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { MapPinIcon } from "@/components/Icons";

const canaryIslands = ["Tenerife", "Gran Canaria", "Lanzarote", "Fuerteventura"];
const alicanteAreas = ["Alicante", "Benidorm", "Torrevieja", "Denia", "Javea", "Calpe", "Altea", "Orihuela Costa"];

export default function Coverage() {
  const { t, lang } = useLang();

  return (
    <section id="coverage" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark to-dark-2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("coverage.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("coverage.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Two region cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Canary Islands */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-dark-3 border border-white/6 hover:border-orange/30 rounded-3xl p-8 overflow-hidden transition-all duration-300 group"
          >
            {/* Decorative background number */}
            <div className="absolute top-4 right-6 text-[110px] font-black text-white/[0.03] leading-none select-none pointer-events-none">4</div>
            {/* Top glow accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

            {/* Active badge */}
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange text-xs font-semibold px-3 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
              {lang === "en" ? "Active coverage" : "Cobertura activa"}
            </div>

            {/* Icon + stat */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center shrink-0 group-hover:from-orange/30 transition-all duration-300">
                <MapPinIcon className="w-6 h-6 text-orange" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{t("coverage.canary")}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white leading-none">4</span>
                  <span className="text-white/40 text-sm">{lang === "en" ? "islands covered" : "islas cubiertas"}</span>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6">{t("coverage.canary.desc")}</p>

            <div className="flex flex-wrap gap-2">
              {canaryIslands.map((island) => (
                <span key={island} className="bg-orange/10 border border-orange/20 text-orange text-xs px-3 py-1.5 rounded-full font-medium">
                  {island}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Province of Alicante */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative bg-dark-3 border border-white/6 hover:border-orange/30 rounded-3xl p-8 overflow-hidden transition-all duration-300 group"
          >
            {/* Decorative background text */}
            <div className="absolute top-4 right-6 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">ALI</div>
            {/* Top glow accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

            {/* Active badge */}
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange text-xs font-semibold px-3 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
              {lang === "en" ? "Active coverage" : "Cobertura activa"}
            </div>

            {/* Icon + stat */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/20 flex items-center justify-center shrink-0 group-hover:from-orange/30 transition-all duration-300">
                <MapPinIcon className="w-6 h-6 text-orange" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{t("coverage.alicante")}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white leading-none">1</span>
                  <span className="text-white/40 text-sm">{lang === "en" ? "full province" : "provincia completa"}</span>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6">{t("coverage.alicante.desc")}</p>

            <div className="flex flex-wrap gap-2">
              {alicanteAreas.map((city) => (
                <span key={city} className="bg-orange/10 border border-orange/20 text-orange text-xs px-3 py-1.5 rounded-full font-medium">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-dark-3/40 border border-white/5 rounded-2xl px-7 py-5"
        >
          <p className="text-white/40 text-sm text-center sm:text-left">
            {lang === "en"
              ? "Not sure if we cover your area? Get in touch — we'll confirm straight away."
              : "¿No sabes si cubrimos tu zona? Contáctanos — te confirmamos al momento."}
          </p>
          <a
            href="#contact"
            className="shrink-0 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap"
          >
            {t("nav.cta")}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
