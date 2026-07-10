import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function AdmissionPage() {
  const sidebarLinks = [
    { label: "Eligibility", href: "/admission", isActive: true },
    { label: "Scholarships", href: "#" },
    { label: "Apply Now", href: "#" },
    { label: "For Admission Contact", href: "/contact" },
  ];

  return (
    <InnerPageLayout title="ADMISSION" sidebarLinks={sidebarLinks}>
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Eligibility Criteria</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start text-brand-text/90">
            <CheckCircle2 size={24} className="text-brand-secondary shrink-0" />
            <p className="leading-relaxed">Passed 10+2 examination with Physics, Chemistry, and Mathematics.</p>
          </div>
          <div className="flex gap-4 items-start text-brand-text/90">
            <CheckCircle2 size={24} className="text-brand-secondary shrink-0" />
            <p className="leading-relaxed">Minimum 45% marks (40% for reserved categories) in the above subjects taken together.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Application Process</h2>
        <ul className="space-y-6">
          <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">1</div>
            <div>
              <h3 className="font-bold text-lg text-text-dark">Online Registration</h3>
              <p className="text-brand-text/80 mt-1">Fill out the online application form with your academic details.</p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">2</div>
            <div>
              <h3 className="font-bold text-lg text-text-dark">Document Verification</h3>
              <p className="text-brand-text/80 mt-1">Submit your 10th, 12th marksheets and other required documents.</p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold mt-1">3</div>
            <div>
              <h3 className="font-bold text-lg text-text-dark">Counselling / Selection</h3>
              <p className="text-brand-text/80 mt-1">Attend the TNEA counselling session or direct walk-in admission interview.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-brand-primary text-white p-8 rounded-2xl shadow-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
        <p className="mb-8 text-brand-tertiary">Take the first step towards your engineering career today.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-brand-secondary/90 transition-colors">
          Contact Admission Desk <ArrowRight size={18} />
        </Link>
      </div>
    </InnerPageLayout>
  );
}
