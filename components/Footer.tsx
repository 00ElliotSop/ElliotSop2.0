import Link from 'next/link';
import { Shield, Droplets, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Applications', href: '/services#web-apps' },
    { name: 'Mobile Applications', href: '/services#mobile-apps' },
    { name: 'Backend & APIs', href: '/services#backend-apis' },
  ],
  resources: [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/elliotsop', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/elliotsop', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/elliotsop', icon: Twitter },
  { name: 'Email', href: 'mailto:hello@elliotsop.com', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#D1FAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-[var(--primary)]" />
              </div>
              <span className="text-gradient">ElliotSop</span>
            </Link>
            <p className="text-[var(--text-secondary)] mb-4 max-w-md">
              Full-stack developer specializing in modern web and mobile applications. Building fast, secure, and scalable solutions that users love.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--border-color)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
              © {currentYear} ElliotSop. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-[var(--text-secondary)] mb-2 md:mb-0">
                <span className="text-[var(--primary)]">⚡</span> Building the future, one app at a time.
              </div>
              <div className="flex space-x-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-4 text-sm text-[var(--text-secondary)]">
              <span className="badge">Full-Stack Developer</span>
              <span className="badge">React Specialist</span>
              <span className="badge">OSCP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}