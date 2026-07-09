import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a202c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={32} className="text-brand-secondary" />
              <div className="text-2xl font-black tracking-tighter">
                MAMCE<span className="text-brand-primary">.</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              M.A.M College of Engineering is dedicated to providing quality education in the field of engineering and technology, nurturing the future innovators and leaders.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/mamce.trichy/" className="bg-white/10 hover:bg-brand-primary p-2 rounded-full transition-all hover:-translate-y-1 text-xs font-bold w-8 h-8 flex items-center justify-center">
                FB
              </a>
              <a href="https://www.linkedin.com/school/mamceofficial/" className="bg-white/10 hover:bg-brand-primary p-2 rounded-full transition-all hover:-translate-y-1 text-xs font-bold w-8 h-8 flex items-center justify-center">
                IN
              </a>
              <a href="https://www.instagram.com/mamce.trichy" className="bg-white/10 hover:bg-brand-primary p-2 rounded-full transition-all hover:-translate-y-1 text-xs font-bold w-8 h-8 flex items-center justify-center">
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-brand-primary inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> About MAMCE
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> Admissions
                </Link>
              </li>
              <li>
                <Link href="/placement" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> Placement Cell
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> Contact Us
                </Link>
              </li>
              <li>
                <a href="/career" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-brand-primary inline-block pb-1">Academics</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> UG Programmes
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> PG Programmes
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> NIRF
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-brand-primary group-hover:translate-x-1 transition-transform" /> Mandatory Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-brand-primary inline-block pb-1">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="text-brand-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  M.A.M. College of Engineering,<br />
                  Trichy-Chennai Trunk Road,<br />
                  Siruganur, Tiruchirappalli - 621 105.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-secondary flex-shrink-0" />
                <div className="flex flex-col text-gray-400 text-sm">
                  <a href="tel:+917305092313" className="hover:text-brand-secondary transition-colors">+91 7305092313</a>
                  <a href="tel:+918015211313" className="hover:text-brand-secondary transition-colors">+91 8015211313</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-secondary flex-shrink-0" />
                <a href="mailto:info@mamce.org" className="text-gray-400 text-sm hover:text-brand-secondary transition-colors">
                  info@mamce.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} M.A.M College of Engineering. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
