"use client";

import React, { useState, useEffect } from "react";
import { useLanguageDetection } from "../hooks/useLanguageDetection";

const translations = {
  en: {
    contactUs: "Contact Us",
    chatWithUs: "Chat with us",
  },
  es: {
    contactUs: "Contáctanos",
    chatWithUs: "Chatea con nosotros",
  },
};

export default function WhatsAppFloatButton() {
  const whatsappUrl = "https://wa.me/message/DGGMP3IXNG2SC1";
  const { language } = useLanguageDetection();
  const [showChip, setShowChip] = useState(false);

  const t = translations[language];

  useEffect(() => {
    // Función para mostrar el chip aleatoriamente
    const showChipRandomly = () => {
      // Mostrar el chip
      setShowChip(true);

      // Ocultar después de 4 segundos
      const hideTimeout = setTimeout(() => {
        setShowChip(false);
      }, 4000);

      // Calcular tiempo aleatorio para la próxima aparición (entre 8 y 15 segundos)
      const nextShowDelay = Math.random() * 7000 + 8000; // 8000-15000ms

      const nextShowTimeout = setTimeout(() => {
        showChipRandomly();
      }, nextShowDelay);

      return () => {
        clearTimeout(hideTimeout);
        clearTimeout(nextShowTimeout);
      };
    };

    // Iniciar el ciclo después de un delay inicial aleatorio (entre 3 y 6 segundos)
    const initialDelay = Math.random() * 3000 + 3000; // 3000-6000ms
    const initialTimeout = setTimeout(() => {
      showChipRandomly();
    }, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t.chatWithUs}
    >
      <div className="relative flex items-center gap-3">
        {/* Chip que aparece aleatoriamente */}
        <div
          className={`relative transition-all duration-500 ease-in-out ${
            showChip
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="bg-[#295371] text-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap flex items-center gap-2">
            <span className="text-sm font-semibold">{t.contactUs}</span>
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></div>
          </div>
          {/* Flecha apuntando al botón */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#295371]"></div>
        </div>

        {/* Botón de WhatsApp */}
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          
          {/* Main button */}
          <div className="relative bg-[#25D366] hover:bg-[#20BA5A] rounded-full p-4 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

