"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { SirenIcon, StarIcon, WifiIcon, AwardIcon } from "@/components/Icons";

const reasons = [
  { Icon: SirenIcon,  titleKey: "why.police.title",     descKey: "why.police.desc" },
  { Icon: StarIcon,   titleKey: "why.service.title",    descKey: "why.service.desc" },
  { Icon: WifiIcon,   titleKey: "why.wireless.title",   descKey: "why.wireless.desc" },
  { Icon: AwardIcon,  titleKey: "why.experience.title", descKey: "why.experience.desc" },
];

export default function WhyBuzz() {
  const { t } = useLang();

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#110800]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top row: photo left, text right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/team.png"
                alt="Buzz Alarmas — professional installation"
                fill
                className="object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-5 left-5 bg-dark/80 backdrop-blur-sm border border-orange/30 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                  <span className="text-white text-xs font-semibold">R.N.S.P. 4557</span>
                </div>
                <p className="text-white/50 text-xs mt-0.5">Homologada · Con aviso a policía</p>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-5 right-5 bg-orange text-dark text-xs font-black px-3 py-1.5 rounded-full"
              >
                30+ {t("stats.years")}
              </motion.div>
            </div>

            {/* Decorative border glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-orange/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {t("why.title")}
            </h2>
            <p className="text-white/50 text-lg mb-8">{t("why.sub")}</p>
            <div className="w-16 h-1 bg-orange rounded-full mb-10" />

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:scale-105"
            >
              {t("nav.cta")}
            </a>
          </motion.div>
        </div>

        {/* Feature cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-dark-2/80 border border-white/5 hover:border-orange/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-all duration-300">
                <Icon className="w-5 h-5 text-orange group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-orange transition-colors duration-200">{t(titleKey)}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t(descKey)}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
