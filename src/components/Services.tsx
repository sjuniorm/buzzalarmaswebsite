"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { HomeIcon, BuildingIcon, EyeIcon, SmartphoneIcon, LockIcon, FlameIcon, RadarIcon, CameraIcon } from "@/components/Icons";

// First two are featured (larger). Rest are compact.
const featured = [
  { Icon: HomeIcon, titleKey: "services.home.title", descKey: "services.home.desc" },
  { Icon: BuildingIcon, titleKey: "services.business.title", descKey: "services.business.desc" },
];

const compact = [
  { Icon: EyeIcon, titleKey: "services.monitoring.title", descKey: "services.monitoring.desc" },
  { Icon: SmartphoneIcon, titleKey: "services.app.title", descKey: "services.app.desc" },
  { Icon: LockIcon, titleKey: "services.squatter.title", descKey: "services.squatter.desc" },
  { Icon: FlameIcon, titleKey: "services.fire.title", descKey: "services.fire.desc" },
  { Icon: RadarIcon, titleKey: "services.outdoor.title", descKey: "services.outdoor.desc" },
  { Icon: CameraIcon, titleKey: "services.cctv.title", descKey: "services.cctv.desc" },
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-dark-2 relative overflow-hidden">
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
            {t("services.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("services.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Featured row — Home & Business */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map(({ Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-dark-3 border border-white/5 hover:border-orange/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange/10 flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/15 to-orange/5 border border-orange/20 flex items-center justify-center shrink-0 group-hover:from-orange/25 transition-all duration-300">
                <Icon className="w-5 h-5 text-orange" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange transition-colors duration-200">
                  {t(titleKey)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact grid — remaining 6 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {compact.map(({ Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-dark-3/60 border border-white/5 hover:border-orange/30 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/8 flex gap-4 items-start"
            >
              <div className="w-9 h-9 rounded-lg bg-orange/10 border border-orange/15 flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-all duration-300">
                <Icon className="w-4 h-4 text-orange" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-orange transition-colors duration-200">
                  {t(titleKey)}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{t(descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ajax lowkey mention */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/20 text-xs mt-10 tracking-wide"
        >
          {t("services.ajax")}
        </motion.p>
      </div>
    </section>
  );
}
