import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyBuzz from "@/components/WhyBuzz";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyBuzz />
        <HowItWorks />
        <Testimonials />
        <Coverage />
        <ContactForm />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
