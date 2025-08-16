import { Globe, Zap, Search, Shield, CreditCard, Users } from 'lucide-react';

const stack = [
  'Next.js/React',
  'Tailwind CSS',
  'Vercel/CloudPanel',
  'PostgreSQL/PlanetScale',
  'Stripe Integration',
  'Auth.js'
];

const deliverables = [
  { icon: Globe, text: 'Responsive pages & components' },
  { icon: Zap, text: 'Performance budget & optimization' },
  { icon: Search, text: 'Basic on-page SEO setup' },
  { icon: Shield, text: 'Security best practices' },
  { icon: CreditCard, text: 'Analytics integration' },
  { icon: Users, text: 'Component library' }
];

const addOns = [
  'Internationalization (i18n)',
  'Accessibility audit (WCAG AA)',
  'Legacy site migration',
  'E-commerce functionality',
  'Headless CMS integration',
  'Advanced SEO optimization'
];

export function WebDevelopmentService() {
  return (
    <section id="web-development" className="section bg-[#101826]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <Globe className="inline h-10 w-10 text-[#66E3FF] mr-4" />
              Website Development
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fast, SEO-optimized, maintainable frontends. SSR/ISR, forms, payments, auth.
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#66E3FF]">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {stack.map((tech, index) => (
                  <div key={index} className="flex items-center p-3 bg-[#0B1220] rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-[#66E3FF] rounded-full mr-3"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#22C55E]">Available Add-ons</h3>
              <div className="space-y-2">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-3"></div>
                    {addon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">What You Get</h3>
            <div className="space-y-4">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-[#0B1220] rounded-lg border border-gray-700 hover:border-[#66E3FF] transition-colors duration-200">
                    <Icon className="h-6 w-6 text-[#66E3FF] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Code Example */}
            <div className="mt-8">
              <div className="bg-[#0F172A] border border-gray-700 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-sm text-gray-300">
                  next.config.js
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-[#A78BFA]">module.exports</div>
                  <div className="text-gray-300"> = {`{`}</div>
                  <div className="ml-4 text-gray-300">
                    <span className="text-[#66E3FF]">experimental</span>: {`{`}
                  </div>
                  <div className="ml-8 text-gray-300">
                    <span className="text-[#22C55E]">ppr</span>: <span className="text-[#A78BFA]">true</span>,
                  </div>
                  <div className="ml-4 text-gray-300">{`},`}</div>
                  <div className="text-gray-300">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}