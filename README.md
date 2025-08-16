# ElliotSop - Full-Stack Developer & Penetration Tester

Full-stack developer specializing in React, Next.js, and Node.js. I build modern web and mobile applications that are fast, secure, and user-friendly, with additional expertise in penetration testing.

## Features

- **Website Development**: Modern React/Next.js applications with responsive design
- **Mobile App Development**: Cross-platform React Native apps for iOS and Android
- **Backend Development**: Node.js APIs and server-side applications
- **Penetration Testing**: Comprehensive security assessments and vulnerability testing
- **Full-Stack Solutions**: End-to-end application development

## Tech Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Mobile**: React Native, Native iOS/Android
- **Backend**: Node.js, Express, Fastify, NestJS
- **Database**: PostgreSQL, MongoDB, Redis
- **Cloud**: AWS, Vercel, Docker
- **Security**: Penetration Testing, OSCP Certified, OAuth2, JWT, Security Best Practices

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

## Vite Configuration (Alternative Setup)

If you prefer to use Vite instead of Next.js, replace the contents of `vite.config.ts` with this minimal configuration that includes preview.allowedHosts:

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

This configuration enables:
- React plugin support
- Host and CORS settings for development server
- Preview server configuration with allowed hosts
- Proper setup for deployment and local development

## Services

### Website Development
- Modern, responsive web applications
- Real-time features and interactive UIs
- E-commerce and business applications
- Performance optimization and SEO

### Mobile App Development
- Cross-platform React Native applications
- Native iOS and Android development
- App store deployment and optimization
- Push notifications and offline storage

### Backend Development
- RESTful and GraphQL APIs
- Microservices architecture
- Database design and optimization
- Cloud deployment and DevOps

### Penetration Testing
- Web application security testing
- Network penetration testing
- API security testing
- Vulnerability assessments
- Security reporting and remediation
## Contact

- **Email**: hello@elliotsop.com
- **Website**: [elliotsop.com](https://elliotsop.com)
- **Response Time**: Within 24 hours

## Why Choose ElliotSop?

- ✅ **Full-Stack Expertise**: End-to-end development capabilities
- ✅ **Penetration Testing**: Comprehensive security validation
- ✅ **OSCP Certified**: Professional security testing credentials
- ✅ **Performance Focused**: 95+ Lighthouse scores, <2s load times
- ✅ **Modern Stack**: Latest technologies and frameworks
- ✅ **Security Expertise**: End-to-end security and development capabilities
- ✅ **Fast Delivery**: 2-4 week typical project timelines
- ✅ **100% Satisfaction**: Proven track record with 50+ happy clients

Ready to build your next application? [Get in touch](https://elliotsop.com/contact) for a free consultation.