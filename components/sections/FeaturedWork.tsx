import Link from 'next/link';
import { ExternalLink, ArrowRight, TrendingUp, Shield, Zap, Globe, Users, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Application',
    problem: 'Startup needed a modern e-commerce platform with real-time inventory',
    solution: 'Built with Next.js, Stripe integration, real-time updates, and admin dashboard',
    outcome: '+150% sales increase, 99.9% uptime, sub-2s load times',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Real-time Updates'],
    link: '/portfolio/ecommerce-platform',
    icon: Globe,
    color: 'text-[#66E3FF]'
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Application',
    problem: 'Health startup needed cross-platform mobile app with offline capabilities',
    solution: 'React Native app with offline sync, health integrations, and social features',
    outcome: '50K+ downloads, 4.8 App Store rating, featured by Apple',
    technologies: ['React Native', 'SQLite', 'Health APIs', 'Push Notifications'],
    link: '/portfolio/fitness-app',
    icon: Users,
    color: 'text-[#22C55E]'
  },
  {
    title: 'Real-time Analytics API',
    category: 'Backend Development',
    problem: 'Enterprise client needed scalable analytics API for millions of events',
    solution: 'Microservices architecture with Redis, GraphQL, and real-time processing',
    outcome: '10M+ events/day, <100ms response time, 99.99% uptime',
    technologies: ['Node.js', 'GraphQL', 'Redis', 'Microservices'],
    link: '/portfolio/analytics-api', 
    icon: Server,
    color: 'text-[#A78BFA]'
  },
];

export function FeaturedWork() {
  return (
    <section className="section bg-[#101826]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From startups to enterprise clients, I've delivered applications that drive real business results. 
            Here are some of my recent success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="card group hover:scale-[1.02] transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`badge ${project.color} bg-opacity-10`}>
                    {project.category}
                  </span>
                  <Icon className={`h-6 w-6 ${project.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Problem → Solution → Outcome */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-red-400 mb-1">Problem</div>
                    <p className="text-sm text-gray-400">{project.problem}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-[#66E3FF] mb-1">Solution</div>
                    <p className="text-sm text-gray-400">{project.solution}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-[#22C55E] mb-1">Outcome</div>
                    <p className="text-sm text-white font-medium">{project.outcome}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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

        <div className="text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}