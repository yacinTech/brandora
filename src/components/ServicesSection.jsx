"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaLaptopCode,
  FaSearch,
  FaBullhorn,
  FaMapMarkedAlt,
  FaEnvelopeOpenText,
  FaBookOpen,
  FaBriefcase,
  FaTools,
  FaPenNib,
} from "react-icons/fa";

const services = [
  {
    title: "Création de sites web",
    description:
      "Des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
    icon: FaLaptopCode,
  },
  {
    title: "Noms de domaine",
    description:
      "Nous vous aidons à choisir et sécuriser le nom idéal pour votre marque.",
    icon: FaGlobe,
  },
  {
    title: "SEO & Référencement",
    description:
      "Améliorez votre visibilité sur Google grâce à des stratégies SEO efficaces.",
    icon: FaSearch,
  },
  {
    title: "Marketing & Réseaux Sociaux",
    description:
      "Gestion de campagnes publicitaires et des réseaux sociaux pour maximiser votre impact.",
    icon: FaBullhorn,
  },
  {
    title: "Optimisation Google Maps",
    description:
      "Améliorez votre présence locale et facilitez la découverte de votre entreprise sur Google Maps.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Email Professionnel",
    description:
      "Fourniture d'adresses e-mail professionnelles pour renforcer la crédibilité et la communication de votre marque.",
    icon: FaEnvelopeOpenText,
  },
  {
    title: "Création de catalogues",
    description:
      "Conception de catalogues professionnels et élégants pour présenter vos produits et services avec clarté et impact.",
    icon: FaBookOpen,
  },
  {
    title: "Présentations pour entreprises",
    description:
      "Réalisation de présentations modernes et structurées pour valoriser votre entreprise, vos offres et vos projets.",
    icon: FaBriefcase,
  },
  {
    title: "Maintenance de sites web",
    description:
      "Nous assurons la maintenance, les mises à jour et le bon fonctionnement de votre site pour garantir sécurité et performance.",
    icon: FaTools,
  },
  {
    title: "Création de logos",
    description:
      "Création de logos uniques, professionnels et mémorables pour les entreprises et les organisations.",
    icon: FaPenNib,
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = service.icon;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const variants = [
    "-translate-x-6",
    "translate-y-6",
    "translate-x-6",
  ];

  const initialTransform = variants[index % 3];

  return (
    <div
      ref={ref}
      className={`group flex h-full flex-col rounded-2xl border border-[rgba(0,198,255,0.25)] bg-[rgba(15,23,42,0.8)] p-6 shadow-[0_10px_30px_rgba(0,198,255,0.2)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,198,255,0.35)]
      ${
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `${initialTransform} scale-[0.98] opacity-0`
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-[#00c6ff] transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_18px_rgba(0,198,255,0.25)]">
          <Icon className="text-lg" />
        </div>

        <h3 className="flex-1 text-[16px] font-semibold leading-tight text-[#00c6ff]">
          {service.title}
        </h3>
      </div>

      <p className="mt-auto text-sm leading-7 text-neutral-300 md:text-[15px]">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative mx-auto my-20 max-w-7xl overflow-hidden px-5 text-white md:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

      <div
        ref={headerRef}
        dir="ltr"
        className={`mb-14 flex flex-col items-center text-center transition-all duration-500 ease-out
        ${
          headerVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <h2 className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
          Nos Services
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-300 md:text-base">
          Des solutions digitales modernes pour valoriser votre image et accélérer votre croissance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}