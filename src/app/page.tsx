"use client";
import React from 'react';
import Link from 'next/link';
import { Target, Flag, FileCheck, ArrowRight, ChevronRight, ChevronUp, GraduationCap, Users, Building, BookOpen, Binoculars, Mountain, Globe, Award } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollY } = useScroll();
  // Travels down 800px (into the next section) as user scrolls 600px
  const admissionsY = useTransform(scrollY, [0, 600], [0, 800]);
  // Fades out later, as it reaches the next section
  const admissionsOpacity = useTransform(scrollY, [200, 600], [1, 0]);

  const [heroRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [coursesRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [recruitersRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);
  const [activeTab, setActiveTab] = React.useState('facilities');

  React.useEffect(() => {
    // Force the browser to start at the top of the page on reload
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  const courses = [
    { title: "B.E. Aeronautical Engineering", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "B.Tech. AI and Data Science", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "B.E. Bio-Medical Engineering", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "B.E. Computer Science and Engineering", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "B.E. Electrical and Electronics Engineering", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* 1. Hero Carousel */}
      <section className="w-full h-[70vh] relative overflow-hidden" ref={heroRef}>
        
        {/* Floating Admissions Box - Unique Design */}
        <motion.div 
          style={{ y: admissionsY, opacity: admissionsOpacity }} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 m-0 pointer-events-none"
        >
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            className="group pointer-events-auto"
          >
          {/* Glassmorphism base with glowing border effect */}
          <div className="relative bg-white/10 backdrop-blur-md py-10 px-8 pr-12 rounded-r-3xl shadow-[30px_0_60px_-15px_rgba(0,0,0,0.5)] border-y border-r border-white/30 overflow-hidden">
            {/* Animated gradient background sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90/90 via-brand-secondary/90 to-yellow-600/90 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <p className="text-brand-primary text-xs font-black tracking-[0.3em] uppercase">Admissions</p>
              </div>
              <h3 className="text-4xl font-black text-brand-text mb-1 tracking-tight drop-shadow-sm">2026<span className="text-red-700">–</span>2027</h3>
              <p className="text-brand-text/80 text-sm font-bold mb-8 uppercase tracking-wide">UG & PG Programmes</p>
              
              <Link href="/admission" className="relative inline-flex items-center gap-3 bg-brand-primary text-white text-sm font-bold px-8 py-4 rounded-full overflow-hidden group/btn shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <span className="relative z-10">Apply Now</span>
                <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
          </motion.div>
        </motion.div>

        <div className="flex h-full">
          {/* Slide 1 */}
          <div className="flex-[0_0_100%] h-full relative">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="max-w-4xl"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg font-serif">Welcome to M.A.M. School of Engineering</h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">Empowering the next generation of innovators and leaders</p>
              </motion.div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex-[0_0_100%] h-full relative">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Students" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg font-serif">Excellence in Technical Education</h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">Approved by AICTE, Affiliated to Anna University</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Overlay Statistics Bar (BHC Style) */}
        <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-12 z-20 hidden md:flex items-center gap-8 bg-brand-primary/80 backdrop-blur-md border-t-2 border-brand-secondary p-5 rounded-t-xl shadow-2xl text-white">
          <div className="text-center px-4 border-r border-white/20">
            <p className="text-[10px] font-black tracking-widest text-gray-400 mb-1">NAAC</p>
            <h4 className="text-xl font-bold text-brand-secondary">A++</h4>
            <p className="text-[9px] uppercase tracking-wider text-gray-300">Grade</p>
          </div>
          <div className="text-center px-4 border-r border-white/20">
            <p className="text-[10px] font-black tracking-widest text-gray-400 mb-1">NBA</p>
            <h4 className="text-xl font-bold text-brand-secondary">Accredited</h4>
            <p className="text-[9px] uppercase tracking-wider text-gray-300">Status</p>
          </div>
          <div className="text-center px-4 border-r border-white/20">
            <p className="text-[10px] font-black tracking-widest text-gray-400 mb-1">UGC</p>
            <h4 className="text-xl font-bold text-brand-secondary">Autonomous</h4>
            <p className="text-[9px] uppercase tracking-wider text-gray-300">Institution</p>
          </div>
          <div className="text-center px-4">
            <p className="text-[10px] font-black tracking-widest text-gray-400 mb-1">EST.</p>
            <h4 className="text-xl font-bold text-brand-secondary">1998</h4>
            <p className="text-[9px] uppercase tracking-wider text-gray-300">Heritage</p>
          </div>
        </div>
      </section>

      {/* 2. News & Events Ticker & Grid */}
      <section className="bg-white">
        {/* Marquee Ticker */}
        <div className="bg-brand-primary text-white py-4 border-b-4 border-brand-secondary overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
            <div className="bg-brand-secondary px-4 py-2 font-bold uppercase tracking-wider shrink-0 shadow-sm relative z-10">
              Announcements
            </div>
            <div className="overflow-hidden relative flex-1 h-6">
              <div className="animate-marquee whitespace-nowrap absolute flex items-center gap-12 text-sm font-medium">
                <span>★ Admissions 2026-27 Open for all UG and PG Programmes</span>
                <span>★ National Level Technical Symposium on Oct 15</span>
                <span>★ NAAC Peer Team Visit scheduled for next month</span>
                <span>★ Campus Placement Drive by Top MNCs starts next week</span>
                <span>★ Admissions 2026-27 Open for all UG and PG Programmes</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Quick Links / Highlights */}
        <section className="w-full mt-12 mb-20 px-4">
          <div className="max-w-7xl mx-auto bg-[#0b335c] rounded-[2rem] relative overflow-hidden shadow-[0_20px_50px_rgba(11,51,92,0.3)] border border-white/10">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a4a7e] rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DE9E2F] rounded-full blur-[120px] opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              {/* Card 1: Courses */}
              <div className="p-8 md:p-10 lg:p-14 group hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DE9E2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#DE9E2F]/20 group-hover:border-[#DE9E2F]/50 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                  <BookOpen size={30} className="text-white group-hover:text-[#DE9E2F] transition-colors" />
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Courses</h3>
                <p className="text-white/70 leading-relaxed mb-10 text-sm font-medium">
                  Diverse undergraduate and postgraduate courses designed to meet industry standards and future technologies.
                </p>
                
                <Link href="/courses" className="inline-flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider group/link">
                  <span className="relative overflow-hidden block h-5">
                    <span className="block group-hover/link:-translate-y-full transition-transform duration-300">Read More</span>
                    <span className="absolute top-0 left-0 block translate-y-full text-[#DE9E2F] group-hover/link:translate-y-0 transition-transform duration-300">Read More</span>
                  </span>
                  <ArrowRight size={18} className="text-white group-hover/link:text-[#DE9E2F] group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Card 2: Placement */}
              <div className="p-8 md:p-10 lg:p-14 group hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DE9E2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#DE9E2F]/20 group-hover:border-[#DE9E2F]/50 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                  <Globe size={30} className="text-white group-hover:text-[#DE9E2F] transition-colors" />
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Placement</h3>
                <p className="text-white/70 leading-relaxed mb-10 text-sm font-medium">
                  Strong industry partnerships ensure excellent placement opportunities with top companies and career growth.
                </p>
                
                <Link href="/placements" className="inline-flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider group/link">
                  <span className="relative overflow-hidden block h-5">
                    <span className="block group-hover/link:-translate-y-full transition-transform duration-300">Read More</span>
                    <span className="absolute top-0 left-0 block translate-y-full text-[#DE9E2F] group-hover/link:translate-y-0 transition-transform duration-300">Read More</span>
                  </span>
                  <ArrowRight size={18} className="text-white group-hover/link:text-[#DE9E2F] group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Card 3: Why MAMSE? */}
              <div className="p-8 md:p-10 lg:p-14 group hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DE9E2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#DE9E2F]/20 group-hover:border-[#DE9E2F]/50 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                  <Award size={30} className="text-white group-hover:text-[#DE9E2F] transition-colors" />
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Why MAMSE?</h3>
                <p className="text-white/70 leading-relaxed mb-10 text-sm font-medium">
                  MAMSE empowers students through quality education, innovation, industry exposure, leadership, and global opportunities.
                </p>
                
                <Link href="/about" className="inline-flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider group/link">
                  <span className="relative overflow-hidden block h-5">
                    <span className="block group-hover/link:-translate-y-full transition-transform duration-300">Read More</span>
                    <span className="absolute top-0 left-0 block translate-y-full text-[#DE9E2F] group-hover/link:translate-y-0 transition-transform duration-300">Read More</span>
                  </span>
                  <ArrowRight size={18} className="text-white group-hover/link:text-[#DE9E2F] group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>

            </div>
          </div>
        </section>
      </section>

      {/* 3. About The Campus */}
      <section className="w-full py-12 md:py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h4 className="text-[#DE9E2F] font-bold tracking-[0.2em] uppercase text-sm mb-4">About The Campus</h4>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b335c] mb-8 font-serif leading-tight">
              M.A.M. School of Engineering (Autonomous)
            </h2>
            <div className="w-20 h-[2px] bg-[#DE9E2F] mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg font-medium">
              Established with a commitment to providing high-quality technical education, M.A.M. School of Engineering is proudly affiliated with Anna University and holds the prestigious autonomous status.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg font-medium">
              Consistently recognized among the finest engineering institutions, we offer a diverse range of undergraduate and postgraduate programmes designed to foster innovation, critical thinking, and social responsibility.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#0b335c] font-bold hover:text-[#DE9E2F] transition-colors uppercase tracking-wider border-b-2 border-[#0b335c] hover:border-[#DE9E2F] pb-1 group">
              Read More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#0b335c]/10 translate-x-6 translate-y-6 rounded-2xl -z-10"></div>
            <div className="absolute inset-0 bg-[#DE9E2F]/10 -translate-x-4 -translate-y-4 rounded-2xl -z-20"></div>
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="College Building" className="rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="w-full pt-16 pb-16 px-4 bg-[#F5F8FA] border-t border-gray-100 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Vision, Mission & Quality Policy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-8 max-w-6xl mx-auto mt-8 lg:mt-0">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b335c] rounded-[2rem] p-8 pt-12 relative text-center shadow-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Inner wrapper for overflowing graphics */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                {/* Background faint graphic */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                  <Target size={200} className="text-white" />
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#DE9E2F] rounded-full border-[4px] border-[#F5F8FA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
                <Binoculars size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 relative z-10">Our Vision</h3>
              <div className="w-12 h-[2px] bg-[#DE9E2F] mx-auto mb-5 relative z-10"></div>
              
              <p className="text-white/90 text-sm leading-relaxed mb-8 relative z-10 px-2">
                To be a leading institution in technical education, fostering innovation, academic excellence, and research to transform young learners into competent professionals.
              </p>

              <button className="w-10 h-10 rounded-full border border-[#DE9E2F] mx-auto flex items-center justify-center text-[#DE9E2F] hover:bg-[#DE9E2F] hover:text-white transition-colors relative z-10">
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2rem] p-8 pt-12 relative text-center shadow-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Inner wrapper for overflowing graphics */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                {/* Background faint graphic */}
                <div className="absolute bottom-0 right-0 translate-x-1/4 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  <Mountain size={180} className="text-[#0b335c]" />
                </div>

                {/* Faint dot pattern inside card corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.05] bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:10px_10px]"></div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0b335c] rounded-full border-[4px] border-[#F5F8FA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
                <Flag size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#0b335c] mb-4 relative z-10">Our Mission</h3>
              <div className="w-12 h-[2px] bg-[#DE9E2F] mx-auto mb-5 relative z-10"></div>
              
              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 relative z-10 px-2">
                To provide high-quality, practical-oriented technical education that empowers students for successful careers, promoting social and ecological consciousness.
              </p>

              <button className="w-10 h-10 rounded-full border border-[#0b335c] mx-auto flex items-center justify-center text-[#0b335c] hover:bg-[#0b335c] hover:text-white transition-colors relative z-10">
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Quality Policy Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b335c] rounded-[2rem] p-8 pt-12 relative text-center shadow-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Inner wrapper for overflowing graphics */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                {/* Background faint graphic */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                  <FileCheck size={200} className="text-white" />
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#DE9E2F] rounded-full border-[4px] border-[#F5F8FA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
                <FileCheck size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 relative z-10">Quality Policy</h3>
              <div className="w-12 h-[2px] bg-[#DE9E2F] mx-auto mb-5 relative z-10"></div>
              
              <p className="text-white/90 text-sm leading-relaxed mb-8 relative z-10 px-2">
                We are committed to creating competent technical professionals capable of meeting the evolving challenges of industry through continuous improvement.
              </p>

              <button className="w-10 h-10 rounded-full border border-[#DE9E2F] mx-auto flex items-center justify-center text-[#DE9E2F] hover:bg-[#DE9E2F] hover:text-white transition-colors relative z-10">
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Core Values Tabs */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Interactive Core Values Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Institutional Core Values</h2>
              <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
            </div>

            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: 'facilities', label: 'Facilities', icon: <Building size={18} /> },
                { id: 'research', label: 'Research', icon: <BookOpen size={18} /> },
                { id: 'placements', label: 'Placements', icon: <Users size={18} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-t-xl font-bold transition-all text-sm uppercase tracking-wider ${
                    activeTab === tab.id 
                      ? 'bg-brand-primary text-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.2)] scale-105 transform origin-bottom' 
                      : 'bg-white text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Panels */}
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[300px]">
              {activeTab === 'facilities' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid md:grid-cols-3 gap-8">
                  <div className="bg-brand-base p-6 rounded-xl text-center">
                    <Building size={32} className="mx-auto mb-4 text-brand-primary" />
                    <h4 className="font-bold mb-2">Smart Classrooms</h4>
                    <p className="text-sm text-brand-text/80">Fully equipped with interactive flat panels and high-speed Wi-Fi connectivity.</p>
                  </div>
                  <div className="bg-brand-base p-6 rounded-xl text-center">
                    <BookOpen size={32} className="mx-auto mb-4 text-brand-primary" />
                    <h4 className="font-bold mb-2">Central Library</h4>
                    <p className="text-sm text-brand-text/80">Over 50,000 volumes, e-journals, and digital library access for all students.</p>
                  </div>
                  <div className="bg-brand-base p-6 rounded-xl text-center">
                    <Target size={32} className="mx-auto mb-4 text-brand-primary" />
                    <h4 className="font-bold mb-2">Advanced Labs</h4>
                    <p className="text-sm text-brand-text/80">State-of-the-art laboratories for AI, Robotics, and IoT research.</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'research' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center max-w-3xl mx-auto">
                   <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Innovation & Research Center</h3>
                   <p className="text-brand-text/80 leading-relaxed mb-8">MAMSE fosters a strong culture of research and development, encouraging students and faculty to patent innovations and publish in high-impact international journals.</p>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 border border-gray-100 rounded-lg"><h4 className="text-3xl font-black text-brand-secondary mb-1">50+</h4><p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Patents Filed</p></div>
                     <div className="p-4 border border-gray-100 rounded-lg"><h4 className="text-3xl font-black text-brand-secondary mb-1">200+</h4><p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Publications</p></div>
                   </div>
                </motion.div>
              )}

              {activeTab === 'placements' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center max-w-3xl mx-auto">
                   <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Empowering Careers</h3>
                   <p className="text-brand-text/80 leading-relaxed mb-8">Our dedicated Placement Cell works year-round to ensure students are industry-ready through rigorous soft-skills training, technical bootcamps, and mock interviews.</p>
                   <Link href="/placements" className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary font-bold px-8 py-3 rounded-md hover:bg-brand-secondary/90 transition-colors">
                     View Placement Records <ArrowRight size={16} />
                   </Link>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. Courses Carousel */}
      <section className="w-full py-24 px-4 bg-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <h3 className="text-brand-secondary font-bold tracking-[0.2em] uppercase mb-3">Academics</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Programmes Offered</h2>
              <div className="w-20 h-1 bg-brand-secondary mt-6"></div>
            </div>
            <Link href="/courses" className="bg-brand-primary text-white px-8 py-4 uppercase tracking-wider font-bold text-sm hover:bg-brand-tertiary transition-all hover:scale-105 flex items-center gap-2 rounded-md shadow-lg">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="cursor-grab active:cursor-grabbing overflow-hidden pb-8" ref={coursesRef}>
            <div className="flex -ml-6">
              {courses.map((course, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-6">
                  <div className="bg-brand-base rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-8 border-t-4 border-brand-secondary bg-white relative">
                      <div className="absolute -top-6 right-6 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform">
                        <ArrowRight size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-primary mb-3 line-clamp-2 min-h-[56px] pr-8">
                        {course.title}
                      </h4>
                      <Link href="/courses" className="text-brand-secondary text-sm font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Quick Stats & Facilities */}
      <section className="w-full py-24 bg-brand-primary text-white relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <BookOpen size={40} strokeWidth={1.5} className="mx-auto mb-6 text-brand-secondary" />
            <h3 className="text-5xl font-black mb-3">20+</h3>
            <p className="text-white font-bold uppercase tracking-widest text-xs">Programmes</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <Users size={40} strokeWidth={1.5} className="mx-auto mb-6 text-brand-secondary" />
            <h3 className="text-5xl font-black mb-3">5K+</h3>
            <p className="text-white font-bold uppercase tracking-widest text-xs">Students</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <GraduationCap size={40} strokeWidth={1.5} className="mx-auto mb-6 text-brand-secondary" />
            <h3 className="text-5xl font-black mb-3">15K+</h3>
            <p className="text-white font-bold uppercase tracking-widest text-xs">Alumni</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <Building size={40} strokeWidth={1.5} className="mx-auto mb-6 text-brand-secondary" />
            <h3 className="text-5xl font-black mb-3">80+</h3>
            <p className="text-white font-bold uppercase tracking-widest text-xs">Recruiters</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 7. Trusted by Recruiters */}
      <section className="w-full py-24 px-4 bg-[#F8F7F3] text-center border-t border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-brand-secondary font-bold tracking-[0.2em] uppercase mb-3">Placements</h3>
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-16">Trusted by 80+ Recruiters</h2>
          <div className="overflow-hidden" ref={recruitersRef}>
            <div className="flex items-center gap-12 -ml-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
              {/* Recruiter Logos */}
              {[
                { name: 'IBM', style: 'font-black text-4xl text-[#0530ad] tracking-tighter' },
                { name: 'TCS', style: 'font-black text-3xl text-[#0a3a82] tracking-widest' },
                { name: 'HCL', style: 'font-bold text-3xl text-blue-700 italic' },
                { name: 'ZOHO', style: 'font-black text-3xl text-[#0089ff] tracking-tight' },
                { name: 'TVS', style: 'font-black text-4xl text-blue-800' },
                { name: 'WIPRO', style: 'font-bold text-3xl text-blue-500' },
                { name: 'RANE', style: 'font-black text-3xl text-[#c1272d]' },
                { name: 'HYUNDAI', style: 'font-black text-2xl text-[#002c5f] tracking-widest' }
              ].map((company, i) => (
                <div key={i} className="flex-[0_0_auto] pl-12">
                  <div className="w-48 h-24 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:scale-110 hover:shadow-xl cursor-pointer group select-none">
                    <span className={`${company.style} opacity-70 group-hover:opacity-100 transition-opacity`}>
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. News & Events (Moved below Placements) */}
      <section className="w-full py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest News Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-brand-primary text-white py-4 px-6">
              <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                <Target size={20} className="text-brand-secondary" />
                Latest News
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "MAMSE secures top rank in Anna University Examinations 2025.",
                  "New AI & Data Science Center of Excellence inaugurated.",
                  "Students win First Prize in National Level Hackathon at IIT Madras.",
                  "MOU signed with leading MNCs for student internships and placements.",
                  "International Conference on Sustainable Engineering on Dec 10-12."
                ].map((news, idx) => (
                  <li key={idx} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-brand-secondary mt-1">●</span>
                    <a href="#" className="text-brand-text/90 hover:text-brand-primary transition-colors text-sm font-medium leading-relaxed">
                      {news}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-right">
                <Link href="/news" className="text-brand-secondary text-sm font-bold uppercase hover:underline">
                  View All News
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Events Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-brand-secondary text-white py-4 px-6">
              <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                <Flag size={20} className="text-white" />
                Upcoming Events
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {[
                  { month: "OCT", day: "15", title: "National Level Technical Symposium (MAMTECH 26)", type: "Symposium" },
                  { month: "NOV", day: "02", title: "Alumni Meet & Networking Dinner", type: "Alumni" },
                  { month: "NOV", day: "24", title: "Workshop on Advanced Machine Learning", type: "Workshop" }
                ].map((event, idx) => (
                  <div key={idx} className="flex gap-5 pb-6 border-b border-gray-100 last:border-0 last:pb-0 group cursor-pointer">
                    <div className="flex flex-col text-center shadow-sm shrink-0 w-16 group-hover:scale-105 transition-transform">
                      <div className="bg-brand-primary text-white text-xs font-bold py-1 rounded-t-md">{event.month}</div>
                      <div className="bg-gray-100 text-brand-primary text-2xl font-black py-2 rounded-b-md border border-t-0 border-gray-200">{event.day}</div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-1">{event.type}</p>
                      <h4 className="text-brand-text font-bold group-hover:text-brand-primary transition-colors leading-tight">{event.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Link href="/events" className="text-brand-secondary text-sm font-bold uppercase hover:underline">
                  View All Events
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
