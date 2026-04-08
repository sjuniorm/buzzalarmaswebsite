"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

// ─────────────────────────────────────────────────────────
// TO EDIT A QUESTION: change the translation keys in
//   src/context/LanguageContext.tsx  →  faq.q1 / faq.a1 etc.
// TO ADD A QUESTION: add faq.q11 / faq.a11 in translations,
//   then add { q: "faq.q11", a: "faq.a11" } to the array below.
// TO REMOVE: delete the entry from this array.
// ─────────────────────────────────────────────────────────
const faqs = [
  { q: "faq.q1",  a: "faq.a1"  },
  { q: "faq.q2",  a: "faq.a2"  },
  { q: "faq.q3",  a: "faq.a3"  },
  { q: "faq.q4",  a: "faq.a4"  },
  { q: "faq.q5",  a: "faq.a5"  },
  { q: "faq.q6",  a: "faq.a6"  },
  { q: "faq.q7",  a: "faq.a7"  },
  { q: "faq.q8",  a: "faq.a8"  },
  { q: "faq.q9",  a: "faq.a9"  },
  { q: "faq.q10", a: "faq.a10" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns for desktop
  const half = Math.ceil(faqs.length / 2);
  const left  = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section id="faq" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("faq.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Two-column accordion on desktop, single on mobile */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-0 items-start">
          {[left, right].map((col, colIdx) => (
            <div key={colIdx} className="space-y-2">
              {col.map((faq, rowIdx) => {
                const i = colIdx === 0 ? rowIdx : half + rowIdx;
                const open = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: rowIdx * 0.05 }}
                    className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                      open ? "border-orange/30 bg-dark-3" : "border-white/5 bg-dark-3/50 hover:border-white/10"
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className={`font-medium text-sm transition-colors duration-200 ${open ? "text-orange" : "text-white/90"}`}>
                        {t(faq.q)}
                      </span>
                      <span className={`transition-colors duration-200 ${open ? "text-orange" : "text-white/30"}`}>
                        <ChevronIcon open={open} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-white/55 text-sm leading-relaxed">
                            {t(faq.a)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/35 text-sm mb-4">{t("faq.cta.text")}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange/25"
          >
            {t("nav.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
