'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Target, Code, Activity, Zap, Lock, Droplets } from 'lucide-react';
import { TrustBadges } from '@/components/TrustBadges';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="h-8 w-8 text-[var(--primary)] opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
        <Target className="h-6 w-6 text-[var(--success)] opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '2s'}}>
        <Code className="h-10 w-10 text-[var(--secondary)] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build amazing apps.<br />
            <span className="text-gradient">Fast & secure.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-8 leading-relaxed">
            Full-stack developer specializing in React, Next.js, and Node.js. 
            I build modern web and mobile applications that are fast, secure, and user-friendly.
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
          <div className="bg-white border border-[var(--border-color)] rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-surface)] border-b border-[var(--border-color)]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[var(--danger)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--warning)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--success)]"></div>
              </div>
              <div className="text-[var(--text-secondary)] text-sm font-mono">npm-run-build.sh</div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-[var(--success)]">$ npm run build</div>
              <div className="text-[var(--text-secondary)] mt-2">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-[var(--primary)]" />
                  Building optimized production bundle...
                </div>
                <div className="flex items-center mt-1">
                  <Activity className="w-4 h-4 mr-2 text-[var(--secondary)]" />
                  Running performance optimizations...
                </div>
                <div className="flex items-center mt-1">
                  <Lock className="w-4 h-4 mr-2 text-[var(--success)]" />
                  <span className="text-[var(--success)]">✓ Build completed successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}