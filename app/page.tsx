import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AiDemoSection } from '@/components/sections/ai-demo-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      <HeroSection />
      <ServicesSection />
      <AiDemoSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}