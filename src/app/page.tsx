"use client";

import { useState, useRef } from "react";
import "./page.css";
import emailjs from "@emailjs/browser";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactForm from "../components/ContactForm";
import SiteTypes from "../components/SiteTypes";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CallToActionSection from "@/src/components/CallToActionSection";
import SocialContact from "@/src/components/SocialContact";



export default function HomePage() {
  const mouseRef = useRef(null);
  
  return (
    <>

    <main style={{ margin: 0, padding: 0 }}>
      <HeroSection />
     
   
     <ServicesSection />
      <WhyChooseUs />
      <SiteTypes />
      <Testimonials />
      <CallToActionSection />
      <ContactForm />
      <SocialContact />
       </main>
      

      
    </>
  );
}
