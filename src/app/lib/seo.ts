import type { Metadata } from "next";

export const defaultSEO: Metadata = {
  metadataBase: new URL("https://brandora.fun/"),

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
    "Brandora",
  ],

  authors: [{ name: "Brandora" }],
  creator: "Brandora",
  publisher: "Brandora",

  openGraph: {
    title: "Brandora - Agence Digitale au Maroc",
    description:
      "Création de sites web, applications et optimisation SEO au Maroc.",
    url: "https://brandora.fun/",
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
    canonical: "https://brandora.fun/",
    languages: {
      "fr-FR": "https://brandora.fun/",
      "ar-MA": "https://brandora.fun/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};