"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ServicesSection language={language} />
        <PricingSection language={language} />
        <PortfolioSection language={language} />
        <TestimonialsSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  )
}
