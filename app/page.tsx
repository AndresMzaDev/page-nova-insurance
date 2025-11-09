"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "./components/QuoteForm";
import {
  Menu,
  X,
  Globe,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Shield,
  Users,
  Award,
  Clock,
  Car,
  FileText,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Umbrella,
  Zap,
  Heart,
  TrendingUp,
  Star,
} from "lucide-react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      coverage: "Coverage",
      blog: "Resources",
      contact: "Contact",
    },
    hero: {
      badge: "Trusted by 10,000+ South Carolina Drivers",
      title: "Drive with Confidence",
      titleHighlight: "Protect What Matters",
      subtitle:
        "Comprehensive auto insurance tailored to your needs. Fast claims, competitive rates, and 24/7 support.",
      cta: "Get Free Quote",
      ctaSecondary: "View Coverage",
      stats: {
        claims: "24/7 Claims",
        experience: "20+ Years",
        customers: "10K+ Drivers",
        rating: "4.9 Rating",
      },
    },
    features: {
      title: "Why Choose Nova Insurance?",
      subtitle: "We make insurance simple, affordable, and reliable",
      feature1: {
        title: "Lightning Fast Claims",
        desc: "24/7 support with same-day processing. Get back on the road quickly.",
      },
      feature2: {
        title: "Expert Guidance",
        desc: "20+ years protecting South Carolina families with personalized service.",
      },
      feature3: {
        title: "Best Rates Guaranteed",
        desc: "Competitive pricing without compromising on coverage quality.",
      },
      feature4: {
        title: "Complete Protection",
        desc: "Comprehensive coverage options for every driver and vehicle type.",
      },
    },
    coverage: {
      title: "Coverage That Fits Your Life",
      subtitle: "Flexible plans designed for South Carolina drivers",
      liability: {
        title: "Liability Coverage",
        desc: "Required protection for injuries and property damage you may cause",
        price: "Starting at $49/mo",
      },
      collision: {
        title: "Collision Coverage",
        desc: "Repairs your vehicle after accidents, regardless of fault",
        price: "Starting at $79/mo",
      },
      comprehensive: {
        title: "Comprehensive",
        desc: "Protection from theft, weather, vandalism, and more",
        price: "Starting at $89/mo",
      },
      uninsured: {
        title: "Uninsured Motorist",
        desc: "Coverage when hit by uninsured or underinsured drivers",
        price: "Starting at $39/mo",
      },
      cta: "Compare Plans",
    },
    about: {
      title: "South Carolina's Trusted Insurance Partner",
      subtitle: "Local expertise, national strength",
      mission: "Our Mission",
      missionText:
        "At Nova Insurance Group, we believe quality auto insurance should be accessible and affordable. We've spent over two decades protecting South Carolina families with transparent pricing and exceptional service.",
      values: "Our Values",
      valuesText:
        "Integrity, transparency, and customer-first service guide everything we do. We build lasting relationships based on trust and reliability.",
      team: "Expert Team",
      teamText:
        "Our licensed agents bring decades of experience and stay current with SC regulations and industry innovations.",
      commitment: "Community Commitment",
      commitmentText:
        "Deeply rooted in South Carolina, we're your neighbors committed to serving our community with excellence.",
    },
    blog: {
      title: "Insurance Knowledge Center",
      subtitle: "Expert tips and guides to help you make informed decisions",
      readMore: "Read Guide",
      post1: {
        title: "What to Do After a Car Accident",
        excerpt:
          "Essential steps to protect yourself and file a successful claim",
        date: "Updated Nov 2025",
        readTime: "5 min read",
      },
      post2: {
        title: "Understanding Your Policy",
        excerpt: "Decode insurance terms and maximize your coverage benefits",
        date: "Updated Nov 2025",
        readTime: "7 min read",
      },
      post3: {
        title: "Lower Your Premiums",
        excerpt:
          "Proven strategies to reduce costs without sacrificing protection",
        date: "Updated Nov 2025",
        readTime: "6 min read",
      },
    },
    contact: {
      title: "Get Your Free Quote Today",
      subtitle: "Join thousands of satisfied South Carolina drivers",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Tell us about your insurance needs",
        submit: "Get Free Quote",
        sending: "Sending...",
        success: "Thank you! We'll contact you within 24 hours.",
        error: "Something went wrong. Please try again.",
      },
      info: {
        address: "Visit Our Office",
        addressLine: "10171 Two Notch Rd, Suite C",
        city: "Columbia, SC 29229",
        phone: "Call Us",
        email: "Email Us",
        hours: "Business Hours",
        hoursDetail: "Mon-Fri: 9AM - 6PM | Sat: 10AM - 2PM",
      },
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
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Real stories from real South Carolina drivers",
      testimonial1: {
        text: "Nova made switching insurance so easy. Their rates beat my old company by 30% and the service is incredible!",
        author: "Sarah M.",
        location: "Columbia, SC",
      },
      testimonial2: {
        text: "After my accident, they processed my claim in 24 hours. The team was supportive and professional throughout.",
        author: "James T.",
        location: "Lexington, SC",
      },
      testimonial3: {
        text: "Best insurance experience ever. They took time to explain everything and found me the perfect coverage.",
        author: "Maria R.",
        location: "Irmo, SC",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      coverage: "Coberturas",
      blog: "Recursos",
      contact: "Contacto",
    },
    hero: {
      badge: "Confiado por más de 10,000 conductores en Carolina del Sur",
      title: "Conduce con Confianza",
      titleHighlight: "Protege Lo Que Importa",
      subtitle:
        "Seguro de auto integral adaptado a tus necesidades. Reclamos rápidos, tarifas competitivas y soporte 24/7.",
      cta: "Cotización Gratis",
      ctaSecondary: "Ver Coberturas",
      stats: {
        claims: "Reclamos 24/7",
        experience: "Más de 20 Años",
        customers: "10K+ Conductores",
        rating: "Calificación 4.9",
      },
    },
    features: {
      title: "¿Por Qué Elegir Nova Insurance?",
      subtitle: "Hacemos que el seguro sea simple, asequible y confiable",
      feature1: {
        title: "Reclamos Ultrarrápidos",
        desc: "Soporte 24/7 con procesamiento el mismo día. Vuelve a la carretera rápidamente.",
      },
      feature2: {
        title: "Orientación Experta",
        desc: "Más de 20 años protegiendo familias de Carolina del Sur con servicio personalizado.",
      },
      feature3: {
        title: "Mejores Tarifas Garantizadas",
        desc: "Precios competitivos sin comprometer la calidad de cobertura.",
      },
      feature4: {
        title: "Protección Completa",
        desc: "Opciones de cobertura integral para cada conductor y tipo de vehículo.",
      },
    },
    coverage: {
      title: "Cobertura Que Se Adapta a Tu Vida",
      subtitle:
        "Planes flexibles diseñados para conductores de Carolina del Sur",
      liability: {
        title: "Cobertura de Responsabilidad",
        desc: "Protección requerida por lesiones y daños a la propiedad que puedas causar",
        price: "Desde $49/mes",
      },
      collision: {
        title: "Cobertura de Colisión",
        desc: "Repara tu vehículo después de accidentes, sin importar la culpa",
        price: "Desde $79/mes",
      },
      comprehensive: {
        title: "Cobertura Integral",
        desc: "Protección contra robo, clima, vandalismo y más",
        price: "Desde $89/mes",
      },
      uninsured: {
        title: "Conductor Sin Seguro",
        desc: "Cobertura cuando te golpea un conductor sin seguro o con seguro insuficiente",
        price: "Desde $39/mes",
      },
      cta: "Comparar Planes",
    },
    about: {
      title: "El Socio de Seguros de Confianza de Carolina del Sur",
      subtitle: "Experiencia local, fortaleza nacional",
      mission: "Nuestra Misión",
      missionText:
        "En Nova Insurance Group, creemos que un seguro de auto de calidad debe ser accesible y asequible. Hemos pasado más de dos décadas protegiendo familias de Carolina del Sur con precios transparentes y servicio excepcional.",
      values: "Nuestros Valores",
      valuesText:
        "La integridad, la transparencia y el servicio centrado en el cliente guían todo lo que hacemos. Construimos relaciones duraderas basadas en la confianza y la confiabilidad.",
      team: "Equipo Experto",
      teamText:
        "Nuestros agentes licenciados aportan décadas de experiencia y se mantienen actualizados con las regulaciones de SC y las innovaciones de la industria.",
      commitment: "Compromiso Comunitario",
      commitmentText:
        "Profundamente arraigados en Carolina del Sur, somos sus vecinos comprometidos a servir a nuestra comunidad con excelencia.",
    },
    blog: {
      title: "Centro de Conocimiento de Seguros",
      subtitle:
        "Consejos y guías de expertos para ayudarte a tomar decisiones informadas",
      readMore: "Leer Guía",
      post1: {
        title: "Qué Hacer Después de un Accidente",
        excerpt:
          "Pasos esenciales para protegerte y presentar un reclamo exitoso",
        date: "Actualizado Nov 2025",
        readTime: "5 min de lectura",
      },
      post2: {
        title: "Entendiendo Tu Póliza",
        excerpt:
          "Decodifica términos de seguros y maximiza los beneficios de tu cobertura",
        date: "Actualizado Nov 2025",
        readTime: "7 min de lectura",
      },
      post3: {
        title: "Reduce Tus Primas",
        excerpt:
          "Estrategias comprobadas para reducir costos sin sacrificar protección",
        date: "Actualizado Nov 2025",
        readTime: "6 min de lectura",
      },
    },
    contact: {
      title: "Obtén Tu Cotización Gratis Hoy",
      subtitle: "Únete a miles de conductores satisfechos de Carolina del Sur",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        message: "Cuéntanos sobre tus necesidades de seguro",
        submit: "Obtener Cotización Gratis",
        sending: "Enviando...",
        success: "¡Gracias! Te contactaremos en 24 horas.",
        error: "Algo salió mal. Por favor intenta de nuevo.",
      },
      info: {
        address: "Visita Nuestra Oficina",
        addressLine: "10171 Two Notch Rd, Suite C",
        city: "Columbia, SC 29229",
        phone: "Llámanos",
        email: "Envíanos un Email",
        hours: "Horario",
        hoursDetail: "Lun-Vie: 9AM - 6PM | Sáb: 10AM - 2PM",
      },
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
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Historias reales de conductores reales de Carolina del Sur",
      testimonial1: {
        text: "Nova hizo que cambiar de seguro fuera tan fácil. Sus tarifas superaron a mi antigua compañía en un 30% y el servicio es increíble!",
        author: "Sarah M.",
        location: "Columbia, SC",
      },
      testimonial2: {
        text: "Después de mi accidente, procesaron mi reclamo en 24 horas. El equipo fue solidario y profesional en todo momento.",
        author: "James T.",
        location: "Lexington, SC",
      },
      testimonial3: {
        text: "La mejor experiencia de seguro que he tenido. Se tomaron el tiempo para explicar todo y encontraron la cobertura perfecta para mí.",
        author: "Maria R.",
        location: "Irmo, SC",
      },
    },
  },
};

type TranslationType = typeof translations.en;

const LanguageContext = createContext<{
  language: "en" | "es";
  setLanguage: (lang: "en" | "es") => void;
  t: TranslationType;
}>({
  language: "en",
  setLanguage: () => {},
  t: {} as TranslationType,
});

const useLanguage = () => useContext(LanguageContext);

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "about") {
      window.location.href = "/about";
      return;
    }
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
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
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {(["home", "about", "coverage", "blog", "contact"] as const).map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-all relative group ${
                    scrolled
                      ? "text-gray-700 hover:text-[#295371]"
                      : "text-white hover:text-[#3a6b8a]"
                  }`}
                >
                  {t.nav[section]}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#295371] group-hover:w-full transition-all duration-300 ${
                      activeSection === section ? "w-full" : ""
                    }`}
                  ></span>
                </button>
              )
            )}

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
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t.hero.cta}
              </button>
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
            {(["home", "about", "coverage", "blog", "contact"] as const).map(
              (section) => {
                if (section === "about") {
                  return (
                    <Link
                      key={section}
                      href="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
                    >
                      {t.nav[section]}
                    </Link>
                  );
                }
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
                  >
                    {t.nav[section]}
                  </button>
                );
              }
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-4 py-3 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCoverage = () => {
    const element = document.getElementById("coverage");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1e3d52] via-[#295371] to-[#1e3d52]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#295371] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#158151] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#158151] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{t.hero.badge}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {t.hero.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3a6b8a] to-[#158151]">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-white text-[#295371] rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {t.hero.cta}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#295371] to-[#158151] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={scrollToCoverage}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {[
                { label: t.hero.stats.claims, icon: Clock },
                { label: t.hero.stats.experience, icon: Award },
                { label: t.hero.stats.customers, icon: Users },
                { label: t.hero.stats.rating, icon: Star },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-white/80" />
                  <p className="font-bold text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#295371]/20 to-[#158151]/20 backdrop-blur-sm border border-white/20 p-12 transform hover:scale-105 transition-transform duration-500">
                <Car className="w-full h-full text-white opacity-90" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#295371] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#158151] rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-8 w-8 text-white rotate-90" />
      </div>
    </section>
  );
};

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t.features.feature1.title,
      desc: t.features.feature1.desc,
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Heart,
      title: t.features.feature2.title,
      desc: t.features.feature2.desc,
      color: "from-pink-400 to-red-500",
    },
    {
      icon: TrendingUp,
      title: t.features.feature3.title,
      desc: t.features.feature3.desc,
      color: "from-[#158151] to-[#0f6b3d]",
    },
    {
      icon: Shield,
      title: t.features.feature4.title,
      desc: t.features.feature4.desc,
      color: "from-[#295371] to-[#1e3d52]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
              ></div>
              <div
                className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Coverage = () => {
  const { t } = useLanguage();

  const coverages = [
    {
      icon: Shield,
      title: t.coverage.liability.title,
      desc: t.coverage.liability.desc,
      price: t.coverage.liability.price,
      popular: false,
    },
    {
      icon: Car,
      title: t.coverage.collision.title,
      desc: t.coverage.collision.desc,
      price: t.coverage.collision.price,
      popular: true,
    },
    {
      icon: Umbrella,
      title: t.coverage.comprehensive.title,
      desc: t.coverage.comprehensive.desc,
      price: t.coverage.comprehensive.price,
      popular: false,
    },
    {
      icon: AlertCircle,
      title: t.coverage.uninsured.title,
      desc: t.coverage.uninsured.desc,
      price: t.coverage.uninsured.price,
      popular: false,
    },
  ];

  return (
    <section
      id="coverage"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.coverage.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.coverage.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverages.map((coverage, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                coverage.popular ? "ring-2 ring-[#295371]" : ""
              }`}
            >
              {coverage.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#295371] to-[#1e3d52] text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                  Popular
                </div>
              )}
              <div className="p-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#295371] to-[#1e3d52] mb-4 shadow-lg">
                  <coverage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {coverage.desc}
                </p>
                <div className="border-t pt-4 mt-4">
                  <p className="text-2xl font-bold text-[#295371]">
                    {coverage.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { ...t.testimonials.testimonial1, rating: 5 },
    { ...t.testimonials.testimonial2, rating: 5 },
    { ...t.testimonials.testimonial3, rating: 5 },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-[#1e3d52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t.about.subtitle}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#295371] to-[#1e3d52] text-white rounded-xl font-bold text-lg hover:from-[#1e3d52] hover:to-[#295371] transition-all transform hover:scale-105 shadow-lg"
          >
            Learn More About Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-[#295371] to-[#1e3d52] rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{t.about.mission}</h3>
                <p className="text-white/90 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#158151] to-[#0f6b3d] rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{t.about.values}</h3>
                <p className="text-white/90 leading-relaxed">
                  {t.about.valuesText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const { t } = useLanguage();

  const posts = [
    {
      ...t.blog.post1,
      icon: AlertCircle,
      gradient: "from-red-500 to-pink-600",
    },
    {
      ...t.blog.post2,
      icon: FileText,
      gradient: "from-[#295371] to-[#1e3d52]",
    },
    {
      ...t.blog.post3,
      icon: DollarSign,
      gradient: "from-[#158151] to-[#0f6b3d]",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.blog.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div
                className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <post.icon className="h-20 w-20 text-white opacity-90 relative z-10" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">
                    {post.date}
                  </span>
                  <span className="text-xs bg-[#295371]/10 text-[#295371] px-2 py-1 rounded-full font-medium">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#295371] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-[#295371] font-semibold hover:text-[#1e3d52] transition-colors group">
                  {t.blog.readMore}
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link
            href="/knowledge-center"
            className="inline-flex items-center text-[#295371] font-semibold hover:text-[#1e3d52] transition-colors group"
          >
            Ver todos los artículos
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#1e3d52] via-[#295371] to-[#1e3d52] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <QuoteForm
              email="andes_nmeza@hotmail.com"
              translations={{
                name: t.contact.form.name,
                email: t.contact.form.email,
                phone: t.contact.form.phone,
                message: t.contact.form.message,
                submit: t.contact.form.submit,
                sending: t.contact.form.sending,
                success: t.contact.form.success,
                error: t.contact.form.error,
              }}
              variant="dark"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#295371] to-[#1e3d52] rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {t.contact.info.address}
                  </h3>
                  <p className="text-white/90">{t.contact.info.addressLine}</p>
                  <p className="text-white/90">{t.contact.info.city}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#158151] to-[#0f6b3d] rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {t.contact.info.phone}
                  </h3>
                  <p className="text-blue-100">(803) 555-0123</p>
                  <p className="text-sm text-blue-200 mt-1">
                    24/7 Emergency Line
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {t.contact.info.email}
                  </h3>
                  <p className="text-blue-100">info@novainsurancegroup.com</p>
                  <p className="text-sm text-blue-200 mt-1">
                    Response within 2 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {t.contact.info.hours}
                  </h3>
                  <p className="text-blue-100">{t.contact.info.hoursDetail}</p>
                  <p className="text-sm text-blue-200 mt-1">
                    Claims support available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
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
              {t.footer.description}
            </p>
            <div className="flex items-center space-x-2 text-blue-400">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(803) 555-0123</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
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
                        {t.nav[link]}
                      </Link>
                    ) : (
                      <a
                        href={`#${link}`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                        {t.nav[link]}
                      </a>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-3 text-gray-400">
              {Object.values(t.footer.servicesList).map(
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
            {t.footer.rights}
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Features />
        <Coverage />
        <Testimonials />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </LanguageContext.Provider>
  );
}
