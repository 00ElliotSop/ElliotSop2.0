import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Aqua Mint Security - Secure Web & Mobile App Development',
  description: 'Expert security-focused development team specializing in secure web applications and mobile apps. We build fast, scalable solutions with enterprise-grade security built-in from day one.',
  keywords: 'secure web development, mobile app security, penetration testing, security consulting, React, Next.js, Node.js, secure applications, cybersecurity',
  authors: [{ name: 'Aqua Mint Security' }],
  creator: 'Aqua Mint Security',
  metadataBase: new URL('https://aquamintsecurity.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aquamintsecurity.com',
    title: 'Aqua Mint Security - Secure Web & Mobile App Development',
    description: 'Build fast, secure web and mobile applications with enterprise-grade security.',
    siteName: 'Aqua Mint Security',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Aqua Mint Security - Secure Development Experts'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aqua Mint Security - Secure Web & Mobile App Development',
    description: 'Build fast, secure web and mobile applications with enterprise-grade security.',
    creator: '@aquamintsecurity',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "Organization"],
              "name": "Aqua Mint Security",
              "alternateName": "Aqua Mint",
              "description": "Expert security-focused development team specializing in secure web applications and mobile app development",
              "url": "https://aquamintsecurity.com",
              "sameAs": [
                "https://linkedin.com/company/aquamintsecurity",
                "https://github.com/aquamintsecurity",
                "https://twitter.com/aquamintsecurity"
              ],
              "knowsAbout": [
                "Secure Web Development",
                "Secure Mobile App Development",
                "Penetration Testing",
                "Security Consulting",
                "Cybersecurity",
                "React",
                "Next.js",
                "Node.js",
                "Secure API Development",
                "Application Security"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Cybersecurity Certification",
                  "credentialCategory": "Professional Certification"
                }
              ],
              "offers": [
                {
                  "@type": "Service",
                  "serviceType": "Secure Website Development",
                  "description": "Modern, secure web applications built with React, Next.js, and enterprise-grade security practices"
                },
                {
                  "@type": "Service", 
                  "serviceType": "Secure Mobile App Development",
                  "description": "Cross-platform mobile applications with built-in security controls and data protection"
                },
                {
                  "@type": "Service",
                  "serviceType": "Penetration Testing",
                  "description": "Comprehensive security testing and vulnerability assessments for web and mobile applications"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Remote",
                "addressCountry": "Worldwide"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Business",
                "email": "hello@aquamintsecurity.com"
              }
            })
          }}
        />
      </head>
      <body className="bg-[#F0FFFB] text-[#102A43] font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}