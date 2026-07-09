import React from 'react';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

export default function PlacementPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Training & Placement Cell</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Bridging the gap between academia and industry. We ensure our students are well-prepared for successful careers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase size={32} />
          </div>
          <h3 className="text-3xl font-black text-text-dark mb-2">95%</h3>
          <p className="text-gray-500 font-medium">Placement Rate</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-3xl font-black text-text-dark mb-2">12 LPA</h3>
          <p className="text-gray-500 font-medium">Highest Package</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-3xl font-black text-text-dark mb-2">50+</h3>
          <p className="text-gray-500 font-medium">Top Recruiters</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award size={32} />
          </div>
          <h3 className="text-3xl font-black text-text-dark mb-2">1000+</h3>
          <p className="text-gray-500 font-medium">Offers Made</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-text-dark mb-8 text-center">Our Top Recruiters</h2>
        {/* Placeholder for recruiter logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-60">
           {/* Replace these divs with actual img tags in a real scenario */}
           {[...Array(12)].map((_, i) => (
             <div key={i} className="h-20 bg-gray-200 rounded-lg flex items-center justify-center">
               <span className="text-gray-400 font-bold">Logo {i+1}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
