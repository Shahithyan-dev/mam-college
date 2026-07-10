import React from 'react';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function PlacementPage() {
  const sidebarLinks = [
    { label: "Placement Statistics", href: "#" },
    { label: "Placement", href: "#" },
    { label: "Academic Training", href: "#" },
    { label: "Placement Training", href: "/placement", isActive: true },
    { label: "Competitive Examination Training", href: "#" },
    { label: "Foreign Languages Training", href: "#" },
    { label: "Industry Interaction", href: "#" },
    { label: "Entrepreneurship Development Cell", href: "#" },
  ];

  return (
    <InnerPageLayout title="PLACEMENTS" sidebarLinks={sidebarLinks}>
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Placement Training</h2>
        <p className="text-brand-text/90 leading-relaxed mb-8">
          Bridging the gap between academia and industry. We ensure our students are well-prepared for successful careers through comprehensive training programs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-brand-base p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-2">95%</h3>
            <p className="text-gray-500 font-medium">Placement Rate</p>
          </div>
          
          <div className="bg-brand-base p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-2">12 LPA</h3>
            <p className="text-gray-500 font-medium">Highest Package</p>
          </div>
          
          <div className="bg-brand-base p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-2">250+</h3>
            <p className="text-gray-500 font-medium">Recruiting Partners</p>
          </div>
          
          <div className="bg-brand-base p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-3xl font-black text-text-dark mb-2">500+</h3>
            <p className="text-gray-500 font-medium">Offers Generated</p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
