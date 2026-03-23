"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { type: "video", src: "/images/hero/hero-video.mp4", thumb: "/images/hero/hero.jpg" },
  { type: "image", src: "/images/hero/1.jpg" },
  { type: "image", src: "/images/hero/2.jpg" },
  { type: "image", src: "/images/hero/3.jpg" },
  { type: "image", src: "/images/hero/4.jpg" },
  { type: "image", src: "/images/hero/5.jpg" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // التشغيل التلقائي: إذا الشريحة فيديو، ننتظر انتهاءه
  useEffect(() => {
    const slide = slides[current];
    if (slide.type === "image") {
      const timer = setTimeout(nextSlide, 4000); // 4 ثوانٍ لكل صورة
      return () => clearTimeout(timer);
    }
    // لا نفعل شيء للشريحة فيديو، الانتقال سيكون عند onEnded
  }, [current]);

  const handleVideoEnd = () => {
    nextSlide();
  };

  return (
    <main className={styles.main}>
      <section className={styles.bannerSection}>
        <div className={styles.bannerColumn}>
          <div className={styles.sliderContainer}>
            <div className={styles.mediaWrapper}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${index === current ? styles.activeSlide : ""}`}
                >
                  {slide.type === "video" ? (
                    index === current && (
                      <video
                        ref={videoRef}
                        className={styles.bannerVideo}
                        src={slide.src}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                      />
                    )
                  ) : (
                    <Image
                      src={slide.src}
                      alt={`Slide ${index}`}
                      width={1200}
                      height={675}
                      priority={index === 1} // تعطي الأولوية للصورة الأولى بعد الفيديو
                    />
                  )}
                </div>
              ))}

              <button className={styles.prev} onClick={prevSlide}><FaChevronLeft /></button>
              <button className={styles.next} onClick={nextSlide}><FaChevronRight /></button>
            </div>

            <div className={styles.thumbnailBar}>
              {slides.map((slide, index) => (
                <img
                  key={index}
                  className={`${styles.thumbnail} ${index === current ? styles.activeThumb : ""}`}
                  src={slide.type === "video" ? slide.thumb : slide.src}
                  alt={`Thumb ${index}`}
                  onClick={() => setCurrent(index)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className={styles.bannerInner}>
            <h1 className={styles.titleLarge}>
              Solutions digitales créatives et performantes
            </h1>
            <p className={styles.textBase}>
              Brandora accompagne les entreprises dans leur transformation digitale...
            </p>
            <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              Découvrir maintenant →
            </Link>
          </div>

          <div className={styles.bannerLink}>
            <a href="https://www.facebook.com/branddorra"><BsFacebook /></a>
            <a href="https://www.instagram.com/brandorra1"><BsInstagram /></a>
            <a href="mailto:info@brandora.fun"><MdEmail /></a>
          </div>
        </div>
      </section>
    </main>
  );
}