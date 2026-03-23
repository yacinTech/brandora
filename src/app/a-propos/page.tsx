"use client";

import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaProjectDiagram, FaSmile, FaClock, FaUsers } from "react-icons/fa";

export default function AboutAgency() {
  // المدير فقط
  const manager = {
    name: "Yassine El Maataoui",
    role: "Fondateur & CEO",
    img: "/team1.jpg",
    bio: "Yassine est le fondateur de Brandora, passionné par le développement web et les solutions digitales innovantes. Il guide l'agence avec vision, créativité et expertise technique.",
    portfolio: "https://www.yassinelmaataouiportfolio.online/",
    github: "https://github.com/yacinTech",
    linkedin: "https://www.linkedin.com/in/yassine-el-maataoui-7b029536a",
    twitter: "https://x.com/elmaataouiyacin?s=21"
  };

  // الخبرة
  const expertiseItems = [
    { title: "Développement Web", desc: "Sites web et applications sur mesure, rapides et performants." },
    { title: "Marketing Digital", desc: "Stratégies efficaces pour accroître votre visibilité en ligne." },
    { title: "SEO & Référencement", desc: "Optimisation pour atteindre le top des recherches Google." },
    { title: "Branding & Design", desc: "Identité visuelle forte et cohérente pour votre marque." },
  ];

  // الإحصائيات
  const statsData = [
    { icon: <FaProjectDiagram />, number: 150, label: "Projets Réalisés" },
    { icon: <FaSmile />, number: 100, label: "Clients Satisfaits" },
    { icon: <FaClock />, number: 8, label: "Années d'Expérience" },
    { icon: <FaUsers />, number: 25, label: "Experts dans l'équipe" },
  ];

  // Counter logic
  const [countStarted, setCountStarted] = useState(false);
  const statsRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  useEffect(() => {
    if (!countStarted) return;
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) =>
          val < statsData[i].number ? val + Math.ceil(statsData[i].number / 100) : statsData[i].number
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, [countStarted]);

  // توليد الدوائر بعد تحميل الصفحة لتجنب Hydration Mismatch
  const [circles, setCircles] = useState<Array<{ width: number; height: number; top: number; left: number; animation: string }>>([]);
  useEffect(() => {
    setCircles([...Array(8)].map((_, i) => ({
      width: 50 + i * 20,
      height: 50 + i * 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animation: `float${i} ${20 + i * 5}s ease-in-out infinite`
    })));
  }, []);

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: "#fff", backgroundColor: "#0a0a0a" }}>

      {/* ---------- Hero Section ---------- */}
      <section style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        overflow: "hidden"
      }}>
        <div style={{ zIndex: 2, maxWidth: "900px" }}>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            marginBottom: "15px",
            fontWeight: "bold",
            lineHeight: "1.2",
            textShadow: "0 5px 20px rgba(0,0,0,0.5)"
          }}>
            Bienvenue chez Brandora
          </h1>
          <p style={{
            fontSize: "clamp(16px, 3vw, 22px)",
            opacity: 0.9,
            margin: "0 auto 25px",
            lineHeight: "1.5"
          }}>
            Nous transformons vos idées en solutions digitales modernes et performantes.
          </p>
          <a href="/contact" style={{
            display: "inline-block",
            padding: "15px 40px",
            backgroundColor: "#00c3ff",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "all 0.3s"
          }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#00c3ff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "#00c3ff";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            Nous Contacter
          </a>
        </div>

        {/* Animated circles */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1 }}>
          {circles.map((circle, i) => (
            <div key={i} style={{
              position: "absolute",
              width: `${circle.width}px`,
              height: `${circle.height}px`,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              top: `${circle.top}%`,
              left: `${circle.left}%`,
              animation: circle.animation
            }} />
          ))}
        </div>
        <style>{`
          ${[...Array(8)].map((_, i) => `
            @keyframes float${i} {
              0% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(-${10 + i*5}px) translateX(${5 + i*3}px); }
              100% { transform: translateY(0) translateX(0); }
            }
          `).join('')}
        `}</style>
      </section>

      {/* ---------- Who We Are ---------- */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#111" }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", marginBottom: "25px", color: "#00c3ff" }}>Qui sommes-nous ?</h2>
        <p style={{ maxWidth: "900px", margin: "0 auto", color: "#ccc", fontSize: "clamp(14px, 2.5vw, 16px)" }}>
          Brandora est une agence digitale innovante, spécialisée dans la création de sites web, 
          le marketing digital, et les solutions sur mesure pour les entreprises ambitieuses. 
          Nous combinons créativité, technologie et stratégie pour générer des résultats concrets et durables.
        </p>
      </section>

      {/* ---------- Stats with Animated Counters ---------- */}
      <section ref={statsRef} style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "40px",
        padding: "60px 20px",
        backgroundColor: "#0a0a0a",
      }}>
        {statsData.map((stat, i) => (
          <div key={i} style={{
            textAlign: "center",
            minWidth: "160px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "15px",
            padding: "25px",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "transform 0.4s, box-shadow 0.4s",
            cursor: "default",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,195,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ fontSize: "32px", color: "#00c3ff", marginBottom: "15px" }}>{stat.icon}</div>
            <h3 style={{ fontSize: "28px", color: "#00c3ff", marginBottom: "5px" }}>{counts[i]}{stat.number > 99 ? "+" : ""}</h3>
            <p style={{ color: "#bbb", fontSize: "14px" }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ---------- Expertise ---------- */}
      <section style={{ padding: "60px 20px", backgroundColor: "#111", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", marginBottom: "50px", color: "#00c3ff" }}>Nos Domaines d'Expertise</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {expertiseItems.map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "transform 0.4s, box-shadow 0.4s",
              cursor: "default"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,195,255,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <h3 style={{ color: "#00c3ff", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#ccc", fontSize: "14px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Manager Section ---------- */}
      <section style={{ padding: "60px 20px", backgroundColor: "#0a0a0a", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", marginBottom: "50px", color: "#00c3ff" }}>Notre Directeur</h2>
        <div style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          textAlign: "center"
        }}>
          <div style={{ width: "150px", height: "150px", margin: "0 auto 20px", borderRadius: "50%", overflow: "hidden", border: "3px solid #00c3ff" }}>
            <img src={manager.img} alt={manager.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>{manager.name}</h3>
          <p style={{ fontSize: "16px", color: "#bbb", marginBottom: "15px" }}>{manager.role}</p>
          <p style={{ fontSize: "14px", color: "#ccc", lineHeight: "1.5" }}>{manager.bio}</p>
         <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px" }}>
  <a href={manager.portfolio} target="_blank" style={{ color: "#fff", fontSize: "24px" }} title="Portfolio"><FaProjectDiagram /></a>
  <a href={manager.github} target="_blank" style={{ color: "#fff", fontSize: "24px" }} title="GitHub"><FaGithub /></a>
  <a href={manager.linkedin} target="_blank" style={{ color: "#fff", fontSize: "24px" }} title="LinkedIn"><FaLinkedin /></a>
  <a href={manager.twitter} target="_blank" style={{ color: "#fff", fontSize: "24px" }} title="Twitter"><FaTwitter /></a>
</div>
        </div>
      </section>

    </main>
  );
}