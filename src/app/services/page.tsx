"use client";
import Image from "next/image";
import SiteTypes from "@/src/components/SiteTypes";
import ContactForm from "../../components/ContactForm";
import CallToActionSection from "@/src/components/CallToActionSection";

export default function ServicesPage() {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background"></div>

        <div className="hero-image-wrapper">
          <Image
            src="/services-hero.jpg"
            alt="Services Digitaux Brandora"
            fill
            priority
            className="hero-image"
          />
        </div>

        <div className="hero-caption">
          <h1>Nos Services Digitaux</h1>
          <p>
            Nous accompagnons les entreprises dans leur transformation digitale
            grâce à des solutions modernes, performantes et orientées résultats.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-page">
        <div className="services-grid">
          <div className="service-card">
            <div className="icon"><i className="fas fa-globe"></i></div>
            <h3>Création de sites web professionnels</h3>
            <p>Des sites modernes, rapides et optimisés pour une expérience utilisateur exceptionnelle.</p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-lock"></i></div>
            <h3>Vente de noms de domaine</h3>
            <p>Trouvez et sécurisez le nom idéal pour renforcer l'identité de votre marque.</p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-chart-line"></i></div>
            <h3>SEO & Référencement</h3>
            <p>Optimisation stratégique pour améliorer votre visibilité et dominer les résultats Google.</p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-bullhorn"></i></div>
            <h3>Campagnes publicitaires</h3>
            <p>Gestion experte de campagnes Facebook Ads & Google Ads pour maximiser votre retour sur investissement.</p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-hashtag"></i></div>
            <h3>Réseaux sociaux</h3>
            <p>Création de contenu stratégique et gestion professionnelle de vos plateformes sociales.</p>
          </div>

          <div className="service-card highlight">
            <div className="icon"><i className="fas fa-mobile-screen-button"></i></div>
            <h3>Développement d’applications mobiles</h3>
            <p>Applications iOS & Android performantes, intuitives et adaptées à vos objectifs business.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* 🔥 GLOBAL FIXES (مهم جدا) */
        :global(html, body) {
          overflow-x: hidden;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(img, video) {
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* HERO SECTION */
        .hero-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 50px 20px 80px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #1a1a1a 0%, #0f0f0f 100%);
          z-index: 0;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16/9;
          z-index: 1;
          margin-bottom: 40px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,198,255,0.25);
          animation: float 6s ease-in-out infinite;
        }

        .hero-image {
          object-fit: contain;
        }

        .hero-caption {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #ffffff;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-caption h1 {
          font-size: 50px;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.2;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-caption p {
          font-size: 18px;
          color: #d4d4d4;
          line-height: 1.6;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* SERVICES */
        .services-page {
          padding: 90px 20px;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
          color: white;

          display: flex;
          justify-content: center; /* 🔥 توسيط */
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;

          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 35px 25px;
          text-align: center;
          transition: all 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border: 1px solid rgba(0,198,255,0.6);
          box-shadow: 0 15px 40px rgba(0,198,255,0.2);
        }

        .service-card.highlight {
          border: 1px solid rgba(0,198,255,0.6);
          box-shadow: 0 10px 30px rgba(0,198,255,0.15);
        }

        .icon {
          font-size: 32px;
          margin-bottom: 20px;
          color: #00c6ff;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-card p {
          font-size: 15px;
          color: #cfcfcf;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media(max-width:1024px){
          .hero-caption h1 { font-size: 42px; }
        }

        @media(max-width:768px){
          .hero-caption h1 { font-size: 34px; }
        }

        @media(max-width:480px){
          .hero-caption h1 { font-size: 28px; }
          .hero-caption p { font-size: 14px; }
        }
      `}</style>

      <SiteTypes />
      <CallToActionSection />
      <ContactForm />
    </>
  );
}