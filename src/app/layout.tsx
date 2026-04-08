import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";

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
  manifest: "/images/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon.ico" },
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/favicon_io/apple-touch-icon.png",
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
        <Analytics />
      </body>
    </html>
  );
}
