import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Solutions',
    content: 'ElliotSop built our entire web platform from scratch. The React app is lightning-fast and the backend handles our growing user base perfectly. Delivered on time and exceeded expectations.',
    rating: 5,
    company: 'TechFlow Solutions'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager, MobileFirst',
    content: 'Our React Native app has been a huge success thanks to ElliotSop. The cross-platform approach saved us months of development time and the app performs beautifully on both iOS and Android.',
    rating: 5,
    company: 'MobileFirst'
  },
  {
    name: 'Jennifer Park',
    role: 'CTO, DataFlow Inc',
    content: 'The API architecture ElliotSop designed for us scales effortlessly. We went from handling thousands to millions of requests per day without any performance issues. Truly impressive work.',
    rating: 5,
    company: 'DataFlow Inc'
  }
];

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what founders, CTOs, and product managers say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card relative group hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#66E3FF] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#22C55E] fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-[#66E3FF] font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#22C55E] mb-2">5.0/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#66E3FF] mb-2">100%</div>
              <div className="text-gray-400">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#A78BFA] mb-2">50+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}