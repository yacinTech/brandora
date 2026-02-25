"use client";
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

      <section className="services-page">

        {/* LOGO */}
        <div className="logo-wrapper">
          <img src="/logo.png" alt="Brandora Logo" className="logo" />
        </div>

        <div className="services-header">
          <h2>Nos Services</h2>
          <p>
            Nous proposons des solutions digitales complètes pour développer
            votre marque avec performance et élégance.
          </p>
        </div>

        <div className="services-grid">
          {/* Services cards remain the same */}
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
        .services-page {
          padding: 100px 20px;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
          color: white;
          min-height: 100vh;
        }

        /* LOGO WRAPPER */
        .logo-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
          padding: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(0,198,255,0.2), transparent 70%);
          box-shadow: 0 0 50px rgba(0,198,255,0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .logo-wrapper:hover {
          transform: scale(1.08);
          box-shadow: 0 0 80px rgba(0,198,255,0.6);
        }

        .logo {
          width: 130px;
          border-radius: 50%;
        }

        .services-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 70px auto;
        }

        .services-header h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-header p {
          font-size: 18px;
          color: #bfbfbf;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 35px 25px;
          transition: all 0.4s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border: 1px solid rgba(0, 198, 255, 0.6);
          box-shadow: 0 15px 40px rgba(0, 198, 255, 0.2);
        }

        .service-card.highlight {
          border: 1px solid rgba(0, 198, 255, 0.6);
          box-shadow: 0 10px 30px rgba(0, 198, 255, 0.15);
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

        @media (max-width: 768px) {
          .services-header h2 {
            font-size: 32px;
          }
          .services-header p {
            font-size: 16px;
          }
        }
      `}</style>

      <SiteTypes />
      <CallToActionSection />
      <ContactForm />
    </>
  );
}