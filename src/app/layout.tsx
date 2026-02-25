import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://www.brandora.ma"),

  title: {
    default: "Brandora - Agence Digitale au Maroc | Création Sites Web & SEO",
    template: "%s | Brandora Agence Digitale",
  },

  description:
    "Brandora est une agence digitale au Maroc spécialisée en création de sites web, développement d'applications et optimisation SEO. Boostez votre visibilité en ligne avec des solutions innovantes.",

  keywords: [
    "agence digitale maroc",
    "création site web maroc",
    "développement application maroc",
    "SEO maroc",
    "référencement naturel",
    "marketing digital maroc",
    "Brandora"
  ],

  authors: [{ name: "Brandora" }],
  creator: "Brandora",
  publisher: "Brandora",

  openGraph: {
    title: "Brandora - Agence Digitale au Maroc",
    description:
      "Création de sites web, applications et optimisation SEO au Maroc.",
    url: "https://www.brandora.ma",
    siteName: "Brandora",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Brandora Agence Digitale",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brandora - Agence Digitale",
    description:
      "Agence spécialisée en création web et SEO au Maroc.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.brandora.ma",
    languages: {
      "fr-FR": "https://www.brandora.ma",
      "ar-MA": "https://www.brandora.ma/ar",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
      </head>
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Brandora",
      url: "https://www.brandora.ma",
      logo: "https://www.brandora.ma/logo.png",
      description:
        "Agence digitale spécialisée en création de sites web, développement d'applications et SEO au Maroc.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MA",
      },
      sameAs: [
        "https://www.facebook.com/brandora",
        "https://www.instagram.com/brandora",
        "https://www.linkedin.com/company/brandora"
      ],
    }),
  }}
/>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
