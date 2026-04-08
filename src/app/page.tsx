import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  alternates: { canonical: "https://buzzalarmas.com" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buzz Alarmas",
  description:
    "Sistemas de alarma profesionales para hogares y negocios en las Islas Canarias y Alicante. Vigilancia 24/7 con respuesta policial e instalación gratuita.",
  url: "https://buzzalarmas.com",
  telephone: "+34922099200",
  email: "hola@buzzalarmas.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Montaña Clara 5, Local 8",
    addressLocality: "Adeje",
    addressRegion: "Tenerife",
    postalCode: "38679",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.0916,
    longitude: -16.7317,
  },
  areaServed: [
    "Tenerife", "Gran Canaria", "Lanzarote", "Fuerteventura",
    "Alicante", "Benidorm", "Torrevieja", "Denia", "Javea", "Calpe", "Altea", "Orihuela Costa",
  ],
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "€€",
  sameAs: [
    "https://www.facebook.com/BUZZalarmas",
    "https://www.instagram.com/buzzalarmas_es/",
    "https://www.linkedin.com/company/buzzalarmas/",
    "https://www.youtube.com/@BuzzAlarmas",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La instalación es realmente gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Incluimos la instalación gratuita con cada nuevo sistema de alarma. Sin costes ocultos ni gastos de desplazamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Conectan directamente con la policía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cuando salta tu alarma, nuestra central 24/7 verifica la alerta y contacta directamente con la policía. Respuesta real, no solo una sirena.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si se va la luz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos nuestros sistemas incluyen batería de respaldo integrada, por lo que la alarma sigue funcionando incluso durante un corte de suministro eléctrico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sus sistemas son 100% inalámbricos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Sin taladros en las paredes, sin cables. Nuestros sistemas son limpios, rápidos de instalar y fáciles de trasladar si te mudas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo controlar mi alarma desde el móvil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nuestra app móvil te permite activar, desactivar y monitorizar tu sistema desde cualquier lugar del mundo, las 24 horas.",
      },
    },
  ],
};
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Urgency from "@/components/Urgency";
import Services from "@/components/Services";
import WhyBuzz from "@/components/WhyBuzz";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Coverage from "@/components/Coverage";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCtaBar from "@/components/MobileCtaBar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Urgency />
        <Services />
        <WhyBuzz />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Coverage />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <MobileCtaBar />
    </LanguageProvider>
    </>
  );
}
