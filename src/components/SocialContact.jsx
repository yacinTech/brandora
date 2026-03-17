"use client";

export default function SocialContact() {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <section className="social-contact">
        <h2 className="social-title">Restons Connectés</h2>

        <div className="social-grid">

          <a
            href="https://www.facebook.com/branddorra/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>

          <a
            href="https://instagram.com/brandorra1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/212625902672"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:info@brandora.fun"
            className="social-card"
          >
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>

          <a
            href="tel:+212625902672"
            className="social-card"
          >
            <i className="fas fa-phone"></i>
            <span>Téléphone</span>
          </a>

        </div>
      </section>

      <style jsx>{`
        .social-contact {
          padding: 80px 20px;
          text-align: center;
          background: linear-gradient(135deg, #111, #1b1b1b);
          border-radius: 30px;
          margin: 100px auto;
          max-width: 1200px;
        }

        .social-title {
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 50px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 25px;
        }

        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          text-decoration: none;
          color: white;
          transition: 0.4s ease;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
        }

        .social-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,198,255,0.25);
          border: 1px solid rgba(0,198,255,0.4);
        }

        .social-card i {
          font-size: 28px;
          margin-bottom: 12px;
          color: #00c6ff;
          transition: 0.3s;
        }

        .social-card:hover i {
          transform: scale(1.2);
        }

        .social-card span {
          font-size: 16px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .social-title {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}