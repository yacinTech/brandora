"use client";

import { useState, useRef } from "react";
import "./page.css";
import emailjs from "@emailjs/browser";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import SiteTypes from "../components/SiteTypes";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CallToActionSection from "@/src/components/CallToActionSection";
import SocialContact from "@/src/components/SocialContact";
import LiquifyLens from "../components/LiquifyLens/LiquifyLens";


export default function HomePage() {
  const mouseRef = useRef(null);
  
  return (
    <>
  


     <HeroSection />
     <ServicesSection />
      
      <WhyChooseUs />
      <SiteTypes />
      <Testimonials />
      <CallToActionSection />
      <ContactForm />
      <SocialContact />
      

      
    </>
  );
}
