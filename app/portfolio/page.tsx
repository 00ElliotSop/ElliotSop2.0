import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { PortfolioCTA } from '@/components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-16">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </div>
  );
}