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
  title: 'ElliotSop - Full-Stack Web & Mobile App Developer',
  description: 'Expert full-stack developer specializing in secure web applications and mobile apps. I build fast, scalable solutions with security built-in from day one.',
  keywords: 'web development, mobile app development, full-stack developer, React, Next.js, Node.js, secure applications, API development',
  authors: [{ name: 'ElliotSop' }],
  creator: 'ElliotSop',
  metadataBase: new URL('https://elliotsop.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elliotsop.com',
    title: 'ElliotSop - Full-Stack Web & Mobile App Developer',
    description: 'Build fast, secure web and mobile applications that scale.',
    siteName: 'ElliotSop',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'ElliotSop - Cybersecurity Expert'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElliotSop - Full-Stack Web & Mobile App Developer',
    description: 'Build fast, secure web and mobile applications that scale.',
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
              "alternateName": "Elliot Sop",
              "description": "Expert full-stack developer specializing in secure web applications and mobile app development",
              "url": "https://elliotsop.com",
              "sameAs": [
                "https://linkedin.com/in/elliotsop",
                "https://github.com/elliotsop",
                "https://twitter.com/elliotsop"
              ],
              "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "Full-Stack Development",
                "React",
                "Next.js",
                "Node.js",
                "API Development",
                "Secure Applications"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Full-Stack Development Certification",
                  "credentialCategory": "Professional Certification"
                }
              ],
              "offers": [
                {
                  "@type": "Service",
                  "serviceType": "Website Development",
                  "description": "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies"
                },
                {
                  "@type": "Service", 
                  "serviceType": "Mobile App Development",
                  "description": "Cross-platform mobile applications using React Native and native technologies"
                },
                {
                  "@type": "Service",
                  "serviceType": "API Development",
                  "description": "Scalable backend APIs and microservices with robust security and performance"
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
      <body className="bg-[#0B1220] text-[#E6EDF7] font-sans antialiased">
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