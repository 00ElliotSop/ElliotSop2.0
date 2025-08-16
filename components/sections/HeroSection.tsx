export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/90 to-[var(--bg-primary)]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[var(--text-primary)]">
            For those who need
            <br />
            <span className="text-gradient">secure solutions</span>
          </h1>
          
          {/* Service Tags */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm">
              Web Application Development
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm">
              Mobile App Development
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm">
              Penetration Testing
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm">
              Security Consulting
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm">
              Full-Stack Development
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-8 leading-relaxed">
            Full-stack developer and penetration tester specializing in React, Next.js, and Node.js. 
            Building secure, modern applications with comprehensive security testing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn-primary text-base px-6 py-3">
              Start Your Project
            </button>
            <button className="btn-secondary text-base px-6 py-3">
              View Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-[var(--text-secondary)] text-sm font-medium">Certifications:</div>
            
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[var(--border-color)]">
              <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
              <span className="text-[var(--text-primary)] text-sm font-medium">OSCP</span>
            </div>
            
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[var(--border-color)]">
              <div className="w-2 h-2 bg-[var(--success)] rounded-full"></div>
              <span className="text-[var(--text-primary)] text-sm font-medium">Front End Developer</span>
            </div>
            
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[var(--border-color)]">
              <div className="w-2 h-2 bg-[var(--secondary)] rounded-full"></div>
              <span className="text-[var(--text-primary)] text-sm font-medium">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}