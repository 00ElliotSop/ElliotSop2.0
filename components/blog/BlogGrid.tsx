import Link from 'next/link';
import { Calendar, ArrowRight, Shield, Code, Users, Target, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'From Threat Model to Code: Baking Security into Next.js',
    excerpt: 'Learn how to implement security-first development practices in modern React applications, from authentication to data protection.',
    category: 'DevSecOps',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'security-first-nextjs-development',
    icon: Code,
    color: 'text-[#66E3FF]',
    featured: true
  },
  {
    title: 'Pentest Reporting That Engineers Actually Use',
    excerpt: 'Move beyond generic vulnerability reports. Create actionable security documentation that development teams love.',
    category: 'Red Team',
    date: '2024-01-10', 
    readTime: '6 min read',
    slug: 'actionable-pentest-reports',
    icon: Shield,
    color: 'text-[#A78BFA]',
    featured: true
  },
  {
    title: 'Modern API Hardening: Rate Limits, AuthZ, and Observability',
    excerpt: 'Comprehensive guide to securing REST and GraphQL APIs against common attacks with practical implementation examples.',
    category: 'Web Security',
    date: '2024-01-05',
    readTime: '12 min read', 
    slug: 'api-security-hardening-guide',
    icon: Users,
    color: 'text-[#22C55E]',
    featured: true
  },
  {
    title: 'OWASP Top 10 2023: What Changed and Why It Matters',
    excerpt: 'Deep dive into the updated OWASP Top 10 vulnerabilities and how to protect your applications against each threat.',
    category: 'Web Security',
    date: '2024-01-01',
    readTime: '10 min read',
    slug: 'owasp-top-10-2023-analysis',
    icon: Target,
    color: 'text-[#A78BFA]',
    featured: false
  },
  {
    title: 'Container Security: Docker Hardening Best Practices',
    excerpt: 'Essential security configurations for Docker containers in production environments, from image scanning to runtime protection.',
    category: 'DevSecOps',
    date: '2023-12-28',
    readTime: '7 min read',
    slug: 'docker-security-hardening',
    icon: Lock,
    color: 'text-[#66E3FF]',
    featured: false
  },
  {
    title: 'Building Secure CI/CD Pipelines with GitHub Actions',
    excerpt: 'Step-by-step guide to implementing security controls in your deployment pipeline without slowing down development.',
    category: 'DevSecOps',
    date: '2023-12-20',
    readTime: '9 min read',
    slug: 'secure-cicd-github-actions',
    icon: Zap,
    color: 'text-[#22C55E]',
    featured: false
  }
];

const categories = ['All', 'DevSecOps', 'Web Security', 'Red Team', 'Tutorials'];

export function BlogGrid() {
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

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured <span className="text-gradient">Posts</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => {
              const Icon = post.icon;
              const postDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <article
                  key={index}
                  className="card group hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`badge ${post.color} bg-opacity-10`}>
                      {post.category}
                    </span>
                    <Icon className={`h-6 w-6 ${post.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {postDate}
                    </div>
                    <div>{post.readTime}</div>
                  </div>

                  {/* Read More */}
                  <Button asChild variant="ghost" className="w-full group-hover:text-[#66E3FF]">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            All <span className="text-gradient">Posts</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const Icon = post.icon;
              const postDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <article
                  key={index}
                  className="card group hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`badge text-sm ${post.color} bg-opacity-10`}>
                      {post.category}
                    </span>
                    <Icon className={`h-5 w-5 ${post.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {postDate}
                    </div>
                    <div>{post.readTime}</div>
                  </div>

                  {/* Read More */}
                  <Button asChild variant="ghost" size="sm" className="w-full group-hover:text-[#66E3FF]">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}