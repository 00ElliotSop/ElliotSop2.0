import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogCTA } from '@/components/blog/BlogCTA';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </div>
  );
}