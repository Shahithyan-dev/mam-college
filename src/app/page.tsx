import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Trophy, Building, Laptop, Atom, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Placeholder for Hero Image - In a real app, use next/image with an actual campus photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-slate-900/80 z-10"></div>
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/20 border border-brand-secondary/30 text-white text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            ESTD 1998 | APPROVED BY AICTE | AFFILIATED TO ANNA UNIVERSITY
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Welcome to <span className="text-brand-secondary">M.A.M</span> College of Engineering
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-medium drop-shadow-md">
            Nurturing the Future Innovators and Leaders through Quality Education and Excellence in Engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission" className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
              Apply Now 2026-2027 <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-md font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center">
              Explore Campus
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-30 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto bg-brand-secondary/20 text-brand-primary rounded-full flex items-center justify-center mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-1">25+</h3>
            <p className="text-gray-500 font-medium">Years of Excellence</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto bg-brand-secondary/20 text-brand-primary rounded-full flex items-center justify-center mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-1">15+</h3>
            <p className="text-gray-500 font-medium">UG & PG Programs</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto bg-brand-secondary/20 text-brand-primary rounded-full flex items-center justify-center mb-4">
              <Trophy size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-1">1000+</h3>
            <p className="text-gray-500 font-medium">Placements Yearly</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto bg-brand-secondary/20 text-brand-primary rounded-full flex items-center justify-center mb-4">
              <Building size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-1">50+</h3>
            <p className="text-gray-500 font-medium">Top Recruiters</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students at MAMCE" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-brand-primary font-black text-4xl mb-1">Counselling Code</div>
                <div className="text-3xl font-bold text-text-dark text-center">3810</div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-brand-secondary/30 text-brand-primary font-semibold rounded-full text-sm">
                About The Institution
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-dark leading-tight">
                Empowering Minds, <br />
                <span className="text-brand-primary">Transforming Futures.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                M.A.M. College of Engineering (MAMCE) is committed to building a vibrant learning community that fosters excellence in engineering and technology education. Our mission is to provide an environment that encourages intellectual curiosity, innovative thinking, and practical problem-solving.
              </p>
              <p className="text-gray-600 leading-relaxed pb-4">
                With state-of-the-art infrastructure, experienced faculty, and strong industry connections, we prepare our students to become competent professionals and responsible global citizens ready to tackle the challenges of tomorrow.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-text-dark transition-colors border-b-2 border-brand-primary pb-1">
                Read Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block px-3 py-1 bg-brand-secondary/30 text-brand-primary font-semibold rounded-full text-sm mb-4">
                Discover Your Path
              </div>
            <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-6">Our Academic Programs</h2>
            <p className="text-gray-600 text-lg">We offer a wide range of undergraduate and postgraduate programs designed to meet the demands of the modern tech industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col items-start hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Laptop size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Computer Science & Engg</h3>
              <p className="text-gray-500 mb-6 flex-1">Explore algorithms, data structures, software engineering, and the cutting edge of AI and Machine Learning.</p>
              <Link href="/courses/cse" className="text-brand-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Course Card 2 */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col items-start hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Cyber Security</h3>
              <p className="text-gray-500 mb-6 flex-1">Learn to protect systems, networks, and programs from digital attacks and ensure data integrity.</p>
              <Link href="/courses/cyber-security" className="text-brand-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Course Card 3 */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col items-start hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Atom size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">AI & Data Science</h3>
              <p className="text-gray-500 mb-6 flex-1">Master the principles of Artificial Intelligence, machine learning, and big data analytics to solve real-world problems.</p>
              <Link href="/courses/ai-ds" className="text-brand-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/courses" className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold rounded-md transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-brand-secondary text-lg mb-10 max-w-2xl mx-auto">Join MAM College of Engineering and take the first step towards a successful career. Admissions for the academic year 2026-2027 are now open.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission" className="px-8 py-4 bg-white text-brand-primary hover:bg-gray-100 rounded-md font-bold text-lg transition-all shadow-lg">
              Apply Online Now
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md font-bold text-lg transition-all">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
