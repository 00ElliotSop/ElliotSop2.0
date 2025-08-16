'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Target, Code, Activity, Zap, Lock } from 'lucide-react';
import { TrustBadges } from '@/components/TrustBadges';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="h-8 w-8 text-[#66E3FF] opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
        <Target className="h-6 w-6 text-[#22C55E] opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '2s'}}>
        <Code className="h-10 w-10 text-[#A78BFA] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build amazing apps.<br />
            <span className="text-gradient">Secure by design.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            I'm ElliotSop—expert full-stack developer specializing in web and mobile applications. 
            I create fast, scalable solutions with enterprise-grade security built-in from day one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Trust Row */}
        <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <TrustBadges />
        </div>

        {/* Terminal Window */}
        <div className="mt-16 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="bg-[#0F172A] border border-gray-700 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">security-audit.sh</div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-[#22C55E]">$ npm run build</div>
              <div className="text-gray-400 mt-2">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-[#66E3FF]" />
                  Building optimized production bundle...
                </div>
                <div className="flex items-center mt-1">
                  <Activity className="w-4 h-4 mr-2 text-[#A78BFA]" />
                  Running performance optimizations...
                </div>
                <div className="flex items-center mt-1">
                  <Lock className="w-4 h-4 mr-2 text-[#22C55E]" />
                  <span className="text-[#22C55E]">✓ Build completed successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}