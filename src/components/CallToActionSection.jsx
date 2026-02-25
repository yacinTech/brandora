"use client";

export default function CallToActionSection() {
  return (
    <>
      <section className="cta-section">
        <h3>
          Transformons votre idée en un projet digital d’exception.
        </h3>
        <p>
          Parlez-nous de votre vision et recevez une stratégie personnalisée
          adaptée à vos objectifs.
        </p>
      </section>

      <style jsx>{`
        .cta-section {
          margin: 120px auto 80px auto;
          text-align: center;
          max-width: 800px;
          padding: 60px 30px;
          background: linear-gradient(
            135deg,
            rgba(0, 198, 255, 0.1),
            rgba(0, 114, 255, 0.1)
          );
          border: 2px solid rgba(0, 198, 255, 0.3);
          border-radius: 25px;
          backdrop-filter: blur(15px);
          box-shadow: 0 20px 50px rgba(0, 198, 255, 0.15);
          transition: 0.4s ease, transform 0.4s ease;
        }

        .cta-section:hover {
          box-shadow: 0 25px 60px rgba(0, 198, 255, 0.25);
          transform: translateY(-5px);
        }

        .cta-section h3 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-section p {
          font-size: 18px;
          color: #d0d0d0;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        /* MEDIUM SCREENS */
        @media (max-width: 768px) {
          .cta-section {
            margin: 80px 20px;
            padding: 45px 25px;
          }

          .cta-section h3 {
            font-size: 26px;
          }

          .cta-section p {
            font-size: 16px;
          }
        }

        /* SMALL SCREENS */
        @media (max-width: 480px) {
          .cta-section {
            margin: 60px 15px;
            padding: 35px 20px;
            border: 1.5px solid rgba(0, 198, 255, 0.25);
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 198, 255, 0.12);
          }

          .cta-section h3 {
            font-size: 22px;
            line-height: 1.25;
          }

          .cta-section p {
            font-size: 14px;
            line-height: 1.5;
          }
        }
      `}</style>
    </>
  );
}