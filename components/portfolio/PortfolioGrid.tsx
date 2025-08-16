import Link from 'next/link';
import { ExternalLink, Shield, Zap, TrendingUp, Globe, Server, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 'ecommerce-security',
    title: 'E-commerce Security Hardening',
    category: 'Penetration Testing',
    description: 'Comprehensive security audit and PCI DSS compliance for online retailer experiencing cart abandonment and security concerns.',
    outcome: '+38% conversion rate, zero security incidents in 12 months',
    technologies: ['Web Application Testing', 'PCI DSS', 'Performance Optimization', 'OWASP ASVS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/portfolio/ecommerce-security',
    icon: Shield,
    color: 'text-[#A78BFA]',
    featured: true
  },
  {
    id: 'fintech-api',
    title: 'FinTech API Development',
    category: 'App Development',
    description: 'Built secure, scalable payment processing infrastructure for startup with OAuth2, rate limiting, and real-time fraud detection.',
    outcome: '99.99% uptime, processed $2M+ transactions securely',
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'OAuth2', 'Redis'],
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/portfolio/fintech-api',
    icon: Zap,
    color: 'text-[#22C55E]',
    featured: true
  },
  {
    id: 'saas-rebuild',
    title: 'SaaS Platform Rebuild',
    category: 'Website Development',
    description: 'Complete Next.js rebuild of legacy platform with poor UX and security vulnerabilities, implementing modern auth and security features.',
    outcome: '+65% user engagement, 95+ Lighthouse score',
    technologies: ['Next.js', 'Auth.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/portfolio/saas-rebuild',
    icon: TrendingUp,
    color: 'text-[#66E3FF]',
    featured: true
  },
  {
    id: 'healthcare-compliance',
    title: 'Healthcare HIPAA Compliance',
    category: 'Penetration Testing',
    description: 'Security assessment and HIPAA compliance audit for healthcare provider managing sensitive patient data.',
    outcome: 'Achieved HIPAA compliance, reduced security risks by 85%',
    technologies: ['HIPAA Assessment', 'Network Security', 'Data Encryption', 'Access Controls'],
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/portfolio/healthcare-compliance',
    icon: Lock,
    color: 'text-[#A78BFA]',
    featured: false
  },
  {
    id: 'startup-mvp',
    title: 'Startup MVP Development',
    category: 'Website Development',
    description: 'Rapid development of secure MVP for tech startup, including user authentication, payment processing, and admin dashboard.',
    outcome: 'Launched in 6 weeks, secured $500K seed funding',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'AWS'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/portfolio/startup-mvp',
    icon: Globe,
    color: 'text-[#66E3FF]',
    featured: false
  },
  {
    id: 'enterprise-api',
    title: 'Enterprise API Security',
    category: 'App Development',
    description: 'Designed and implemented secure API architecture for enterprise client with microservices, rate limiting, and comprehensive monitoring.',
    outcome: 'Handles 1M+ requests/day, 99.9% uptime',
    technologies: ['Microservices', 'Kubernetes', 'API Gateway', 'Monitoring', 'Security'],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/portfolio/enterprise-api',
    icon: Server,
    color: 'text-[#22C55E]',
    featured: false
  }
];

const categories = ['All', 'Website Development', 'App Development', 'Penetration Testing'];

export function PortfolioGrid() {
  return (
    <section className="section bg-[#101826]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-[#66E3FF] hover:text-[#66E3FF] transition-colors duration-200 first:bg-[#66E3FF] first:text-[#0B1220] first:border-[#66E3FF]"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="card group hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Icon className={`h-6 w-6 ${project.color}`} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`badge ${project.color} bg-opacity-10`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-[#22C55E] mb-1">Result</div>
                    <p className="text-sm text-white font-medium">{project.outcome}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Link */}
                  <Button asChild variant="ghost" className="w-full group-hover:text-[#66E3FF]">
                    <Link href={project.link}>
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            All <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="card group hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 to-transparent"></div>
                    <div className="absolute top-2 right-2">
                      <Icon className={`h-5 w-5 ${project.color}`} />
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="mb-3">
                    <span className={`badge text-xs ${project.color} bg-opacity-10 mb-2`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-gradient transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Outcome */}
                  <p className="text-sm text-[#22C55E] font-medium mb-4">{project.outcome}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <Button asChild variant="ghost" size="sm" className="w-full group-hover:text-[#66E3FF]">
                    <Link href={project.link}>
                      View Details
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}