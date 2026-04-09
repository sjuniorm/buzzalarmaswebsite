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
  "trust.years": { en: "30+ Years Experience", es: "30+ años de experiencia" },
  "trust.monitoring": { en: "24/7 Monitoring", es: "Vigilancia 24/7" },
  "trust.police": { en: "Police Response", es: "Respuesta policial" },
  "trust.certified": { en: "R.N.S.P. Certified Company", es: "Empresa con certificación R.N.S.P." },
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
    en: "Commercial-grade security tailored to your premises. Grade 3 certified systems available for high-security requirements.",
    es: "Seguridad comercial adaptada a tus instalaciones. Sistemas con certificación Grado 3 disponibles para requisitos de alta seguridad.",
  },
  "services.monitoring.title": { en: "24/7 Monitoring", es: "Central de alarmas" },
  "services.monitoring.desc": {
    en: "Our control room never sleeps. The moment your alarm triggers, we respond. With police if needed.",
    es: "Nuestra central nunca duerme. En el momento que salta la alarma, respondemos. Avisamos a policía si es necesario.",
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
    en: "Specially designed alerts for vacant properties. Deter squatters before they settle in.",
    es: "Alertas especialmente diseñadas para propiedades vacías. Detén a los ocupas si es necesario.",
  },
  "services.ajax": {
    en: "Powered by Ajax Systems technology",
    es: "Con tecnología Ajax Systems",
  },
  "services.fire.title": {
    en: "Fire & Smoke Detection",
    es: "Detección de incendio y humo",
  },
  "services.fire.desc": {
    en: "Wireless smoke detectors integrated into your alarm system for full peace of mind.",
    es: "Detectores de humo inalámbricos integrados en tu sistema de alarma.",
  },
  "services.outdoor.title": {
    en: "Outdoor Perimeter Detection",
    es: "Detección perimetral exterior",
  },
  "services.outdoor.desc": {
    en: "Protect your property before anyone reaches the door. Outdoor sensors detect movement around your perimeter and trigger the alarm before an intruder gets inside.",
    es: "Protege tu propiedad antes de que nadie llegue a la puerta. Los sensores exteriores detectan movimiento en el perímetro y activan la alarma antes de que un intruso entre.",
  },
  "services.cctv.title": {
    en: "CCTV with AI Detection",
    es: "CCTV con detección por IA",
  },
  "services.cctv.desc": {
    en: "Cameras fully integrated with your alarm system and controlled from the same app. AI-powered detection distinguishes between people, pets and vehicles, so you only get alerts that matter.",
    es: "Cámaras totalmente integradas con tu sistema de alarma y controladas desde la misma app. La detección por inteligencia artificial distingue entre personas, mascotas y vehículos, para que solo recibas alertas que importan.",
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
    en: "Our clients say it best: fast, friendly and professional from the first call to installation and beyond.",
    es: "Nuestros clientes lo dicen mejor: rápidos, amables y profesionales desde la primera llamada.",
  },
  "why.wireless.title": {
    en: "Wireless Systems",
    es: "Sistemas inalámbricos",
  },
  "why.wireless.desc": {
    en: "All our equipment is wireless. Some sensors require minimal fixing to the wall, but there are no cables or trunking. Clean, fast to install and easy to move if needed.",
    es: "Todo nuestro equipamiento es inalámbrico. Algunos sensores requieren una fijación mínima a la pared, pero sin cables ni canaletas. Limpio, rápido de instalar y fácil de trasladar si es necesario.",
  },
  "why.experience.title": {
    en: "30+ Years in Security",
    es: "30+ años en seguridad",
  },
  "why.experience.desc": {
    en: "Over three decades protecting homes and businesses. That experience shows in every installation we do.",
    es: "Más de tres décadas protegiendo hogares y negocios. Esa experiencia se nota en cada instalación que realizamos.",
  },

  // How It Works (7-step timeline)
  "how2.title": { en: "How It Works", es: "Cómo funciona" },
  "how2.sub": {
    en: "From installation to police on-site. See exactly how our system protects you, step by step.",
    es: "Desde la instalación hasta la policía en el lugar. Descubre exactamente cómo te protege nuestro sistema.",
  },
  "how2.step1.title": { en: "System Installed", es: "Sistema instalado" },
  "how2.step1.desc": {
    en: "Our team installs your wireless alarm system cleanly and quickly in your home or business. Free of charge. No drilling.",
    es: "Nuestro equipo instala tu sistema de alarma inalámbrico de forma limpia y rápida, en tu hogar o negocio. Sin coste y sin taladros.",
  },
  "how2.step2.title": { en: "You Leave & Arm It", es: "Sales y la activas" },
  "how2.step2.desc": {
    en: "You leave the property and arm the alarm in seconds via the mobile app, from anywhere in the world.",
    es: "Sales de la propiedad y activas la alarma en segundos desde la app móvil, desde cualquier parte del mundo.",
  },
  "how2.step3.title": { en: "Intrusion Detected", es: "Intrusión detectada" },
  "how2.step3.desc": {
    en: "A sensor detects movement, outdoor perimeter or indoor. The system registers the intrusion instantly.",
    es: "Un sensor detecta movimiento, en el perímetro exterior o en el interior. El sistema registra la intrusión al instante.",
  },
  "how2.step4.title": { en: "Signal Sent to Control Room", es: "Señal enviada a la central" },
  "how2.step4.desc": {
    en: "Your alarm triggers and sends an instant signal to our 24/7 monitoring control room. Response begins in seconds.",
    es: "Tu alarma salta y envía una señal instantánea a nuestra central de vigilancia 24/7. La respuesta comienza en segundos.",
  },
  "how2.step5.title": { en: "Police Dispatched", es: "Policía enviada" },
  "how2.step5.desc": {
    en: "Our control room verifies the alert and immediately contacts the police or security service. Real response, not just a siren.",
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
  "testimonials.google.cta": { en: "See all reviews on Google", es: "Ver todas las opiniones en Google" },

  // Cookie banner
  "cookie.text": {
    en: "We use cookies to improve your browsing experience and analyse traffic. By clicking Accept you consent to our use of cookies. For more information, see our",
    es: "Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico. Al hacer clic en Aceptar, consientes el uso de cookies. Para más información, consulta nuestra",
  },
  "cookie.link": { en: "Privacy Policy", es: "Política de Privacidad" },
  "cookie.accept": { en: "Accept", es: "Aceptar" },
  "cookie.reject": { en: "Reject", es: "Rechazar" },

  // Coverage
  "coverage.title": { en: "Where We Operate", es: "Dónde operamos" },
  "coverage.sub": {
    en: "Protecting homes and businesses across Spain",
    es: "Protegiendo hogares y negocios en toda España",
  },
  "coverage.canary": { en: "Canary Islands", es: "Islas Canarias" },
  "coverage.canary.desc": {
    en: "We cover the Canary Islands. Professional installation and full 24/7 monitoring across the archipelago.",
    es: "Cubrimos las Islas Canarias. Instalación profesional y vigilancia 24/7 en todo el archipiélago.",
  },
  "coverage.alicante": {
    en: "Province of Alicante",
    es: "Provincia de Alicante",
  },
  "coverage.alicante.desc": {
    en: "We cover the entire Province of Alicante, from the city to the coast and inland municipalities. Full service throughout the province.",
    es: "Cubrimos toda la Provincia de Alicante, desde la capital hasta la costa y los municipios del interior. Servicio completo en toda la provincia.",
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
    en: "Spain records thousands of home break-ins every year. Most happen when a property looks unprotected. A visible alarm system is a proven deterrent.",
    es: "España registra miles de robos en domicilios cada año. La mayoría ocurren cuando la propiedad parece desprotegida. Un sistema de alarma visible es un disuasor demostrado.",
  },
  "urgency.squatter.title": { en: "Illegal Occupation (Okupa)", es: "Ocupación Ilegal (Okupa)" },
  "urgency.squatter.desc": {
    en: "Squatters can take over an unoccupied property in hours. Our specialised alerts notify you the moment anyone enters. With a connected alarm, our control room can alert police if the situation requires it. Early detection is the best way to stop an occupation before it takes hold.",
    es: "Los ocupas pueden tomar una propiedad desocupada en horas. Nuestras alertas especializadas te avisan en el momento en que alguien entra. Con una alarma conectada, nuestra central puede avisar a la policía si la situación lo requiere. La detección temprana es la mejor forma de frenar una ocupación antes de que se consolide.",
  },
  "urgency.solution.title": { en: "Buzz Alarmas Is the Solution", es: "Buzz Alarmas es la solución" },
  "urgency.solution.desc": {
    en: "Police response, 24/7 monitoring, wireless installation and the best customer service across the Canary Islands and the Province of Alicante. Protect your property and your peace of mind.",
    es: "Respuesta policial, vigilancia 24/7, instalación inalámbrica y el mejor servicio al cliente en las Islas Canarias y la Provincia de Alicante. Protege tu propiedad y tu tranquilidad.",
  },
  "urgency.cta.title": { en: "Get Protected Today", es: "Protégete hoy" },
  "urgency.cta.sub": {
    en: "Book your free security check today. We come to you, assess your property and take care of everything.",
    es: "Reserva hoy tu revisión de seguridad gratuita. Vamos a tu propiedad, evaluamos tus necesidades y nos encargamos de todo.",
  },

  // Contact info
  "contact.reach": { en: "Reach Us Directly", es: "Contáctanos directamente" },

  // FAQ
  "nav.faq": { en: "FAQ", es: "Preguntas" },
  "faq.title": { en: "Frequently Asked Questions", es: "Preguntas frecuentes" },
  "faq.sub": {
    en: "Everything you need to know before getting started",
    es: "Todo lo que necesitas saber antes de empezar",
  },
  "faq.cta.text": {
    en: "Still have questions? We're happy to help.",
    es: "¿Todavía tienes dudas? Estamos aquí para ayudarte.",
  },
  "faq.q1": { en: "What is an alarm system and how does it work?", es: "¿Qué es un sistema de alarma y cómo funciona?" },
  "faq.a1": {
    en: "An alarm system is a network of wireless sensors installed around your property that detect movement, door or window openings, and other intrusions. When triggered, the alarm activates and our 24/7 control room receives an instant alert. Our operators verify the situation and, if confirmed, contact the police directly.",
    es: "Un sistema de alarma es una red de sensores inalámbricos instalados en tu propiedad que detectan movimiento, apertura de puertas o ventanas y otras intrusiones. Cuando se activa, nuestra central 24/7 recibe una alerta instantánea. Nuestros operadores verifican la situación y, si se confirma, contactan directamente con la policía.",
  },
  "faq.q2": { en: "Do I need internet for the alarm to work?", es: "¿Necesito internet para que la alarma funcione?" },
  "faq.a2": {
    en: "No. Our systems work with SIM card backup, so even if your WiFi goes down, your alarm stays active and connected to our control room at all times.",
    es: "No. Nuestros sistemas funcionan con una SIM de respaldo, de modo que aunque tu WiFi falle, la alarma sigue activa y conectada a nuestra central en todo momento.",
  },
  "faq.q3": { en: "Can I control my alarm from my phone?", es: "¿Puedo controlar mi alarma desde el móvil?" },
  "faq.a3": {
    en: "Yes. You can arm, disarm and monitor your system from anywhere in the world using our mobile app. You also receive instant push notifications if your alarm is triggered.",
    es: "Sí. Puedes activar, desactivar y monitorizar tu sistema desde cualquier lugar del mundo con nuestra app móvil. Además, recibes notificaciones push instantáneas si tu alarma se activa.",
  },
  "faq.q4": { en: "Is your alarm system pet-friendly?", es: "¿El sistema de alarma es compatible con mascotas?" },
  "faq.a4": {
    en: "Yes. Our sensors are calibrated to ignore animals up to 20kg, so your pets can move freely indoors without triggering false alarms.",
    es: "Sí. Nuestros sensores están calibrados para ignorar animales de hasta 20kg, para que tus mascotas puedan moverse libremente en casa sin activar falsas alarmas.",
  },
  "faq.q5": { en: "How long does installation take?", es: "¿Cuánto tiempo dura la instalación?" },
  "faq.a5": {
    en: "Most installations take between 2 and 4 hours depending on the size of the property. Our technician arrives, surveys the space, installs all sensors and panels, connects the system to our control room, and walks you through the app before leaving. Everything is wireless, so there are no cables or major works involved.",
    es: "La mayoría de las instalaciones duran entre 2 y 4 horas según el tamaño de la propiedad. Nuestro técnico llega, revisa el espacio, instala todos los sensores y paneles, conecta el sistema a nuestra central y te enseña a usar la app antes de marcharse. Todo es inalámbrico, sin cables ni obras.",
  },
  "faq.q6": { en: "What happens if the alarm is triggered?", es: "¿Qué pasa si se activa la alarma?" },
  "faq.a6": {
    en: "Your alarm sends an instant signal to our 24/7 control room. Our operators verify the alert and, if confirmed, immediately contact the police or security service. At the same time, you receive a push notification on your phone so you can check your cameras in real time.",
    es: "Tu alarma envía una señal instantánea a nuestra central 24/7. Nuestros operadores verifican la alerta y, si se confirma, contactan de inmediato con la policía o el servicio de seguridad. Al mismo tiempo, recibes una notificación push en tu móvil para ver tus cámaras en tiempo real.",
  },
  "faq.q7": { en: "Do you offer 24/7 monitoring?", es: "¿Ofrecéis monitorización 24/7?" },
  "faq.a7": {
    en: "Yes, and we never install a system without it. Every alarm we fit is connected to our professional monitoring centre from day one. No alarm without monitoring. That is the standard we hold ourselves to.",
    es: "Sí, y nunca instalamos un sistema sin ella. Cada alarma que instalamos está conectada a nuestra central profesional desde el primer día. No existe alarma sin monitorización: ese es el estándar que mantenemos.",
  },
  "faq.q8": { en: "Do alarm systems need maintenance?", es: "¿Los sistemas de alarma necesitan mantenimiento?" },
  "faq.a8": {
    en: "Yes, and it is included in your monthly plan. Every year, one of our technicians visits your property to check the system and replace batteries at no extra charge. On top of that, we carry out 4 remote maintenance checks per year, each one certified, to make sure everything is running perfectly.",
    es: "Sí, y está incluido en tu cuota mensual. Cada año, uno de nuestros técnicos visita tu propiedad para revisar el sistema y cambiar las baterías sin coste adicional. Además, realizamos 4 revisiones remotas certificadas al año para asegurarnos de que todo funciona perfectamente.",
  },
  "faq.q9": { en: "Do you install CCTV cameras?", es: "¿Instaláis cámaras de videovigilancia?" },
  "faq.a9": {
    en: "Yes. Our cameras are fully integrated with your alarm system and controlled through the same app. They use AI detection to distinguish between people, pets and vehicles, so you only get alerts that actually matter. Camera footage can also be linked directly to our control room for full monitoring.",
    es: "Sí. Nuestras cámaras están totalmente integradas con tu sistema de alarma y se controlan desde la misma app. Utilizan detección por inteligencia artificial para distinguir entre personas, mascotas y vehículos, de modo que solo recibes alertas relevantes. Las imágenes también pueden vincularse a nuestra central para una monitorización completa.",
  },
  "faq.q10": { en: "Can I add more sensors later?", es: "¿Puedo añadir más sensores después?" },
  "faq.a10": {
    en: "Yes. Your system is fully expandable at any time. Whether you want to add more motion detectors, door sensors, cameras or smoke detectors, it is a simple process and our team handles everything.",
    es: "Sí. Tu sistema es totalmente ampliable en cualquier momento. Ya sea para añadir detectores de movimiento, sensores de puertas, cámaras o detectores de humo, el proceso es sencillo y nuestro equipo se encarga de todo.",
  },

  // WhatsApp floating button
  "whatsapp.label": { en: "Chat on WhatsApp", es: "Escríbenos por WhatsApp" },

  // Footer
  "footer.tagline": {
    en: "Real Protection. Real Response.",
    es: "Protección Real. Respuesta Real.",
  },
  "footer.rights": {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  "footer.certified": { en: "Homologada R.N.S.P. 4557 · Con aviso a policía", es: "Homologada R.N.S.P. 4557 · Con aviso a policía" },
  "footer.privacy": { en: "Privacy Policy", es: "Política de Privacidad" },
  "footer.terms": { en: "Terms & Conditions", es: "Términos y Condiciones" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

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
