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
      { label: "Vision, Mission", href: "/about" },
      { label: "MAMSE Milestones", href: "/history" },
      { label: "Administration", href: "/admin" },
      { label: "Code of Conduct", href: "/about" },
      { label: "Awards and Recognition", href: "/about" },
    ]},
    { name: "ACADEMICS", href: "/courses", subLinks: [
      { label: "U.G Programmes", href: "/courses" },
      { label: "P.G Programmes", href: "/courses" },
    ]},
    { name: "ADMISSION", href: "/admission", subLinks: [
      { label: "Eligibility", href: "/admission" },
      { label: "Scholarships", href: "/admission" },
      { label: "Apply Now", href: "/admission" },
      { label: "For Admission Contact", href: "/contact" },
    ]},
    { name: "APPROVALS", href: "/approvals", subLinks: [
      { label: 'AICTE', href: '/approvals' },
      { label: 'Anna University', href: '/approvals' },
      { label: 'UGC', href: '/approvals' }
    ]},
    { name: "ACCREDITATION", href: "/accreditation", subLinks: [
      { label: 'NAAC', href: '/accreditation' },
      { label: 'ISO', href: '/accreditation' }
    ]},
    { name: "AUTONOMOUS", href: "/autonomous", subLinks: [
      { label: 'UGC Approval', href: '/autonomous' },
      { label: 'Anna University Approval', href: '/autonomous' },
      { label: 'Academic Council', href: '/autonomous' },
      { label: 'Board of Studies', href: '/autonomous' },
      { label: 'Curriculum and Syllabus', href: '/autonomous' }
    ]},
    { name: "COE", href: "/coe", subLinks: [
      { label: 'About US', href: '/coe' },
      { label: 'Notifications', href: '/coe' },
      { label: 'Exam Schedule', href: '/coe' },
      { label: 'Student Login', href: 'https://portal.vmedulife.com/public/auth/#/login/mamse-trichy' },
      { label: 'Examination Manual', href: '/coe' }
    ]},
    { name: "E-LEARNING", href: "/e-learning", subLinks: [
      { label: 'J-Gate (E-Library)', href: 'https://jgatenext.com/' },
      { label: 'SWAYAM', href: '/e-learning' },
      { label: 'NPTEL', href: '/e-learning' },
      { label: 'Coursera', href: '/e-learning' }
    ]},
    { name: "STUDENT'S CORNER", href: "/students-corner", subLinks: [
      { label: 'Cultural Events', href: '/students-corner' },
      { label: 'Sports', href: '/students-corner' },
      { label: 'Technical Events', href: '/students-corner' },
      { label: 'NSS', href: '/students-corner' },
      { label: 'Job Openings', href: '/career' }
    ]},
    { name: "ALUMNI", href: "/alumni", subLinks: [
      { label: 'Alumni Registration', href: '/alumni' },
      { label: 'Alumni Directory', href: '/alumni' },
      { label: 'Events & Reunions', href: '/alumni' }
    ]},
    { name: "RESEARCH", href: "/research", subLinks: [
      { label: 'Academic Research', href: '/research' },
      { label: 'Sponsored Research', href: '/research' },
      { label: 'Hackathons', href: '/research' }
    ]},
    { name: "FACILITIES", href: "/facilities", subLinks: [
      { label: 'Library', href: '/facilities' },
      { label: 'Hostel', href: '/facilities' },
      { label: 'Transport', href: '/facilities' },
      { label: 'Canteen', href: '/facilities' },
      { label: 'Gymnasium', href: '/facilities' }
    ]},
  ];

  const secondaryLinks = [
    { name: "CLUBS", href: "/clubs", subLinks: [
        { label: 'Department Associations', href: '/clubs' },
        { label: 'Technical Clubs', href: '/clubs' },
        { label: 'Social Clubs', href: '/clubs' }
    ]},
    { name: "ERP LOGIN", href: "https://portal.vmedulife.com/public/auth/#/login/mamse-trichy", subLinks: [
        { label: 'Student Login', href: 'https://portal.vmedulife.com/public/auth/#/login/mamse-trichy' },
        { label: 'Faculty Login', href: 'https://portal.vmedulife.com/public/auth/#/login/mamse-trichy' }
    ]},
    { name: "PLACEMENTS", href: "/placement" },
    { name: "CENTRE FOR INT. AFFAIRS", href: "/cia", subLinks: [
        { label: 'About', href: '/cia' },
        { label: "MoU's", href: '/cia' },
        { label: 'Higher Studies Abroad', href: '/cia' }
    ]},
    { name: "IQAC", href: "/iqac", subLinks: [
        { label: 'About IQAC', href: '/iqac' },
        { label: 'Composition', href: '/iqac' },
        { label: 'NAAC', href: '/iqac' },
        { label: 'NBA', href: '/iqac' }
    ]},
    { name: "NIRF", href: "/nirf", subLinks: [
        { label: 'NIRF Reports', href: '/nirf' }
    ]},
    { name: "IIC", href: "/iic", subLinks: [
        { label: 'About IIC', href: '/iic' },
        { label: 'Activity Reports', href: '/iic' },
        { label: 'Yukti', href: '/iic' }
    ]},
    { name: "NISP", href: "/nisp", subLinks: [
        { label: 'Core Team', href: '/nisp' },
        { label: 'Policy Documents', href: '/nisp' }
    ]},
    { name: "CIRCULARS", href: "/circulars" },
    { name: "COMMITTEE", href: "/grievance", subLinks: [
        { label: 'Anti-Ragging', href: '/grievance?tab=Anti-Ragging' },
        { label: 'Grievance Redressal', href: '/grievance?tab=Grievance%20Redressal' },
        { label: '⁠ICC/POSH', href: '/grievance?tab=POSH%20Cell' },
        { label: 'SC/ST', href: '/grievance?tab=SC%2FST' }
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
             <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center shrink-0">
               <img src="/logo.png" alt="MAM Logo" className="w-[90%] h-[90%] object-contain" />
             </div>
              <div className="flex flex-col items-start text-left flex-1 mt-1 lg:mt-0">
               <h1 className="text-[20px] md:text-[28px] font-black text-brand-primary tracking-tight leading-[1.1]">
                 M.A.M. <br className="hidden md:block"/>SCHOOL OF ENGINEERING
               </h1>
               <div className="flex flex-col gap-1 mt-1">
                 <span className="text-[9px] md:text-[10px] font-bold text-brand-secondary uppercase tracking-wider">
                   (An Autonomous Institution)
                 </span>
                 <p className="text-[9px] md:text-[10px] font-semibold text-brand-primary leading-tight max-w-[320px] md:max-w-md">
                   Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai. Recognized by UGC & Accredited by NAAC
                 </p>
               </div>
               {/* Mobile TNEA Code & NAAC */}
               <div className="lg:hidden mt-2 flex items-center gap-3">
                 <div className="bg-brand-primary/5 px-2 py-1 rounded border border-brand-primary/10 flex items-center gap-2">
                   <span className="text-[9px] font-bold text-brand-primary uppercase tracking-wider">TNEA Code</span>
                   <span className="text-xs font-black text-brand-secondary">3786</span>
                 </div>
                 <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full p-0.5 shadow-sm border border-gray-100">
                   <img src="/nacc.png" alt="NAAC A Grade" className="w-full h-full object-contain" />
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Right Side (Blue Background Area) */}
        <div className="hidden lg:flex flex-1 relative items-center justify-center">
          
          {/* Contact Info & Code */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-8 lg:gap-10 text-white relative z-0">
            
            {/* NAAC Image (Replacing Call Now) */}
            <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src="/nacc.png" 
                alt="NAAC A Grade" 
                className="w-full h-full object-contain" 
              />
            </div>

            <div className="w-px h-10 bg-white/20 hidden lg:block"></div>

            {/* Email Now */}
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-brand-secondary" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Email Now</span>
                <span className="text-sm font-black tracking-wide">principal@mamse.in</span>
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
