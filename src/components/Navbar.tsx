"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
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

          {/* Hamburger */}
          <div
            className={`mobile-menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={toggleMenu}>Accueil</Link>
        <Link href="/services" onClick={toggleMenu}>Services</Link>
        <Link href="/a-propos" onClick={toggleMenu}>À propos</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </div>

      <style jsx>{`

        .navbar{
          position:sticky;
          top:0;
          z-index:1000;
          backdrop-filter:blur(12px);
          background:rgba(0,0,0,0.45);
          border-bottom:1px solid rgba(255,255,255,0.1);
        }

        .container{
          max-width:1200px;
          margin:auto;
          padding:0 20px;
          height:75px;
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        /* Logo */

        .logo-container{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .logo-wrapper{
          width:50px;
          height:50px;
          border-radius:50%;
          padding:3px;
          background:linear-gradient(45deg,#6a11cb,#2575fc,#ffd700);
          animation:gradientMove 5s infinite linear;
        }

        .logo-img{
          width:100%;
          height:100%;
          border-radius:50%;
          object-fit:cover;
        }

        .logo-text{
          font-size:26px;
          font-weight:bold;
          background:linear-gradient(45deg,#6a11cb,#2575fc);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        @keyframes gradientMove{
          0%{background-position:0%}
          100%{background-position:200%}
        }

        /* Desktop Links */

        .links{
          display:flex;
          gap:35px;
        }

        .links a{
          color:#fff;
          font-weight:600;
          position:relative;
        }

        .links a::after{
          content:'';
          position:absolute;
          bottom:-5px;
          left:0;
          width:0%;
          height:2px;
          background:#ffd700;
          transition:0.3s;
        }

        .links a:hover::after{
          width:100%;
        }

        /* Hamburger */

        .mobile-menu-icon{
          display:none;
          flex-direction:column;
          gap:6px;
          cursor:pointer;
        }

        .mobile-menu-icon span{
          width:28px;
          height:3px;
          background:white;
          border-radius:2px;
          transition:0.4s;
        }

        .mobile-menu-icon.open span:nth-child(1){
          transform:rotate(45deg) translate(6px,6px);
        }

        .mobile-menu-icon.open span:nth-child(2){
          opacity:0;
        }

        .mobile-menu-icon.open span:nth-child(3){
          transform:rotate(-45deg) translate(6px,-6px);
        }

        /* Overlay */

        .overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.55);
          backdrop-filter:blur(4px);
          opacity:0;
          pointer-events:none;
          transition:0.4s;
          z-index:998;
        }

        .overlay.show{
          opacity:1;
          pointer-events:auto;
        }

        /* Sidebar */

        .mobile-sidebar{
          position:fixed;
          top:0;
          right:0;
          width:280px;
          height:100vh;
          background:linear-gradient(
            160deg,
            #0f172a,
            #020617
          );
          padding:120px 35px;
          display:flex;
          flex-direction:column;
          gap:30px;
          transform:translateX(100%);
          transition:transform 0.45s cubic-bezier(.77,0,.18,1);
          z-index:999;
          box-shadow:-10px 0 40px rgba(0,0,0,0.6);
        }

        .mobile-sidebar.show{
          transform:translateX(0);
        }

        .mobile-sidebar a{
          color:white;
          font-size:22px;
          font-weight:600;
          transition:0.3s;
        }

        .mobile-sidebar a:hover{
          color:#ffd700;
          transform:translateX(-6px);
        }

        /* Responsive */

        @media(max-width:768px){

          .links{
            display:none;
          }

          .mobile-menu-icon{
            display:flex;
          }

        }

      `}</style>
    </>
  );
}