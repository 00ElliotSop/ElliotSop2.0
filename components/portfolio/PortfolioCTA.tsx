import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function PortfolioCTA() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to build your next <span className="text-gradient">secure project?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss how I can help you build secure, scalable solutions that deliver measurable results for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Project
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
            <Link href="/services">
              View Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-[#22C55E]">✓</span> Free project consultation
            <span className="mx-4">•</span>
            <span className="text-[#22C55E]">✓</span> Fixed-fee pricing available
            <span className="mx-4">•</span>
            <span className="text-[#22C55E]">✓</span> 24h response guarantee
          </p>
        </div>
      </div>
    </section>
  );
}