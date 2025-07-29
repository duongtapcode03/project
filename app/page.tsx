import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <HighlightsSection />
      <TechStackSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}