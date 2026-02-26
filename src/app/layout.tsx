import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import Script from "next/dist/client/script";


export const metadata = {
  metadataBase: new URL("https://brandora-iota.vercel.app/"),

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
    url: "https://brandora-iota.vercel.app/",
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
    canonical: "https://brandora-iota.vercel.app/",
    languages: {
      "fr-FR": "https://brandora-iota.vercel.app/",
      "ar-MA": "https://brandora-iota.vercel.app/",
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
        <link rel="icon" href="/favicon.ico" />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
<meta name="google-site-verification" content="3BbwjPj8bAVzd3aTElUz1eldAN8BYglR5HHZafngTM0" />


 {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FTL9S7F1EW"
        />
        <Script
          id="google-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FTL9S7F1EW');
            `,
          }}
        />

        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-FTL9S7F1EW"
  strategy="afterInteractive"
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
      </head>
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Brandora",
      url: "https://brandora-iota.vercel.app/",
      logo: "https://brandora-iota.vercel.app/logo.png",
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
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1569842757576862');
              fbq('track', 'PageView');
            `,
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
