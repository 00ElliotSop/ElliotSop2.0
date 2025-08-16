import { Shield, Code, Target, Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About ElliotSop</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Full-stack developer and penetration tester passionate about building secure, modern applications that make a difference.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[var(--text-primary)]">
                Building the Future, One App at a Time
              </h2>
              
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I'm a full-stack developer with a unique combination of development expertise and cybersecurity knowledge. 
                  With an OSCP certification and years of experience in both building and securing applications, 
                  I bring a security-first mindset to every project.
                </p>
                
                <p>
                  My journey started with a passion for creating digital solutions that solve real problems. 
                  Over the years, I've specialized in React, Next.js, and Node.js, while also developing expertise 
                  in penetration testing and security assessments.
                </p>
                
                <p>
                  Whether you need a lightning-fast web application, a cross-platform mobile app, or a comprehensive 
                  security assessment, I combine technical excellence with security best practices to deliver 
                  solutions that are both powerful and protected.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center">
                <Code className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Full-Stack Development</h3>
                <p className="text-sm text-[var(--text-secondary)]">React, Next.js, Node.js, TypeScript</p>
              </div>
              
              <div className="card text-center">
                <Shield className="h-12 w-12 text-[var(--secondary)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Penetration Testing</h3>
                <p className="text-sm text-[var(--text-secondary)]">OSCP Certified, Web App Security</p>
              </div>
              
              <div className="card text-center">
                <Users className="h-12 w-12 text-[var(--success)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Mobile Development</h3>
                <p className="text-sm text-[var(--text-secondary)]">React Native, iOS, Android</p>
              </div>
              
              <div className="card text-center">
                <Zap className="h-12 w-12 text-[var(--info)] mx-auto mb-4" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Performance</h3>
                <p className="text-sm text-[var(--text-secondary)]">95+ Lighthouse, <2s Load Times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-gradient">Certifications & Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Shield className="h-16 w-16 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">OSCP</h3>
              <p className="text-[var(--text-secondary)]">Offensive Security Certified Professional</p>
            </div>
            
            <div className="card text-center">
              <Code className="h-16 w-16 text-[var(--success)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Front End Developer</h3>
              <p className="text-[var(--text-secondary)]">Modern web development expertise</p>
            </div>
            
            <div className="card text-center">
              <Target className="h-16 w-16 text-[var(--secondary)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">React</h3>
              <p className="text-[var(--text-secondary)]">Advanced React development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Values</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Security First</h3>
                <p className="text-[var(--text-secondary)]">
                  Every application I build is designed with security in mind from day one. 
                  I don't just build features—I build them securely.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[var(--success)] rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Performance Matters</h3>
                <p className="text-[var(--text-secondary)]">
                  Fast applications create better user experiences. I optimize for speed, 
                  efficiency, and scalability in every project.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">User-Centered Design</h3>
                <p className="text-[var(--text-secondary)]">
                  Technology should serve people, not the other way around. 
                  I focus on creating intuitive, accessible experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}