"use client";

import ContactForm from "@/src/components/ContactForm";
import SocialContact from "@/src/components/SocialContact";
import CallToActionSection from "../../components/CallToActionSection";

export default function ContactPage() {
  return (
    <>

      <section className="contact-page">
        
        {/* HERO */}
        <div className="contact-hero">
          <h1 className="main-title">Contactez-nous</h1>
          <p>
            Vous avez un projet ou des questions ? Remplissez le formulaire
            ci-dessous ou contactez-nous via nos réseaux sociaux.
          </p>
        </div>

        {/* FORM */}
        <div className="form-section">
          <ContactForm />
        </div>

        {/* SOCIAL CONTACT */}
        <div className="social-section">
          <SocialContact />
        </div>

        {/* CALL TO ACTION */}
        <CallToActionSection />

      </section>
     
      <style jsx>{`
        .contact-page {
          padding: 0 20px;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
          min-height: 100vh;
          color: white;
        }

        .contact-hero {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 0 20px 0;
        }

        .main-title {
          font-size: 44px;
          font-weight: 800;
          margin: 0 0 10px 0;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-hero p {
          font-size: 18px;
          color: #cfcfcf;
          line-height: 1.5;
          margin: 0;
        }

        .form-section {
          max-width: 700px;
          margin: 0 auto;
          padding: 20px 0; /* تقليل البادينغ لتقريب الفورم من التواصل */
        }

        .social-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 0; /* نفس البادينغ لجعل المسافة متناسقة */
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
}