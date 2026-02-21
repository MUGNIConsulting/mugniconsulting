import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "MUGNI Consulting — The Enricher & The Emancipator",
  description: "Empowering clients by unlocking their full potential. Comprehensive tax and legal services including compliance, audit & dispute, M&A, and corporate advisory.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300..800&family=Outfit:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
