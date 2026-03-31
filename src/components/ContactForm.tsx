"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-white/50 text-lg">{t("contact.sub")}</p>
          <div className="w-16 h-1 bg-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-dark-2 border border-white/5 rounded-2xl p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {t("contact.name")} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {t("contact.email")} *
              </label>
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

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {t("contact.island")} *
              </label>
              <select
                name="location"
                required
                value={form.location}
                onChange={handleChange}
                className="w-full bg-dark-3 border border-white/10 focus:border-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
              >
                <option value="" disabled>
                  —
                </option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white/60 text-sm mb-2">
              {t("contact.message")} *
            </label>
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

          {/* Submit */}
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
    </section>
  );
}
