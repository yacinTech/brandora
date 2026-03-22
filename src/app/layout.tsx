"use client";
import type { ReactNode } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <SEO />

        {/* ربط FontAwesome بشكل صحيح */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-pV0b+P3p1PfKMMLVf2Rjz+Dy5sMHczlpD1X1/nK+0xzJ8RFi7Gg5Hym9UZ3R0tS8i7F7SmzLq1XhXQsmS8JYiw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          precedence="default"  // ✅ صحيح هنا كـ attribute
        />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}