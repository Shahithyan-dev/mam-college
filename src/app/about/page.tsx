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
          M.A.M. School of Engineering, Siruganur, Tiruchirappalli is patronized by Maluk Educational Health and Charitable Trust. The trust has committed itself to the cause of education and pays special attention to impart technical education to the socially, educationally and economically backward communities.
        </p>
        <p>
          The college was established on July 2010 with the approval of Tamilnadu Government and All India Council for Technical Education and is affiliated to Anna University, Chennai. In this competitive environment in the engineering education, MAMSE proves its commitment to provide quality education to their students.
        </p>

        <h3 className="text-2xl font-bold text-brand-primary mt-8 mb-4">VISION</h3>
        <p>
          To emerge as a Premier institute by empowering the students with competent knowledge, employable skills and research culture to satisfy the needs of the industry and society.
        </p>

        <h3 className="text-2xl font-bold text-brand-primary mt-8 mb-4">MISSION</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>To Inculcate conducive and innovative teaching learning environment</li>
          <li>To equip the students with value and ethical based training to enhance the employable skills</li>
          <li>To promote continuous learning and to facilitate exchange of innovative ideas through industry and institute collaborations</li>
          <li>To imbibe communication skills, leadership skills, entrepreneurial skills and human values among the students.</li>
        </ul>
      </div>
    </InnerPageLayout>
  );
}
