"use client";
import "./Portfolio.css";

const projects = [
  {
    name: "Entreprise de maintenance et design de cuisines",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602320/kitchen_qg1o7b.jpg",
    url: "https://novara.ma",
  },
     {
    name: "Site de services touristiques et de loisirs",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602321/loisirs_tyqneq.jpg",
    url: "https://www.parapente-aglou-legzira.com/",
  },
    {
    name: "Entreprise de construction et travaux publics",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776892088/WhatsApp_Image_2026-04-22_at_22.06.43_nn636s.jpg",
    url: "https://comnex.ma/",
  },
   {
    name: "Entreprise de montage industriel",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1777124373/WhatsApp_Image_2026-04-25_at_14.38.38_o4pgwi.jpg",
    url: "https://jadida-montage.vercel.app/fr",
  },
    {
  name: "Établissement éducatif",
  image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602320/istifae_mpfgzz.jpg",
  url: "https://www.istifae-academy.com/",
},

       {
    name: "Entreprise de transport et logistique",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602318/baraki_wkrrcu.jpg",
    url: "https://barakitransetfils.com/",
  },

    {
    name: "Agence d'éducation et d'orientation",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602316/agency_edxh0s.jpg",
    url: "https://cabeduconseil.com/",
  },
    {
    name: "Entreprise de jardinage",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602319/gardening_qbyfpd.jpg",
    url: "https://bloomnest.site",
  },
      {
    name: "Entreprise de travaux publics",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602317/aminal_pg3xzj.jpg",
    url: "https://aminall.vercel.app/",
  },
  {
    name: "Entreprise de réfrigération et climatisation",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602318/cooling_pz0nj0.jpg",
    url: "https://airnetiic.com",
  },

  {
    name: "Site de commerce électronique",
    image: "https://res.cloudinary.com/de6rs8vzj/image/upload/v1776602319/ecommerce_uiwzje.jpg",
    url: "https://elynor.netlify.app/",
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
