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
  "Provincia de Alicante",
  "Otra / Other",
];

const phones = [
  { label: "Principal", value: "+34 902 099 910", href: "tel:+34902099910" },
];

const emails = [
  { label: "Info",  value: "hola@buzzalarmas.com",           href: "mailto:hola@buzzalarmas.com" },
  { label: "Admin", value: "administracion@buzzalarmas.com", href: "mailto:administracion@buzzalarmas.com" },
];

export default function ContactForm() {
  const { t, lang } = useLang();
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

            {/* WhatsApp — highlighted */}
            <a
              href="https://wa.me/34950091011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-orange/10 border border-orange/30 hover:border-orange/60 hover:bg-orange/15 transition-all duration-200 group mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-orange" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-orange text-xs font-bold uppercase tracking-wider">WhatsApp</p>
                  <span className="text-orange/60 text-xs">· {lang === "en" ? "Fastest response" : "Respuesta más rápida"}</span>
                </div>
                <p className="text-white font-semibold mt-0.5">+34 950 09 10 11</p>
              </div>
            </a>

            {/* Phone numbers */}
            <div className="bg-dark-2 border border-white/5 rounded-xl overflow-hidden mb-4">
              {phones.map(({ label, value, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`flex items-center justify-between px-4 py-3 hover:bg-white/4 transition-colors duration-150 group ${
                    i < phones.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-3.5 h-3.5 text-orange/60 shrink-0" />
                    <span className="text-white/40 text-xs uppercase tracking-wider">{label}</span>
                  </div>
                  <span className="text-white/80 text-sm font-medium group-hover:text-orange transition-colors">{value}</span>
                </a>
              ))}
            </div>

            {/* Emails */}
            <div className="bg-dark-2 border border-white/5 rounded-xl overflow-hidden mb-4">
              {emails.map(({ label, value, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`flex items-center justify-between px-4 py-3 hover:bg-white/4 transition-colors duration-150 group ${
                    i < emails.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MailIcon className="w-3.5 h-3.5 text-orange/60 shrink-0" />
                    <span className="text-white/40 text-xs uppercase tracking-wider">{label}</span>
                  </div>
                  <span className="text-white/80 text-xs font-medium group-hover:text-orange transition-colors break-all">{value}</span>
                </a>
              ))}
            </div>

            {/* Coverage note */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-2 border border-white/5">
              <MapPinIcon className="w-3.5 h-3.5 text-orange/60 shrink-0" />
              <p className="text-white/40 text-xs uppercase tracking-wider">{t("coverage.title")}</p>
              <p className="text-white/60 text-xs ml-auto">Canarias · Alicante</p>
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
                  <option value="" disabled>Selecciona tu ubicación</option>
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
