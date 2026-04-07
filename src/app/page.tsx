import { LanguageProvider } from "@/context/LanguageContext";
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

export default function Home() {
  return (
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
    </LanguageProvider>
  );
}
