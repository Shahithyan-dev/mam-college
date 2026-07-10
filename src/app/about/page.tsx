import React from 'react';
import { Building2 } from 'lucide-react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function AboutPage() {
  const sidebarLinks = [
    { label: "Overview", href: "/about", isActive: true },
    { label: "Vision, Mission", href: "#" },
    { label: "MAMSE Milestones", href: "/history" },
    { label: "Administration", href: "/admin" },
    { label: "Code of Conduct", href: "#" },
    { label: "Awards and Recognition", href: "#" },
  ];

  return (
    <InnerPageLayout title="ABOUT US" sidebarLinks={sidebarLinks}>
      <div className="space-y-6 text-brand-text/90 text-lg leading-relaxed bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
          <div className="w-16 h-16 bg-brand-tertiary/20 rounded-full flex items-center justify-center">
            <Building2 size={32} className="text-brand-primary" />
          </div>
          <h2 className="text-3xl font-bold text-brand-primary">Overview</h2>
        </div>
        
        <p>
          M.A.M. College of Engineering (MAMCE), Trichy was established in 1998 with the vision of providing high-quality technical education to the students of rural areas and empowering them with the knowledge and skills needed for a successful career.
        </p>
        <p>
          Approved by AICTE, New Delhi, and affiliated to Anna University, Chennai, MAMCE offers a wide range of undergraduate and postgraduate programs in various engineering disciplines.
        </p>
        <p>
          With state-of-the-art infrastructure, highly qualified faculty, and a commitment to excellence, the institution strives to create an environment that encourages innovation, research, and holistic development.
        </p>
      </div>
    </InnerPageLayout>
  );
}
