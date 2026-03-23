"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ---------- About ---------- */}
        <div className="footer-section about-section">
          <div className="brand-header">
            <div className="footer-logo-wrapper">
              <img src="/logo.png" alt="Brandora Logo" className="footer-logo" />
            </div>
            <h3 className="brand-name">Brandora</h3>
          </div>
          <p className="brand-description">
            Nous créons des solutions digitales modernes et performantes pour
            aider votre entreprise à se développer en ligne.
          </p>
        </div>

        {/* ---------- Useful Links ---------- */}
        <div className="footer-section links-section">
          <h4>Liens utiles</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* ---------- Contact ---------- */}
        <div className="footer-section contact-section">
          <h4>Contact</h4>
          <p>Email: info@brandora.fun</p>
          <p>Téléphone: +212625902672</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/branddorra/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/212625902672" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/brandorra1" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Brandora. Tous droits réservés.
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #0f0f0f, #000);
          color: #fff;
          padding: 70px 20px 25px;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto 40px;
          gap: 50px;
        }

        .footer-section {
          flex: 1;
          min-width: 250px;
        }

        /* Brand Section */
        .about-section {
          max-width: 350px;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .footer-logo-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(45deg, #00c3ff, #6a11cb);
          transition: transform 0.4s ease;
        }

        .footer-logo-wrapper:hover {
          transform: scale(1.1) rotate(6deg);
        }

        .footer-logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 18px rgba(0,195,255,0.4);
          transition: all 0.4s ease;
        }

        .footer-logo-wrapper:hover .footer-logo {
          box-shadow: 0 0 28px rgba(0,195,255,0.8);
        }

        .brand-name {
          font-size: 26px;
          font-weight: bold;
          background: linear-gradient(45deg, #00c3ff, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-description {
          color: #bbb;
          line-height: 1.7;
          font-size: 15px;
        }

        /* Links Section */
        .links-section h4 {
          color: #00c3ff;
          margin-bottom: 15px;
        }

        .links-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-section ul li {
          margin-bottom: 8px;
        }

        .links-section ul li a {
          color: #bbb;
          text-decoration: none; /* إزالة الخط الافتراضي */
          position: relative;
          display: inline-block;
          transition: 0.3s ease;
        }

        .links-section ul li a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background: #00c3ff;
          transition: 0.3s ease;
        }

        .links-section ul li a:hover::after {
          width: 100%; /* خط أسفل الرابط عند الهور */
        }

        .links-section ul li a:hover {
          color: #fff;
        }

        /* Contact Section */
        .contact-section h4 {
          color: #00c3ff;
          margin-bottom: 15px;
        }

        .contact-section p {
          color: #ddd;
          margin-bottom: 8px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }

        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: #fff;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: #00c3ff;
          transform: translateY(-4px) scale(1.1);
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
          font-size: 14px;
          color: #777;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .brand-header {
            justify-content: center;
          }

          .about-section {
            max-width: 100%;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}