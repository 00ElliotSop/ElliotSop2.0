# ElliotSop - Full-Stack Web & Mobile App Developer

Expert full-stack developer specializing in secure web applications and mobile apps. I build fast, scalable solutions with security built-in from day one.

## Features

- **Web Applications**: Modern React/Next.js applications with real-time features
- **Mobile Applications**: Cross-platform React Native and native mobile apps
- **Backend & APIs**: Scalable backend services with robust security
- **Security First**: All applications built with enterprise-grade security practices

## Tech Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Mobile**: React Native, Native iOS/Android
- **Backend**: Node.js, Express, Fastify, NestJS
- **Database**: PostgreSQL, MongoDB, Redis
- **Cloud**: AWS, Vercel, Docker
- **Security**: OAuth2, JWT, Rate Limiting, OWASP Best Practices

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Vite Configuration

For projects using Vite, use this minimal configuration with preview.allowedHosts:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal Vite config with preview.allowedHosts
// Docs: https://vite.dev/config/preview-options
export default defineConfig({
 plugins: [react()],
 server: {
   host: true,
   cors: true,
 },
 preview: {
   host: true,
   cors: true,
   allowedHosts: ['example.com', 'example.com'],
 },
});
```

## Services

### Web Development
- Modern, responsive web applications
- Real-time features and progressive web apps
- E-commerce integration and payment processing
- Performance optimization and SEO

### Mobile Development
- Cross-platform React Native applications
- Native iOS and Android development
- App Store deployment and optimization
- Push notifications and offline capabilities

### Backend Development
- RESTful and GraphQL APIs
- Microservices architecture
- Database design and optimization
- Cloud deployment and DevOps

## Contact

- **Email**: hello@elliotsop.com
- **Website**: [elliotsop.com](https://elliotsop.com)
- **Response Time**: Within 24 hours

## Why Choose ElliotSop?

- ✅ **Security First**: All applications built with security best practices
- ✅ **Performance Focused**: 95+ Lighthouse scores, <2s load times
- ✅ **Modern Stack**: Latest technologies and frameworks
- ✅ **Full-Stack Expertise**: End-to-end development capabilities
- ✅ **Fast Delivery**: 2-4 week typical project timelines
- ✅ **100% Satisfaction**: Proven track record with 50+ happy clients

Ready to build your next amazing app? [Get in touch](https://elliotsop.com/contact) for a free consultation.