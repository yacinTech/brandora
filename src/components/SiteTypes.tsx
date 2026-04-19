"use client";

import React from "react";

const SiteTypes = () => {
  const sites = [
    {
      title: "Agences de location de voitures",
      description: "Plateformes modernes pour présenter vos véhicules et gérer les réservations efficacement.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601739/car-rental_eyosv0.webp"
    },
    {
      title: "Restaurants & Cafés",
      description: "Design élégant avec menus interactifs et système de réservation intégré.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601740/restaurant_zm9isa.avif"
    },
    {
      title: "Écoles & Cliniques médicales",
      description: "Solutions digitales pour la gestion des rendez-vous et des informations.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601741/school-clinic_wc0a6s.webp"
    },
    {
      title: "Boutiques E-commerce",
      description: "Sites dynamiques, sécurisés et optimisés pour maximiser vos ventes en ligne.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601740/ecommerce_kwayah.jpg"
    },
    {
      title: "Sites touristiques",
      description: "Portails interactifs pour les agences touristiques avec informations et réservations.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601741/tourism_anecnm.jpg"
    },
    {
      title: "Sites pour entreprises",
      description: "Sites institutionnels professionnels pour présenter l’entreprise et ses services.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601741/management_sitkgy.jpg"
    },
    {
      title: "Applications de gestion",
      description: "Solutions web sur mesure pour gérer vos programmes, employés et données efficacement.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601741/company_nqyd4x.jpg"
    },
    {
      title: "SEO & Email professionnel",
      description: "Optimisation Google Maps et création d’emails professionnels pour renforcer votre image.",
      img: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776601892/seo-email_uoewif.svg"
    }
  ];

  return (
    <section className="site-types-section">
      <h2>Les types de sites que nous concevons</h2>
      <div className="site-types-grid">
        {sites.map((site, index) => (
          <div className="site-types-card" key={index}>
            <div className="site-types-card-border">
              <div className="site-types-image-wrapper">
                <img src={site.img} alt={site.title} />
                <div className="site-types-overlay">
                  <div className="site-types-text-box">
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .site-types-section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          color: #fff;
        }

        .site-types-section h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          font-weight: 700;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .site-types-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
        }

        .site-types-card {
          transition: transform 0.4s ease;
        }
        .site-types-card:hover { transform: translateY(-8px); }

        .site-types-card-border {
          padding: 2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #6a11cb, #2575fc, #00d4ff);
        }

        .site-types-image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #111;
        }

        .site-types-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .site-types-card:hover img { transform: scale(1.06); }

        .site-types-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent);
          z-index: 10; /* تأكد من ظهور النص */
        }

        .site-types-text-box {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          backdrop-filter: blur(8px);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 6px 20px rgba(0,198,255,0.3);
          z-index: 20;
        }

        .site-types-text-box h3 {
          font-size: 20px;
          margin-bottom: 6px;
          font-weight: 700;
          color: #00c6ff;
        }

        .site-types-text-box p {
          font-size: 14px;
          color: #d4d4d4;
          line-height: 1.5;
        }

        @media (max-width: 992px) { 
          .site-types-grid { gap: 25px; } 
          .site-types-image-wrapper { height: 320px; } 
        }
        @media (max-width: 768px) {
          .site-types-grid { grid-template-columns: 1fr; gap: 20px; }
          .site-types-image-wrapper { height: 250px; }
          .site-types-text-box h3 { font-size: 17px; }
          .site-types-text-box p { font-size: 13px; }
          .site-types-section h2 { font-size: 26px; margin-bottom: 35px; }
        }
      `}</style>
    </section>
  );
};

export default SiteTypes;