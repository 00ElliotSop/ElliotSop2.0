export function BlogHero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gradient">Blog</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Practical security advice, development tutorials, and industry insights from the intersection of cybersecurity and software development.
        </p>
      </div>
    </section>
  );
}