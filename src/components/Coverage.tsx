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

      {/* ── Iberian Peninsula — real simplified outline ── */}
      {/* Scaled from actual geographic shape of Spain+Portugal */}
      <path
        d="
          M 152,28
          L 168,22 L 196,18 L 224,16 L 256,17 L 284,20
          L 308,18 L 326,22 L 340,20 L 356,26 L 368,24
          L 384,32 L 392,40 L 400,50 L 404,62
          L 412,72 L 418,86 L 420,102 L 416,116
          L 422,128 L 422,142 L 418,154 L 412,162
          L 416,174 L 414,186 L 408,196 L 402,204
          L 396,214 L 388,222 L 378,230 L 368,236
          L 356,240 L 342,244 L 328,246 L 314,246
          L 300,248 L 284,248 L 268,246 L 254,242
          L 238,240 L 224,238 L 210,234 L 198,228
          L 186,220 L 176,210 L 168,200 L 162,190
          L 154,178 L 148,166 L 142,154 L 138,140
          L 132,128 L 128,114 L 124,100 L 122,86
          L 118,72 L 116,58 L 120,46 L 132,36
          Z
        "
        fill="rgba(255,145,77,0.05)"
        stroke="rgba(255,145,77,0.22)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Portugal dashed border (left ~20% of peninsula) */}
      <path
        d="M 152,28 L 132,36 L 120,46 L 116,58 L 118,72 L 122,86 L 124,100 L 128,114 L 132,128 L 138,140 L 142,154 L 148,166 L 154,178 L 162,190 L 168,200"
        fill="none"
        stroke="rgba(255,145,77,0.09)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* ── Alicante / Costa Blanca — right-east coast ── */}
      {/* Geographic position: right side, roughly 60% down */}
      <motion.circle cx="400" cy="190" r="44"
        fill="rgba(255,145,77,0.05)"
        animate={{ r: [38, 56, 38], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="400" cy="190" r="24"
        fill="rgba(255,145,77,0.09)"
        animate={{ r: [20, 32, 20], opacity: [0.6, 0.1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <circle cx="400" cy="190" r="5.5" fill="#ff914d" opacity="0.95" />
      <circle cx="400" cy="190" r="2.5" fill="#fff" opacity="0.85" />
      <text x="412" y="187" fill="rgba(255,145,77,0.95)" fontSize="9" fontWeight="700" fontFamily="system-ui">Alicante</text>
      <text x="412" y="198" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontFamily="system-ui">Costa Blanca</text>

      {/* ── Canary Islands inset — bottom left ── */}
      <rect x="10" y="262" width="150" height="106" rx="7"
        fill="rgba(20,20,20,0.6)"
        stroke="rgba(255,145,77,0.18)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="85" y="277" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui" textAnchor="middle" fontWeight="600">ISLAS CANARIAS</text>

      {/* Islands as small blobs — approximate relative positions */}
      {/* W→E: El Hierro, La Palma, La Gomera, Tenerife, Gran Canaria, Fuerteventura, Lanzarote */}
      {[
        { cx: 22,  cy: 330, r: 5   },  // El Hierro
        { cx: 34,  cy: 310, r: 6   },  // La Palma
        { cx: 50,  cy: 332, r: 4.5 },  // La Gomera
        { cx: 64,  cy: 320, r: 9   },  // Tenerife (biggest)
        { cx: 90,  cy: 328, r: 8   },  // Gran Canaria
        { cx: 115, cy: 308, r: 6.5 },  // Fuerteventura
        { cx: 140, cy: 298, r: 5   },  // Lanzarote
      ].map(({ cx, cy, r }, i) => (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r={r + 8}
            fill="rgba(255,145,77,0.06)"
            animate={{ r: [r + 5, r + 14, r + 5], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.22, ease: "easeInOut" }}
          />
          <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.55}
            fill="rgba(255,145,77,0.25)"
            stroke="rgba(255,145,77,0.5)"
            strokeWidth="0.8"
          />
          <circle cx={cx} cy={cy} r="2" fill="#ff914d" opacity="0.9" />
        </g>
      ))}

      {/* Canary unified glow */}
      <motion.ellipse cx="82" cy="318" rx="75" ry="40"
        fill="rgba(255,145,77,0.04)"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Dotted arc from Canaries to Alicante ── */}
      <motion.path
        d="M 158,290 C 220,250 310,230 390,192"
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
