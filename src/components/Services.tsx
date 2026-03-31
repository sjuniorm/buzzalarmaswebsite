"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { HomeIcon, BuildingIcon, EyeIcon, SmartphoneIcon, LockIcon, FlameIcon } from "@/components/Icons";

const services = [
  { Icon: HomeIcon, titleKey: "services.home.title", descKey: "services.home.desc" },
  { Icon: BuildingIcon, titleKey: "services.business.title", descKey: "services.business.desc" },
  { Icon: EyeIcon, titleKey: "services.monitoring.title", descKey: "services.monitoring.desc" },
  { Icon: SmartphoneIcon, titleKey: "services.app.title", descKey: "services.app.desc" },
  { Icon: LockIcon, titleKey: "services.squatter.title", descKey: "services.squatter.desc" },
  { Icon: FlameIcon, titleKey: "services.fire.title", descKey: "services.fire.desc" },
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-dark-2 relative overflow-hidden">
      {/* Top gradient fade from dark */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

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
            {t("services.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("services.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-dark-3 border border-white/5 hover:border-orange/50 rounded-2xl p-8 transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange transition-colors duration-200">
                {t(titleKey)}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {t(descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
