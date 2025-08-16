'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, MapPin, Clock, Shield, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Contact</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to build secure, scalable solutions? Let's discuss your project requirements and security needs.
          </p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="section bg-[#101826]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="consultation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="consultation">Free Consultation</TabsTrigger>
              <TabsTrigger value="pentest">Pentest Scoping</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Forms */}
              <div className="lg:col-span-2">
                <TabsContent value="consultation">
                  <Card className="bg-[#101826] border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <MessageCircle className="mr-3 h-6 w-6 text-[#66E3FF]" />
                        Book a Free Consultation
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Tell me about your project and I'll provide expert guidance on security and development approach.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Name *
                            </label>
                            <Input 
                              required 
                              placeholder="Your full name"
                              className="bg-[#0B1220] border-gray-600 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <Input 
                              type="email" 
                              required 
                              placeholder="your@email.com"
                              className="bg-[#0B1220] border-gray-600 text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Company
                            </label>
                            <Input 
                              placeholder="Your company name"
                              className="bg-[#0B1220] border-gray-600 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Service Interest *
                            </label>
                            <Select required>
                              <SelectTrigger className="bg-[#0B1220] border-gray-600 text-white">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web-development">Website Development</SelectItem>
                                <SelectItem value="app-development">App Development</SelectItem>
                                <SelectItem value="penetration-testing">Penetration Testing</SelectItem>
                                <SelectItem value="multiple">Multiple Services</SelectItem>
                                <SelectItem value="consultation">General Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Budget Range
                            </label>
                            <Select>
                              <SelectTrigger className="bg-[#0B1220] border-gray-600 text-white">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-5k">Under $5,000</SelectItem>
                                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                                <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                                <SelectItem value="50k-plus">$50,000+</SelectItem>
                                <SelectItem value="discuss">Prefer to discuss</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Timeline
                            </label>
                            <Select>
                              <SelectTrigger className="bg-[#0B1220] border-gray-600 text-white">
                                <SelectValue placeholder="Project timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="asap">ASAP</SelectItem>
                                <SelectItem value="1-month">Within 1 month</SelectItem>
                                <SelectItem value="3-months">Within 3 months</SelectItem>
                                <SelectItem value="6-months">Within 6 months</SelectItem>
                                <SelectItem value="planning">Just planning</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Details *
                          </label>
                          <Textarea 
                            required
                            placeholder="Tell me about your project, current challenges, and what you're looking to achieve..."
                            className="bg-[#0B1220] border-gray-600 text-white min-h-[120px]"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn-primary w-full"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pentest">
                  <Card className="bg-[#101826] border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Shield className="mr-3 h-6 w-6 text-[#A78BFA]" />
                        Penetration Testing Scoping
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Provide details about your testing requirements for accurate scoping and pricing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Name *
                            </label>
                            <Input 
                              required 
                              placeholder="Your full name"
                              className="bg-[#0B1220] border-gray-600 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <Input 
                              type="email" 
                              required 
                              placeholder="your@email.com"
                              className="bg-[#0B1220] border-gray-600 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company & Role *
                          </label>
                          <Input 
                            required 
                            placeholder="Company name and your role"
                            className="bg-[#0B1220] border-gray-600 text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Target Types * (Select all that apply)
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                              'Web Application',
                              'Mobile App',
                              'API Endpoints',
                              'Network Infrastructure',
                              'Cloud Configuration',
                              'Social Engineering'
                            ].map((type) => (
                              <label key={type} className="flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  className="rounded border-gray-600 bg-[#0B1220] text-[#66E3FF]"
                                />
                                <span className="text-sm text-gray-300">{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Target URLs/IP Ranges
                          </label>
                          <Textarea 
                            placeholder="List the URLs, IP ranges, or applications to be tested..."
                            className="bg-[#0B1220] border-gray-600 text-white"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Environment *
                            </label>
                            <Select required>
                              <SelectTrigger className="bg-[#0B1220] border-gray-600 text-white">
                                <SelectValue placeholder="Select environment" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="production">Production</SelectItem>
                                <SelectItem value="staging">Staging/Pre-prod</SelectItem>
                                <SelectItem value="development">Development</SelectItem>
                                <SelectItem value="dedicated">Dedicated Test Environment</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Preferred Testing Window
                            </label>
                            <Select>
                              <SelectTrigger className="bg-[#0B1220] border-gray-600 text-white">
                                <SelectValue placeholder="Select timeframe" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="business-hours">Business Hours</SelectItem>
                                <SelectItem value="after-hours">After Hours</SelectItem>
                                <SelectItem value="weekends">Weekends</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Authorization Contact *
                          </label>
                          <Input 
                            required 
                            placeholder="Name and email of person who can authorize testing"
                            className="bg-[#0B1220] border-gray-600 text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Additional Requirements
                          </label>
                          <Textarea 
                            placeholder="Compliance requirements, specific vulnerabilities to focus on, exclusions, etc..."
                            className="bg-[#0B1220] border-gray-600 text-white"
                          />
                        </div>

                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <p className="text-sm text-red-300">
                            <strong>Legal Notice:</strong> All penetration testing requires written authorization 
                            and signed Rules of Engagement before any testing begins. Only test assets you own 
                            or have explicit permission to test.
                          </p>
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn-primary w-full"
                        >
                          {isSubmitting ? 'Sending...' : 'Request Pentest Quote'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-[#101826] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#66E3FF]" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-400 text-sm">hello@elliotsop.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[#22C55E]" />
                      <div>
                        <p className="text-white font-medium">Response Time</p>
                        <p className="text-gray-400 text-sm">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#A78BFA]" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-400 text-sm">Remote Worldwide</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#101826] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#66E3FF] rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Initial Response</p>
                        <p className="text-gray-400 text-xs">Acknowledgment within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#22C55E] rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Discovery Call</p>
                        <p className="text-gray-400 text-xs">30-min consultation to discuss needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#A78BFA] rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium text-sm">Proposal</p>
                        <p className="text-gray-400 text-xs">Detailed scope and fixed pricing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#66E3FF]/10 to-[#A78BFA]/10 border-[#66E3FF]/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-[#66E3FF] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Security First</h3>
                    <p className="text-gray-300 text-sm">
                      All communications are encrypted and confidential. 
                      NDAs available upon request.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}