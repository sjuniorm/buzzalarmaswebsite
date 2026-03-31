"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { PhoneIcon, WhatsAppIcon, MailIcon, MapPinIcon } from "@/components/Icons";

const locations = [
  "Tenerife",
  "Gran Canaria",
  "Lanzarote",
  "Fuerteventura",
  "La Palma",
  "La Gomera",
  "El Hierro",
  "La Graciosa",
  "Alicante / Costa Blanca",
  "Other",
];

const contactInfo = [
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+34 950 09 10 11",
    href: "https://wa.me/34950091011",
    highlight: true,
    note: "Fastest response",
  },
  {
    Icon: PhoneIcon,
    label: "Main",
    value: "+34 902 099 910",
    href: "tel:+34902099910",
    highlight: false,
  },
  {
    Icon: PhoneIcon,
    label: "Tenerife",
    value: "+34 922 099 200",
    href: "tel:+34922099200",
    highlight: false,
  },
  {
    Icon: PhoneIcon,
    label: "Gran Canaria / Lanzarote / Fuerteventura",
    value: "+34 928 077 079",
    href: "tel:+34928077079",
    highlight: false,
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: "hola@buzzalarmas.com",
    href: "mailto:hola@buzzalarmas.com",
    highlight: false,
  },
  {
    Icon: MailIcon,
    label: "Admin",
    value: "administracion@buzzalarmas.com",
    href: "mailto:administracion@buzzalarmas.com",
    highlight: false,
  },
];

export default function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", location: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("contact.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">{t("contact.reach")}</h3>

            {contactInfo.map(({ Icon, label, value, href, highlight, note }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 group ${
                  highlight
                    ? "bg-green-950/30 border-green-500/30 hover:border-green-400/50"
                    : "bg-dark-2 border-white/5 hover:border-orange/30"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  highlight ? "bg-green-500/20" : "bg-orange/10"
                }`}>
                  <Icon className={`w-4 h-4 ${highlight ? "text-green-400" : "text-orange"}`} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white/40 text-xs uppercase tracking-wider">{label}</p>
                    {note && (
                      <span className="text-green-400 text-xs font-semibold">· {note}</span>
                    )}
                  </div>
                  <p className={`text-sm font-medium mt-0.5 truncate ${highlight ? "text-green-400" : "text-white/80 group-hover:text-orange"} transition-colors`}>
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Coverage note */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-dark-2 border border-white/5 mt-2">
              <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPinIcon className="w-4 h-4 text-orange" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">{t("coverage.title")}</p>
                <p className="text-white/70 text-sm mt-0.5">Canary Islands · Province of Alicante</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-dark-2 border border-white/5 rounded-2xl p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/60 text-sm mb-2">{t("contact.name")} *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">{t("contact.email")} *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/60 text-sm mb-2">{t("contact.phone")}</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">{t("contact.island")} *</label>
                <select
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                >
                  <option value="" disabled>—</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">{t("contact.message")} *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.message.placeholder")}
                className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-bold py-4 rounded-full transition-all duration-200 text-lg shadow-lg shadow-orange/20"
            >
              {status === "loading"
                ? t("contact.submitting")
                : status === "success"
                  ? "✓ " + t("contact.success")
                  : t("contact.submit")}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{t("contact.error")}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
