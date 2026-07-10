import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface SidebarLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface InnerPageLayoutProps {
  title: string;
  breadcrumbTitle?: string;
  sidebarLinks: SidebarLink[];
  children: React.ReactNode;
}

export default function InnerPageLayout({ title, breadcrumbTitle, sidebarLinks, children }: InnerPageLayoutProps) {
  const displayBreadcrumb = breadcrumbTitle || title;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Banner Section */}
      <section className="relative w-full h-[400px]">
        {/* Placeholder for Campus Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl text-white font-serif tracking-wide drop-shadow-md mb-4 uppercase">
            {title}
          </h1>
          <p className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">
            HOME <span className="mx-2">»</span> {displayBreadcrumb}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-12">
          
          {/* Left Sidebar Menu */}
          <div className="w-full md:w-1/4 shrink-0 shadow-xl border-l-4 border-gray-100">
            <ul className="flex flex-col">
              {sidebarLinks.map((link, index) => (
                <li key={index} className="border-b border-white/20 last:border-0">
                  <Link 
                    href={link.href}
                    className={`flex items-center justify-between px-6 py-4 font-medium transition-colors ${
                      link.isActive 
                        ? 'bg-brand-secondary text-brand-primary font-bold shadow-md' 
                        : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isActive ? <ArrowDown size={16} /> : <ArrowRight size={16} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Main Content */}
          <div className="w-full md:w-3/4">
             {children}
          </div>

        </div>
      </section>
    </div>
  );
}
