"use client";

import React from "react";

const SiteTypes = () => {
  const sites = [
    {
      title: "Agences de location de voitures",
      img: "/car-rental.jpg",
      description:
        "Plateformes modernes pour présenter vos véhicules et gérer les réservations efficacement.",
    },
    {
      title: "Restaurants & Cafés",
      img: "/restaurant.jpg",
      description:
        "Design élégant avec menus interactifs et système de réservation intégré.",
    },
    {
      title: "Écoles & Cliniques médicales",
      img: "/school-clinic.jpg",
      description:
        "Solutions digitales pour la gestion des rendez-vous et des informations.",
    },
    {
      title: "Boutiques E-commerce",
      img: "/ecommerce.jpg",
      description:
        "Sites dynamiques, sécurisés et optimisés pour maximiser vos ventes en ligne.",
    },
  ];

  return (
    <section className="site-types">
      <h2>Les types de sites que nous concevons</h2>

      <div className="sites-grid">
        {sites.map((site, index) => (
          <div className="site-card" key={index}>
            <div className="card-border">
              <div className="image-wrapper">
                <img src={site.img} alt={site.title} />

                <div className="overlay">
                  <div className="text-box">
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
        .site-types {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .site-types h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          font-weight: 700;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ===== GRID ===== */
        .sites-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
        }

        /* ===== CARD ===== */
        .site-card {
          transition: transform 0.4s ease;
        }

        .site-card:hover {
          transform: translateY(-8px);
        }

        /* ===== GRADIENT BORDER ===== */
        .card-border {
          padding: 2px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            #6a11cb,
            #2575fc,
            #00d4ff
          );
        }

        /* ===== IMAGE WRAPPER ===== */
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #111;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .site-card:hover img {
          transform: scale(1.06);
        }

        /* ===== DARK LAYER FOR CONTRAST ===== */
        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 25px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.3),
            transparent
          );
        }

        /* ===== BLUR TEXT BOX ===== */
        .text-box {
          width: 100%;
          padding: 18px;
          border-radius: 14px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .text-box h3 {
          font-size: 20px;
          margin-bottom: 8px;
          font-weight: 600;
          color: #fff;
        }

        .text-box p {
          font-size: 14px;
          color: #e0e0e0;
          line-height: 1.5;
        }

        /* ===== TABLET ===== */
        @media (max-width: 992px) {
          .sites-grid {
            gap: 25px;
          }

          .image-wrapper {
            height: 320px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .site-types {
            margin: 60px auto;
          }

          .site-types h2 {
            font-size: 26px;
            margin-bottom: 35px;
          }

          .sites-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .image-wrapper {
            height: 250px;
          }

          .text-box {
            padding: 14px;
          }

          .text-box h3 {
            font-size: 17px;
          }

          .text-box p {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default SiteTypes;