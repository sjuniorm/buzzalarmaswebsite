import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buzz Alarmas | Protección Real. Respuesta Real.",
  description:
    "Sistemas de alarma profesionales para hogares y negocios en las Islas Canarias y Alicante. Vigilancia 24/7, respuesta policial y el mejor servicio al cliente. Instalación gratuita.",
  keywords:
    "alarmas, seguridad, islas canarias, alicante, alarma hogar, alarma negocio, antiokupa, detección incendio, central receptora, 24 horas, tenerife, gran canaria, lanzarote",
  openGraph: {
    title: "Buzz Alarmas | Protección Real. Respuesta Real.",
    description:
      "Sistemas de alarma profesionales para hogares y negocios. Vigilancia 24/7 con respuesta policial. Instalación gratuita.",
    siteName: "Buzz Alarmas",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/images/logo-white.png",
    apple: "/images/logo-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} scroll-smooth`}>
      <body className="bg-dark text-light antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
