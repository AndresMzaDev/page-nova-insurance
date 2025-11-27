"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Globe,
  ArrowLeft,
  Shield,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { useLanguageDetection } from "../hooks/useLanguageDetection";

export default function TermsPage() {
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

  const content = {
    es: {
      title: "Política de Privacidad y Condiciones de los SMS",
      nav: {
        home: "Inicio",
        about: "Nosotros",
        coverage: "Coberturas",
        blog: "Recursos",
        contact: "Contacto",
      },
      sections: {
        privacy: {
          title: "Política de Privacidad",
          subtitle: "Manejo de la información, términos y condiciones.",
          infoCollection: {
            title: "MANEJO DE INFORMACIÓN",
            question1: "¿Qué información personal se recopila?",
            answer1:
              "Se está recolectando la información personal como tipos de seguros, tipo de trámites, nombre y apellidos, números de teléfono, correos electrónicos, idioma y otra información que se considere necesaria para ayudar a nuestros clientes en el tipo de seguros y multiservicios.",
            question2: "¿Cómo se utiliza la información personal?",
            answer2:
              "La información personal recopilada es privada y solo se comparte con las compañías aseguradoras internas con el propósito de ayudar a nuestros clientes con sus seguros y multiservicios. Con la excepción de no compartir la información obtenida por SMS opt-in y los números de teléfono recogidos para el consentimiento por SMS.",
            question3: "¿Con quién se comparte la información personal?",
            answer3:
              "La información personal de nuestros clientes se comparte entre internos, con el propósito de ayudarles con sus seguros y otros trámites de multiservicios. Con la excepción de no compartir la información obtenida por SMS opt-in y los números de teléfono recogidos para el consentimiento por SMS.",
            exception:
              "La suscripción a SMS y los números de teléfono recopilados para el consentimiento de SMS no se compartirán con ningún tercero ni empresa afiliada.",
          },
          sms: {
            title: "Términos y Condiciones de SMS",
            consent: {
              title: "Comunicación de Consentimiento por SMS:",
              text: "La información (Números de teléfono) obtenida como parte del proceso de consentimiento SMS no será compartida con terceros con fines de marketing.",
            },
            types: {
              title: "Tipos de Comunicaciones SMS:",
              text: "Si usted ha dado su consentimiento para recibir mensajes de texto de Nova Insurance Group, puede recibir mensajes relacionados con la conversación, tales como:",
              list: [
                "Recordatorios de citas",
                "Mensajes de seguimiento",
                "Consultas sobre facturación",
              ],
            },
            frequency: {
              title: "FRECUENCIA DE LOS MENSAJES",
              text: "La frecuencia de los mensajes puede variar. Usted puede recibir hasta 5 mensajes SMS por semana con respecto a sus recordatorios de citas, mensajes de seguimiento, consultas de facturación.",
            },
            fees: {
              title: "Tarifas potenciales para la mensajería SMS:",
              text: "Tenga en cuenta que pueden aplicarse tarifas estándar de mensajes y datos, dependiendo del plan de precios de su operador. Estas tarifas pueden variar si el mensaje se envía a nivel nacional o internacional.",
            },
            subscription: {
              title: "MÉTODO DE SUBSCRIPCIÓN",
              text: "Usted puede optar por recibir mensajes SMS de Nova Insurance Group de la siguiente manera:",
              list: ["Enviando un formulario en línea."],
            },
            unsubscribe: {
              title: "Método de baja",
              text: "Usted puede optar por no recibir mensajes SMS en cualquier momento. Para ello, simplemente responda «STOP» a cualquier mensaje SMS que reciba. Alternativamente, puede ponerse en contacto con nosotros directamente para solicitar la baja de nuestra lista de mensajes.",
            },
            help: {
              title: "AYUDA",
              text: "Si tienes algún problema, puedes responder con la palabra clave HELP. También puedes pedirnos ayuda directamente a https://novainsurancegroup.com/ o ponerte en contacto con nosotros en el (803) 555-0123",
            },
            additional: {
              title: "Opciones adicionales:",
              text: "Si no desea recibir mensajes SMS, puede optar por no marcar la casilla de consentimiento de SMS en nuestro formulario.",
            },
            standard: {
              title: "Información estándar sobre mensajería:",
              text: 'Pueden aplicarse tarifas de mensajes y datos. Puede darse de baja en cualquier momento enviando un mensaje de texto con la palabra «STOP». Para obtener ayuda, envíe un mensaje de texto a "HELP" o visite nuestra página de Política de Privacidad y Términos y Condiciones https://novainsurancegroup.com/terms La frecuencia de los mensajes puede variar.',
            },
          },
        },
      },
      contact: {
        phone: "(803) 555-0123",
        email: "info@novainsurancegroup.com",
        address: "10171 Two Notch Rd, Suite C",
        city: "Columbia, SC 29229",
      },
    },
    en: {
      title: "Privacy Policy and SMS Terms and Conditions",
      nav: {
        home: "Home",
        about: "About",
        coverage: "Coverage",
        blog: "Resources",
        contact: "Contact",
      },
      sections: {
        privacy: {
          title: "Privacy Policy",
          subtitle: "Information handling, terms and conditions.",
          infoCollection: {
            title: "INFORMATION HANDLING",
            question1: "What personal information is collected?",
            answer1:
              "Personal information is being collected such as types of insurance, type of procedures, first and last names, phone numbers, email addresses, language and other information deemed necessary to help our clients with their insurance and multi-services.",
            question2: "How is personal information used?",
            answer2:
              "The personal information collected is private and is only shared with internal insurance companies for the purpose of helping our clients with their insurance and multi-services. With the exception of not sharing information obtained through SMS opt-in and phone numbers collected for SMS consent.",
            question3: "Who is personal information shared with?",
            answer3:
              "Our clients' personal information is shared internally, for the purpose of helping them with their insurance and other multi-service procedures. With the exception of not sharing information obtained through SMS opt-in and phone numbers collected for SMS consent.",
            exception:
              "SMS subscription and phone numbers collected for SMS consent will not be shared with any third party or affiliated company.",
          },
          sms: {
            title: "SMS Terms and Conditions",
            consent: {
              title: "SMS Consent Communication:",
              text: "Information (Phone numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.",
            },
            types: {
              title: "Types of SMS Communications:",
              text: "If you have given your consent to receive text messages from Nova Insurance Group, you may receive conversation-related messages, such as:",
              list: [
                "Appointment reminders",
                "Follow-up messages",
                "Billing inquiries",
              ],
            },
            frequency: {
              title: "MESSAGE FREQUENCY",
              text: "Message frequency may vary. You may receive up to 5 SMS messages per week regarding your appointment reminders, follow-up messages, billing inquiries.",
            },
            fees: {
              title: "Potential fees for SMS messaging:",
              text: "Please note that standard message and data rates may apply, depending on your carrier's pricing plan. These rates may vary if the message is sent nationally or internationally.",
            },
            subscription: {
              title: "SUBSCRIPTION METHOD",
              text: "You can opt to receive SMS messages from Nova Insurance Group in the following ways:",
              list: ["By submitting an online form."],
            },
            unsubscribe: {
              title: "Unsubscribe method",
              text: 'You can opt out of receiving SMS messages at any time. To do so, simply reply "STOP" to any SMS message you receive. Alternatively, you can contact us directly to request removal from our messaging list.',
            },
            help: {
              title: "HELP",
              text: "If you have any issues, you can reply with the keyword HELP. You can also ask us for help directly at https://novainsurancegroup.com/ or contact us at (803) 555-0123",
            },
            additional: {
              title: "Additional options:",
              text: "If you do not wish to receive SMS messages, you can opt out by not checking the SMS consent box on our form.",
            },
            standard: {
              title: "Standard messaging information:",
              text: 'Message and data rates may apply. You can unsubscribe at any time by sending a text message with the word "STOP". For help, send a text message to "HELP" or visit our Privacy Policy and Terms and Conditions page https://novainsurancegroup.com/terms Message frequency may vary.',
            },
          },
        },
      },
      contact: {
        phone: "(803) 555-0123",
        email: "info@novainsurancegroup.com",
        address: "10171 Two Notch Rd, Suite C",
        city: "Columbia, SC 29229",
      },
    },
  };

  const t = content[language];

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
                {t.nav.home}
              </Link>
              <Link
                href="/#about"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/#coverage"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t.nav.coverage}
              </Link>
              <Link
                href="/#blog"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t.nav.blog}
              </Link>
              <Link
                href="/#contact"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {t.nav.contact}
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
                {t.nav.home}
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/#coverage"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t.nav.coverage}
              </Link>
              <Link
                href="/#blog"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t.nav.blog}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="relative bg-gradient-to-br from-[#1e3d52] via-[#295371] to-[#1e3d52] text-white py-16 pt-32 overflow-hidden">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {language === "en" ? "Back to home" : "Volver al inicio"}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
        </div>
      </header>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
            {/* Privacy Policy Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-[#295371]" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {t.sections.privacy.title}
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                {t.sections.privacy.subtitle}
              </p>

              {/* Information Handling */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#295371] mb-6">
                  {t.sections.privacy.infoCollection.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.infoCollection.question1}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.infoCollection.answer1}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.infoCollection.question2}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.infoCollection.answer2}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.infoCollection.question3}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.infoCollection.answer3}
                    </p>
                  </div>

                  <div className="bg-[#295371]/10 border-l-4 border-[#295371] p-4 rounded-r-lg">
                    <p className="text-gray-800 font-medium">
                      {t.sections.privacy.infoCollection.exception}
                    </p>
                  </div>
                </div>
              </div>

              {/* SMS Terms and Conditions */}
              <div className="border-t pt-10">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="h-8 w-8 text-[#295371]" />
                  <h3 className="text-2xl font-bold text-[#295371]">
                    {t.sections.privacy.sms.title}
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Consent */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.consent.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.consent.text}
                    </p>
                  </div>

                  {/* Types */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.types.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {t.sections.privacy.sms.types.text}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      {t.sections.privacy.sms.types.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Frequency */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.frequency.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.frequency.text}
                    </p>
                  </div>

                  {/* Fees */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.fees.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.fees.text}
                    </p>
                  </div>

                  {/* Subscription */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.subscription.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {t.sections.privacy.sms.subscription.text}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      {t.sections.privacy.sms.subscription.list.map(
                        (item, idx) => (
                          <li key={idx}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Unsubscribe */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.unsubscribe.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.unsubscribe.text}
                    </p>
                  </div>

                  {/* Help */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.help.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.help.text}
                    </p>
                  </div>

                  {/* Additional */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.additional.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.additional.text}
                    </p>
                  </div>

                  {/* Standard */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {t.sections.privacy.sms.standard.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t.sections.privacy.sms.standard.text}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-br from-[#295371] to-[#1e3d52] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              {language === "en"
                ? "Contact Information"
                : "Información de Contacto"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    {language === "en" ? "Phone" : "Teléfono"}
                  </h4>
                  <p className="text-white/90">{t.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-white/90 break-words">{t.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/20 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    {language === "en" ? "Address" : "Dirección"}
                  </h4>
                  <p className="text-white/90">{t.contact.address}</p>
                  <p className="text-white/90">{t.contact.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

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
                {language === "en"
                  ? "Your trusted local agency for affordable, accessible insurance in South Carolina."
                  : "Tu agencia local de confianza para seguros asequibles y accesibles en Carolina del Sur."}
              </p>
              <div className="flex items-center space-x-2 text-blue-400 mb-6">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(803) 555-0123</span>
              </div>
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61582774041378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#295371] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/novainsurancesc/?igsh=MTMyMDU1aWxiejg0ag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#295371] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                {language === "en" ? "Quick Links" : "Enlaces Rápidos"}
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
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                {language === "en"
                  ? "Insurance Services"
                  : "Servicios de Seguros"}
              </h3>
              <ul className="space-y-2 text-gray-400 mb-6">
                {(language === "en"
                  ? [
                      "Auto Insurance",
                      "Motorcycle Insurance",
                      "Commercial Insurance",
                      "Workers' Compensation",
                      "General Liability",
                      "Renters Insurance",
                      "Homeowners Insurance",
                    ]
                  : [
                      "Seguro de Auto",
                      "Seguro de Motocicleta",
                      "Seguro Comercial",
                      "Compensación Laboral",
                      "Responsabilidad General",
                      "Seguro para Inquilinos",
                      "Seguro para Propietarios",
                    ]
                ).map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-base mb-3 text-gray-300">
                {language === "en"
                  ? "Additional Services"
                  : "Servicios Adicionales"}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {(language === "en"
                  ? [
                      "DMV Services (title transfers, tags, plates, duplicates, etc.)",
                      "Notary Services",
                    ]
                  : [
                      "Servicios del DMV (transferencias de título, etiquetas, placas, duplicados, etc.)",
                      "Servicios Notariales",
                    ]
                ).map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Nova Insurance Group.{" "}
              {language === "en"
                ? "All rights reserved."
                : "Todos los derechos reservados."}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "en"
                  ? "Privacy Policy"
                  : "Política de Privacidad"}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "en"
                  ? "Terms of Service"
                  : "Términos de Servicio"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
