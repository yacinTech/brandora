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

          <div className="links">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={`mobile-menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>

      <div className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={toggleMenu}>Accueil</Link>
        <Link href="/services" onClick={toggleMenu}>Services</Link>
        <Link href="/a-propos" onClick={toggleMenu}>À propos</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </>
  );
}