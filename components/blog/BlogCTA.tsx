import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Rss } from 'lucide-react';

export function BlogCTA() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Stay updated with the latest <span className="text-gradient">security insights</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Get practical cybersecurity advice and development tutorials delivered to your inbox. 
          No spam, just actionable insights from the field.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Security Consultation
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
            <Link href="/contact?type=newsletter">
              <Rss className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-[#22C55E]">✓</span> Weekly security insights
            <span className="mx-4">•</span>
            <span className="text-[#22C55E]">✓</span> Practical tutorials
            <span className="mx-4">•</span>
            <span className="text-[#22C55E]">✓</span> Industry case studies
          </p>
        </div>
      </div>
    </section>
  );
}