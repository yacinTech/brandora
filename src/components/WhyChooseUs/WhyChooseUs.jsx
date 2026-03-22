"use client";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-container">
        <h2 className="why-title">Pourquoi choisir Brandora ?</h2>
        <p className="why-subtitle">
          Nous créons des expériences digitales modernes, performantes et
          orientées résultats.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3>Performance</h3>
            <p>Sites rapides et optimisés pour convertir vos visiteurs.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3>Stratégie</h3>
            <p>Approche personnalisée selon votre marché.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3>Technologie</h3>
            <p>Des solutions modernes et évolutives.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Accompagnement</h3>
            <p>Suivi et support à chaque étape.</p>
          </div>
        </div>
      </div>
    </section>
  );
}