"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Users,
  Award,
  Heart,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowLeft,
  Globe,
  Menu,
  X,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";
import { useLanguageDetection } from "../hooks/useLanguageDetection";

export default function AboutPage() {
  const { language, setLanguage } = useLanguageDetection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    en: {
      title: "About Nova Insurance Group",
      subtitle: "Your trusted insurance partner in South Carolina since 2004",
      nav: {
        home: "Home",
        about: "About",
        coverage: "Coverage",
        blog: "Resources",
        contact: "Contact",
      },
      hero: {
        title: "South Carolina's Trusted Insurance Partner",
        subtitle: "Local expertise, national strength",
        description:
          "For over two decades, Nova Insurance Group has been protecting South Carolina families with comprehensive, affordable auto insurance. We combine local knowledge with exceptional service to deliver peace of mind on every road.",
      },
      history: {
        title: "Our Story",
        subtitle: "Two decades of protecting South Carolina drivers",
        founded: "Founded in 2004",
        foundedText:
          "Nova Insurance Group was established with a simple mission: to make quality auto insurance accessible and affordable for every South Carolina driver. What started as a small local agency has grown into one of the state's most trusted insurance providers.",
        growth: "Growing with Our Community",
        growthText:
          "Over the years, we've expanded our services while maintaining our commitment to personalized, local service. Today, we protect over 10,000 drivers across South Carolina, from Columbia to Charleston, Greenville to Myrtle Beach.",
        milestonesTitle: "Key Milestones",
        milestones: [
          {
            year: "2004",
            title: "Company Founded",
            description: "Nova Insurance Group opens its doors in Columbia, SC",
          },
          {
            year: "2010",
            title: "1,000 Customers",
            description: "Reach our first major milestone serving 1,000 South Carolina families",
          },
          {
            year: "2015",
            title: "Statewide Expansion",
            description: "Expand services to cover all of South Carolina",
          },
          {
            year: "2020",
            title: "10,000+ Customers",
            description: "Celebrate serving over 10,000 satisfied customers",
          },
          {
            year: "2024",
            title: "20 Years of Service",
            description: "Mark two decades of protecting South Carolina drivers",
          },
        ],
      },
      mission: {
        title: "Our Mission",
        text: "At Nova Insurance Group, we believe quality auto insurance should be accessible and affordable. We've spent over two decades protecting South Carolina families with transparent pricing and exceptional service. Our mission is to provide peace of mind through reliable coverage, fast claims processing, and personalized attention to every customer.",
      },
      values: {
        title: "Our Values",
        text: "Integrity, transparency, and customer-first service guide everything we do. We build lasting relationships based on trust and reliability. Every decision we make is driven by what's best for our customers and our community.",
        items: [
          {
            title: "Integrity",
            description:
              "We conduct business with honesty and ethical practices, always putting our customers' interests first.",
          },
          {
            title: "Transparency",
            description:
              "No hidden fees, no surprises. We explain everything clearly so you know exactly what you're getting.",
          },
          {
            title: "Excellence",
            description:
              "We strive for excellence in every interaction, from the initial quote to claim resolution.",
          },
          {
            title: "Community",
            description:
              "We're deeply rooted in South Carolina and committed to giving back to the communities we serve.",
          },
        ],
      },
      team: {
        title: "Expert Team",
        text: "Our licensed agents bring decades of experience and stay current with SC regulations and industry innovations. Each team member is dedicated to understanding your unique needs and finding the perfect coverage solution.",
        stats: [
          { number: "20+", label: "Years of Experience" },
          { number: "15+", label: "Licensed Agents" },
          { number: "10K+", label: "Happy Customers" },
          { number: "24/7", label: "Support Available" },
        ],
      },
      commitment: {
        title: "Community Commitment",
        text: "Deeply rooted in South Carolina, we're your neighbors committed to serving our community with excellence. We sponsor local events, support community organizations, and are always here when you need us.",
      },
      cta: {
        title: "Join the Nova Insurance Family",
        subtitle: "Experience the difference of working with a local, trusted partner",
        button: "Get Your Free Quote",
      },
      footer: {
        description:
          "Protecting South Carolina drivers with comprehensive, affordable auto insurance since 2004.",
        quickLinks: "Quick Links",
        services: "Our Services",
        servicesList: {
          auto: "Auto Insurance",
          liability: "Liability Coverage",
          collision: "Collision Coverage",
          comprehensive: "Comprehensive",
          commercial: "Commercial Auto",
        },
        contact: "Get In Touch",
        rights: "© 2025 Nova Insurance Group. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    es: {
      title: "Acerca de Nova Insurance Group",
      subtitle: "Tu socio de seguros de confianza en Carolina del Sur desde 2004",
      nav: {
        home: "Inicio",
        about: "Nosotros",
        coverage: "Coberturas",
        blog: "Recursos",
        contact: "Contacto",
      },
      hero: {
        title: "El Socio de Seguros de Confianza de Carolina del Sur",
        subtitle: "Experiencia local, fortaleza nacional",
        description:
          "Durante más de dos décadas, Nova Insurance Group ha estado protegiendo a las familias de Carolina del Sur con seguros de auto integrales y asequibles. Combinamos conocimiento local con servicio excepcional para brindar tranquilidad en cada carretera.",
      },
      history: {
        title: "Nuestra Historia",
        subtitle: "Dos décadas protegiendo a los conductores de Carolina del Sur",
        founded: "Fundada en 2004",
        foundedText:
          "Nova Insurance Group se estableció con una misión simple: hacer que el seguro de auto de calidad sea accesible y asequible para todos los conductores de Carolina del Sur. Lo que comenzó como una pequeña agencia local ha crecido hasta convertirse en uno de los proveedores de seguros más confiables del estado.",
        growth: "Creciendo con Nuestra Comunidad",
        growthText:
          "A lo largo de los años, hemos expandido nuestros servicios mientras mantenemos nuestro compromiso con el servicio personalizado y local. Hoy, protegemos a más de 10,000 conductores en toda Carolina del Sur, desde Columbia hasta Charleston, Greenville hasta Myrtle Beach.",
        milestonesTitle: "Hitos Clave",
        milestones: [
          {
            year: "2004",
            title: "Fundación de la Empresa",
            description: "Nova Insurance Group abre sus puertas en Columbia, SC",
          },
          {
            year: "2010",
            title: "1,000 Clientes",
            description: "Alcanzamos nuestro primer hito importante sirviendo a 1,000 familias de Carolina del Sur",
          },
          {
            year: "2015",
            title: "Expansión Estatal",
            description: "Expandimos servicios para cubrir todo Carolina del Sur",
          },
          {
            year: "2020",
            title: "10,000+ Clientes",
            description: "Celebramos servir a más de 10,000 clientes satisfechos",
          },
          {
            year: "2024",
            title: "20 Años de Servicio",
            description: "Marcamos dos décadas protegiendo a los conductores de Carolina del Sur",
          },
        ],
      },
      mission: {
        title: "Nuestra Misión",
        text: "En Nova Insurance Group, creemos que el seguro de auto de calidad debe ser accesible y asequible. Hemos pasado más de dos décadas protegiendo a las familias de Carolina del Sur con precios transparentes y servicio excepcional. Nuestra misión es brindar tranquilidad a través de cobertura confiable, procesamiento rápido de reclamos y atención personalizada a cada cliente.",
      },
      values: {
        title: "Nuestros Valores",
        text: "La integridad, la transparencia y el servicio centrado en el cliente guían todo lo que hacemos. Construimos relaciones duraderas basadas en la confianza y la confiabilidad. Cada decisión que tomamos está impulsada por lo que es mejor para nuestros clientes y nuestra comunidad.",
        items: [
          {
            title: "Integridad",
            description:
              "Conducimos nuestros negocios con honestidad y prácticas éticas, siempre poniendo primero los intereses de nuestros clientes.",
          },
          {
            title: "Transparencia",
            description:
              "Sin tarifas ocultas, sin sorpresas. Explicamos todo claramente para que sepas exactamente qué estás obteniendo.",
          },
          {
            title: "Excelencia",
            description:
              "Nos esforzamos por la excelencia en cada interacción, desde la cotización inicial hasta la resolución de reclamos.",
          },
          {
            title: "Comunidad",
            description:
              "Estamos profundamente arraigados en Carolina del Sur y comprometidos a retribuir a las comunidades a las que servimos.",
          },
        ],
      },
      team: {
        title: "Equipo Experto",
        text: "Nuestros agentes con licencia aportan décadas de experiencia y se mantienen actualizados con las regulaciones de SC y las innovaciones de la industria. Cada miembro del equipo se dedica a entender tus necesidades únicas y encontrar la solución de cobertura perfecta.",
        stats: [
          { number: "20+", label: "Años de Experiencia" },
          { number: "15+", label: "Agentes con Licencia" },
          { number: "10K+", label: "Clientes Satisfechos" },
          { number: "24/7", label: "Soporte Disponible" },
        ],
      },
      commitment: {
        title: "Compromiso con la Comunidad",
        text: "Profundamente arraigados en Carolina del Sur, somos tus vecinos comprometidos a servir a nuestra comunidad con excelencia. Patrocinamos eventos locales, apoyamos organizaciones comunitarias y siempre estamos aquí cuando nos necesitas.",
      },
      cta: {
        title: "Únete a la Familia Nova Insurance",
        subtitle: "Experimenta la diferencia de trabajar con un socio local y de confianza",
        button: "Obtén Tu Cotización Gratis",
      },
      footer: {
        description:
          "Protegiendo a conductores de Carolina del Sur con seguro de auto integral y asequible desde 2004.",
        quickLinks: "Enlaces Rápidos",
        services: "Nuestros Servicios",
        servicesList: {
          auto: "Seguro de Auto",
          liability: "Cobertura de Responsabilidad",
          collision: "Cobertura de Colisión",
          comprehensive: "Cobertura Integral",
          commercial: "Auto Comercial",
        },
        contact: "Contáctanos",
        rights: "© 2025 Nova Insurance Group. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
    },
  };

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
                {t[language].nav.home}
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-all relative ${
                  scrolled
                    ? "text-[#295371] hover:text-[#1e3d52]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t[language].nav.about}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#295371]"></span>
              </Link>
              <Link
                href="/#coverage"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t[language].nav.coverage}
              </Link>
              <Link
                href="/#blog"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t[language].nav.blog}
              </Link>
              <Link
                href="/#contact"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t[language].nav.contact}
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
                  Get Free Quote
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
                {t[language].nav.home}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t[language].nav.about}
              </Link>
              <Link
                href="/#coverage"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t[language].nav.coverage}
              </Link>
              <Link
                href="/#blog"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t[language].nav.blog}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t[language].nav.contact}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-3 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all block text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative text-white py-32 pt-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-felices-apilando-la-mano-de-cada-uno-de-pie-cerca-del-coche.jpg"
            alt="Happy friends"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3d52]/90 via-[#295371]/85 to-[#1e3d52]/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {language === "en" ? "Back to Home" : "Volver al Inicio"}
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t[language].hero.title}
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              {t[language].hero.subtitle}
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              {t[language].hero.description}
            </p>
          </div>
        </div>
      </header>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t[language].history.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t[language].history.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Recurso 380.png"
                  alt="Nova Insurance Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#295371] mb-3">
                  {t[language].history.founded}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t[language].history.foundedText}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Recurso 381.png"
                  alt="Nova Insurance Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#295371] mb-3">
                  {t[language].history.growth}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t[language].history.growthText}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t[language].history.milestonesTitle}
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#295371] to-[#158151]"></div>
              <div className="space-y-12">
                {t[language].history.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#295371]">
                        <div className="text-3xl font-bold text-[#295371] mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-16 h-16 bg-[#295371] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 mb-16">
            {/* Our Mission - Full Width */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#295371] to-[#1e3d52] rounded-xl shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {t[language].mission.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg max-w-4xl">
                    {t[language].mission.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values - Full Width */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#158151] to-[#0f6b3d] rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {t[language].values.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-4xl">
                    {t[language].values.text}
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t[language].values.items.map((value, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-bold text-[#295371] mb-2">
                          {value.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t[language].team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t[language].team.text}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {t[language].team.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#295371] to-[#1e3d52] rounded-2xl p-8 text-center text-white shadow-lg"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Recurso 380.png"
              alt="Nova Insurance Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#295371]/90 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {t[language].team.title}
                </h3>
                <p className="text-lg text-white/90">
                  {t[language].team.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#1e3d52] via-[#295371] to-[#1e3d52] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t[language].commitment.title}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {t[language].commitment.text}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#158151]" />
                  <span>Local event sponsorships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#158151]" />
                  <span>Community organization support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#158151]" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#158151]" />
                  <span>Local expertise and knowledge</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Recurso 381.png"
                alt="Community Commitment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t[language].cta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t[language].cta.subtitle}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#295371] to-[#1e3d52] text-white rounded-xl font-bold text-lg hover:from-[#1e3d52] hover:to-[#295371] transition-all transform hover:scale-105 shadow-lg"
          >
            {t[language].cta.button}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Image
                  src="/logotipo.png"
                  alt="Nova Insurance Group"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t[language].footer.description}
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(803) 555-0123</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t[language].footer.quickLinks}</h3>
              <ul className="space-y-3">
                {(["home", "about", "coverage", "blog", "contact"] as const).map(
                  (link) => (
                    <li key={link}>
                      {link === "about" ? (
                        <Link
                          href="/about"
                          className="text-gray-400 hover:text-white transition-colors flex items-center group"
                        >
                          <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                          {t[language].nav[link]}
                        </Link>
                      ) : (
                        <a
                          href={`/#${link}`}
                          className="text-gray-400 hover:text-white transition-colors flex items-center group"
                        >
                          <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                          {t[language].nav[link]}
                        </a>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t[language].footer.services}</h3>
              <ul className="space-y-3 text-gray-400">
                {Object.values(t[language].footer.servicesList).map(
                  (service: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                      {service}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t[language].footer.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t[language].footer.privacy}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t[language].footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

