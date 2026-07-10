import React from 'react';
import { BookOpen } from 'lucide-react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function CoursesPage() {
  const sidebarLinks = [
    { label: "U.G Programmes", href: "/courses", isActive: true },
    { label: "P.G Programmes", href: "#" },
  ];

  return (
    <InnerPageLayout title="ACADEMICS" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        
        {/* UG Programs Header */}
        <div className="bg-brand-primary p-4 text-white flex justify-between items-center cursor-pointer">
           <h3 className="text-xl font-medium">U.G Programmes</h3>
           <BookOpen size={20} />
        </div>
        
        {/* UG Programs List */}
        <div className="flex flex-col">
          {[
            "B.E - Aeronautical Engineering",
            "B.Tech - Artificial Intelligence and Data Science",
            "B.E - Bio-Medical Engineering",
            "B.E - Computer Science and Engineering",
            "B.E - Electrical and Electronics Engineering",
            "B.E - Electronics and Communication Engineering",
            "B.Tech - Information Technology",
            "B.E - Mechanical Engineering",
            "B.E - Mechatronics Engineering"
          ].map((course, idx) => (
            <div key={idx} className="p-4 border-b border-gray-100 last:border-0 hover:bg-brand-base transition-colors text-brand-text/90 text-lg">
              {course}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        
        {/* PG Programs Header */}
        <div className="bg-brand-primary p-4 text-white flex justify-between items-center cursor-pointer">
           <h3 className="text-xl font-medium">P.G Programmes</h3>
           <BookOpen size={20} />
        </div>
        
        {/* PG Programs List */}
        <div className="flex flex-col bg-gray-100">
          {[
            "M.E - Computer Integrated Manufacturing",
            "M.E - Power Electronics and Drives"
          ].map((course, idx) => (
            <div key={idx} className="p-4 border-b border-gray-200 last:border-0 hover:bg-white transition-colors text-brand-text/90 text-lg">
              {course}
            </div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}
