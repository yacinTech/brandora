"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css"; // استيراد CSS الخارجي

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img src="/logo.png" alt="Brandora Logo" className="logo-img" />
            </div>
            <h1 className="logo-text">Brandora</h1>
          </div>

          {/* روابط النسخة العادية */}
          <div className="links">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/projects">Projets</Link> {/* الرابط الجديد */}
            <Link href="/contact">Contact</Link>
          </div>

          {/* أيقونة القائمة للهواتف */}
          <div className={`mobile-menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Overlay عند فتح القائمة */}
      <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>

      {/* القائمة الجانبية للهواتف */}
      <div className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={toggleMenu}>Accueil</Link>
        <Link href="/services" onClick={toggleMenu}>Services</Link>
        <Link href="/a-propos" onClick={toggleMenu}>À propos</Link>
        <Link href="/projects" onClick={toggleMenu}>Projets</Link> {/* الرابط الجديد */}
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </>
  );
}