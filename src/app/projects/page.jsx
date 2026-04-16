"use client";
import PortfolioSection from "../../components/Portfolio/Portfolio";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactForm from "../../components/ContactForm";
import CallToAction from "../../components/CallToActionSection"


export const metadata = {
  title: "Projets réalisés | Brandora",
  description:
    "Découvrez les projets réalisés par Brandora : création de sites web, identité visuelle, solutions digitales et réalisations professionnelles pour entreprises et marques.",
  keywords: [
    "projets réalisés",
    "portfolio digital",
    "création site web",
    "agence digitale Maroc",
    "Brandora",
    "réalisations web",
    "identité visuelle",
    "SEO",
    "marketing digital",
    "design web professionnel",
  ],
  alternates: {
    canonical: "https://brandora.fun/projects",
  },
  openGraph: {
    title: "Projets réalisés | Brandora",
    description:
      "Explorez les réalisations de Brandora en création web, branding et solutions digitales professionnelles.",
    url: "https://brandora.fun/projects",
    siteName: "Brandora",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://brandora.fun/projects/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Projets réalisés par Brandora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets réalisés | Brandora",
    description:
      "Explorez les réalisations de Brandora en création web, branding et solutions digitales professionnelles.",
    images: ["https://brandora.fun/projects/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function PortfolioPage() {
  return (
    <div>
      <PortfolioSection />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      
      
    </div>
  );
}