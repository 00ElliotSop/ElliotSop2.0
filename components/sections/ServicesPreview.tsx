import Link from 'next/link';
import { Globe, Server, Shield, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'web-apps',
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites built with React, Next.js, and the latest web technologies.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
    accent: 'text-[var(--primary)] border-[var(--primary)]'
  },
  {
    id: 'mobile-apps', 
    icon: Users,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications built with React Native for iOS and Android.',
    features: ['Cross-Platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
    accent: 'text-[var(--success)] border-[var(--success)]'
  },
  {
    id: 'backend-apis',
    icon: Server,
    title: 'Penetration Testing',
    description: 'Comprehensive security testing to identify vulnerabilities in web applications and networks.',
    features: ['Web App Testing', 'Network Security', 'Vulnerability Assessment', 'Security Reports'],
    accent: 'text-[var(--secondary)] border-[var(--secondary)]'
  },
];

export function ServicesPreview() {
  return (
    <section className="section bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            From concept to deployment, I build modern applications that are fast, secure, and scalable. 
            Specializing in full-stack development and penetration testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card group hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg border ${service.accent} bg-opacity-10 mb-6`}>
                  <Icon className={`h-8 w-8 ${service.accent.split(' ')[0]}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-[var(--text-secondary)]">
                      <ArrowRight className={`h-4 w-4 mr-2 ${service.accent.split(' ')[0]}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  variant="ghost" 
                  className={`w-full group-hover:${service.accent.split(' ')[0]} transition-colors duration-300`}
                >
                  <Link href={`/services#${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}