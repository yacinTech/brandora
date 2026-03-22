"use client";
import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
      {
      name: "Thomas Bernard",
      gender: "male",
      textFR: "Un service premium avec une attention aux détails remarquable.",
     
    },
    {
      name: "Sofia Benali",
      gender: "female",
      textFR: "Service exceptionnel, équipe très professionnelle et résultats au-delà de mes attentes.",
     
    },
   
    {
      name: "Nadia El Amrani",
      gender: "female",
      textFR: "Très satisfaite du résultat final, je recommande vivement.",
     
    },
    {
      name: "Claire Dubois",
      gender: "female",
      textFR: "Travail créatif et efficace avec un excellent accompagnement.",
     
    },
    {
      name: "James Walker",
      gender: "male",
      textFR: "Une stratégie digitale puissante qui a boosté notre business.",
      
    },
    {
      name: "Youssef El Amrani",
      gender: "male",
      textFR: "Résultats rapides et communication parfaite.",
    
    },
     {
      name: "Emily Carter",
      gender: "female",
      textFR: "Une expérience fluide et un design moderne qui attire vraiment les clients.",
     
    },
  
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Ce que disent nos clients</h2>
        <p className="testimonials-subtitle">
          What our clients say about us
        </p>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`testimonial-card ${review.gender}`}
            >
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>

              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="text-fr">"{review.textFR}"</p>
            

              <div className="client">
                <div className="avatar">
                  <i
                    className={
                      review.gender === "female"
                        ? "fa-solid fa-user"
                        : "fa-solid fa-user-tie"
                    }
                  ></i>
                </div>
                <h4>{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}