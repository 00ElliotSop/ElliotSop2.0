import { Clock, Zap, Shield, FileText } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: '95-100',
    label: 'Lighthouse Score',
    description: 'Performance-optimized applications',
    color: 'text-[var(--primary)]'
  },
  {
    icon: Clock,
    value: '<2s',
    label: 'Load Time',
    description: 'Lightning-fast user experiences',
    color: 'text-[var(--success)]'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Code Quality',
    description: 'Clean, maintainable code',
    color: 'text-[var(--secondary)]'
  },
  {
    icon: FileText,
    value: '2-4 weeks',
    label: 'Delivery Time',
    description: 'Fast development cycles',
    color: 'text-[var(--primary)]'
  },
];

export function StatsSection() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Performance <span className="text-gradient">Metrics</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Every application I build meets high standards for performance, security, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-white border border-[var(--border-color)] mb-4 group-hover:border-opacity-100 transition-colors duration-300`}>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                
                <div className={`text-4xl font-bold font-mono mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                
                <div className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {stat.label}
                </div>
                
                <p className="text-[var(--text-secondary)] text-sm max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-[var(--border-color)]">
              <div className="text-2xl font-bold text-[var(--success)] mb-2">50+</div>
              <div className="text-[var(--text-secondary)]">Apps Delivered</div>
            </div>
            <div className="p-6 bg-white rounded-lg border border-[var(--border-color)]">
              <div className="text-2xl font-bold text-[var(--primary)] mb-2">100%</div>
              <div className="text-[var(--text-secondary)]">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-white rounded-lg border border-[var(--border-color)]">
              <div className="text-2xl font-bold text-[var(--secondary)] mb-2">24/7</div>
              <div className="text-[var(--text-secondary)]">Deployment Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}