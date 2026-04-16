"use client";

import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "212625902672"; // 👈 غيره برقمك الحقيقي
  const whatsappNumber = "212646342598"; // 👈 غيره

  const message =
    "Bonjour Brandora, je suis intéressé(e) par vos services digitaux et je souhaiterais échanger avec vous à propos de mon projet. Merci.";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* OPTIONS */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          className="group flex items-center gap-2"
        >
          <span className="hidden md:block text-xs text-white bg-black/60 px-3 py-1 rounded-full border border-white/10">
            WhatsApp
          </span>

          <div className="p-4 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-40"></div>
            <MessageCircle size={20} className="relative" />
          </div>
        </a>

        {/* PHONE */}
        <a
          href={`tel:${phoneNumber}`}
          className="group flex items-center gap-2"
        >
          <span className="hidden md:block text-xs text-white bg-black/60 px-3 py-1 rounded-full border border-white/10">
            Appeler
          </span>

          <div className="p-4 rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 group-hover:scale-110 transition relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-sky-400 blur-xl opacity-40"></div>
            <Phone size={20} className="relative" />
          </div>
        </a>

      </div>

      {/* MAIN TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="p-5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-lg hover:scale-110 transition relative"
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-sky-400 blur-xl opacity-30"></div>

        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}