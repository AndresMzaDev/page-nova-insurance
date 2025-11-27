"use client";

import React, { useState, FormEvent } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

interface QuoteFormProps {
  email?: string;
  translations?: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    messagePlaceholder?: string;
  };
  className?: string;
  variant?: "light" | "dark";
}

export default function QuoteForm({
  email = "Info@novainsurancesc.com",
  translations = {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Tell us about your insurance needs",
    submit: "Get Free Quote",
    sending: "Sending...",
    success: "Thank you! We'll contact you within 24 hours.",
    error: "Something went wrong. Please try again.",
    namePlaceholder: "John Doe",
    emailPlaceholder: "john@example.com",
    phonePlaceholder: "803-638-4779",
    messagePlaceholder: "Tell us about your insurance needs...",
  },
  className = "",
  variant = "dark",
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { success: response.ok };
      }

      if (response.ok || data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }, 2000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isLight = variant === "light";
  const inputClasses = isLight
    ? "w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#158151] focus:border-transparent text-gray-900 placeholder-gray-500"
    : "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#158151] focus:border-transparent text-white placeholder-white/60 backdrop-blur-sm";

  const labelClasses = isLight
    ? "block text-sm font-medium mb-2 text-gray-700"
    : "block text-sm font-medium mb-2";

  return (
    <form
      action={`https://formsubmit.co/2b77c074ac18d4a7c9b2c2db3b612786`}
      method="POST"
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
    >
      <input
        type="hidden"
        name="_subject"
        value="Nueva Solicitud de Cotización - Nova Insurance"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_next"
        value={
          typeof window !== "undefined"
            ? `${window.location.origin}${window.location.pathname}?success=true`
            : ""
        }
      />
      <input
        type="hidden"
        name="_autoresponse"
        value="Gracias por contactarnos. Nos pondremos en contacto contigo pronto."
      />

      <div>
        <label htmlFor="name" className={labelClasses}>
          {translations.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder={translations.namePlaceholder || "John Doe"}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          {translations.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder={translations.emailPlaceholder || "john@example.com"}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          {translations.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder={translations.phonePlaceholder || "803-638-4779"}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          {translations.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder={
            translations.messagePlaceholder ||
            "Tell us about your insurance needs..."
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-4 bg-gradient-to-r from-[#295371] to-[#1e3d52] text-white rounded-xl font-bold text-lg hover:from-[#1e3d52] hover:to-[#295371] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        {status === "sending" ? translations.sending : translations.submit}
      </button>

      {status === "success" && (
        <div
          className={`flex items-center p-4 rounded-xl backdrop-blur-sm ${
            isLight
              ? "bg-[#158151]/10 border border-[#158151]/30 text-[#158151]"
              : "bg-[#158151]/20 border border-[#158151]/30 text-white"
          }`}
        >
          <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          {translations.success}
        </div>
      )}

      {status === "error" && (
        <div
          className={`flex items-center p-4 rounded-xl backdrop-blur-sm ${
            isLight
              ? "bg-red-500/10 border border-red-400/30 text-red-600"
              : "bg-red-500/20 border border-red-400/30 text-white"
          }`}
        >
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          {translations.error}
        </div>
      )}
    </form>
  );
}
