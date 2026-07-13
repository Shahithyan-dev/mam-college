"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function FloatingSidebar() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to submit enquiry');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred. Please try again.');
    }
  };

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
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-6">Your enquiry has been submitted successfully. Our admission team will contact you shortly.</p>
                  <button 
                    onClick={() => setShowEnquiry(false)}
                    className="bg-brand-primary text-white px-6 py-2 rounded-md hover:bg-brand-primary/90 font-bold tracking-wider uppercase text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-bold text-brand-text mb-1">Full Name *</label>
                    <input required name="name" type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary" placeholder="Enter your name" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-brand-text mb-1">Mobile Number *</label>
                      <input required name="mobile" type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary" placeholder="Phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-text mb-1">Email Address</label>
                      <input name="email" type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary" placeholder="Email" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-text mb-1">Programme Interested In *</label>
                    <select required name="programme" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary text-brand-text">
                      <option value="">Select Programme</option>
                      <optgroup label="B.Tech Programmes">
                        <option value="B.Tech - Artificial Intelligence and Data Science">B.Tech - AI & Data Science</option>
                        <option value="B.Tech - Information Technology">B.Tech - Information Technology</option>
                        <option value="B.Tech - Agricultural Engineering">B.Tech - Agricultural Engineering</option>
                      </optgroup>
                      <optgroup label="B.E Programmes">
                        <option value="B.E - Aeronautical Engineering">B.E - Aeronautical Engineering</option>
                        <option value="B.E - Bio-Medical Engineering">B.E - Bio-Medical Engineering</option>
                        <option value="B.E - Computer Science and Engineering">B.E - Computer Science and Engineering</option>
                        <option value="B.E - Electrical and Electronics Engineering">B.E - Electrical & Electronics Eng.</option>
                        <option value="B.E - Electronics and Communication Engineering">B.E - Electronics & Comm. Eng.</option>
                        <option value="B.E - Mechanical Engineering">B.E - Mechanical Engineering</option>
                        <option value="B.E - Mechatronics Engineering">B.E - Mechatronics Engineering</option>
                      </optgroup>
                      <optgroup label="Post Graduate Programmes">
                        <option value="Master of Business Administration">Master of Business Administration</option>
                        <option value="Master of Computer Applications">Master of Computer Applications</option>
                        <option value="M.E - Computer Science and Engineering">M.E - Computer Science and Engineering</option>
                        <option value="M.E - Computer Integrated Manufacturing">M.E - Computer Integrated Manufacturing</option>
                        <option value="M.E - Power Electronics and Drives">M.E - Power Electronics and Drives</option>
                        <option value="M.E - Environmental Engineering">M.E - Environmental Engineering</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-text mb-1">Your Message</label>
                    <textarea name="message" rows={3} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full bg-brand-secondary text-brand-primary font-black uppercase tracking-wider py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
