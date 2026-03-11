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

        {/* Hero Image */}
        <Image
          src="/services-hero.jpg"
          alt="Services Digitaux Brandora"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
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
            <p>
              Des sites modernes, rapides et optimisés pour une expérience
              utilisateur exceptionnelle.
            </p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-lock"></i></div>
            <h3>Vente de noms de domaine</h3>
            <p>
              Trouvez et sécurisez le nom idéal pour renforcer l'identité
              de votre marque.
            </p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-chart-line"></i></div>
            <h3>SEO & Référencement</h3>
            <p>
              Optimisation stratégique pour améliorer votre visibilité
              et dominer les résultats Google.
            </p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-bullhorn"></i></div>
            <h3>Campagnes publicitaires</h3>
            <p>
              Gestion experte de campagnes Facebook Ads & Google Ads
              pour maximiser votre retour sur investissement.
            </p>
          </div>

          <div className="service-card">
            <div className="icon"><i className="fas fa-hashtag"></i></div>
            <h3>Réseaux sociaux</h3>
            <p>
              Création de contenu stratégique et gestion professionnelle
              de vos plateformes sociales.
            </p>
          </div>

          <div className="service-card highlight">
            <div className="icon"><i className="fas fa-mobile-screen-button"></i></div>
            <h3>Développement d’applications mobiles</h3>
            <p>
              Applications iOS & Android performantes, intuitives
              et adaptées à vos objectifs business.
            </p>
          </div>

        </div>
      </section>

      <style jsx>{`

        /* HERO */

        .hero-section{
          position:relative;
          height:420px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          overflow:hidden;
        }

        .hero-image{
          object-fit:cover;
          z-index:1;
        }

        .hero-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            180deg,
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.85)
          );
          z-index:2;
        }

        .hero-content{
          position:relative;
          max-width:750px;
          padding:20px;
          color:white;
          z-index:3;
        }

        .hero-content h1{
          font-size:46px;
          font-weight:700;
          margin-bottom:20px;
          background:linear-gradient(90deg,#00c6ff,#0072ff);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-content p{
          font-size:18px;
          color:#d4d4d4;
          line-height:1.7;
        }

        /* SERVICES */

        .services-page{
          padding:90px 20px;
          background:linear-gradient(135deg,#0f0f0f,#1a1a1a);
          color:white;
        }

        .services-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:30px;
          max-width:1200px;
          margin:auto;
        }

        .service-card{
          background:rgba(255,255,255,0.05);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:20px;
          padding:35px 25px;
          text-align:center;
          transition:all .4s ease;
        }

        .service-card:hover{
          transform:translateY(-10px);
          border:1px solid rgba(0,198,255,0.6);
          box-shadow:0 15px 40px rgba(0,198,255,0.2);
        }

        .service-card.highlight{
          border:1px solid rgba(0,198,255,0.6);
          box-shadow:0 10px 30px rgba(0,198,255,0.15);
        }

        .icon{
          font-size:32px;
          margin-bottom:20px;
          color:#00c6ff;
        }

        .service-card h3{
          font-size:20px;
          margin-bottom:15px;
          font-weight:600;
        }

        .service-card p{
          font-size:15px;
          color:#cfcfcf;
          line-height:1.6;
        }

        /* MOBILE */

        @media(max-width:768px){

          .hero-section{
            height:350px;
          }

          .hero-content h1{
            font-size:34px;
          }

          .hero-content p{
            font-size:16px;
          }

        }

      `}</style>

      <SiteTypes />
      <CallToActionSection />
      <ContactForm />
    </>
  );
}