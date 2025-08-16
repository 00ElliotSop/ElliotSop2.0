export function PortfolioHero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gradient">Portfolio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Real problems, secure solutions, measurable results. See how I've helped clients build better, more secure digital products.
        </p>
      </div>
    </section>
  );
}