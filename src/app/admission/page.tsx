import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AdmissionPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Admissions 2026-2027</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Join a vibrant community of innovators and shape your future with our industry-aligned engineering programs.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Admission Process */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-text-dark mb-6 border-b-2 border-brand-secondary/50 pb-2 inline-block">Application Process</h2>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">1</div>
              <div>
                <h3 className="font-bold text-lg text-text-dark">Online Registration</h3>
                <p className="text-gray-600 mt-1">Fill out the online application form with your academic details.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">2</div>
              <div>
                <h3 className="font-bold text-lg text-text-dark">Document Verification</h3>
                <p className="text-gray-600 mt-1">Submit your 10th, 12th marksheets and other required documents.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">3</div>
              <div>
                <h3 className="font-bold text-lg text-text-dark">Counselling / Selection</h3>
                <p className="text-gray-600 mt-1">Attend the TNEA counselling session or direct walk-in admission interview.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">4</div>
              <div>
                <h3 className="font-bold text-lg text-text-dark">Enrollment</h3>
                <p className="text-gray-600 mt-1">Pay the initial admission fees and secure your seat.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Why Choose Us & CTA */}
        <div className="space-y-8">
          <div className="bg-brand-secondary/10 p-8 rounded-2xl border border-brand-secondary/30">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Eligibility Criteria</h2>
            <div className="space-y-3">
              <div className="flex gap-3 items-center text-gray-700">
                <CheckCircle2 size={20} className="text-brand-primary" />
                <span>Passed 10+2 examination with Physics, Chemistry, and Mathematics.</span>
              </div>
              <div className="flex gap-3 items-center text-gray-700">
                <CheckCircle2 size={20} className="text-brand-primary" />
                <span>Minimum 45% marks (40% for reserved categories) in the above subjects taken together.</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-primary text-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="mb-8 text-brand-secondary">Take the first step towards your engineering career today.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Contact Admission Desk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
