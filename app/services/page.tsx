import { ServiceHero } from '@/components/services/ServiceHero';
import { WebDevelopmentService } from '@/components/services/WebDevelopmentService';
import { AppDevelopmentService } from '@/components/services/AppDevelopmentService';
import { PenetrationTestingService } from '@/components/services/PenetrationTestingService';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero />
      <WebDevelopmentService />
      <AppDevelopmentService />
      <PenetrationTestingService />
      <ServiceCTA />
    </div>
  );
}