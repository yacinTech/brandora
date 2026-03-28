"use client";
import "./Portfolio.css";

const projects = [
  {
    name: "Entreprise de maintenance et design de cuisines",
    image: "/images/kitchen.jpg",
    url: "https://novara.ma",
  },
  {
    name: "Entreprise de jardinage et journaux",
    image: "/images/gardening.jpg",
    url: "https://bloomnest.site",
  },
  {
    name: "Entreprise de réfrigération et climatisation",
    image: "/images/cooling.jpg",
    url: "https://airnetiic.com",
  },
  {
  name: "مؤسسة تعليمية",
  image: "/images/istifae.jpg",
  url: "https://www.istifae-academy.com/",
},
  {
    name: "Site de commerce électronique",
    image: "/images/ecommerce.jpg",
    url: "https://elynor-store.vercel.app/",
  },
  {
    name: "Bibliothèque électronique",
    image: "/images/library.jpg",
    url: "https://library-odine.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
  <div className="portfolio-container">
    <h2 className="portfolio-title">Nos Projets</h2>
    <p className="portfolio-subtitle">
      Découvrez quelques-uns de nos travaux récents
    </p>

    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-card">
          <div className="portfolio-image">
            <img src={project.image} alt={project.name} />
          </div>
          <h3 className="project-name">{project.name}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            Voir le site
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}