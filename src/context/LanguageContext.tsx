"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.services": { en: "Services", es: "Servicios" },
  "nav.why": { en: "Why Buzz", es: "Por qué Buzz" },
  "nav.how": { en: "How It Works", es: "Cómo funciona" },
  "nav.reviews": { en: "Reviews", es: "Opiniones" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.cta": { en: "Get a Quote", es: "Solicitar presupuesto" },

  // Hero
  "hero.tagline": { en: "Real Protection.", es: "Protección Real." },
  "hero.tagline2": { en: "Real Response.", es: "Respuesta Real." },
  "hero.sub": {
    en: "We Never Sleep.",
    es: "Nosotros nunca dormimos.",
  },
  "hero.desc": {
    en: "Professional alarm systems for homes and businesses across the Canary Islands and Alicante. Police response. 24/7 monitoring. The best customer service.",
    es: "Sistemas de alarma profesionales para hogares y negocios en las Islas Canarias y Alicante. Respuesta policial. Vigilancia 24/7. El mejor servicio al cliente.",
  },
  "hero.cta1": { en: "Get Protected Today", es: "Protégete hoy" },
  "hero.cta2": { en: "See Our Services", es: "Ver servicios" },

  // Trust Bar
  "trust.years": { en: "20+ Years Experience", es: "20+ años de experiencia" },
  "trust.monitoring": { en: "24/7 Monitoring", es: "Vigilancia 24/7" },
  "trust.police": { en: "Police Response", es: "Respuesta policial" },
  "trust.certified": { en: "R.N.S.P. Certified", es: "Certificados R.N.S.P." },
  "trust.free": { en: "Free Installation", es: "Instalación gratuita" },

  // Services
  "services.title": { en: "Our Services", es: "Nuestros servicios" },
  "services.sub": {
    en: "Complete protection for every situation",
    es: "Protección completa para cada situación",
  },
  "services.home.title": { en: "Home Alarms", es: "Alarmas para el hogar" },
  "services.home.desc": {
    en: "Full wireless alarm systems for apartments, houses and chalets. Pet-friendly sensors up to 20kg.",
    es: "Sistemas de alarma inalámbricos para apartamentos, casas y chalets. Sensores aptos para mascotas hasta 20kg.",
  },
  "services.business.title": {
    en: "Business Alarms",
    es: "Alarmas para negocios",
  },
  "services.business.desc": {
    en: "Commercial-grade security tailored to your premises. Grade 3 certified systems.",
    es: "Seguridad comercial adaptada a tus instalaciones. Sistemas con certificación Grado 3.",
  },
  "services.monitoring.title": { en: "24/7 Monitoring", es: "Central de alarmas" },
  "services.monitoring.desc": {
    en: "Our control room never sleeps. The moment your alarm triggers, we respond — with police if needed.",
    es: "Nuestra central nunca duerme. En el momento que salta la alarma, respondemos — con policía si es necesario.",
  },
  "services.app.title": { en: "Smart App Control", es: "Control desde el móvil" },
  "services.app.desc": {
    en: "Arm, disarm and monitor your system from anywhere in the world with our mobile app.",
    es: "Activa, desactiva y monitoriza tu sistema desde cualquier lugar del mundo con nuestra app.",
  },
  "services.squatter.title": {
    en: "Anti-Squatter Protection",
    es: "Protección antiocupación",
  },
  "services.squatter.desc": {
    en: "Specially designed alerts for vacant properties. Stop squatters before they settle in.",
    es: "Alertas especialmente diseñadas para propiedades vacías. Para a los okupas antes de que entren.",
  },
  "services.fire.title": {
    en: "Fire & Smoke Detection",
    es: "Detección de incendio y humo",
  },
  "services.fire.desc": {
    en: "Wireless smoke detectors integrated into your alarm system for full peace of mind.",
    es: "Detectores de humo inalámbricos integrados en tu sistema de alarma.",
  },

  // Why Buzz
  "why.title": { en: "Why Choose Buzz?", es: "¿Por qué elegir Buzz?" },
  "why.sub": {
    en: "Thousands of customers trust us. Here's why.",
    es: "Miles de clientes confían en nosotros. Aquí el motivo.",
  },
  "why.police.title": { en: "Police Response", es: "Respuesta policial" },
  "why.police.desc": {
    en: "When your alarm triggers, our control room contacts the police directly. Real response, not just a noise.",
    es: "Cuando salta tu alarma, nuestra central contacta directamente con la policía. Respuesta real, no solo ruido.",
  },
  "why.service.title": {
    en: "Best Customer Service",
    es: "Mejor servicio al cliente",
  },
  "why.service.desc": {
    en: "Our clients say it best — fast, friendly and professional from first call to installation and beyond.",
    es: "Nuestros clientes lo dicen mejor — rápidos, amables y profesionales desde la primera llamada.",
  },
  "why.wireless.title": {
    en: "100% Wireless",
    es: "100% inalámbrico",
  },
  "why.wireless.desc": {
    en: "No drilling through walls. Our systems are clean, fast to install and easy to move if you do.",
    es: "Sin taladros en las paredes. Nuestros sistemas son limpios, rápidos de instalar y fáciles de mover.",
  },
  "why.experience.title": {
    en: "20+ Years in Security",
    es: "20+ años en seguridad",
  },
  "why.experience.desc": {
    en: "Over two decades protecting homes and businesses. We know security inside out.",
    es: "Más de dos décadas protegiendo hogares y negocios. Conocemos la seguridad por dentro y por fuera.",
  },

  // How It Works
  "how.title": { en: "How It Works", es: "Cómo funciona" },
  "how.sub": {
    en: "Protected in 3 simple steps",
    es: "Protegido en 3 sencillos pasos",
  },
  "how.step1.title": { en: "1. Contact Us", es: "1. Contáctanos" },
  "how.step1.desc": {
    en: "Call, WhatsApp or fill out our form. We'll discuss your property and recommend the right system.",
    es: "Llama, escríbenos por WhatsApp o rellena nuestro formulario. Te asesoramos y recomendamos el sistema ideal.",
  },
  "how.step2.title": { en: "2. We Install", es: "2. Instalamos" },
  "how.step2.desc": {
    en: "Our team arrives on time, installs cleanly and walks you through everything. Free of charge.",
    es: "Nuestro equipo llega puntual, instala limpiamente y te explica todo. Sin coste adicional.",
  },
  "how.step3.title": { en: "3. You're Protected", es: "3. Estás protegido" },
  "how.step3.desc": {
    en: "Your system is live. Our control room monitors 24/7. Sleep easy.",
    es: "Tu sistema está activo. Nuestra central vigila las 24 horas. Duerme tranquilo.",
  },

  // Testimonials
  "testimonials.title": { en: "What Our Clients Say", es: "Lo que dicen nuestros clientes" },
  "testimonials.sub": {
    en: "Don't take our word for it",
    es: "No te fíes solo de nuestra palabra",
  },
  "testimonials.google": { en: "Google Review", es: "Reseña de Google" },

  // Coverage
  "coverage.title": { en: "Where We Operate", es: "Dónde operamos" },
  "coverage.sub": {
    en: "Protecting homes and businesses across Spain",
    es: "Protegiendo hogares y negocios en toda España",
  },
  "coverage.canary": { en: "Canary Islands", es: "Islas Canarias" },
  "coverage.canary.desc": {
    en: "All 8 islands — Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro and La Graciosa.",
    es: "Las 8 islas — Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro y La Graciosa.",
  },
  "coverage.alicante": {
    en: "Province of Alicante",
    es: "Provincia de Alicante",
  },
  "coverage.alicante.desc": {
    en: "Costa Blanca and surrounding areas on the mainland — Alicante, Benidorm, Torrevieja, Denia and more.",
    es: "Costa Blanca y alrededores en la península — Alicante, Benidorm, Torrevieja, Denia y más.",
  },

  // Contact
  "contact.title": { en: "Get in Touch", es: "Contacta con nosotros" },
  "contact.sub": {
    en: "Free consultation. No obligation. We'll find the right system for you.",
    es: "Consulta gratuita. Sin compromiso. Encontraremos el sistema ideal para ti.",
  },
  "contact.name": { en: "Full Name", es: "Nombre completo" },
  "contact.email": { en: "Email Address", es: "Correo electrónico" },
  "contact.phone": { en: "Phone (optional)", es: "Teléfono (opcional)" },
  "contact.island": { en: "Your Location", es: "Tu ubicación" },
  "contact.message": { en: "Message", es: "Mensaje" },
  "contact.message.placeholder": {
    en: "Tell us about your property and what you need...",
    es: "Cuéntanos sobre tu propiedad y lo que necesitas...",
  },
  "contact.submit": { en: "Send Message", es: "Enviar mensaje" },
  "contact.submitting": { en: "Sending...", es: "Enviando..." },
  "contact.success": {
    en: "Message sent! We'll be in touch shortly.",
    es: "¡Mensaje enviado! Nos pondremos en contacto pronto.",
  },
  "contact.error": {
    en: "Something went wrong. Please try again or call us directly.",
    es: "Algo salió mal. Por favor inténtalo de nuevo o llámanos directamente.",
  },

  // Footer
  "footer.tagline": {
    en: "Real Protection. Real Response.",
    es: "Protección Real. Respuesta Real.",
  },
  "footer.rights": {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  "footer.certified": { en: "R.N.S.P. Certified · DGP 4557", es: "Certificados R.N.S.P. · DGP 4557" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
