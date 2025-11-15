import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Zap, Target, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

export default function VyomGarudLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">VyomGarud</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#capabilities" className="hover:text-orange-500 transition-colors">Capabilities</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-zinc-800 border-t border-zinc-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-500 transition-colors">About</a>
              <a href="#capabilities" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-500 transition-colors">Capabilities</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center space-x-2 bg-zinc-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/20">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-zinc-300">Military-Grade UAV Systems</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Precision Engineering
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Advanced Autonomy
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            VyomGarud delivers cutting-edge drone systems with unmatched reliability for defense and critical operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
              Explore Capabilities
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-zinc-700 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Defending Tomorrow,
                <span className="text-orange-500"> Today</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Founded with a vision to redefine India’s UAV capabilities, VyomGarud builds autonomous aerial systems engineered for accuracy, endurance, and operational superiority. Our work spans tactical drones, ground control ecosystems, and secure telemetry frameworks built to support defence, border security, and emergency response missions.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                VyomGarud’s mission is simple: empower our armed forces and strategic partners with UAV technology they can trust, even in the most demanding mission environments.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                    <div className="text-zinc-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                    <div className="text-zinc-400 text-sm">Deployed Systems</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
                    <div className="text-zinc-400 text-sm">Mission Success</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                    <div className="text-zinc-400 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Comprehensive UAV solutions engineered for mission-critical operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Tactical Surveillance',
                description: 'Advanced reconnaissance drones with high-resolution imaging and real-time data transmission',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Combat Systems',
                description: 'Precision strike capabilities with autonomous targeting and guidance systems',
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: 'Border Security',
                description: 'Long-endurance patrol drones for perimeter monitoring and threat detection',
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: 'Intelligence Gathering',
                description: 'Stealth UAVs equipped with electronic warfare and signal intelligence capabilities',
                icon: <Target className="w-8 h-8" />
              }
            ].map((capability, idx) => (
              <div key={idx} className="group bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-orange-500 transition-all hover:transform hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all">
                  <div className="text-orange-500 group-hover:text-white transition-colors">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Military-Grade Security</h3>
              <p className="text-zinc-400">Encrypted communications and secure data transmission protocols ensure mission integrity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Autonomous Operations</h3>
              <p className="text-zinc-400">AI-powered flight systems with advanced obstacle avoidance and mission planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Engineering</h3>
              <p className="text-zinc-400">Millimeter-accurate targeting and positioning systems for critical operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Ready to discuss your defense requirements? Our team is available to provide consultation and custom solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-zinc-400">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-zinc-400">contact@vyomgarud.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-zinc-400">Defense Technology Park, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-zinc-800 border border-zinc-700 rounded-xl p-8">
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">VyomGarud</span>
            </div>
            <div className="text-zinc-400 text-sm">
              © 2025 VyomGarud. All rights reserved. | Military-Grade UAV Systems
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}