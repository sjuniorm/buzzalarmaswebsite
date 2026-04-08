"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { MapPinIcon } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────
   Animated coverage map — Spain outline with glowing zones
───────────────────────────────────────────────────────── */
function CoverageMap() {
  return (
    <svg
      viewBox="0 0 560 340"
      className="w-full h-full"
      aria-hidden
    >
      {/* ── Spain + Portugal peninsula outline ── */}
      <path
        d="M 108,42 C 120,36 145,32 168,34 L 200,30 C 228,26 262,25 292,30 L 335,35 C 368,40 398,52 418,72 L 432,92 C 442,110 448,132 446,152 L 442,174 C 437,196 430,216 422,232 L 410,252 C 398,268 380,278 360,284 L 334,290 C 308,296 278,298 252,296 L 226,292 C 200,286 176,274 158,258 L 140,238 C 124,220 114,196 108,172 L 102,148 C 96,124 96,98 104,74 Z"
        fill="rgba(255,145,77,0.04)"
        stroke="rgba(255,145,77,0.18)"
        strokeWidth="1.2"
      />
      {/* Portugal border suggestion */}
      <path
        d="M 108,42 C 104,74 96,124 102,148 L 108,172 C 114,196 124,220 140,238 L 158,258"
        fill="none"
        stroke="rgba(255,145,77,0.08)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* ── Alicante / Costa Blanca glow zone ── */}
      {/* Glow layers */}
      <motion.circle
        cx="412" cy="195" r="38"
        fill="rgba(255,145,77,0.06)"
        animate={{ r: [34, 50, 34], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="412" cy="195" r="22"
        fill="rgba(255,145,77,0.10)"
        animate={{ r: [18, 30, 18], opacity: [0.7, 0.1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Dot */}
      <circle cx="412" cy="195" r="5" fill="#ff914d" opacity="0.9" />
      <circle cx="412" cy="195" r="2.5" fill="#fff" opacity="0.8" />
      {/* Label */}
      <text x="422" y="192" fill="rgba(255,145,77,0.9)" fontSize="9" fontWeight="600" fontFamily="system-ui">Alicante</text>
      <text x="422" y="202" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="system-ui">Costa Blanca</text>

      {/* ── Canary Islands — shown as inset bottom-left ── */}
      {/* Inset box */}
      <rect x="12" y="230" width="118" height="96" rx="6"
        fill="rgba(255,145,77,0.03)"
        stroke="rgba(255,145,77,0.15)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="18" y="243" fill="rgba(255,255,255,0.25)" fontSize="6.5" fontFamily="system-ui">Islas Canarias</text>

      {/* Island shapes — simplified dots with labels */}
      {[
        { cx: 28,  cy: 268, label: "El Hierro",     lx: 36  },
        { cx: 46,  cy: 256, label: "La Gomera",     lx: 54  },
        { cx: 60,  cy: 262, label: "Tenerife",      lx: 68  },
        { cx: 76,  cy: 254, label: "Gran Canaria",  lx: 84  },
        { cx: 64,  cy: 278, label: "La Palma",      lx: 72  },
        { cx: 92,  cy: 260, label: "Fuerteventura", lx: 100 },
        { cx: 108, cy: 252, label: "Lanzarote",     lx: 116 },
      ].map(({ cx, cy, label, lx }, i) => (
        <g key={label}>
          <motion.circle
            cx={cx} cy={cy} r="10"
            fill="rgba(255,145,77,0.07)"
            animate={{ r: [8, 15, 8], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
          />
          <circle cx={cx} cy={cy} r="3.5" fill="#ff914d" opacity="0.85" />
          <circle cx={cx} cy={cy} r="1.5" fill="#fff" opacity="0.7" />
        </g>
      ))}

      {/* Canary Islands glow — unified */}
      <motion.ellipse
        cx="70" cy="264" rx="68" ry="28"
        fill="rgba(255,145,77,0.04)"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* ── Dotted line connecting Canaries to mainland ── */}
      <motion.path
        d="M 70,240 C 120,200 200,200 300,210 L 405,193"
        fill="none"
        stroke="rgba(255,145,77,0.2)"
        strokeWidth="0.8"
        strokeDasharray="4 5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ── Coverage label top-right ── */}
      <text x="460" y="52" fill="rgba(255,145,77,0.5)" fontSize="7.5" fontFamily="system-ui" textAnchor="middle">Área de cobertura</text>
      <text x="460" y="63" fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="system-ui" textAnchor="middle">Coverage area</text>
    </svg>
  );
}

export default function Coverage() {
  const { t } = useLang();

  return (
    <section id="coverage" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark to-dark-2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

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

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Animated map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-dark-3/40 border border-white/5 rounded-2xl overflow-hidden"
            style={{ height: 320 }}
          >
            <CoverageMap />
          </motion.div>

          {/* Coverage cards */}
          <div className="space-y-5">
            {/* Canary Islands */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-3 border border-orange/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-4 h-4 text-orange" />
                </div>
                <h3 className="text-xl font-black text-white">{t("coverage.canary")}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{t("coverage.canary.desc")}</p>
              <div className="flex flex-wrap gap-1.5">
                {["Tenerife","Gran Canaria","Lanzarote","Fuerteventura","La Palma","La Gomera","El Hierro","La Graciosa"].map((island) => (
                  <span key={island} className="bg-orange/10 border border-orange/20 text-orange text-xs px-2.5 py-1 rounded-full">
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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-dark-3 border border-orange/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-4 h-4 text-orange" />
                </div>
                <h3 className="text-xl font-black text-white">{t("coverage.alicante")}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{t("coverage.alicante.desc")}</p>
              <div className="flex flex-wrap gap-1.5">
                {["Alicante","Benidorm","Torrevieja","Denia","Javea","Calpe","Altea","Orihuela Costa"].map((city) => (
                  <span key={city} className="bg-orange/10 border border-orange/20 text-orange text-xs px-2.5 py-1 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
