"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, GraduationCap, Megaphone, Link as LinkIcon } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Marquee Section */}
      <div className="bg-brand-secondary text-brand-primary py-2 overflow-hidden whitespace-nowrap flex items-center relative border-b border-brand-primary/20">
        <div className="animate-marquee inline-flex gap-8 px-4 font-semibold text-sm">
          <Link href="#" className="hover:opacity-70 transition-opacity flex items-center gap-2">
            <Megaphone size={16} /> MAM College of Engineering Admissions Open for the Year 2026 - 2027
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity border-l border-brand-primary/30 pl-8">
            Public Notice
          </Link>
          <Link href="/career" className="hover:opacity-70 transition-opacity border-l border-brand-primary/30 pl-8">
            AP(CSE) Applications Open | Last Date: 11/07/2026
          </Link>
        </div>
      </div>

      {/* Top Navbar */}
      <div className="hidden lg:block bg-brand-primary text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 font-bold tracking-wide">
            <GraduationCap size={18} className="text-brand-secondary" />
            <span>Counselling Code : 3810</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
              <Phone size={14} className="text-brand-secondary" />
              <a href="tel:+917305092313" className="font-medium">+91 7305092313</a>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
              <Phone size={14} className="text-brand-secondary" />
              <a href="tel:+918015211313" className="font-medium">+91 8015211313</a>
            </div>
            
            <div className="flex gap-3 pl-4 border-l border-white/30">
              <a href="https://www.facebook.com/mamce.trichy/" className="bg-white/15 hover:bg-white/30 p-1.5 rounded-full transition-all hover:-translate-y-0.5 text-xs font-bold">
                FB
              </a>
              <a href="https://www.linkedin.com/school/mamceofficial/" className="bg-white/15 hover:bg-white/30 p-1.5 rounded-full transition-all hover:-translate-y-0.5 text-xs font-bold">
                IN
              </a>
              <a href="https://www.instagram.com/mamce.trichy" className="bg-white/15 hover:bg-white/30 p-1.5 rounded-full transition-all hover:-translate-y-0.5 text-xs font-bold">
                IG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            {/* Replace with actual logo image later */}
            <div className="text-2xl font-black text-brand-primary tracking-tighter">
              MAMCE<span className="text-brand-secondary">.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-text-dark hover:text-brand-primary font-semibold text-[15px] relative group transition-colors">
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-3/4 rounded"></span>
            </Link>

            <div className="relative group px-3 py-2">
              <button className="flex items-center gap-1 text-text-dark hover:text-brand-primary font-semibold text-[15px] transition-colors">
                About <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border-t-2 border-brand-primary shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 py-2">
                <Link href="/about" className="block px-5 py-2.5 text-sm font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary hover:pl-6 transition-all">About Mamce</Link>
                <Link href="/history" className="block px-5 py-2.5 text-sm font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary hover:pl-6 transition-all">History</Link>
                <Link href="/admin" className="block px-5 py-2.5 text-sm font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary hover:pl-6 transition-all">Administration</Link>
              </div>
            </div>

            <div className="relative group px-3 py-2">
              <button className="flex items-center gap-1 text-text-dark hover:text-brand-primary font-semibold text-[15px] transition-colors">
                Courses <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border-t-2 border-brand-primary shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-6 flex gap-6">
                <div className="flex-1">
                  <h3 className="text-brand-primary font-bold text-base mb-3 border-b-2 border-brand-secondary/60 pb-1 inline-block">UG COURSES</h3>
                  <div className="space-y-1">
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.E Civil Engineering</Link>
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.E Computer Science and Engg</Link>
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.E Electrical and Electronics</Link>
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.E Electronics and Communication</Link>
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.Tech Information Technology</Link>
                  </div>
                </div>
                <div className="flex-1">
                   <div className="space-y-1 mt-9">
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.Tech AI and Data Science</Link>
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">B.E AI and Machine Learning</Link>
                  </div>
                  <h3 className="text-brand-primary font-bold text-base mb-3 border-b-2 border-brand-secondary/60 pb-1 inline-block mt-4">PG COURSES</h3>
                  <div className="space-y-1">
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">M.B.A Master of Business Admin</Link>
                    <Link href="#" className="block py-1.5 text-sm font-medium text-text-dark hover:text-brand-primary transition-colors">M.C.A Master of Computer Apps</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/admission" className="px-3 py-2 text-text-dark hover:text-brand-primary font-semibold text-[15px] relative group transition-colors">
              Admission
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-3/4 rounded"></span>
            </Link>
            
            <Link href="/placement" className="px-3 py-2 text-text-dark hover:text-brand-primary font-semibold text-[15px] relative group transition-colors">
              Placement
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-3/4 rounded"></span>
            </Link>

            <Link href="/contact" className="px-3 py-2 text-text-dark hover:text-brand-primary font-semibold text-[15px] relative group transition-colors">
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-3/4 rounded"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-text-dark hover:text-brand-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 px-2 space-y-1">
            <Link href="/" className="block px-4 py-2 font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary rounded-md">Home</Link>
            <Link href="/about" className="block px-4 py-2 font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary rounded-md">About</Link>
            <Link href="/courses" className="block px-4 py-2 font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary rounded-md">Courses</Link>
            <Link href="/admission" className="block px-4 py-2 font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary rounded-md">Admission</Link>
            <Link href="/placement" className="block px-4 py-2 font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary rounded-md">Placement</Link>
            <Link href="/contact" className="block px-4 py-2 font-medium text-text-dark hover:bg-brand-secondary/20 hover:text-brand-primary rounded-md">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
