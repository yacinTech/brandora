"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <section className="about-page">

        {/* HERO IMAGE */}
        <div className="about-hero">

          <Image
            src="/about-hero.jpg"
            alt="Brandora Digital Agency"
            fill
            priority
            className="hero-image"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="main-title">À Propos de Brandora</h1>

            <p>
              Une agence digitale ambitieuse dédiée à la création
              d’expériences numériques puissantes, élégantes et orientées résultats.
            </p>
          </div>

        </div>

        {/* PRESENTATION */}
        <div className="about-content">
          <h2 className="section-title">Notre Mission</h2>
          <p>
            Chez <span>Brandora</span>, nous aidons les entreprises à
            construire une présence digitale solide et stratégique.
            Nous combinons design moderne, performance technique
            et vision marketing pour transformer vos idées en succès mesurable.
          </p>

          <h2 className="section-title">Notre Vision</h2>
          <p>
            Devenir une référence digitale en Afrique et à l’international
            en offrant des solutions innovantes, performantes et centrées
            sur la valeur réelle pour nos clients.
          </p>
        </div>

        {/* WHY SECTION */}
        <div className="why-section">
          <h2 className="section-title">Pourquoi choisir Brandora ?</h2>

          <div className="why-grid">
            <div className="why-card">
              <i className="fas fa-rocket"></i>
              <h3>Innovation</h3>
              <p>Solutions modernes et technologies performantes.</p>
            </div>

            <div className="why-card">
              <i className="fas fa-chart-line"></i>
              <h3>Résultats</h3>
              <p>Stratégies orientées croissance et conversion.</p>
            </div>

            <div className="why-card">
              <i className="fas fa-handshake"></i>
              <h3>Partenariat</h3>
              <p>Accompagnement continu et relation de confiance.</p>
            </div>

            <div className="why-card">
              <i className="fas fa-shield-halved"></i>
              <h3>Fiabilité</h3>
              <p>Transparence, engagement et respect des délais.</p>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="contact-section">
          <h2 className="section-title">Contactez-nous</h2>

          <div className="contact-grid">

            <a href="mailto:elynor.contact@gmail.com" className="contact-card">
              <i className="fas fa-envelope"></i>
              <p>elynor.contact@gmail.com</p>
            </a>

            <a href="tel:+212625902672" className="contact-card">
              <i className="fas fa-phone"></i>
              <p>+212 6 25 90 26 72</p>
            </a>

            <a
              href="https://wa.me/212625902672"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-whatsapp"></i>
              <p>WhatsApp Business</p>
            </a>

            <a
              href="https://instagram.com/brandorra1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-instagram"></i>
              <p>@brandora</p>
            </a>

          </div>
        </div>

        {/* PRIVACY */}
        <div className="privacy-section">
          <i className="fas fa-lock"></i>
          <p>
            Nous respectons votre vie privée.
            Consultez notre <a href="/privacy">Politique de confidentialité</a>.
          </p>
        </div>

      </section>

      <style jsx>{`

        .about-page {
          background: linear-gradient(135deg,#0f0f0f,#1a1a1a);
          color:white;
        }

        /* HERO */

        .about-hero{
          position:relative;
          height:450px;
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
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.85)
          );
          z-index:2;
        }

        .hero-content{
          position:relative;
          z-index:3;
          max-width:750px;
          padding:20px;
        }

        .main-title{
          font-size:44px;
          font-weight:800;
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

        /* CONTENT */

        .about-content{
          max-width:900px;
          margin:100px auto;
          text-align:center;
          padding:0 20px;
        }

        .section-title{
          font-size:30px;
          margin-bottom:20px;
        }

        .about-content p{
          font-size:17px;
          color:#cfcfcf;
          line-height:1.8;
        }

        .about-content span{
          color:#00c6ff;
          font-weight:bold;
        }

        /* WHY */

        .why-section{
          max-width:1200px;
          margin:0 auto 100px auto;
          text-align:center;
          padding:0 20px;
        }

        .why-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:30px;
          margin-top:40px;
        }

        .why-card{
          background:rgba(255,255,255,0.05);
          padding:30px;
          border-radius:20px;
          transition:.4s;
        }

        .why-card:hover{
          transform:translateY(-8px);
          box-shadow:0 15px 40px rgba(0,198,255,.25);
        }

        .why-card i{
          font-size:28px;
          margin-bottom:15px;
          color:#00c6ff;
        }

        /* CONTACT */

        .contact-section{
          text-align:center;
          margin-bottom:100px;
          padding:0 20px;
        }

        .contact-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:25px;
          margin-top:40px;
        }

        .contact-card{
          background:rgba(255,255,255,0.05);
          padding:25px;
          border-radius:15px;
          text-decoration:none;
          color:white;
          transition:.3s;
        }

        .contact-card:hover{
          background:rgba(0,198,255,0.15);
          transform:translateY(-5px);
        }

        .contact-card i{
          font-size:22px;
          margin-bottom:10px;
          color:#00c6ff;
        }

        /* PRIVACY */

        .privacy-section{
          text-align:center;
          font-size:14px;
          color:#aaa;
          padding-bottom:80px;
        }

        .privacy-section i{
          margin-right:8px;
          color:#00c6ff;
        }

        .privacy-section a{
          color:#00c6ff;
          text-decoration:none;
        }

        @media(max-width:768px){

          .about-hero{
            height:360px;
          }

          .main-title{
            font-size:32px;
          }

          .hero-content p{
            font-size:16px;
          }

        }

      `}</style>
    </>
  );
}