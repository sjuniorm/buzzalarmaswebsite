"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ff914d 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />

      {/*
        PHOTO GUIDE: To add a background photo to the hero:
        1. Save your image to /public/images/hero-bg.jpg
        2. Replace the <div className="absolute inset-0 bg-dark"> above with:
           <Image src="/images/hero-bg.jpg" alt="Hero" fill className="object-cover opacity-30" priority />
        3. Make sure to import Image from "next/image"
      */}

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
          R.N.S.P. Certified · DGP 4557
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-2"
        >
          {t("hero.tagline")}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-orange leading-none tracking-tight mb-6"
        >
          {t("hero.tagline2")}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-light text-white/60 mb-4 italic"
        >
          {t("hero.sub")}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.desc")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:scale-105"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-orange text-white/80 hover:text-orange font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-orange/50 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
