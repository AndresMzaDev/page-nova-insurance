import { useState, useEffect } from "react";

export function useLanguageDetection() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detectar idioma basado en región del navegador
    const detectLanguage = (): "en" | "es" => {
      // Primero verificar si hay una preferencia guardada
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("nova-insurance-language");
        if (saved === "en" || saved === "es") {
          return saved;
        }

        // Si no hay preferencia guardada, detectar por región
        const userLang = navigator.language || (navigator as any).userLanguage;
        const langParts = userLang.split("-");
        const langCode = langParts[0].toLowerCase();
        const regionCode = langParts[1]?.toLowerCase() || "";
        
        // Países/regiones que típicamente hablan español
        const spanishRegions = [
          "es", // España
          "mx", // México
          "ar", // Argentina
          "co", // Colombia
          "cl", // Chile
          "pe", // Perú
          "ve", // Venezuela
          "ec", // Ecuador
          "gt", // Guatemala
          "cu", // Cuba
          "bo", // Bolivia
          "do", // República Dominicana
          "hn", // Honduras
          "py", // Paraguay
          "sv", // El Salvador
          "ni", // Nicaragua
          "cr", // Costa Rica
          "pa", // Panamá
          "uy", // Uruguay
          "pr", // Puerto Rico
        ];

        // Verificar si el idioma es español o si la región es de habla hispana
        if (langCode === "es" || spanishRegions.includes(regionCode)) {
          return "es";
        }

        // Por defecto inglés
        return "en";
      }
      return "en";
    };

    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nova-insurance-language", lang);
    }
  };

  return { language, setLanguage: updateLanguage, isLoading };
}

