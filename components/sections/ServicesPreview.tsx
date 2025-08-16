import Link from 'next/link';
import { Globe, Server, Shield, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'web-apps',
    icon: Globe,
    title: 'Secure Web Applications',
    description: 'Modern, secure web applications built with React, Next.js, and enterprise-grade security practices.',
    features: ['Security-First Design', 'Real-time Features', 'Progressive Web Apps', 'Secure Authentication'],
    accent: 'text-[#00B3A4] border-[#00B3A4]'
  },
  {
    id: 'mobile-apps', 
    icon: Users,
    title: 'Secure Mobile Apps',
    description: 'Cross-platform mobile applications with built-in security controls and data protection.',
    features: ['Secure Data Storage', 'Biometric Authentication', 'App Store Deployment', 'Encrypted Communications'],
    accent: 'text-[#10B981] border-[#10B981]'
  },
  {
    id: 'backend-apis',
    icon: Server,
    title: 'Secure Backend & APIs',
    description: 'Hardened backend services and APIs with comprehensive security controls and monitoring.',
    features: ['Secure API Design', 'Threat Detection', 'Cloud Security', 'Zero-Trust Architecture'],
    accent: 'text-[#7C3AED] border-[#7C3AED]'
  },
];

export function ServicesPreview() {
  return (
    <section className="section bg-[#E6FFFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Security <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            From concept to deployment, we build modern applications that are fast, secure, and scalable. 
            Specializing in security-first development and comprehensive threat protection.
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
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
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