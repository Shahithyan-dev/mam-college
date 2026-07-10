"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, ArrowUp, ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-white border-t-4 border-brand-secondary">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-white tracking-wider uppercase mb-1">M.A.M. School Of Engineering</h2>
              <p className="text-brand-secondary text-sm font-bold tracking-widest">AUTONOMOUS</p>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-secondary" />
                <span>Trichy Chennai Trunk Road,<br/>Siruganur, Tiruchirappalli, Tamil Nadu 621105</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0 text-brand-secondary" />
                <a href="tel:+919842887134" className="hover:text-white transition-colors">+91 9842887134</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="shrink-0 text-brand-secondary" />
                <a href="mailto:principal@mamse.in" className="hover:text-white transition-colors">principal@mamse.in</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { label: 'Staff ERP Login', href: '#' },
                { label: 'Student ERP Login', href: '#' },
                { label: 'Online Fees Payment', href: '#' },
                { label: 'Prospectus 2026-27', href: '#' },
                { label: 'College Calendar', href: '#' },
                { label: 'Library Portal', href: '#' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
                    <ChevronRight size={14} className="text-brand-secondary" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Academics</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'U.G Programmes',
                'P.G Programmes',
                'Research Programmes',
                'NAAC Accredited',
                'UGC Recognised',
                'Autonomous Institution'
              ].map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0"></span> {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect With Us & Accreditations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Connect With Us</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all transform hover:-translate-y-1">
                <span className="text-sm font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <span className="text-sm font-bold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
                <span className="text-sm font-bold">IN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                <span className="text-sm font-bold">X</span>
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-semibold text-white">Affiliated with Anna University</p>
              <p>Approved by UGC & AICTE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-brand-primary border-t border-white/10 py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} M.A.M. School of Engineering (Autonomous). All Rights Reserved.</p>
          <p>
            Developed & Managed by <a href="#" className="text-white hover:text-brand-secondary transition-colors">MAMSE Web Developers</a>
          </p>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 -top-5 w-10 h-10 bg-brand-secondary rounded flex items-center justify-center text-brand-primary hover:bg-brand-secondary/90 transition-colors shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
