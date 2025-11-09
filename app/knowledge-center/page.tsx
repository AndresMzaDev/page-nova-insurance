"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertCircle,
  FileText,
  DollarSign,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Clock,
  ChevronRight,
  Menu,
  X,
  Globe,
} from "lucide-react";
import knowledgeData from "../data/knowledge-center.json";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  AlertCircle,
  FileText,
  DollarSign,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Clock,
};

import { useLanguageDetection } from "../hooks/useLanguageDetection";

export default function KnowledgeCenterPage() {
  const { language, setLanguage } = useLanguageDetection();

  const t = {
    en: {
      title: "Insurance Knowledge Center",
      subtitle: "Expert guides and resources to help you make informed insurance decisions",
      browseTopics: "Browse All Topics",
      readMore: "Read Article",
      minRead: "min read",
    },
    es: {
      title: "Centro de Conocimiento de Seguros",
      subtitle: "Guías expertas y recursos para ayudarte a tomar decisiones informadas sobre seguros",
      browseTopics: "Explorar Todos los Temas",
      readMore: "Leer Artículo",
      minRead: "min de lectura",
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Header */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="flex items-center cursor-pointer group"
            >
              <div className="relative h-12 w-auto">
                <Image
                  src="/logotipo.png"
                  alt="Nova Insurance Group"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#home"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/#about"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                Nosotros
              </Link>
              <Link
                href="/#coverage"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                Coberturas
              </Link>
              <Link
                href="/#blog"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                Recursos
              </Link>
              <Link
                href="/#contact"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                Contacto
              </Link>

              <div className="flex items-center space-x-3 border-l pl-6">
                <button
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    scrolled
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">
                    {language === "en" ? "ES" : "EN"}
                  </span>
                </button>
                <Link
                  href="/#contact"
                  className="px-6 py-2.5 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Cotización Gratis
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className={`p-2 rounded-lg ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Globe className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={scrolled ? "text-gray-700" : "text-white"}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="/#home"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                Inicio
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                Nosotros
              </Link>
              <Link
                href="/#coverage"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                Coberturas
              </Link>
              <Link
                href="/#blog"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                Recursos
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                Contacto
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-3 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all block text-center"
              >
                Cotización Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-br from-[#1e3d52] via-[#295371] to-[#1e3d52] text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              Volver al inicio
            </Link>
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              {language === "en" ? "ES" : "EN"}
            </button>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t[language].title}
            </h1>
            <p className="text-xl text-white/90">
              {t[language].subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Topics Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgeData.topics.map((topic) => {
              const Icon = iconMap[topic.icon] || FileText;
              return (
                <Link
                  key={topic.id}
                  href={`/knowledge-center/${topic.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-br from-[#295371] to-[#158151] flex items-center justify-center relative overflow-hidden">
                    <Icon className="h-20 w-20 text-white opacity-90 relative z-10" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 font-medium">
                        {topic.category}
                      </span>
                      <span className="text-xs bg-[#295371]/10 text-[#295371] px-2 py-1 rounded-full font-medium">
                        {topic.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#295371] transition-colors">
                      {language === "en" ? topic.titleEn : topic.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {language === "en" ? topic.excerptEn : topic.excerpt}
                    </p>
                    <div className="flex items-center text-[#295371] font-semibold group-hover:text-[#1e3d52] transition-colors">
                      {t[language].readMore}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

