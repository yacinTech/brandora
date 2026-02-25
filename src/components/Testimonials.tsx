"use client";

export default function Testimonials() {
  const reviews = [
    {
      name: "Youssef El Amrani",
      country: "Morocco 🇲🇦",
      text: "Brandora a transformé notre présence digitale. Notre site est rapide, moderne et attire beaucoup plus de clients qu'avant.",
    },
    {
      name: "Claire Dubois",
      country: "France 🇫🇷",
      text: "Une équipe professionnelle, réactive et très créative. Je recommande vivement leurs services digitaux.",
    },
    {
      name: "James Walker",
      country: "United Kingdom 🇬🇧",
      text: "Outstanding quality and attention to detail. Brandora helped us scale our online visibility significantly.",
    },
    {
      name: "Sara Benali",
      country: "Morocco 🇲🇦",
      text: "خدمة احترافية وتعامل راقٍ. الموقع الذي أنشأوه لنا فاق توقعاتنا من حيث الجودة والأداء.",
    },
    {
      name: "Thomas Bernard",
      country: "France 🇫🇷",
      text: "Un travail sérieux avec un excellent sens du design et de la performance technique.",
    },
    {
      name: "Emily Johnson",
      country: "USA 🇺🇸",
      text: "Professional, strategic and results-driven. Highly recommended for any serious business.",
    },
  ];

  return (
    <>
      <section className="testimonials">
        <div className="container">
          <h2 className="title">Ce que disent nos clients</h2>
          <p className="subtitle">
            La satisfaction de nos clients est notre priorité absolue.
          </p>

          <div className="grid">
            {reviews.map((review, index) => (
              <div key={index} className="card">
                <div className="stars">★★★★★</div>
                <p className="text">"{review.text}"</p>
                <div className="client">
                  <h4>{review.name}</h4>
                  <span>{review.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .testimonials {
          padding: 100px 20px;
          background: #0d0d0d;
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
          color: #bbb;
          margin-bottom: 60px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: #00c3ff;
          box-shadow: 0 10px 30px rgba(0, 195, 255, 0.2);
        }

        .stars {
          color: #ffd700;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #ddd;
          margin-bottom: 20px;
        }

        .client h4 {
          margin: 0;
          font-size: 1rem;
        }

        .client span {
          font-size: 0.85rem;
          color: #aaa;
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