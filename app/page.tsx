import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogTeasers } from '@/components/sections/BlogTeasers';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <FeaturedWork />
      <TestimonialsSection />
      <BlogTeasers />
      <FinalCTA />
    </div>
  );
}