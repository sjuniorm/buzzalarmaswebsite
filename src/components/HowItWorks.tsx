"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import {
  WrenchIcon,
  KeyIcon,
  AlertTriangleIcon,
  BroadcastIcon,
  SirenIcon,
  CameraIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

type Phase = "setup" | "alert" | "response" | "resolved";

interface Step {
  Icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descKey: string;
  phase: Phase;
  animate?: "pulse" | "wave" | "spin";
}

const steps: Step[] = [
  {
    Icon: WrenchIcon,
    titleKey: "how2.step1.title",
    descKey: "how2.step1.desc",
    phase: "setup",
  },
  {
    Icon: KeyIcon,
    titleKey: "how2.step2.title",
    descKey: "how2.step2.desc",
    phase: "setup",
  },
  {
    Icon: AlertTriangleIcon,
    titleKey: "how2.step3.title",
    descKey: "how2.step3.desc",
    phase: "alert",
    animate: "pulse",
  },
  {
    Icon: BroadcastIcon,
    titleKey: "how2.step4.title",
    descKey: "how2.step4.desc",
    phase: "alert",
    animate: "wave",
  },
  {
    Icon: SirenIcon,
    titleKey: "how2.step5.title",
    descKey: "how2.step5.desc",
    phase: "response",
  },
  {
    Icon: CameraIcon,
    titleKey: "how2.step6.title",
    descKey: "how2.step6.desc",
    phase: "response",
  },
  {
    Icon: ShieldCheckIcon,
    titleKey: "how2.step7.title",
    descKey: "how2.step7.desc",
    phase: "resolved",
  },
];

const phaseStyles: Record<Phase, { dot: string; card: string; badge: string; icon: string }> = {
  setup: {
    dot: "border-white/20 bg-dark-2",
    card: "border-white/8 bg-dark-2",
    badge: "bg-white/10 text-white/60",
    icon: "text-white/60",
  },
  alert: {
    dot: "border-orange bg-dark",
    card: "border-orange/40 bg-dark-2",
    badge: "bg-orange/20 text-orange",
    icon: "text-orange",
  },
  response: {
    dot: "border-orange/60 bg-dark",
    card: "border-orange/20 bg-dark-2",
    badge: "bg-orange/10 text-orange/80",
    icon: "text-orange/80",
  },
  resolved: {
    dot: "border-green-500/60 bg-dark",
    card: "border-green-500/20 bg-dark-2",
    badge: "bg-green-500/10 text-green-400",
    icon: "text-green-400",
  },
};

const phaseLabels: Record<Phase, { en: string; es: string }> = {
  setup: { en: "Setup", es: "Configuración" },
  alert: { en: "Alert", es: "Alerta" },
  response: { en: "Response", es: "Respuesta" },
  resolved: { en: "Resolved", es: "Resuelto" },
};

function PulseRing({ color = "orange" }: { color?: string }) {
  return (
    <span className="absolute inset-0 rounded-full pointer-events-none">
      <span
        className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
          color === "orange" ? "bg-orange" : "bg-green-400"
        }`}
        style={{ animationDuration: "1.6s" }}
      />
    </span>
  );
}

function WaveRings() {
  return (
    <span className="absolute inset-0 rounded-full pointer-events-none">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border border-orange/40 animate-ping"
          style={{
            animationDuration: "2s",
            animationDelay: `${i * 0.5}s`,
            transform: `scale(${1 + i * 0.4})`,
          }}
        />
      ))}
    </span>
  );
}

export default function HowItWorks() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how" ref={sectionRef} className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("how2.title")}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {t("how2.sub")}
          </p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Background line — desktop center, mobile left */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

          {/* Animated orange fill line */}
          <motion.div
            className="absolute left-6 lg:left-1/2 top-0 w-px bg-gradient-to-b from-orange via-orange to-orange/40 origin-top -translate-x-1/2"
            style={{ scaleY: lineHeight, height: "100%" }}
          />

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => {
              const styles = phaseStyles[step.phase];
              const isEven = i % 2 === 0;
              const isAlert = step.phase === "alert";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-start gap-6 pb-12 ${
                    /* On desktop: even steps go left, odd go right */
                    "lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10"
                  }`}
                >
                  {/* ── Desktop left slot ── */}
                  <div className={`hidden lg:flex ${isEven ? "justify-end" : "justify-start"}`}>
                    {isEven && (
                      <StepCard step={step} index={i} styles={styles} t={t} lang={lang} />
                    )}
                  </div>

                  {/* ── Center dot (desktop) / Left dot (mobile) ── */}
                  <div className="relative flex flex-col items-center shrink-0">
                    {/* Dot */}
                    <div className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${styles.dot}`}>
                      {isAlert && step.animate === "pulse" && <PulseRing />}
                      {isAlert && step.animate === "wave" && <WaveRings />}
                      <step.Icon className={`w-5 h-5 relative z-10 ${styles.icon}`} />
                    </div>

                    {/* Step number below dot */}
                    <span className={`mt-1.5 text-xs font-bold px-2 py-0.5 rounded-full ${styles.badge}`}>
                      {i + 1}
                    </span>
                  </div>

                  {/* ── Desktop right slot ── */}
                  <div className={`hidden lg:flex ${!isEven ? "justify-start" : "justify-end"}`}>
                    {!isEven && (
                      <StepCard step={step} index={i} styles={styles} t={t} lang={lang} />
                    )}
                  </div>

                  {/* ── Mobile card (always right of the dot) ── */}
                  <div className="lg:hidden flex-1">
                    <StepCard step={step} index={i} styles={styles} t={t} lang={lang} isMobile />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Phase legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-8 border-t border-white/5"
        >
          {(Object.keys(phaseLabels) as Phase[]).map((phase) => (
            <div key={phase} className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  phase === "setup"
                    ? "bg-white/30"
                    : phase === "alert"
                      ? "bg-orange"
                      : phase === "response"
                        ? "bg-orange/60"
                        : "bg-green-400"
                }`}
              />
              <span className="text-white/40 text-xs">{phaseLabels[phase][lang]}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Step card sub-component ── */
function StepCard({
  step,
  index,
  styles,
  t,
  lang,
  isMobile = false,
}: {
  step: Step;
  index: number;
  styles: ReturnType<typeof Object.values<(typeof phaseStyles)[Phase]>>[0];
  t: (key: string) => string;
  lang: string;
  isMobile?: boolean;
}) {
  const isAlert = step.phase === "alert";
  const phaseLabel = phaseLabels[step.phase][lang as "en" | "es"];

  return (
    <div
      className={`rounded-2xl border p-5 transition-all duration-300 ${styles.card} ${
        isMobile ? "w-full" : "w-72 xl:w-80"
      } ${isAlert ? "shadow-lg shadow-orange/10" : ""}`}
    >
      {/* Phase badge */}
      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${styles.badge}`}>
        {phaseLabel}
      </span>

      {/* Title */}
      <h3
        className={`font-black text-base mb-2 ${
          step.phase === "resolved" ? "text-green-400" : isAlert ? "text-orange" : "text-white"
        }`}
      >
        {t(step.titleKey)}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed">{t(step.descKey)}</p>

      {/* Alert indicator */}
      {isAlert && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-orange/10">
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          <span className="text-orange/60 text-xs font-medium">{t("how2.live")}</span>
        </div>
      )}

      {/* Resolved indicator */}
      {step.phase === "resolved" && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-green-500/10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-green-400/60 text-xs font-medium">{t("how2.resolved")}</span>
        </div>
      )}
    </div>
  );
}
