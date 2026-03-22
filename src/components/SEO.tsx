"use client";

import Script from "next/script";
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
    description: "Agence spécialisée en création web et SEO au Maroc.",
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

export default function SEO() {
  return (
    <>
      {/* Google Verification */}
      <meta
        name="google-site-verification"
        content="3BbwjPj8bAVzd3aTElUz1eldAN8BYglR5HHZafngTM0"
      />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* Google Analytics */}
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

      {/* Schema Organization */}
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

      {/* Facebook Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f.fbq;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1569842757576862');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}