import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function CoursesPage() {
  const sidebarLinks = [
    { label: "U.G Programmes", href: "/courses", isActive: true },
    { label: "P.G Programmes", href: "/courses#pg" },
  ];

  const ugCourses = [
    { name: "B.E - Aeronautical Engineering", slug: "aeronautical-engineering" },
    { name: "B.Tech - Artificial Intelligence and Data Science", slug: "artificial-intelligence-and-data-science" },
    { name: "B.E - Bio-Medical Engineering", slug: "biomedical-engineering" },
    { name: "B.E - Computer Science and Engineering", slug: "computer-science-and-engineering" },
    { name: "B.E - Electrical and Electronics Engineering", slug: "electrical-and-electronics-engineering" },
    { name: "B.E - Electronics and Communication Engineering", slug: "electronics-and-communication-engineering" },
    { name: "B.Tech - Information Technology", slug: "information-technology" },
    { name: "B.E - Mechanical Engineering", slug: "mechanical-engineering" },
    { name: "B.E - Mechatronics Engineering", slug: "mechatronics-engineering" }
  ];

  const pgCourses = [
    { name: "M.E - Computer Integrated Manufacturing", slug: "computer-integrated-manufacturing" },
    { name: "M.E - Power Electronics and Drives", slug: "power-electronics-and-drives" }
  ];

  return (
    <div className="pt-0">
      <InnerPageLayout title="ACADEMICS" sidebarLinks={sidebarLinks}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8" id="ug">
          
          {/* UG Programs Header */}
          <div className="bg-brand-primary p-4 text-white flex justify-between items-center cursor-pointer">
            <h3 className="text-xl font-medium">U.G Programmes</h3>
            <BookOpen size={20} />
          </div>
          
          {/* UG Programs List */}
          <div className="flex flex-col">
            {ugCourses.map((course, idx) => (
              <Link 
                key={idx} 
                href={`/academics/ug/${course.slug}`}
                className="p-4 border-b border-gray-100 last:border-0 hover:bg-brand-base transition-colors text-brand-text/90 text-lg flex justify-between items-center group"
              >
                <span className="group-hover:text-brand-primary transition-colors font-medium">{course.name}</span>
                <ArrowRight size={18} className="text-brand-secondary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8" id="pg">
          
          {/* PG Programs Header */}
          <div className="bg-brand-primary p-4 text-white flex justify-between items-center cursor-pointer">
            <h3 className="text-xl font-medium">P.G Programmes</h3>
            <BookOpen size={20} />
          </div>
          
          {/* PG Programs List */}
          <div className="flex flex-col bg-gray-50/50">
            {pgCourses.map((course, idx) => (
              <Link 
                key={idx} 
                href={`/academics/pg/${course.slug}`}
                className="p-4 border-b border-gray-200 last:border-0 hover:bg-white transition-colors text-brand-text/90 text-lg flex justify-between items-center group"
              >
                <span className="group-hover:text-brand-primary transition-colors font-medium">{course.name}</span>
                <ArrowRight size={18} className="text-brand-secondary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </InnerPageLayout>
    </div>
  );
}
