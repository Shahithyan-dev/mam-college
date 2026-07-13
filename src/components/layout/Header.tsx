"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Award, Building2, ChevronDown, PhoneCall, Mail, GraduationCap } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const primaryLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about", subLinks: [
      { label: "Overview", href: "/about" },
      { label: "Vision, Mission", href: "#" },
      { label: "MAMSE Milestones", href: "/history" },
      { label: "Administration", href: "/admin" },
      { label: "Code of Conduct", href: "#" },
      { label: "Awards and Recognition", href: "#" },
    ]},
    { name: "ACADEMICS", href: "/courses", subLinks: [
      { label: "U.G Programmes", href: "/courses" },
      { label: "P.G Programmes", href: "#" },
    ]},
    { name: "ADMISSION", href: "/admission", subLinks: [
      { label: "Eligibility", href: "/admission" },
      { label: "Scholarships", href: "#" },
      { label: "Apply Now", href: "#" },
      { label: "For Admission Contact", href: "/contact" },
    ]},
    { name: "APPROVALS", href: "/approvals", subLinks: [
      { label: 'AICTE', href: '#' },
      { label: 'Anna University', href: '#' },
      { label: 'UGC', href: '#' }
    ]},
    { name: "ACCREDITATION", href: "/accreditation", subLinks: [
      { label: 'NAAC', href: '#' },
      { label: 'ISO', href: '#' }
    ]},
    { name: "AUTONOMOUS", href: "/autonomous", subLinks: [
      { label: 'UGC Approval', href: '#' },
      { label: 'Anna University Approval', href: '#' },
      { label: 'Academic Council', href: '#' },
      { label: 'Board of Studies', href: '#' },
      { label: 'Curriculum and Syllabus', href: '#' }
    ]},
    { name: "COE", href: "/coe", subLinks: [
      { label: 'About US', href: '#' },
      { label: 'Notifications', href: '#' },
      { label: 'Exam Schedule', href: '#' },
      { label: 'Student Login', href: '#' },
      { label: 'Examination Manual', href: '#' }
    ]},
    { name: "E-LEARNING", href: "/e-learning", subLinks: [
      { label: 'E-Library', href: '#' },
      { label: 'SWAYAM', href: '#' },
      { label: 'NPTEL', href: '#' },
      { label: 'Coursera', href: '#' }
    ]},
    { name: "STUDENT'S CORNER", href: "/students-corner", subLinks: [
      { label: 'Cultural Events', href: '#' },
      { label: 'Sports', href: '#' },
      { label: 'Technical Events', href: '#' },
      { label: 'NSS', href: '#' },
      { label: 'Job Openings', href: '#' }
    ]},
    { name: "ALUMNI", href: "/alumni", subLinks: [
      { label: 'Alumni Registration', href: '#' },
      { label: 'Alumni Directory', href: '#' },
      { label: 'Events & Reunions', href: '#' }
    ]},
    { name: "RESEARCH", href: "/research", subLinks: [
      { label: 'Academic Research', href: '#' },
      { label: 'Sponsored Research', href: '#' },
      { label: 'Hackathons', href: '#' }
    ]},
    { name: "FACILITIES", href: "/facilities", subLinks: [
      { label: 'Library', href: '#' },
      { label: 'Hostel', href: '#' },
      { label: 'Transport', href: '#' },
      { label: 'Canteen', href: '#' },
      { label: 'Gymnasium', href: '#' }
    ]},
  ];

  const secondaryLinks = [
    { name: "CLUBS", href: "/clubs", subLinks: [
        { label: 'Department Associations', href: '#' },
        { label: 'Technical Clubs', href: '#' },
        { label: 'Social Clubs', href: '#' }
    ]},
    { name: "ERP LOGIN", href: "/erp", subLinks: [
        { label: 'Student Login', href: '#' },
        { label: 'Faculty Login', href: '#' }
    ]},
    { name: "PLACEMENTS", href: "/placement" },
    { name: "CENTRE FOR INT. AFFAIRS", href: "/cia", subLinks: [
        { label: 'About', href: '#' },
        { label: "MoU's", href: '#' },
        { label: 'Higher Studies Abroad', href: '#' }
    ]},
    { name: "IQAC", href: "/iqac", subLinks: [
        { label: 'About IQAC', href: '#' },
        { label: 'Composition', href: '#' },
        { label: 'NAAC', href: '#' },
        { label: 'NBA', href: '#' }
    ]},
    { name: "NIRF", href: "/nirf", subLinks: [
        { label: 'NIRF Reports', href: '#' }
    ]},
    { name: "IIC", href: "/iic", subLinks: [
        { label: 'About IIC', href: '#' },
        { label: 'Activity Reports', href: '#' },
        { label: 'Yukti', href: '#' }
    ]},
    { name: "NISP", href: "/nisp", subLinks: [
        { label: 'Core Team', href: '#' },
        { label: 'Policy Documents', href: '#' }
    ]},
    { name: "CIRCULARS", href: "/circulars" },
    { name: "GRIEVANCE", href: "/grievance", subLinks: [
        { label: 'Grievance Redressal', href: '#' },
        { label: 'Anti-Ragging', href: '#' }
    ]},
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="w-full relative z-50">
      

      {/* 2. Top Bar (New Theme) */}
      <div className="flex flex-col lg:flex-row w-full bg-brand-primary relative z-50">
        
        {/* Left Side (White with clip-path) */}
        <div 
          className="bg-white relative z-10 flex flex-col md:flex-row items-center justify-center lg:justify-start pl-4 lg:pl-8 pr-12 lg:pr-24 py-4 lg:py-3 lg:w-[45%] lg:[clip-path:polygon(0_0,92%_0,100%_100%,0_100%)]"
        >
          <div className="flex items-center gap-3 md:gap-5 w-full">
             <div className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white shadow-sm border border-gray-100">
               <img src="/logo.png" alt="MAM Logo" className="w-[85%] h-[85%] object-contain" />
             </div>
             <div className="flex flex-col items-start text-left flex-1">
               <h1 className="text-[20px] md:text-[28px] font-black text-brand-primary tracking-tight leading-[1.1]">
                 M.A.M. <br className="hidden md:block"/>SCHOOL OF ENGINEERING
               </h1>
               <div className="mt-1.5 px-3 py-0.5 bg-brand-secondary text-white text-[9px] md:text-[10px] font-bold rounded-full shadow-sm">
                 (AN AUTONOMOUS INSTITUTION)
               </div>
               {/* Mobile TNEA Code */}
               <div className="lg:hidden mt-2 bg-brand-primary/5 px-2 py-1 rounded border border-brand-primary/10 flex items-center gap-2">
                 <span className="text-[9px] font-bold text-brand-primary uppercase tracking-wider">TNEA Code</span>
                 <span className="text-xs font-black text-brand-secondary">3786</span>
               </div>
             </div>
          </div>
        </div>

        {/* Right Side (Contact Info & Code) */}
        <div className="hidden lg:flex flex-1 flex-wrap md:flex-nowrap items-center justify-center lg:justify-end gap-6 md:gap-8 lg:gap-10 px-4 pb-6 pt-2 lg:py-0 lg:pr-10 text-white relative z-0">
          
          {/* Call Now */}
          <div className="flex items-center gap-3">
            <PhoneCall className="w-8 h-8 text-brand-secondary" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Call Now !</span>
              <span className="text-sm font-black tracking-wide">+91 431 2910220</span>
            </div>
          </div>

          <div className="w-px h-10 bg-white/20 hidden md:block"></div>

          {/* Email Now */}
          <div className="flex items-center gap-3">
            <Mail className="w-8 h-8 text-brand-secondary" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Email Now</span>
              <span className="text-sm font-black tracking-wide">info@mamse.in</span>
            </div>
          </div>

          <div className="w-px h-10 bg-white/20 hidden lg:block"></div>

          {/* Counselling Code */}
          <div className="flex items-center gap-3 mr-4 md:mr-0">
            <GraduationCap className="w-10 h-10 text-brand-secondary" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-wider">TNEA Counselling Code</span>
              <span className="text-xl lg:text-2xl font-black tracking-widest text-white drop-shadow-md leading-none mt-1">3786</span>
            </div>
          </div>

        </div>

        {/* Mobile Menu Button - Positioned absolutely on mobile */}
        <button 
          className="lg:hidden absolute top-4 right-4 p-2 bg-brand-primary rounded-md text-white border border-white/20 shadow-sm z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sticky Navigation Container */}
      <div className="hidden lg:block sticky top-0 shadow-lg z-40 transition-all duration-300">
        
        {/* Main Navigation */}
        <nav className="bg-brand-secondary border-t border-brand-secondary/80">
          <div className="w-full px-4 lg:px-8 flex items-center justify-center">
            {/* Centered Navigation Links */}
            <ul className="flex flex-wrap items-center justify-center flex-1">
              {primaryLinks.map((link, idx) => (
                <li key={idx} className="relative group">
                  <Link 
                    href={link.href} 
                    className="relative px-2 lg:px-2.5 xl:px-3 py-4 text-white group-hover:text-brand-primary transition-colors duration-300 text-[9.5px] lg:text-[10px] xl:text-[11px] font-bold uppercase tracking-wide flex items-center justify-center gap-1 overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    {link.subLinks && <ChevronDown size={12} className="opacity-70 group-hover:opacity-100 relative z-10 transition-all duration-300" />}
                    
                    {/* Modern Animated Hover Effects */}
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-primary transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 z-0"></span>
                    <span className="absolute inset-0 bg-white/10 transform scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 z-0"></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div className="absolute top-[90%] left-0 pt-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:top-full group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5 min-w-[240px] text-left rounded-2xl overflow-hidden">
                        <ul className="p-2 flex flex-col gap-1">
                          {link.subLinks.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link href={sub.href} className="relative flex items-center px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-brand-primary transition-all duration-300 group/drop rounded-xl hover:bg-brand-primary/5">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand-secondary rounded-full transition-all duration-300 group-hover/drop:h-4 opacity-0 group-hover/drop:opacity-100"></span>
                                <span className="relative z-10 inline-block transform transition-transform duration-300 group-hover/drop:translate-x-2">{sub.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Secondary Links Bar */}
        <div className="absolute top-full right-0 lg:right-8 flex justify-end pointer-events-none z-40">
          <div className="bg-brand-primary text-white px-6 py-2 flex justify-end items-center gap-6 text-[11px] font-bold tracking-wider uppercase flex-wrap rounded-b-lg shadow-md pointer-events-auto">
            {secondaryLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <Link href={link.href} className="relative py-1 flex items-center gap-1 group-hover:text-brand-secondary transition-colors duration-300">
                  <span className="relative z-10">{link.name}</span>
                  {link.subLinks && <ChevronDown size={10} className="relative z-10" />}
                  
                  {/* Modern Animated Underline */}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-secondary transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"></span>
                </Link>
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5 min-w-[200px] text-left rounded-xl overflow-hidden">
                      <ul className="p-1.5 flex flex-col gap-0.5">
                        {link.subLinks.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link href={sub.href} className="relative flex items-center px-4 py-2 text-xs font-semibold text-gray-700 hover:text-brand-primary transition-all duration-300 group/drop rounded-lg hover:bg-brand-primary/5 normal-case tracking-normal">
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand-secondary rounded-full transition-all duration-300 group-hover/drop:h-3 opacity-0 group-hover/drop:opacity-100"></span>
                              <span className="relative z-10 inline-block transform transition-transform duration-300 group-hover/drop:translate-x-1.5">{sub.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-white/95 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl max-h-[80vh] overflow-y-auto border border-white/40 ring-1 ring-black/5 flex flex-col z-50 p-2">
          
          {/* Primary Links Mobile */}
          <ul className="flex flex-col gap-1 p-2">
            {primaryLinks.map((link, idx) => (
              <li key={`p-${idx}`} className="flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-brand-primary/5 active:bg-brand-primary/10 transition-colors">
                  <Link 
                    href={link.href} 
                    className="text-brand-primary font-bold flex-grow text-sm uppercase tracking-wide"
                    onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <button onClick={(e) => toggleMobileDropdown(link.name, e)} className="p-2 text-brand-primary bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-brand-primary/5">
                       <ChevronDown size={18} className={`transition-transform duration-300 ${openMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.subLinks && openMobileDropdown === link.name && (
                  <div className="mt-1 mb-2 px-2">
                    <ul className="bg-gray-50/50 rounded-2xl px-4 py-3 flex flex-col gap-1">
                      {link.subLinks.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link 
                            href={sub.href} 
                            className="flex items-center py-2.5 text-sm font-semibold text-gray-600 hover:text-brand-primary hover:translate-x-2 transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary/50 mr-3"></span>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mx-4 my-2 h-px bg-gray-100"></div>
          
          {/* Secondary Links Mobile */}
          <ul className="flex flex-col gap-1 p-2 pb-4">
            {secondaryLinks.map((link, idx) => (
              <li key={`s-${idx}`} className="flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-brand-secondary/5 active:bg-brand-secondary/10 transition-colors">
                  <Link 
                    href={link.href} 
                    className="text-brand-secondary font-bold flex-grow text-sm uppercase tracking-wide"
                    onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <button onClick={(e) => toggleMobileDropdown(link.name, e)} className="p-2 text-brand-secondary bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-brand-secondary/5">
                       <ChevronDown size={18} className={`transition-transform duration-300 ${openMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.subLinks && openMobileDropdown === link.name && (
                  <div className="mt-1 mb-2 px-2">
                    <ul className="bg-gray-50/50 rounded-2xl px-4 py-3 flex flex-col gap-1">
                      {link.subLinks.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link 
                            href={sub.href} 
                            className="flex items-center py-2.5 text-sm font-semibold text-gray-600 hover:text-brand-secondary hover:translate-x-2 transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 mr-3"></span>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
