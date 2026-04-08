"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { ShieldIcon, LockIcon, CameraIcon, BellIcon, ShieldCheckIcon } from "@/components/Icons";

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

      {/* Floating security icons */}
      {[
        { Icon: ShieldIcon,      top: "12%", left: "6%",  delay: 0,   duration: 7,  size: "w-9 h-9"  },
        { Icon: LockIcon,        top: "18%", left: "91%", delay: 1.4, duration: 8,  size: "w-7 h-7"  },
        { Icon: CameraIcon,      top: "72%", left: "88%", delay: 0.7, duration: 6,  size: "w-8 h-8"  },
        { Icon: BellIcon,        top: "78%", left: "5%",  delay: 2.1, duration: 9,  size: "w-7 h-7"  },
        { Icon: ShieldCheckIcon, top: "44%", left: "94%", delay: 3.0, duration: 7,  size: "w-6 h-6"  },
      ].map(({ Icon, top, left, delay, duration, size }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-orange/12 z-10"
          style={{ top, left }}
          animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
          transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon className={size} />
        </motion.div>
      ))}

      {/*
        HERO PHOTO: Drop public/images/hero-bg.jpg into the project and it appears automatically.
        Recommended: 1920×1080px JPG, under 300KB. See PHOTOS.md for details.
      */}
      <Image
        src="/images/header-website.png"
        alt="Buzz Alarmas — professional alarm installation"
        fill
        className="object-cover opacity-25 [object-position:85%_center] md:[object-position:center]"
        priority
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />

      {/* Dark gradient overlay — keeps text readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mt-20 sm:mt-0 mb-6 sm:mb-8 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
          Homologada R.N.S.P. 4557 · Con aviso a policía
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
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 bg-gradient-to-r from-[#ff914d] via-[#e65a1e] to-[#ff914d] bg-clip-text text-transparent animate-gradient-text"
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
