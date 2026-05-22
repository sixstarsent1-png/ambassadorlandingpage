import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { ImageShowcase } from "@/components/landing/image-showcase"
import { WhatAmbassadorsDoSection } from "@/components/landing/what-ambassadors-do-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { EventsShowcase } from "@/components/landing/events-showcase"
import { TiersSection } from "@/components/landing/tiers-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { MarketsSection } from "@/components/landing/markets-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ImageShowcase />
      <WhatAmbassadorsDoSection />
      <BenefitsSection />
      <EventsShowcase />
      <TiersSection />
      <HowItWorksSection />
      <MarketsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
