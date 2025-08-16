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
  title: 'ElliotSop - Full-Stack Developer & Penetration Tester',
  description: 'Full-stack developer specializing in React, Next.js, and Node.js. I build modern web and mobile applications with security testing expertise.',
  keywords: 'full-stack developer, React developer, Next.js, Node.js, penetration testing, web development, mobile apps, OSCP',
  authors: [{ name: 'ElliotSop' }],
  creator: 'ElliotSop',
  metadataBase: new URL('https://elliotsop.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elliotsop.com',
    title: 'ElliotSop - Full-Stack Developer & Penetration Tester',
    description: 'Build fast, secure web and mobile applications with modern technologies.',
    siteName: 'ElliotSop',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'ElliotSop - Full-Stack Developer'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElliotSop - Full-Stack Developer & Penetration Tester',
    description: 'Build fast, secure web and mobile applications with modern technologies.',
    creator: '@elliotsop',
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
              "name": "ElliotSop",
              "alternateName": "Elliot",
              "description": "Full-stack developer specializing in React, Next.js, Node.js, and penetration testing",
              "url": "https://elliotsop.com",
              "sameAs": [
                "https://linkedin.com/in/elliotsop",
                "https://github.com/elliotsop",
                "https://twitter.com/elliotsop"
              ],
              "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "Penetration Testing",
                "Full-Stack Development",
                "React",
                "Next.js",
                "Node.js",
                "API Development",
                "OSCP"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "OSCP Certification",
                  "credentialCategory": "Professional Certification"
                }
              ],
              "offers": [
                {
                  "@type": "Service",
                  "serviceType": "Website Development",
                  "description": "Modern, responsive web applications built with React, Next.js, and modern web technologies"
                },
                {
                  "@type": "Service", 
                  "serviceType": "Mobile App Development",
                  "description": "Cross-platform mobile applications built with React Native for iOS and Android"
                },
                {
                  "@type": "Service",
                  "serviceType": "Penetration Testing",
                  "description": "Comprehensive security testing to identify vulnerabilities in web applications and networks"
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
                "email": "hello@elliotsop.com"
              }
            })
          }}
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased">
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