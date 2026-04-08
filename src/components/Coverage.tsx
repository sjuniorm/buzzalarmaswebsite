"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { MapPinIcon } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────
   Animated coverage map — real Spain outline + glowing zones
   Mainland path based on simplified geographic coordinates
   scaled to a 500×380 viewBox
───────────────────────────────────────────────────────── */
function CoverageMap() {
  return (
    <svg viewBox="0 0 500 380" className="w-full h-full" aria-hidden>

      {/* ── Iberian Peninsula — Spain outline (clockwise from NW Galicia) ── */}
      <path
        d="
          M 77,55
          L 82,45 L 90,36 L 100,25 L 106,20
          L 120,18 L 140,17 L 162,17 L 182,19
          L 202,21 L 220,21 L 237,19
          L 254,16 L 272,13 L 292,13 L 310,19
          L 326,29 L 340,40
          L 345,54 L 348,70 L 349,88 L 348,106
          L 348,120 L 352,130 L 356,142
          L 354,158 L 347,170 L 334,178 L 318,182
          L 298,184 L 274,184 L 252,185
          L 232,188 L 216,190 L 198,186
          L 177,180 L 160,172 L 145,162
          L 134,150 L 126,138 L 118,124
          L 110,112 L 103,98 L 97,84
          L 95,70 L 98,58 L 100,50
          L 92,52 L 82,54 L 77,55 Z
        "
        fill="rgba(255,145,77,0.06)"
        stroke="rgba(255,145,77,0.28)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Portugal border — dashed internal line */}
      <path
        d="M 145,162 L 134,150 L 126,138 L 118,124 L 110,112 L 103,98 L 97,84 L 95,70 L 98,58 L 100,50"
        fill="none"
        stroke="rgba(255,145,77,0.10)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* ── Balearic Islands (Mallorca + Menorca) — east of peninsula ── */}
      <ellipse cx="390" cy="110" rx="12" ry="7"
        fill="rgba(255,145,77,0.12)"
        stroke="rgba(255,145,77,0.30)"
        strokeWidth="0.8"
      />
      <ellipse cx="408" cy="102" rx="7" ry="4"
        fill="rgba(255,145,77,0.10)"
        stroke="rgba(255,145,77,0.25)"
        strokeWidth="0.8"
      />

      {/* ── Alicante dot — east Mediterranean coast ── */}
      <motion.circle cx="356" cy="140" r="36"
        fill="rgba(255,145,77,0.04)"
        animate={{ r: [28, 44, 28], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="356" cy="140" r="18"
        fill="rgba(255,145,77,0.08)"
        animate={{ r: [14, 24, 14], opacity: [0.6, 0.1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <circle cx="356" cy="140" r="5" fill="#ff914d" opacity="0.95" />
      <circle cx="356" cy="140" r="2.2" fill="#fff" opacity="0.85" />
      <text x="364" y="137" fill="rgba(255,145,77,0.95)" fontSize="9" fontWeight="700" fontFamily="system-ui">Alicante</text>
      <text x="364" y="148" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontFamily="system-ui">Prov. Alicante</text>

      {/* ── Canary Islands inset — bottom left ── */}
      <rect x="10" y="270" width="152" height="100" rx="7"
        fill="rgba(20,20,20,0.6)"
        stroke="rgba(255,145,77,0.18)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="86" y="284" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui" textAnchor="middle" fontWeight="600">ISLAS CANARIAS</text>

      {/* Non-service islands — static, dimmed */}
      {[
        { cx: 22,  cy: 350, rx: 5,   ry: 3   },  // El Hierro
        { cx: 34,  cy: 312, rx: 6,   ry: 3.5 },  // La Palma
        { cx: 49,  cy: 343, rx: 4,   ry: 2.5 },  // La Gomera
      ].map(({ cx, cy, rx, ry }, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
          fill="rgba(255,145,77,0.08)"
          stroke="rgba(255,145,77,0.18)"
          strokeWidth="0.7"
        />
      ))}

      {/* Service islands — animated */}
      {[
        { cx: 64,  cy: 328, rx: 14, ry: 8,  delay: 0    },  // Tenerife (largest)
        { cx: 90,  cy: 338, rx: 9,  ry: 9,  delay: 0.3  },  // Gran Canaria
        { cx: 116, cy: 320, rx: 6,  ry: 13, delay: 0.6  },  // Fuerteventura
        { cx: 140, cy: 306, rx: 6,  ry: 5,  delay: 0.9  },  // Lanzarote
      ].map(({ cx, cy, rx, ry, delay }, i) => (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r={rx + 10}
            fill="rgba(255,145,77,0.05)"
            animate={{ r: [rx + 7, rx + 16, rx + 7], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay, ease: "easeInOut" }}
          />
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
            fill="rgba(255,145,77,0.22)"
            stroke="rgba(255,145,77,0.55)"
            strokeWidth="0.9"
          />
          <circle cx={cx} cy={cy} r="2.2" fill="#ff914d" opacity="0.9" />
        </g>
      ))}

      {/* Canary unified glow */}
      <motion.ellipse cx="84" cy="322" rx="72" ry="38"
        fill="rgba(255,145,77,0.04)"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Dotted arc from Canaries to Alicante ── */}
      <motion.path
        d="M 162,290 C 220,258 288,228 350,145"
        fill="none"
        stroke="rgba(255,145,77,0.22)"
        strokeWidth="0.9"
        strokeDasharray="5 5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.6 }}
      />

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
                {["Tenerife","Gran Canaria","Lanzarote","Fuerteventura"].map((island) => (
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
