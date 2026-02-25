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
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1),
            box-shadow 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 195, 255, 0.3);
        }

        .card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #00c3ff;
        }

        .card p {
          color: #ddd;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .services h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}