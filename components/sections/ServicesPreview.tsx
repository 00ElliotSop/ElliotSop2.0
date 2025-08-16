import Link from 'next/link';
import { Globe, Server, Shield, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'web-apps',
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, responsive web apps built with React, Next.js, and cutting-edge technologies for optimal performance.',
    features: ['React/Next.js', 'Real-time Features', 'Progressive Web Apps', 'E-commerce Integration'],
    accent: 'text-[#66E3FF] border-[#66E3FF]'
  },
  {
    id: 'mobile-apps', 
    icon: Users,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps using React Native and native technologies for iOS and Android.',
    features: ['React Native', 'Native Performance', 'App Store Deployment', 'Push Notifications'],
    accent: 'text-[#22C55E] border-[#22C55E]'
  },
  {
    id: 'backend-apis',
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable backend services and APIs with robust security, monitoring, and automated deployment.',
    features: ['REST/GraphQL APIs', 'Database Design', 'Cloud Deployment', 'Security & Auth'],
    accent: 'text-[#A78BFA] border-[#A78BFA]'
  },
];

export function ServicesPreview() {
  return (
    <section className="section bg-[#101826]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Development <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, I build modern applications that are fast, secure, and scalable. 
            Specializing in web apps, mobile apps, and robust backend systems.
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