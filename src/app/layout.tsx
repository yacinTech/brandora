import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandora.fun/"),

  title: {
    default: "Brandora - Agence Digitale au Maroc | Création Sites Web & SEO",
    template: "%s | Brandora Agence Digitale",
  },

  description:
    "Brandora est une agence digitale au Maroc spécialisée en création de sites web, développement d'applications et optimisation SEO. Boostez votre visibilité en ligne avec des solutions innovantes.",

keywords: [
  // 🇫🇷 Français
  "agence digitale maroc",
  "création site web maroc",
  "création site internet professionnel",
  "développement web sur mesure",
  "création site e-commerce maroc",
  "boutique en ligne maroc",
  "développement application web",
  "développement application mobile",
  "référencement naturel SEO",
  "optimisation SEO google",
  "audit SEO site web",
  "marketing digital maroc",
  "agence marketing digital",
  "gestion réseaux sociaux",
  "community management maroc",
  "publicité facebook ads maroc",
  "google ads maroc",
  "campagnes publicitaires digitales",
  "branding et identité visuelle",
  "création logo professionnel",
  "design graphique maroc",
  "UX UI design",
  "hébergement web maroc",
  "nom de domaine maroc",
  "maintenance site web",
  "création landing page",
  "agence web professionnelle",
  "Brandora",

  // 🇬🇧 English
  "digital agency Morocco",
  "web development Morocco",
  "website creation services",
  "professional website design",
  "ecommerce website development",
  "online store development",
  "web application development",
  "mobile app development",
  "SEO services",
  "search engine optimization",
  "technical SEO audit",
  "digital marketing agency",
  "social media management",
  "facebook ads services",
  "google ads management",
  "online advertising campaigns",
  "branding agency",
  "logo design services",
  "graphic design services",
  "UI UX design",
  "web hosting services",
  "domain registration",
  "website maintenance",
  "landing page design",
  "full stack development",
  "Brandora digital agency",

  // 🇸🇦 العربية
  "وكالة رقمية المغرب",
  "انشاء موقع الكتروني",
  "تصميم مواقع احترافية",
  "تطوير مواقع الويب",
  "انشاء متجر الكتروني",
  "تطوير تطبيقات الويب",
  "تطوير تطبيقات الهاتف",
  "تحسين محركات البحث",
  "سيو مواقع الانترنت",
  "تحسين ظهور الموقع في جوجل",
  "تسويق رقمي",
  "ادارة مواقع التواصل الاجتماعي",
  "ادارة صفحات فيسبوك وانستغرام",
  "اعلانات فيسبوك",
  "اعلانات جوجل",
  "حملات اعلانية رقمية",
  "تصميم هوية بصرية",
  "تصميم شعار احترافي",
  "تصميم جرافيك",
  "تصميم واجهات المستخدم",
  "استضافة مواقع",
  "حجز اسم نطاق",
  "صيانة المواقع",
  "تصميم صفحات هبوط",
  "برمجة مواقع وتطبيقات",
  "شركة براندورا",
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
        url: "https://brandora.fun/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brandora Agence Digitale",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brandora - Agence Digitale",
    description: "Agence spécialisée en création web et SEO au Maroc.",
    images: ["https://brandora.fun/opengraph-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="3BbwjPj8bAVzd3aTElUz1eldAN8BYglR5HHZafngTM0"
        />

        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FTL9S7F1EW"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-FTL9S7F1EW');
          `}
        </Script>

        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brandora",
              url: "https://brandora.fun/",
              logo: "https://brandora.fun/logo.png",
              description:
                "Agence digitale spécialisée en création de sites web, développement d'applications et SEO au Maroc.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MA",
              },
              sameAs: [
                "https://www.facebook.com/brandora",
                "https://www.instagram.com/brandora1",
                "https://www.linkedin.com/company/brandora",
              ],
            }),
          }}
        />

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1569842757576862');
              fbq('track', 'PageView');
            `,
          }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}