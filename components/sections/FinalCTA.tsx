import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="section bg-gradient-to-r from-[#101826] to-[#0B1220] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Shield className="h-16 w-16 text-[#66E3FF] mx-auto mb-6 animate-pulse" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to build your next <span className="text-gradient">amazing app?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project requirements and turn your ideas into reality. 
          I'll help you build fast, secure, and scalable applications that users love.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
            <Link href="/contact?type=quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#66E3FF] mb-2">24 Hours</div>
            <div className="text-gray-400">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#22C55E] mb-2">Free Consultation</div>
            <div className="text-gray-400">Project Planning</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#A78BFA] mb-2">2-4 Weeks</div>
            <div className="text-gray-400">Typical Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}