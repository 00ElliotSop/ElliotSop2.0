# Aqua Mint Security - Secure Web & Mobile App Development

Expert security-focused development team specializing in secure web applications and mobile apps. We build fast, scalable solutions with enterprise-grade security built-in from day one.

## Features

- **Secure Web Applications**: Modern React/Next.js applications with security-first design
- **Secure Mobile Applications**: Cross-platform React Native apps with built-in security controls
- **Secure Backend & APIs**: Hardened backend services with comprehensive security monitoring
- **Penetration Testing**: Comprehensive security assessments and vulnerability testing
- **Security Consulting**: Expert guidance on secure development practices

## Tech Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS (Security-hardened)
- **Mobile**: React Native, Native iOS/Android (Secure by design)
- **Backend**: Node.js, Express, Fastify, NestJS (Zero-trust architecture)
- **Database**: PostgreSQL, MongoDB, Redis
- **Cloud**: AWS, Vercel, Docker
- **Security**: OAuth2, JWT, Rate Limiting, OWASP Best Practices, Penetration Testing, Threat Modeling

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

### Secure Web Development
- Security-first web applications
- Real-time features with secure communications
- E-commerce with PCI DSS compliance
- Performance optimization with security controls

### Secure Mobile Development
- Cross-platform React Native applications with security controls
- Native iOS and Android development with data protection
- Secure app store deployment and code obfuscation
- Encrypted push notifications and secure offline storage

### Secure Backend Development
- Hardened RESTful and GraphQL APIs
- Zero-trust microservices architecture
- Secure database design with encryption
- Cloud security and DevSecOps

### Penetration Testing
- Web application security testing
- Mobile application security assessment
- API security testing
- Network penetration testing
- Social engineering assessments
## Contact

- **Email**: hello@aquamintsecurity.com
- **Website**: [aquamintsecurity.com](https://aquamintsecurity.com)
- **Response Time**: Within 24 hours

## Why Choose Aqua Mint Security?

- ✅ **Security First**: All applications built with security best practices
- ✅ **Penetration Testing**: Comprehensive security validation
- ✅ **Performance Focused**: 95+ Lighthouse scores, <2s load times
- ✅ **Modern Stack**: Latest technologies and frameworks
- ✅ **Security Expertise**: End-to-end security and development capabilities
- ✅ **Fast Delivery**: 2-4 week typical project timelines
- ✅ **100% Satisfaction**: Proven track record with 50+ happy clients

Ready to build your next secure application? [Get in touch](https://aquamintsecurity.com/contact) for a free security consultation.