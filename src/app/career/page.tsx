import React from 'react';
import { Send } from 'lucide-react';

export default function CareerPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Careers at MAMCE</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Join our faculty and staff to help shape the future of engineering education.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-bold text-text-dark mb-6">Current Openings</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
              <div>
                <h3 className="text-xl font-bold text-brand-primary">Assistant Professor (CSE)</h3>
                <p className="text-gray-500 mt-1">Department of Computer Science and Engineering</p>
                <div className="mt-3 flex gap-4 text-sm text-gray-600">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Full-time</span>
                  <span className="text-red-500 font-semibold">Last Date: 11/07/2026</span>
                </div>
              </div>
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                Apply Now <Send size={16} />
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
              <div>
                <h3 className="text-xl font-bold text-brand-primary">Estate Officer (EO)</h3>
                <p className="text-gray-500 mt-1">Administration / Facility Management</p>
                <div className="mt-3 flex gap-4 text-sm text-gray-600">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Full-time</span>
                  <span className="text-red-500 font-semibold">Last Date: 12/07/2026</span>
                </div>
              </div>
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                Apply Now <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-xl text-center">
          <p className="text-gray-600">Don't see a position that matches your profile? Send your resume to <a href="mailto:hr@mamce.org" className="text-brand-primary font-bold hover:underline">hr@mamce.org</a> and we will contact you if a relevant position opens up.</p>
        </div>
      </div>
    </div>
  );
}
