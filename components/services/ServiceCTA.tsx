import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ServiceCTA() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to get <span className="text-gradient">started?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss your project requirements and create a custom solution that meets your security and development needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
            <Link href="/pricing">
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-[#22C55E]">✓</span> Free consultation
            <span className="mx-4">•</span>
            <span className="text-[#22C55E]">✓</span> Fixed-fee pricing 
            <span className="mx-4">•</span>
            <span className="text-[#22C55E]">✓</span> 24h response time
          </p>
        </div>
      </div>
    </section>
  );
}