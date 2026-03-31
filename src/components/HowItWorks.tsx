"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

type Phase = "setup" | "alert" | "response" | "resolved";

interface StepData {
  titleKey: string;
  descKey: string;
  phase: Phase;
  phaseLabel: { en: string; es: string };
}

const stepData: StepData[] = [
  { titleKey: "how2.step1.title", descKey: "how2.step1.desc", phase: "setup", phaseLabel: { en: "Step 1 — Setup", es: "Paso 1 — Instalación" } },
  { titleKey: "how2.step2.title", descKey: "how2.step2.desc", phase: "setup", phaseLabel: { en: "Step 2 — Armed", es: "Paso 2 — Activada" } },
  { titleKey: "how2.step3.title", descKey: "how2.step3.desc", phase: "alert", phaseLabel: { en: "Step 3 — ⚠ Alert", es: "Paso 3 — ⚠ Alerta" } },
  { titleKey: "how2.step4.title", descKey: "how2.step4.desc", phase: "alert", phaseLabel: { en: "Step 4 — Signal Sent", es: "Paso 4 — Señal enviada" } },
  { titleKey: "how2.step5.title", descKey: "how2.step5.desc", phase: "response", phaseLabel: { en: "Step 5 — Response", es: "Paso 5 — Respuesta" } },
  { titleKey: "how2.step6.title", descKey: "how2.step6.desc", phase: "response", phaseLabel: { en: "Step 6 — Notified", es: "Paso 6 — Notificado" } },
  { titleKey: "how2.step7.title", descKey: "how2.step7.desc", phase: "resolved", phaseLabel: { en: "Step 7 — Secured", es: "Paso 7 — Asegurado" } },
];

const DURATION_MS = 5500;

/* ─────────────────────────────────────────────────────────
   SHARED HOUSE COMPONENT
───────────────────────────────────────────────────────── */
function House({ dimmed = false }: { dimmed?: boolean }) {
  const op = dimmed ? 0.25 : 0.5;
  return (
    <g>
      <rect x="95" y="170" width="310" height="155" fill={`rgba(255,255,255,${op * 0.04})`} stroke={`rgba(255,255,255,${op})`} strokeWidth="1.8" />
      <polyline points="75,170 250,72 425,170" fill="none" stroke={`rgba(255,145,77,${op + 0.15})`} strokeWidth="2.5" />
      <rect x="195" y="237" width="60" height="88" rx="2" fill={`rgba(255,255,255,${op * 0.06})`} stroke={`rgba(255,255,255,${op * 0.6})`} strokeWidth="1.3" />
      <rect x="113" y="190" width="58" height="52" rx="2" fill={`rgba(255,255,255,${op * 0.06})`} stroke={`rgba(255,255,255,${op * 0.4})`} strokeWidth="1" />
      <rect x="329" y="190" width="58" height="52" rx="2" fill={`rgba(255,255,255,${op * 0.06})`} stroke={`rgba(255,255,255,${op * 0.4})`} strokeWidth="1" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 1 — INSTALLATION
───────────────────────────────────────────────────────── */
function SceneInstallation() {
  const sensors = [{ cx: 95, cy: 170 }, { cx: 405, cy: 170 }, { cx: 250, cy: 72 }];
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      <House />
      {sensors.map(({ cx, cy }, i) => (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r="18" fill="none" stroke="rgba(255,145,77,0.35)" strokeWidth="1.5"
            animate={{ r: [12, 26, 12], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.6 }} />
          <motion.circle cx={cx} cy={cy} r="6" fill="#ff914d"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: i * 0.4 + 0.2, type: "spring", stiffness: 280 }} />
        </g>
      ))}
      {/* Installer */}
      <motion.g initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
        <circle cx="58" cy="278" r="13" fill="rgba(255,145,77,0.55)" />
        <rect x="51" y="291" width="14" height="32" rx="4" fill="rgba(255,145,77,0.35)" />
        <motion.line x1="68" y1="288" x2="88" y2="272" stroke="#ff914d" strokeWidth="3" strokeLinecap="round"
          animate={{ rotate: [-25, 25, -25] }} style={{ transformOrigin: "68px 288px" }}
          transition={{ duration: 0.9, repeat: Infinity }} />
      </motion.g>
      {/* Label */}
      <motion.g initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
        <rect x="300" y="295" width="165" height="30" rx="15" fill="rgba(255,145,77,0.12)" stroke="rgba(255,145,77,0.4)" strokeWidth="1" />
        <text x="382" y="314" textAnchor="middle" fill="#ff914d" fontSize="11" fontFamily="Arial" fontWeight="bold">SENSORS INSTALLED</text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 2 — ARMING
───────────────────────────────────────────────────────── */
function SceneArming() {
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      {[1.6, 1.3, 1.0].map((s, i) => (
        <motion.ellipse key={i} cx="250" cy="215" rx={160 * s} ry={95 * s}
          fill="none" stroke="rgba(255,145,77,0.1)" strokeWidth="1"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }} />
      ))}
      <House />
      {/* Shield */}
      <motion.path d="M250,118 L298,140 L298,183 C298,216 250,238 250,238 C250,238 202,216 202,183 L202,140 Z"
        fill="rgba(255,145,77,0.12)" stroke="rgba(255,145,77,0.7)" strokeWidth="2.5"
        animate={{ scale: [1, 1.04, 1] }} style={{ transformOrigin: "250px 178px" }}
        transition={{ duration: 2.2, repeat: Infinity }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x="237" y="173" width="26" height="20" rx="2" fill="#ff914d" opacity="0.85" />
        <path d="M240,173 L240,166 C240,159 260,159 260,166 L260,173" fill="none" stroke="#ff914d" strokeWidth="2.5" />
      </motion.g>
      {/* Person walking */}
      <motion.g animate={{ x: [0, 55] }} transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
        <circle cx="420" cy="278" r="12" fill="rgba(255,255,255,0.45)" />
        <rect x="413" y="290" width="14" height="30" rx="4" fill="rgba(255,255,255,0.25)" />
      </motion.g>
      {/* Phone */}
      <motion.g initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
        <rect x="18" y="248" width="56" height="88" rx="8" fill="rgba(14,14,14,0.95)" stroke="rgba(255,145,77,0.55)" strokeWidth="1.8" />
        <rect x="24" y="257" width="44" height="60" rx="3" fill="rgba(255,145,77,0.07)" />
        <text x="46" y="278" textAnchor="middle" fill="#ff914d" fontSize="7.5" fontFamily="Arial" fontWeight="bold">ARMED</text>
        <path d="M46,284 L54,288 L54,298 C54,305 46,309 46,309 C46,309 38,305 38,298 L38,288 Z"
          fill="rgba(255,145,77,0.35)" stroke="#ff914d" strokeWidth="1.2" />
        <motion.circle cx="46" cy="325" r="5" fill="rgba(255,255,255,0.12)"
          animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 3 — INTRUSION DETECTED
───────────────────────────────────────────────────────── */
function SceneIntrusion() {
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      <motion.circle cx="250" cy="180" r="200" fill="rgba(190,20,0,0.07)"
        animate={{ r: [170, 215, 170] }} transition={{ duration: 1.1, repeat: Infinity }} />
      <House dimmed />
      {/* Flashing sensors */}
      {[{ cx: 95, cy: 170 }, { cx: 405, cy: 170 }].map(({ cx, cy }, i) => (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r="20" fill="none" stroke="rgba(220,38,38,0.6)" strokeWidth="2"
            animate={{ r: [12, 28, 12], opacity: [1, 0, 1] }}
            transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }} />
          <motion.circle cx={cx} cy={cy} r="7" fill="#dc2626"
            animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 0.45, repeat: Infinity }} />
        </g>
      ))}
      {/* Intruder */}
      <motion.g initial={{ x: 70 }} animate={{ x: 0 }} transition={{ duration: 1.4 }}>
        <circle cx="62" cy="272" r="15" fill="rgba(100,0,0,0.75)" />
        <rect x="54" y="287" width="16" height="36" rx="4" fill="rgba(80,0,0,0.65)" />
      </motion.g>
      {/* Alert triangle */}
      <motion.g initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.4, delay: 0.2 }} style={{ transformOrigin: "250px 48px" }}>
        <polygon points="250,12 300,88 200,88" fill="rgba(220,38,38,0.18)" stroke="#ef4444" strokeWidth="3" />
        <text x="250" y="76" textAnchor="middle" fill="#ef4444" fontSize="30" fontFamily="Arial" fontWeight="bold">!</text>
      </motion.g>
      {/* ALERT label */}
      <motion.rect x="170" y="99" width="160" height="30" rx="15"
        fill="rgba(220,38,38,0.18)" stroke="#ef4444" strokeWidth="1.5"
        animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 0.75, repeat: Infinity }} />
      <motion.text x="250" y="119" textAnchor="middle" fill="#ef4444" fontSize="12"
        fontFamily="Arial" fontWeight="bold"
        animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 0.75, repeat: Infinity }}>
        INTRUSION DETECTED
      </motion.text>
      {/* Alarm wave from house */}
      {[1, 2, 3].map((i) => (
        <motion.circle key={i} cx="250" cy="200" r={i * 45}
          fill="none" stroke="rgba(220,38,38,0.25)" strokeWidth="1.5"
          animate={{ r: [i * 35, i * 55, i * 35], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 4 — SIGNAL SENT TO CONTROL ROOM
───────────────────────────────────────────────────────── */
function SceneSignal() {
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      <House dimmed />
      {/* Expanding rings */}
      {[1, 2, 3, 4].map((i) => (
        <motion.circle key={i} cx="250" cy="190" r={i * 48}
          fill="none" stroke="rgba(255,145,77,0.35)" strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0.75, 0], scale: [0.55, 1.5] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55, ease: "easeOut" }} />
      ))}
      <motion.circle cx="250" cy="190" r="12" fill="#ff914d"
        animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 1, repeat: Infinity }} />
      {/* Control tower */}
      <motion.g initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
        <rect x="400" y="200" width="32" height="90" fill="rgba(255,145,77,0.18)" stroke="rgba(255,145,77,0.55)" strokeWidth="1.5" />
        <line x1="416" y1="200" x2="416" y2="178" stroke="rgba(255,145,77,0.6)" strokeWidth="2.5" />
        <ellipse cx="416" cy="215" rx="22" ry="9" fill="none" stroke="rgba(255,145,77,0.45)" strokeWidth="1.5" />
        <text x="416" y="307" textAnchor="middle" fill="rgba(255,145,77,0.65)" fontSize="8.5" fontFamily="Arial" fontWeight="bold">CONTROL</text>
        <motion.circle cx="416" cy="185" r="5" fill="#ff914d"
          animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.55, repeat: Infinity, delay: 1.2 }} />
      </motion.g>
      {/* Traveling signal dots */}
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} cx="0" cy="0" r="4.5" fill="#ff914d"
          animate={{ cx: [250, 412], cy: [190, 218], opacity: [1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.45, ease: "easeIn" }} />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 5 — POLICE DISPATCHED
───────────────────────────────────────────────────────── */
function ScenePolice() {
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      <House dimmed />
      {/* Siren glow */}
      <motion.circle cx="250" cy="52" r="28" fill="rgba(255,145,77,0.12)"
        animate={{ r: [20, 42, 20], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 0.9, repeat: Infinity }} />
      <motion.circle cx="250" cy="52" r="11" fill="#ff914d"
        animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.45, repeat: Infinity }} />
      {/* Police car */}
      <motion.g initial={{ x: -180 }} animate={{ x: 0 }} transition={{ duration: 1.3, ease: "easeOut" }}>
        <rect x="28" y="280" width="128" height="48" rx="9" fill="rgba(18,18,18,0.95)" stroke="rgba(255,145,77,0.65)" strokeWidth="2" />
        <rect x="46" y="266" width="92" height="24" rx="5" fill="rgba(18,18,18,0.95)" stroke="rgba(255,145,77,0.45)" strokeWidth="1.5" />
        <circle cx="64" cy="333" r="14" fill="rgba(10,10,10,1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
        <circle cx="130" cy="333" r="14" fill="rgba(10,10,10,1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
        <motion.rect x="52" y="261" width="88" height="7" rx="3" fill="#ff914d"
          animate={{ fill: ["#ff914d", "#3b82f6", "#ff914d"] }}
          transition={{ duration: 0.55, repeat: Infinity }} />
        <text x="92" y="301" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Arial" fontWeight="bold">POLICÍA</text>
      </motion.g>
      {/* Motion lines */}
      {[0, 1, 2].map((i) => (
        <motion.line key={i} x1="0" y1={283 + i * 11} x2="22" y2={283 + i * 11}
          stroke="rgba(255,145,77,0.45)" strokeWidth="2.5" strokeLinecap="round"
          animate={{ x1: [-14, 26], opacity: [0, 1, 0] }}
          transition={{ duration: 0.38, repeat: Infinity, delay: i * 0.1 }} />
      ))}
      {/* Banner */}
      <motion.g initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
        <rect x="155" y="265" width="190" height="28" rx="14" fill="rgba(255,145,77,0.14)" stroke="rgba(255,145,77,0.45)" strokeWidth="1" />
        <text x="250" y="283" textAnchor="middle" fill="#ff914d" fontSize="11" fontFamily="Arial" fontWeight="bold">POLICE DISPATCHED</text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 6 — CLIENT NOTIFICATION + CAMERA
───────────────────────────────────────────────────────── */
function SceneNotification() {
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      {/* Phone */}
      <motion.g initial={{ scale: 0.82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
        <rect x="172" y="30" width="156" height="290" rx="22" fill="rgba(12,12,12,0.97)" stroke="rgba(255,145,77,0.55)" strokeWidth="2.5" />
        <rect x="181" y="52" width="138" height="248" rx="11" fill="rgba(18,18,18,0.92)" />
        <rect x="217" y="36" width="66" height="13" rx="6" fill="rgba(0,0,0,0.7)" />
        {/* Notification */}
        <motion.g initial={{ y: -28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55, duration: 0.4 }}>
          <rect x="188" y="60" width="124" height="55" rx="11" fill="rgba(255,145,77,0.18)" stroke="rgba(255,145,77,0.5)" strokeWidth="1" />
          <circle cx="202" cy="74" r="7" fill="#ff914d" />
          <text x="215" y="72" fill="white" fontSize="7.5" fontFamily="Arial" fontWeight="bold">BUZZ ALARMAS</text>
          <text x="192" y="88" fill="rgba(255,255,255,0.72)" fontSize="6.5" fontFamily="Arial">⚠ Alarm triggered.</text>
          <text x="192" y="100" fill="rgba(255,255,255,0.72)" fontSize="6.5" fontFamily="Arial">Police notified.</text>
        </motion.g>
        {/* Camera grid */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}>
          <text x="250" y="132" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="Arial">LIVE CAMERAS</text>
          {[{ x: 188, y: 137 }, { x: 252, y: 137 }, { x: 188, y: 192 }, { x: 252, y: 192 }].map(({ x, y }, i) => (
            <g key={i}>
              <rect x={x} y={y} width="54" height="44" rx="5" fill="rgba(24,24,24,0.9)" stroke="rgba(255,145,77,0.2)" strokeWidth="1" />
              <motion.circle cx={x + 8} cy={y + 9} r="3.5" fill="#dc2626"
                animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.28 }} />
              <text fill="rgba(255,255,255,0.2)" fontSize="5.5" x={x + 15} y={y + 12} fontFamily="Arial">LIVE</text>
              <line x1={x + 6} y1={y + 24} x2={x + 48} y2={y + 24} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              <line x1={x + 6} y1={y + 33} x2={x + 48} y2={y + 33} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </g>
          ))}
        </motion.g>
        {/* CTA button */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
          <rect x="194" y="248" width="112" height="27" rx="13" fill="rgba(255,145,77,0.28)" stroke="rgba(255,145,77,0.6)" strokeWidth="1" />
          <text x="250" y="265" textAnchor="middle" fill="#ff914d" fontSize="8.5" fontFamily="Arial" fontWeight="bold">VIEW LIVE →</text>
        </motion.g>
      </motion.g>
      {/* Notification badge */}
      <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 380 }}>
        <circle cx="328" cy="30" r="20" fill="#dc2626" />
        <text x="328" y="37" textAnchor="middle" fill="white" fontSize="15" fontFamily="Arial" fontWeight="bold">1</text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE 7 — RESOLVED
───────────────────────────────────────────────────────── */
function SceneResolved() {
  const sparkles = [
    { cx: 140, cy: 100, delay: 0.85 }, { cx: 365, cy: 88, delay: 1.0 },
    { cx: 112, cy: 255, delay: 1.1 }, { cx: 395, cy: 245, delay: 0.92 },
    { cx: 250, cy: 55, delay: 1.2 }, { cx: 310, cy: 310, delay: 1.05 },
  ];
  return (
    <svg viewBox="0 0 500 360" className="w-full h-full" aria-hidden>
      <motion.circle cx="250" cy="185" r="160" fill="rgba(34,197,94,0.05)"
        animate={{ r: [130, 175, 130] }} transition={{ duration: 3.2, repeat: Infinity }} />
      <House />
      {/* Checkmark */}
      <motion.path d="M185,182 L228,228 L328,128" fill="none" stroke="#22c55e" strokeWidth="9"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }} />
      {/* Dashed orbit */}
      <motion.circle cx="256" cy="180" r="70" fill="none" stroke="rgba(34,197,94,0.38)" strokeWidth="2"
        strokeDasharray="9 5" animate={{ rotate: 360 }}
        style={{ transformOrigin: "256px 180px" }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
      {/* Sparkles */}
      {sparkles.map(({ cx, cy, delay }, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ delay, duration: 0.65 }}>
          <line x1={cx - 9} y1={cy} x2={cx + 9} y2={cy} stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1={cx} y1={cy - 9} x2={cx} y2={cy + 9} stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
      ))}
      {/* Police car parked */}
      <motion.g initial={{ x: -110, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.85, delay: 0.25 }}>
        <rect x="348" y="284" width="108" height="40" rx="8" fill="rgba(18,18,18,0.88)" stroke="rgba(34,197,94,0.45)" strokeWidth="1.5" />
        <rect x="364" y="272" width="76" height="20" rx="4" fill="rgba(18,18,18,0.88)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
        <circle cx="374" cy="326" r="12" fill="rgba(10,10,10,1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <circle cx="438" cy="326" r="12" fill="rgba(10,10,10,1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <rect x="369" y="267" width="66" height="7" rx="3" fill="rgba(34,197,94,0.6)" />
      </motion.g>
      {/* Secured badge */}
      <motion.g initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}>
        <rect x="152" y="305" width="196" height="34" rx="17" fill="rgba(34,197,94,0.13)" stroke="rgba(34,197,94,0.45)" strokeWidth="1.5" />
        <text x="250" y="326" textAnchor="middle" fill="#22c55e" fontSize="12.5" fontFamily="Arial" fontWeight="bold">PROPERTY SECURED</text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SCENE REGISTRY
───────────────────────────────────────────────────────── */
const SCENES = [SceneInstallation, SceneArming, SceneIntrusion, SceneSignal, ScenePolice, SceneNotification, SceneResolved];

/* ─────────────────────────────────────────────────────────
   PHASE STYLING
───────────────────────────────────────────────────────── */
const PHASE_BG: Record<Phase, string> = {
  setup:    "from-[#0d0d0d] via-[#141414] to-[#0a0a0a]",
  alert:    "from-[#1c0300] via-[#110100] to-[#0a0a0a]",
  response: "from-[#140800] via-[#0d0500] to-[#0a0a0a]",
  resolved: "from-[#001a07] via-[#000e04] to-[#0a0a0a]",
};
const PHASE_BORDER: Record<Phase, string> = {
  setup: "border-white/8", alert: "border-red-500/35", response: "border-orange/30", resolved: "border-green-500/35",
};
const PHASE_ACCENT: Record<Phase, string> = {
  setup: "text-white/55", alert: "text-red-400", response: "text-orange", resolved: "text-green-400",
};
const PHASE_DOT: Record<Phase, string> = {
  setup: "bg-white/30", alert: "bg-red-500", response: "bg-orange", resolved: "bg-green-500",
};
const PHASE_PROGRESS: Record<Phase, string> = {
  setup: "bg-orange", alert: "bg-red-500", response: "bg-orange", resolved: "bg-green-500",
};

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
export default function HowItWorks() {
  const { t, lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const touchStartX = useRef(0);

  const step = stepData[current];
  const SceneComp = SCENES[current];

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setPlaying(true);
  }, []);

  const prev = useCallback(() => goTo((current - 1 + 7) % 7), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % 7), [current, goTo]);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setCurrent((c) => (c + 1) % 7), DURATION_MS);
    return () => clearTimeout(t);
  }, [current, playing]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <section id="how" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t("how2.title")}</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t("how2.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Player */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">

          {/* ── Scene panel ── */}
          <div
            className={`relative rounded-3xl border overflow-hidden bg-gradient-to-br transition-all duration-700 cursor-pointer select-none ${PHASE_BG[step.phase]} ${PHASE_BORDER[step.phase]}`}
            style={{ minHeight: 380 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Step badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
              <span className={`w-2 h-2 rounded-full ${PHASE_DOT[step.phase]}`} />
              <span className="text-white/70 text-xs font-semibold tabular-nums">{current + 1} / 7</span>
            </div>

            {/* Animated scene */}
            <AnimatePresence mode="wait">
              <motion.div key={current} className="w-full p-4" style={{ minHeight: 380 }}
                initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.3 }}>
                <SceneComp />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrows */}
            <button onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-orange/50 text-white/60 hover:text-white flex items-center justify-center transition-all"
              aria-label="Previous">
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="10 3 5 8 10 13" /></svg>
            </button>
            <button onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-orange/50 text-white/60 hover:text-white flex items-center justify-center transition-all"
              aria-label="Next">
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 3 11 8 6 13" /></svg>
            </button>

            {/* Swipe hint — mobile only */}
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/20 text-xs lg:hidden">swipe to navigate</p>
          </div>

          {/* ── Content panel ── */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="space-y-4">

                {/* Phase label */}
                <span className={`inline-block text-xs font-black uppercase tracking-[0.18em] ${PHASE_ACCENT[step.phase]}`}>
                  {step.phaseLabel[lang as "en" | "es"]}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {t(step.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-base leading-relaxed">
                  {t(step.descKey)}
                </p>

                {/* Progress bar */}
                <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                  {playing && (
                    <motion.div key={`pb-${current}`} className={`h-full rounded-full ${PHASE_PROGRESS[step.phase]}`}
                      initial={{ width: "0%" }} animate={{ width: "100%" }}
                      transition={{ duration: DURATION_MS / 1000, ease: "linear" }} />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot navigation */}
            <div className="flex items-center gap-2 flex-wrap">
              {stepData.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? `w-8 h-2.5 ${PHASE_PROGRESS[step.phase]}`
                      : "w-2.5 h-2.5 bg-white/15 hover:bg-white/35"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}

              {/* Play/pause */}
              <button
                onClick={() => setPlaying((p) => !p)}
                className="ml-2 text-white/30 hover:text-orange transition-colors"
                aria-label={playing ? "Pause" : "Play"}>
                {playing ? (
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
                    <rect x="3" y="2" width="3.5" height="12" rx="1" />
                    <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
                    <path d="M3 2.5l11 5.5-11 5.5z" />
                  </svg>
                )}
              </button>
            </div>

            {/* CTA */}
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange/20 w-fit text-sm">
              {t("nav.cta")}
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
