import Link from 'next/link';
import { Calendar, ArrowRight, Shield, Code, Users, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Building Scalable React Applications: Best Practices for 2024',
    excerpt: 'Learn the latest patterns and techniques for building maintainable, performant React applications that scale with your business.',
    category: 'Web Development',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'scalable-react-applications-2024',
    icon: Code,
    color: 'text-[#66E3FF]'
  },
  {
    title: 'React Native vs Native Development: When to Choose What',
    excerpt: 'A comprehensive guide to choosing between React Native and native development for your mobile app project.',
    category: 'Mobile Development',
    date: '2024-01-10', 
    readTime: '6 min read',
    slug: 'react-native-vs-native-development',
    icon: Users,
    color: 'text-[#A78BFA]'
  },
  {
    title: 'Building High-Performance APIs with Node.js and GraphQL',
    excerpt: 'Learn how to design and implement scalable APIs that can handle millions of requests with optimal performance.',
    category: 'Backend Development',
    date: '2024-01-05',
    readTime: '12 min read', 
    slug: 'high-performance-apis-nodejs-graphql',
    icon: Server,
    color: 'text-[#22C55E]'
  }
];

export function BlogTeasers() {
  return (
    <section className="section bg-[#101826]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Development <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Practical development tutorials, best practices, and insights from building modern web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <span className={`badge ${post.color} bg-opacity-10`}>
                    {post.category}
                  </span>
                  <Icon className={`h-5 w-5 ${post.color}`} />
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

        <div className="text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}