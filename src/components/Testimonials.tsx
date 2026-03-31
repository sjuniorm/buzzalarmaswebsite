"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const reviews = [
  {
    name: "Eamonn Power",
    badge: "Local Guide · 37 reviews",
    stars: 5,
    text: "We had someone come to our new house to install a new system. They were super helpful in explaining everything. The work was completely flawless. Everything was operational and working through their app within an hour. Thank you so much for everything — well done on a great job! ✌🏻",
  },
  {
    name: "Bernie Wagner",
    badge: "Google Review",
    stars: 5,
    text: "The team installed our system and we are very happy with the professionalism, the speed and the clean work! I can only strongly recommend this company if you need a security system. On top you get a professional consultation. The work started as agreed in time and was finished as promised. Perfect! Muchas gracias.",
  },
  {
    name: "Egon Bergmans",
    badge: "Google Review",
    stars: 5,
    text: "We have a very good feeling about this company. From the request to the installation of the alarm everything went smoothly. Knowledge, service, quality and friendliness are in our opinion the core values of this company.",
  },
  {
    name: "Ian Thompson",
    badge: "Google Review",
    stars: 5,
    text: "We had an alarm fitted at our business and the service was brilliant. We have other alarms and are now going to change them all for Buzz Alarms. Best alarm company on the island.",
  },
  {
    name: "Adam Warchol",
    badge: "Google Review",
    stars: 5,
    text: "Amazing service — very quick with the installation, explained everything clearly and were great to chat with. Feel much safer now and would totally recommend!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="reviews" className="py-24 bg-dark">
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
            {t("testimonials.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("testimonials.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Reviews grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid bg-dark-2 border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">{review.badge}</p>
                </div>
                {/* Google G icon */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
                  <path
                    d="M21.805 10.023H12v3.977h5.62c-.24 1.36-1 2.51-2.12 3.28v2.73h3.44c2.01-1.85 3.17-4.58 3.17-7.99 0-.63-.06-1.24-.15-1.99z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 22c2.97 0 5.46-.98 7.28-2.66l-3.44-2.73c-.96.64-2.19 1.02-3.84 1.02-2.95 0-5.45-1.99-6.34-4.66H2.12v2.82C3.93 19.98 7.7 22 12 22z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.66 13.97A6.03 6.03 0 0 1 5.34 12c0-.68.12-1.35.32-1.97V7.21H2.12A9.96 9.96 0 0 0 2 12c0 1.61.39 3.13 1.07 4.49l2.59-2.52z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.34c1.66 0 3.15.57 4.32 1.69l3.25-3.25C17.46 1.98 14.97 1 12 1 7.7 1 3.93 3.02 2.12 6.21l3.54 2.76C6.55 7.33 9.05 5.34 12 5.34z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              <Stars count={review.stars} />

              <p className="text-white/60 text-sm leading-relaxed mt-3">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
