"use client";

export default function WhyChooseUs() {
  return (
    <>
      <section className="why-section">
        <div className="container">
          <h2 className="title">Pourquoi choisir Brandora ?</h2>
          <p className="subtitle">
            Nous créons des expériences digitales modernes, performantes et
            orientées résultats pour propulser votre marque.
          </p>

          <div className="grid">
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>Performance</h3>
              <p>
                Sites rapides, optimisés SEO et conçus pour convertir vos
                visiteurs en clients.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3>Stratégie</h3>
              <p>
                Approche sur mesure adaptée à votre marché et vos objectifs
                business.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Technologie Moderne</h3>
              <p>
                Utilisation des dernières technologies pour garantir qualité et
                évolutivité.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Accompagnement</h3>
              <p>
                Support premium et suivi personnalisé à chaque étape du projet.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h3>+50</h3>
              <p>Projets réalisés</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Clients satisfaits</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .why-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
          color: white;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .subtitle {
          max-width: 700px;
          margin: 0 auto 60px;
          color: #bbb;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .card {
          background: #111;
          padding: 30px;
          border-radius: 20px;
          transition: 0.3s ease;
          border: 1px solid #222;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: #00c3ff;
          box-shadow: 0 10px 30px rgba(0, 195, 255, 0.2);
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #00c3ff;
        }

        .stats {
          margin-top: 80px;
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .stats h3 {
          font-size: 2rem;
          color: #00c3ff;
        }

        .stats p {
          color: #bbb;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}