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

  // How It Works (7-step timeline)
  "how2.title": { en: "How It Works", es: "Cómo funciona" },
  "how2.sub": {
    en: "From installation to police on-site — see exactly how our system protects you, step by step.",
    es: "Desde la instalación hasta la policía en el lugar — descubre exactamente cómo te protege nuestro sistema.",
  },
  "how2.step1.title": { en: "System Installed", es: "Sistema instalado" },
  "how2.step1.desc": {
    en: "Our team installs your wireless alarm system cleanly and quickly — in your home or business. Free of charge. No drilling.",
    es: "Nuestro equipo instala tu sistema de alarma inalámbrico de forma limpia y rápida, en tu hogar o negocio. Sin coste y sin taladros.",
  },
  "how2.step2.title": { en: "You Leave & Arm It", es: "Sales y la activas" },
  "how2.step2.desc": {
    en: "You leave the property and arm the alarm in seconds via the mobile app — from anywhere in the world.",
    es: "Sales de la propiedad y activas la alarma en segundos desde la app móvil, desde cualquier parte del mundo.",
  },
  "how2.step3.title": { en: "Intrusion Detected", es: "Intrusión detectada" },
  "how2.step3.desc": {
    en: "A sensor detects movement — outdoor perimeter or indoor. The system registers the intrusion instantly.",
    es: "Un sensor detecta movimiento — perímetro exterior o interior. El sistema registra la intrusión al instante.",
  },
  "how2.step4.title": { en: "Signal Sent to Control Room", es: "Señal enviada a la central" },
  "how2.step4.desc": {
    en: "Your alarm triggers and sends an instant signal to our 24/7 monitoring control room. Response begins in seconds.",
    es: "Tu alarma salta y envía una señal instantánea a nuestra central de vigilancia 24/7. La respuesta comienza en segundos.",
  },
  "how2.step5.title": { en: "Police Dispatched", es: "Policía enviada" },
  "how2.step5.desc": {
    en: "Our control room verifies the alert and immediately contacts the police or security service. Real response — not just a siren.",
    es: "Nuestra central verifica la alerta y contacta inmediatamente con la policía o el servicio de seguridad. Respuesta real, no solo una sirena.",
  },
  "how2.step6.title": { en: "You Get Notified", es: "Recibes la notificación" },
  "how2.step6.desc": {
    en: "You receive an instant push notification on your phone. Open the app to see your cameras in real time.",
    es: "Recibes una notificación push instantánea en tu móvil. Abre la app para ver tus cámaras en tiempo real.",
  },
  "how2.step7.title": { en: "Situation Resolved", es: "Situación resuelta" },
  "how2.step7.desc": {
    en: "Authorities are on site handling the situation. Your property is secure. You see it all from your phone.",
    es: "Las autoridades están en el lugar gestionando la situación. Tu propiedad está segura. Lo ves todo desde tu móvil.",
  },
  "how2.live": { en: "Live alert active", es: "Alerta activa en tiempo real" },
  "how2.resolved": { en: "Situation resolved", es: "Situación resuelta" },

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

  // Stats
  "stats.years": { en: "Years Experience", es: "Años de experiencia" },
  "stats.islands": { en: "Islands Covered", es: "Islas cubiertas" },
  "stats.monitoring": { en: "Monitoring", es: "Vigilancia" },
  "stats.wireless": { en: "Wireless", es: "Inalámbrico" },

  // Urgency
  "urgency.title": { en: "Don't Wait for the Worst", es: "No esperes lo peor" },
  "urgency.sub": {
    en: "In Spain, property crime and illegal occupation are growing threats. The right alarm system is your best defence.",
    es: "En España, los robos y la okupación ilegal son amenazas crecientes. El sistema de alarma adecuado es tu mejor defensa.",
  },
  "urgency.robbery.title": { en: "Burglary & Robbery", es: "Robo e Irrupción" },
  "urgency.robbery.desc": {
    en: "Spain records thousands of home break-ins every year. Most happen when a property looks unprotected — a visible alarm system is a proven deterrent.",
    es: "España registra miles de robos en domicilios cada año. La mayoría ocurren cuando la propiedad parece desprotegida — un sistema de alarma visible es un disuasor demostrado.",
  },
  "urgency.squatter.title": { en: "Illegal Occupation (Okupa)", es: "Ocupación Ilegal (Okupa)" },
  "urgency.squatter.desc": {
    en: "Squatters can take over an unoccupied property in hours. Our specialised alerts notify you the moment anyone enters — giving you time to act.",
    es: "Los okupas pueden tomar una propiedad desocupada en horas. Nuestras alertas especializadas te avisan en el momento en que alguien entra — dándote tiempo de actuar.",
  },
  "urgency.solution.title": { en: "Buzz Alarmas Is the Solution", es: "Buzz Alarmas es la solución" },
  "urgency.solution.desc": {
    en: "Police response, 24/7 monitoring, wireless installation, and the best customer service on the islands. Protect your property — and your peace of mind.",
    es: "Respuesta policial, vigilancia 24/7, instalación inalámbrica y el mejor servicio al cliente de las islas. Protege tu propiedad y tu tranquilidad.",
  },
  "urgency.cta.title": { en: "Get Protected Today", es: "Protégete hoy" },
  "urgency.cta.sub": {
    en: "Free consultation. No obligation. Installation included.",
    es: "Consulta gratuita. Sin compromiso. Instalación incluida.",
  },

  // Contact info
  "contact.reach": { en: "Reach Us Directly", es: "Contáctanos directamente" },

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
