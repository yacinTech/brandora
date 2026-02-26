"use client";

import { useState } from "react";
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


export default function HomePage() {
  
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
