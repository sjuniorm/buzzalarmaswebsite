"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

// ─────────────────────────────────────────────
// EDIT YOUR FAQ QUESTIONS HERE
// Add a new object to add a question.
// Remove an object to delete a question.
// Just change the text inside "en" and "es".
// ─────────────────────────────────────────────
const faqs: { q: Record<"en" | "es", string>; a: Record<"en" | "es", string> }[] = [
  {
    q: {
      en: "Is installation really free?",
      es: "¿La instalación es realmente gratuita?",
    },
    a: {
      en: "Yes. We include free installation with every new alarm system. No hidden fees, no call-out charge.",
      es: "Sí. Incluimos la instalación gratuita con cada nuevo sistema de alarma. Sin costes ocultos ni gastos de desplazamiento.",
    },
  },
  {
    q: {
      en: "Do you connect directly to the police?",
      es: "¿Conectan directamente con la policía?",
    },
    a: {
      en: "Yes. When your alarm triggers, our 24/7 control room verifies the alert and contacts the police or relevant security service directly. Real response — not just a siren.",
      es: "Sí. Cuando salta tu alarma, nuestra central 24/7 verifica la alerta y contacta directamente con la policía o el servicio de seguridad correspondiente. Respuesta real, no solo una sirena.",
    },
  },
  {
    q: {
      en: "What happens if there's a power cut?",
      es: "¿Qué pasa si se va la luz?",
    },
    a: {
      en: "All our systems include a built-in battery backup so your alarm keeps working even during a power outage.",
      es: "Todos nuestros sistemas incluyen batería de respaldo integrada, por lo que la alarma sigue funcionando incluso durante un corte de suministro eléctrico.",
    },
  },
  {
    q: {
      en: "Can I control my alarm from my phone?",
      es: "¿Puedo controlar mi alarma desde el móvil?",
    },
    a: {
      en: "Yes. Our mobile app lets you arm, disarm and monitor your system from anywhere in the world, 24/7.",
      es: "Sí. Nuestra aplicación móvil te permite activar, desactivar y monitorizar tu sistema desde cualquier lugar del mundo, las 24 horas.",
    },
  },
  {
    q: {
      en: "Are your systems 100% wireless?",
      es: "¿Sus sistemas son 100% inalámbricos?",
    },
    a: {
      en: "Yes. No drilling through walls, no messy cables. Our systems are clean, quick to install and easy to move if you relocate.",
      es: "Sí. Sin taladros en las paredes, sin cables. Nuestros sistemas son limpios, rápidos de instalar y fáciles de trasladar si te mudas.",
    },
  },
  {
    q: {
      en: "Is there a monthly monitoring fee?",
      es: "¿Hay una cuota mensual de monitorización?",
    },
    a: {
      en: "Yes, there is a small monthly fee for 24/7 monitoring and police response. We'll give you all the details during your free consultation — no obligation.",
      es: "Sí, existe una pequeña cuota mensual por la vigilancia 24/7 y la respuesta policial. Te daremos todos los detalles durante tu consulta gratuita, sin compromiso.",
    },
  },
  {
    q: {
      en: "Which areas do you cover?",
      es: "¿Qué zonas cubren?",
    },
    a: {
      en: "We cover all 8 Canary Islands (Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro and La Graciosa) and the Province of Alicante on the mainland.",
      es: "Cubrimos las 8 islas Canarias (Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro y La Graciosa) y la Provincia de Alicante en la península.",
    },
  },
  {
    q: {
      en: "Can I protect a vacant or holiday property?",
      es: "¿Puedo proteger una propiedad vacía o de vacaciones?",
    },
    a: {
      en: "Absolutely. We offer specialised anti-squatter alerts for vacant properties. The moment anyone enters, you get an instant notification — giving you time to act before squatters settle in.",
      es: "Por supuesto. Ofrecemos alertas antiocupación especializadas para propiedades vacías. En el momento en que alguien entra, recibes una notificación instantánea — dándote tiempo para actuar antes de que los okupas se instalen.",
    },
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQ() {
  const { t, lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
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

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                openIndex === i
                  ? "border-orange/40 bg-dark-3"
                  : "border-white/5 bg-dark-3 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-semibold text-base transition-colors duration-200 ${openIndex === i ? "text-orange" : "text-white"}`}>
                  {faq.q[lang]}
                </span>
                <span className={`transition-colors duration-200 ${openIndex === i ? "text-orange" : "text-white/40"}`}>
                  <ChevronIcon open={openIndex === i} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                      {faq.a[lang]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">{t("faq.cta.text")}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange/30"
          >
            {t("nav.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
