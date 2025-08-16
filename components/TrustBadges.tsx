import { Shield, Award, Target, Users, Code, Lock, Zap } from 'lucide-react';

const badges = [
  {
    icon: Code,
    text: 'React Expert',
    color: 'text-[#66E3FF]'
  },
  {
    icon: Zap,
    text: 'Next.js Specialist',
    color: 'text-[#22C55E]'
  },
  {
    icon: Users,
    text: 'React Native',
    color: 'text-[#A78BFA]'
  },
  {
    icon: Target,
    text: 'Node.js Pro',
    color: 'text-[#66E3FF]'
  },
  {
    icon: Shield,
    text: 'Security First',
    color: 'text-[#22C55E]'
  },
  {
    icon: Award,
    text: 'Docker Certified',
    color: 'text-[#A78BFA]'
  },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      <div className="text-gray-400 text-sm font-medium">Technologies I specialize in:</div>
      
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-2 px-3 py-2 bg-[#101826] border border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-200"
          >
            <Icon className={`h-4 w-4 ${badge.color}`} />
            <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}