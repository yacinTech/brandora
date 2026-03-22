"use client";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Brandora</h1>
            <p className="hero-subtitle">
              Solutions digitales modernes et performantes
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 80vh;
          display: flex;
          align-items: flex-end; /* ⬅️ جعل المحتوى أسفل الفيديو */
          justify-content: center;
          overflow: hidden;
          padding-bottom: 40px; /* ⬅️ مسافة إضافية من الأسفل */
        }
          

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6);
          z-index: -2;
        }

        /* Overlay */
        .hero-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end; /* ⬅️ المحتوى أسفل */
          justify-content: center;
          padding: 20px;
        }

        /* Content with blur background */
        .hero-content {
          text-align: center;
          color: #fff;
          padding: 40px 50px;
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.35);
          border-radius: 20px;
          animation: fadeIn 1.5s ease;
          max-width: 800px;
          width: 90%;
        }

        .hero-title {
          font-size: 60px;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 24px;
          color: #ddd;
          text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            height: 65vh;
            padding-bottom: 20px;
          }

          .hero-content {
            padding: 20px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 16px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}