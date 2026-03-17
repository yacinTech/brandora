"use client";
import type { ReactNode } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import "./globals.css";
import Maintenance from "../components/Maintenance";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <SEO />
      </head>

      <body>
        {Maintenance ? <Maintenance /> : children}
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}