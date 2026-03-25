import { Navbar } from "./navbar"
import { HeroSection } from "./hero-section"
import { ProductsSection } from "./products-section"
import { FeaturesSection } from "./features-section"
import { AboutSection } from "./about-section"
import { NewsSection } from "./news-section"
import { CtaSection } from "./cta-section"
import { Footer } from "./footer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
