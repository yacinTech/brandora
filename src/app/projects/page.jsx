"use client";
import PortfolioSection from "../../components/Portfolio/Portfolio";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactForm from "../../components/ContactForm";
import CallToAction from "../../components/CallToActionSection"

export default function PortfolioPage() {
  return (
    <div>
      <PortfolioSection />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      
      
    </div>
  );
}