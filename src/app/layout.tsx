import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buzz Alarmas | Real Protection. Real Response.",
  description:
    "Professional alarm systems for homes and businesses across the Canary Islands and Alicante. 24/7 monitoring, police response, and the best customer service.",
  keywords:
    "alarm systems, security, canary islands, alicante, burglar alarm, CCTV, intruder alarm, squatter alarm",
  openGraph: {
    title: "Buzz Alarmas | Real Protection. Real Response.",
    description:
      "Professional alarm systems for homes and businesses. 24/7 monitoring with police response.",
    siteName: "Buzz Alarmas",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="bg-dark text-light antialiased">{children}</body>
    </html>
  );
}
