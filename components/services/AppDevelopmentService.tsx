import { Server, Database, Container, Activity, Shield, GitBranch } from 'lucide-react';

const technologies = [
  { name: 'APIs', desc: 'REST/GraphQL', icon: Server },
  { name: 'Backend', desc: 'Node.js/Fastify/NestJS', icon: Database },
  { name: 'ORM', desc: 'Prisma/Drizzle', icon: Database },
  { name: 'DevOps', desc: 'Docker, GitHub Actions', icon: Container },
  { name: 'Observability', desc: 'Logs, Error Tracking', icon: Activity },
  { name: 'Security', desc: 'Auth, Rate Limiting', icon: Shield }
];

const features = [
  'Secure authentication & authorization',
  'API rate limiting & validation', 
  'Structured logging & error tracking',
  'Automated CI/CD pipelines',
  'Container deployment ready',
  'Database migrations & seeding',
  'Preview environments',
  'Health checks & monitoring',
  'Infrastructure as Code (optional)'
];

export function AppDevelopmentService() {
  return (
    <section id="app-development" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Technologies Grid */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <Server className="inline h-10 w-10 text-[#22C55E] mr-4" />
              App Development
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secure APIs & mobile-ready backends. CI/CD, containers, observability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="p-4 bg-[#101826] rounded-lg border border-gray-700 hover:border-[#22C55E] transition-colors duration-200">
                    <Icon className="h-8 w-8 text-[#22C55E] mb-3" />
                    <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Architecture Diagram */}
            <div className="bg-[#0F172A] border border-gray-700 rounded-lg p-4">
              <div className="text-sm font-mono text-gray-300">
                <div className="text-[#66E3FF]">┌─ Frontend (React/Next.js)</div>
                <div className="text-gray-400">│</div>
                <div className="text-[#22C55E]">├─ API Gateway (Auth + Rate Limiting)</div>
                <div className="text-gray-400">│</div>
                <div className="text-[#A78BFA]">├─ Backend Services (Node.js)</div>
                <div className="text-gray-400">│</div>
                <div className="text-[#66E3FF]">└─ Database (PostgreSQL + Redis)</div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Development Process</h3>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start p-3 bg-[#101826] rounded-lg border border-gray-700">
                  <GitBranch className="h-5 w-5 text-[#22C55E] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* API Example */}
            <div className="bg-[#0F172A] border border-gray-700 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-sm text-gray-300">
                API Endpoint Example
              </div>
              <div className="p-4 font-mono text-sm">
                <div>
                  <span className="text-[#22C55E]">POST</span>{' '}
                  <span className="text-[#66E3FF]">/api/v1/users</span>
                </div>
                <div className="text-gray-400 mt-2">
                  ├─ Rate Limited: 100/hour<br/>
                  ├─ Auth Required: JWT<br/>
                  ├─ Validation: Zod Schema<br/>
                  └─ Response: 201 + User Object
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}