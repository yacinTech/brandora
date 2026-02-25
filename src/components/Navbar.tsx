
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="Brandora Logo" className="logo-img" />
          </div>
          <h1 className="logo-text">Brandora</h1>
        </div>

        {/* Desktop Links */}
        <div className="links">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`mobile-links ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={toggleMenu}>Accueil</Link>
        <Link href="/services" onClick={toggleMenu}>Services</Link>
        <Link href="/a-propos" onClick={toggleMenu}>À propos</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </div>

      {/* Styles */}
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 100;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          font-family: 'Arial', sans-serif;
          transition: all 0.4s ease;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          height: 75px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-wrapper {
          position: relative;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(45deg, #6a11cb, #2575fc, #ffd700);
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
          transition: transform 0.5s ease;
        }

        .logo-wrapper:hover {
          transform: scale(1.15) rotate(10deg);
        }

        .logo-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
          transition: all 0.5s ease;
        }

        .logo-wrapper:hover .logo-img {
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.8);
          transform: scale(1.05);
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .logo-text {
          font-size: 28px;
          font-weight: bold;
          background: linear-gradient(45deg, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: transform 0.3s ease;
        }
        .logo-text:hover {
          transform: scale(1.1);
        }

        /* Desktop Links */
        .links {
          display: flex;
          gap: 35px;
        }
        .links a {
          position: relative;
          font-weight: 600;
          font-size: 18px;
          padding: 5px 0;
          color: #fff;
          transition: all 0.4s ease;
        }
        .links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #ffd700, #ffdd33);
          transition: width 0.3s ease;
        }
        .links a:hover::after {
          width: 100%;
        }
        .links a:hover {
          transform: scale(1.05);
          color: #ffd700;
        }

        /* Mobile Menu Icon */
        .mobile-menu-icon {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          z-index: 110;
        }
        .bar {
          width: 30px;
          height: 3px;
          background-color: #fff;
          border-radius: 2px;
          transition: all 0.5s ease;
        }
        .bar.open:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .bar.open:nth-child(2) {
          opacity: 0;
        }
        .bar.open:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Links */
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: absolute;
          top: 75px;
          left: 0;
          width: 100%;
          padding: 25px;
          background: rgba(0,0,0,0.85);
          border-top: 1px solid rgba(255,255,255,0.2);
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(-20px);
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-links.show {
          opacity: 1;
          max-height: 500px;
          transform: translateY(0);
        }
        .mobile-links a {
          color: #fff;
          font-size: 20px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .mobile-links a:hover {
          color: #ffd700;
          transform: translateX(6px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .links { display: none; }
          .mobile-menu-icon { display: flex; }
        }
      `}</style>
    </nav>
  );
}