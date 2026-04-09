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
  title: "Buzz Alarmas | Alarmas en Canarias y Alicante · Instalación Gratuita",
  description:
    "Empresa de alarmas homologada R.N.S.P. en Tenerife, Gran Canaria, Lanzarote, Fuerteventura y Provincia de Alicante. Vigilancia 24/7, respuesta policial directa e instalación gratuita.",
  keywords:
    "alarmas canarias, alarmas alicante, alarma hogar tenerife, alarma negocio gran canaria, seguridad antiocupa, detección incendio, central receptora 24 horas, instalación gratuita alarma, lanzarote fuerteventura alarmas, RNSP",
  metadataBase: new URL("https://buzzalarmaswebsite.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Buzz Alarmas | Alarmas en Canarias y Alicante · Instalación Gratuita",
    description:
      "Empresa de alarmas homologada R.N.S.P. Tenerife, Gran Canaria, Lanzarote, Fuerteventura y Provincia de Alicante. Vigilancia 24/7 con respuesta policial. Instalación gratuita.",
    url: "https://buzzalarmas.com",
    siteName: "Buzz Alarmas",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/logo-color.png",
        width: 1200,
        height: 630,
        alt: "Buzz Alarmas — Alarmas profesionales en Canarias y Alicante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz Alarmas | Alarmas en Canarias y Alicante",
    description: "Empresa de alarmas homologada R.N.S.P. Vigilancia 24/7, respuesta policial. Instalación gratuita.",
    images: ["/images/logo-color.png"],
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
