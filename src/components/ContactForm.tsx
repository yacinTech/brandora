"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      console.log("SERVICE ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log("TEMPLATE ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      setError("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
    }

    
    setLoading(false);
  };

  return (
    <section className="contact">
      <h2>Contactez-nous</h2>

      {success && <p className="success-msg">Message envoyé avec succès !</p>}
      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      <style jsx>{`
        .contact {
          max-width: 600px;
          margin: 60px auto;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: #fff;
        }

        .contact h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 25px;
          color: #00c3ff;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input,
        textarea {
          padding: 14px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-size: 16px;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          resize: none;
        }

        input::placeholder,
        textarea::placeholder {
          color: #bbb;
        }

        button {
          padding: 14px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .success-msg {
          text-align: center;
          color: #0f0;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .error-msg {
          text-align: center;
          color: #ff4c4c;
          margin-bottom: 15px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .contact {
            margin: 40px 20px;
            padding: 15px;
          }

          .contact h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}