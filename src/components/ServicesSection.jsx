"use client";

export default function ServicesSection() {
  return (
    <>
      <section className="services">
        <h2>Nos Services</h2>

        <div className="services-grid">
          <div className="card">
            <h3>Création de sites web</h3>
            <p>
              Des sites modernes, rapides et optimisés pour convertir vos
              visiteurs en clients.
            </p>
          </div>

          <div className="card">
            <h3>Noms de domaine</h3>
            <p>
              Nous vous aidons à choisir et sécuriser le nom idéal pour votre
              marque.
            </p>
          </div>

          <div className="card">
            <h3>SEO & Référencement</h3>
            <p>
              Améliorez votre visibilité sur Google grâce à des stratégies SEO efficaces.
            </p>
          </div>

          <div className="card">
            <h3>Marketing & Réseaux Sociaux</h3>
            <p>
              Gestion de campagnes publicitaires et des réseaux sociaux pour maximiser votre impact.
            </p>
          </div>

          {/* بطاقة جديدة – تحسين خرائط غوغل */}
          <div className="card">
            <h3>Optimisation Google Maps</h3>
            <p>
              Améliorez votre présence locale et facilitez la découverte de votre entreprise sur Google Maps.
            </p>
          </div>

          {/* بطاقة جديدة – بريد إلكتروني احترافي */}
          <div className="card">
            <h3>Email Professionnel</h3>
            <p>
              Fourniture d'adresses e-mail professionnelles pour renforcer la crédibilité et la communication de votre marque.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          text-align: center;
          color: #fff;
        }

        .services h2 {
          font-size: 36px;
          margin-bottom: 50px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0, 198, 255, 0.2);
          border: 1px solid rgba(0,198,255,0.25);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 198, 255, 0.35);
        }

        .card h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #00c6ff;
          font-weight: 600;
        }

        .card p {
          color: #d4d4d4;
          font-size: 15px;
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .services h2 {
            font-size: 28px;
          }

          .card h3 {
            font-size: 18px;
          }

          .card p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}