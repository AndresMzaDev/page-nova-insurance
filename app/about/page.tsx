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
      subtitle: "Your trusted insurance partner in South Carolina since 2025",
      nav: {
        home: "Home",
        about: "About",
        coverage: "Coverage",
        blog: "Resources",
        contact: "Contact",
        getQuote: "Get Free Quote",
      },
      hero: {
        title: "South Carolina's Trusted Insurance Partner",
        subtitle: "Local expertise, national strength",
        description:
          "NOVA Insurance Group was founded in 2025 in Columbia, South Carolina, with a simple but powerful purpose: to make quality insurance accessible, understandable, and welcoming for everyone.",
      },
      history: {
        title: "Our Story",
        subtitle:
          "A story of perseverance, opportunity, and commitment to our community",
        founder: "Meet Our Founder",
        founderText:
          "NOVA Insurance Group was founded in 2025 in Columbia, South Carolina, with a simple but powerful purpose: to make quality insurance accessible, understandable, and welcoming for everyone. Our founder and principal agent, Alma Padilla, was born and raised in San Pedro Sula, Honduras. She immigrated to the United States as a teenager and continued her education here, graduating from Richland Northeast High School in Columbia, SC.",
        journey: "The Journey",
        journeyText:
          "Right after high school, Alma began her career in the insurance industry at the age of 18. With more than five years of experience serving the Spanish-speaking community, she saw firsthand how confusing and overwhelming insurance can be—especially for individuals and families who are new to the country or unfamiliar with the system. This experience inspired the heart and mission behind NOVA.",
        mission: "Why NOVA Exists",
        missionText:
          "NOVA Insurance Group was created to fill a real need: a place where people can receive education, transparency, and genuine support, not just a policy. We are driven by the belief that everyone deserves clarity, regardless of their background or experience. Our goal is to guide families, individuals, and small businesses with patience and honesty—helping them protect what matters most and move forward with confidence.",
        today: "Today",
        todayText:
          "Today, NOVA stands as a growing, community-centered agency built on trust, compassion, and a deep understanding of the challenges faced by newcomers. From day one, our mission has been to create a welcoming space where people feel understood, respected, and empowered. For us, this is more than insurance. It's our story—one of perseverance, opportunity, and a commitment to making a meaningful difference in our community.",
      },
      mission: {
        title: "Our Mission",
        text: "Our mission is to strengthen our communities by offering reliable protection, straightforward guidance, and a welcoming experience—ensuring every client feels supported at every step.",
      },
      vision: {
        title: "Our Vision",
        text: "At Nova Insurance Group, we believe quality insurance should be accessible and affordable. Our vision is to grow across South Carolina as a trusted source of clarity, transparency, and support—removing confusion and barriers to create a welcoming experience that helps people protect what matters most and move forward with confidence.",
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
        text: "Our licensed agents bring years of experience and stay current with SC regulations and industry innovations. Each team member is dedicated to understanding your unique needs and finding the perfect coverage solution.",
        stats: [
          { number: "5+", label: "Years of Experience" },
          { number: "1", label: "Licensed Agent" },
          { number: "Growing", label: "Happy Customers" },
          { number: "7 Days", label: "Support Available" },
        ],
      },
      commitment: {
        title: "Community Commitment",
        text: "At Nova Insurance Group, we're proud to serve the communities we call home. As your neighbors, we're dedicated to giving back, supporting local initiatives, and being there when you need us. Our commitment goes beyond insurance—we're here to help our community grow and thrive.",
        subtitle: "How We Support Our Community",
        items: [
          "Local event sponsorships",
          "Support for community organizations",
          "7-day customer support",
          "Local expertise and guidance",
        ],
        closing:
          "We're committed to serving South Carolina with trust, care, and excellence—today and every day.",
      },
      cta: {
        title: "Join the Nova Insurance Family",
        subtitle:
          "Experience the difference of working with a local, trusted partner",
        button: "Get Your Free Quote",
      },
      footer: {
        description:
          "Your trusted local agency for affordable, accessible insurance in South Carolina.",
        quickLinks: "Quick Links",
        services: "Insurance Services",
        servicesList: {
          auto: "Auto Insurance",
          motorcycle: "Motorcycle Insurance",
          commercial: "Commercial Insurance",
          workers: "Workers' Compensation",
          liability: "General Liability",
          renters: "Renters Insurance",
          homeowners: "Homeowners Insurance",
        },
        additionalServices: "Additional Services",
        additionalServicesList: {
          dmv: "DMV Services (title transfers, tags, plates, duplicates, etc.)",
          notary: "Notary Services",
        },
        contact: "Get In Touch",
        rights: "© 2025 Nova Insurance Group. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    es: {
      title: "Acerca de Nova Insurance Group",
      subtitle:
        "Tu socio de seguros de confianza en Carolina del Sur desde 2025",
      nav: {
        home: "Inicio",
        about: "Nosotros",
        coverage: "Coberturas",
        blog: "Recursos",
        contact: "Contacto",
        getQuote: "Cotización Gratis",
      },
      hero: {
        title: "El Socio de Seguros de Confianza de Carolina del Sur",
        subtitle: "Experiencia local, fortaleza nacional",
        description:
          "NOVA Insurance Group fue fundada en 2025 en Columbia, Carolina del Sur, con un propósito simple pero poderoso: hacer que el seguro de calidad sea accesible, comprensible y acogedor para todos.",
      },
      history: {
        title: "Nuestra Historia",
        subtitle:
          "Una historia de perseverancia, oportunidad y compromiso con nuestra comunidad",
        founder: "Conoce a Nuestra Fundadora",
        founderText:
          "NOVA Insurance Group fue fundada en 2025 en Columbia, Carolina del Sur, con un propósito simple pero poderoso: hacer que el seguro de calidad sea accesible, comprensible y acogedor para todos. Nuestra fundadora y agente principal, Alma Padilla, nació y creció en San Pedro Sula, Honduras. Emigró a los Estados Unidos cuando era adolescente y continuó su educación aquí, graduándose de Richland Northeast High School en Columbia, SC.",
        journey: "El Viaje",
        journeyText:
          "Justo después de la escuela secundaria, Alma comenzó su carrera en la industria de seguros a los 18 años. Con más de cinco años de experiencia sirviendo a la comunidad de habla hispana, vio de primera mano lo confuso y abrumador que puede ser el seguro, especialmente para individuos y familias que son nuevos en el país o no están familiarizados con el sistema. Esta experiencia inspiró el corazón y la misión detrás de NOVA.",
        mission: "Por Qué Existe NOVA",
        missionText:
          "NOVA Insurance Group fue creada para llenar una necesidad real: un lugar donde las personas puedan recibir educación, transparencia y apoyo genuino, no solo una póliza. Estamos impulsados por la creencia de que todos merecen claridad, independientemente de su origen o experiencia. Nuestro objetivo es guiar a familias, individuos y pequeñas empresas con paciencia y honestidad, ayudándolos a proteger lo que más importa y avanzar con confianza.",
        today: "Hoy",
        todayText:
          "Hoy, NOVA se erige como una agencia en crecimiento centrada en la comunidad, construida sobre la confianza, la compasión y una profunda comprensión de los desafíos que enfrentan los recién llegados. Desde el primer día, nuestra misión ha sido crear un espacio acogedor donde las personas se sientan comprendidas, respetadas y empoderadas. Para nosotros, esto es más que un seguro. Es nuestra historia: una de perseverancia, oportunidad y compromiso de hacer una diferencia significativa en nuestra comunidad.",
      },
      mission: {
        title: "Nuestra Misión",
        text: "Nuestra misión es fortalecer nuestras comunidades ofreciendo protección confiable, orientación directa y una experiencia acogedora, asegurando que cada cliente se sienta apoyado en cada paso.",
      },
      vision: {
        title: "Nuestra Visión",
        text: "En Nova Insurance Group, creemos que un seguro de calidad debe ser accesible y asequible. Nuestra visión es crecer en toda Carolina del Sur como una fuente confiable de claridad, transparencia y apoyo, eliminando la confusión y las barreras para crear una experiencia acogedora que ayude a las personas a proteger lo que más importa y avanzar con confianza.",
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
        text: "Nuestros agentes con licencia aportan años de experiencia y se mantienen actualizados con las regulaciones de SC y las innovaciones de la industria. Cada miembro del equipo se dedica a entender tus necesidades únicas y encontrar la solución de cobertura perfecta.",
        stats: [
          { number: "5+", label: "Años de Experiencia" },
          { number: "1", label: "Agente con Licencia" },
          { number: "Creciendo", label: "Clientes Satisfechos" },
          { number: "7 Días", label: "Soporte Disponible" },
        ],
      },
      commitment: {
        title: "Compromiso con la Comunidad",
        text: "En Nova Insurance Group, estamos orgullosos de servir a las comunidades que llamamos hogar. Como tus vecinos, estamos dedicados a retribuir, apoyar iniciativas locales y estar ahí cuando nos necesites. Nuestro compromiso va más allá del seguro: estamos aquí para ayudar a nuestra comunidad a crecer y prosperar.",
        subtitle: "Cómo Apoyamos a Nuestra Comunidad",
        items: [
          "Patrocinio de eventos locales",
          "Apoyo a organizaciones comunitarias",
          "Soporte al cliente los 7 días",
          "Experiencia y orientación local",
        ],
        closing:
          "Estamos comprometidos a servir a Carolina del Sur con confianza, cuidado y excelencia, hoy y todos los días.",
      },
      cta: {
        title: "Únete a la Familia Nova Insurance",
        subtitle:
          "Experimenta la diferencia de trabajar con un socio local y de confianza",
        button: "Obtén Tu Cotización Gratis",
      },
      footer: {
        description:
          "Tu agencia local de confianza para seguros asequibles y accesibles en Carolina del Sur.",
        quickLinks: "Enlaces Rápidos",
        services: "Servicios de Seguros",
        servicesList: {
          auto: "Seguro de Auto",
          motorcycle: "Seguro de Motocicleta",
          commercial: "Seguro Comercial",
          workers: "Compensación Laboral",
          liability: "Responsabilidad General",
          renters: "Seguro para Inquilinos",
          homeowners: "Seguro para Propietarios",
        },
        additionalServices: "Servicios Adicionales",
        additionalServicesList: {
          dmv: "Servicios del DMV (transferencias de título, etiquetas, placas, duplicados, etc.)",
          notary: "Servicios Notariales",
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
            <Link href="/" className="flex items-center cursor-pointer group">
              <div className="relative h-12 w-auto">
                <Image
                  src={scrolled ? "/logotipo.png" : "/Recurso 1.svg"}
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
                  {t[language].nav.getQuote}
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
                {t[language].nav.getQuote}
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

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Founder Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/amigos-de-vista-lateral-dando-un-paseo-un-nuevo-destino.jpg"
                  alt="Alma Padilla - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-[#295371] to-[#1e3d52] rounded-2xl p-8 md:p-12 text-white shadow-xl order-1 md:order-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">
                      {t[language].history.founder}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {t[language].history.founderText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#295371] mb-3">
                  {t[language].history.journey}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t[language].history.journeyText}
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Imgenes Nova Isurance/CuandoRevisarTuPoliza.jpg"
                  alt="Alma Padilla's Journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/la-familia-esta-considerando-el-interior-de-su-futuro-automovil.jpg"
                  alt="NOVA Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-[#158151] to-[#0f6b3d] rounded-2xl p-8 md:p-12 text-white shadow-xl order-1 md:order-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">
                      {t[language].history.mission}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {t[language].history.missionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Today Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#295371] mb-3">
                  {t[language].history.today}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t[language].history.todayText}
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Imgenes Nova Isurance/FactoresqueAfectantusPrimas.jpg"
                  alt="NOVA Insurance Today"
                  fill
                  className="object-cover"
                />
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

            {/* Our Vision - Full Width */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#158151] to-[#0f6b3d] rounded-xl shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {t[language].vision.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg max-w-4xl">
                    {t[language].vision.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values - Full Width */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
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
              src="/Imgenes Nova Isurance/EntendiendoTuPolizadeSeguro.jpg"
              alt="Nova Insurance Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#295371]/90 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {t[language].team.title}
                </h3>
                <p className="text-lg text-white/90">{t[language].team.text}</p>
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
              <h3 className="text-2xl font-bold mb-6">
                {t[language].commitment.subtitle}
              </h3>
              <div className="space-y-4 mb-8">
                {t[language].commitment.items.map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-[#158151]" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                {t[language].commitment.closing}
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Imgenes Nova Isurance/Seguropara ConductoresAdolescentes.jpg"
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
                <span className="font-semibold">803-638-4779</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                {t[language].footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {(
                  ["home", "about", "coverage", "blog", "contact"] as const
                ).map((link) => (
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
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                {t[language].footer.services}
              </h3>
              <ul className="space-y-2 text-gray-400 mb-6">
                {Object.values(t[language].footer.servicesList).map(
                  (service: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                      <span className="text-sm">{service}</span>
                    </li>
                  )
                )}
              </ul>
              <h4 className="font-bold text-base mb-3 text-gray-300">
                {t[language].footer.additionalServices}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {Object.values(t[language].footer.additionalServicesList).map(
                  (service: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                      <span className="text-sm">{service}</span>
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
