"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function FloatingSidebar() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hidden md:flex fixed right-0 top-1/3 z-50 flex-col items-end shadow-2xl">
        <button 
          onClick={() => setShowEnquiry(true)}
          className="bg-brand-secondary text-white font-bold text-sm tracking-[0.2em] uppercase py-6 px-3 hover:bg-brand-secondary/90 transition-colors border-l-2 border-white/20"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          ENQUIRE NOW
        </button>
        <Link 
          href="/admission" 
          className="bg-brand-primary text-white font-bold text-sm tracking-[0.2em] uppercase py-6 px-3 hover:bg-brand-primary/90 transition-colors border-l-2 border-white/20"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          ADMISSIONS
        </Link>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="bg-brand-primary text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold">Admission Enquiry</h3>
              <button 
                onClick={() => setShowEnquiry(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Enquiry Submitted Successfully!"); setShowEnquiry(false); }}>
                <div>
                  <label className="block text-sm font-bold text-brand-text mb-1">Full Name *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary" placeholder="Enter your name" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-text mb-1">Mobile Number *</label>
                    <input required type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary" placeholder="Phone" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-text mb-1">Email Address</label>
                    <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary" placeholder="Email" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-text mb-1">Programme Interested In *</label>
                  <select required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary text-brand-text">
                    <option value="">Select Programme</option>
                    <option value="btech-ai">B.Tech - AI & Data Science</option>
                    <option value="be-cse">B.E - Computer Science</option>
                    <option value="be-aero">B.E - Aeronautical</option>
                    <option value="be-biomed">B.E - Bio-Medical</option>
                    <option value="pg">Post Graduate Programmes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-text mb-1">Your Message</label>
                  <textarea rows={3} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-brand-secondary text-brand-primary font-black uppercase tracking-wider py-3 rounded-md hover:opacity-90 transition-opacity">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
