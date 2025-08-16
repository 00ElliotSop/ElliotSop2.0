import { Shield, Award, Target, Users, Code, Lock, Zap } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    text: 'OSCP',
    color: 'text-[var(--primary)]'
  },
  {
    icon: Code,
    text: 'Front End Developer',
    color: 'text-[var(--success)]'
  },
  {
    icon: Zap,
    text: 'React',
    color: 'text-[var(--secondary)]'
  },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      <div className="text-[var(--text-secondary)] text-sm font-medium">Technology Certifications:</div>
      
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-2 px-3 py-2 bg-white border border-[var(--border-color)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200"
          >
            <Icon className={`h-4 w-4 ${badge.color}`} />
            <span className="text-[var(--text-primary)] text-sm font-medium whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}