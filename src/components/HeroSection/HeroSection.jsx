"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiOutlineArrowRight, HiOutlinePhone } from "react-icons/hi";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <main className="w-full">
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] pt-12 pb-4 md:px-6 md:pt-24 md:pb-10 lg:px-10"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl md:h-56 md:w-56" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl md:h-56 md:w-56" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Text */}
          <div
            className={`order-2 flex flex-col justify-center px-4 text-center transition-all duration-1000 ease-out md:px-0 lg:order-1 lg:text-left ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <h1 className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-[2rem] font-bold leading-tight text-transparent sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem]">
              Solutions digitales créatives et performantes
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200/90 sm:text-lg lg:mx-0">
              Brandora accompagne les entreprises dans leur transformation digitale
              avec des solutions modernes, élégantes et performantes, pensées pour
              valoriser leur image et renforcer leur présence en ligne.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex h-11 flex-1 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[#00c6ff] px-3 text-sm font-semibold text-[#0f0f0f] shadow-[0_0_12px_rgba(0,198,255,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#00c6ff]/90 hover:shadow-[0_0_18px_rgba(0,198,255,0.4)] sm:h-12 sm:flex-none sm:px-5 sm:text-base lg:min-w-[180px]"
              >
                <span>Découvrir</span>
                <HiOutlineArrowRight className="shrink-0 text-base sm:text-lg" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-11 flex-1 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-[#00c6ff]/60 px-3 text-sm font-semibold text-[#00c6ff] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#00c6ff]/10 hover:shadow-[0_0_12px_rgba(0,198,255,0.25)] sm:h-12 sm:flex-none sm:px-5 sm:text-base lg:min-w-[180px]"
              >
                <span>Contact</span>
                <HiOutlinePhone className="shrink-0 text-base sm:text-lg" />
              </Link>
            </div>
          </div>

          {/* Video */}
          <div
            className={`order-1 transition-all delay-150 duration-1000 ease-out lg:order-2 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            <div className="relative w-full overflow-hidden md:rounded-2xl md:border md:border-cyan-400/30 md:shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_15px_rgba(0,198,255,0.18),0_0_30px_rgba(0,198,255,0.1)]">
              <video
                className="block h-[260px] w-full object-cover sm:h-[320px] md:h-[420px] lg:h-[500px]"
                src="https://res.cloudinary.com/de6rs8vzj/video/upload/v1776601546/hero-video_hm4pga.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.08),transparent_55%)]" />
            </div>
          </div>

          {/* Social Links */}
          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
            <a
              href="https://www.facebook.com/branddorra"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-200 transition duration-300 hover:scale-110 hover:text-[#00c6ff]"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/brandorra1"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-200 transition duration-300 hover:scale-110 hover:text-[#00c6ff]"
            >
              <BsInstagram />
            </a>
            <a
              href="mailto:info@brandora.fun"
              className="text-xl text-gray-200 transition duration-300 hover:scale-110 hover:text-[#00c6ff]"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}