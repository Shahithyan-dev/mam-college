import React from 'react';
import { History, BookOpen, GraduationCap, Award, Building } from 'lucide-react';

export default function HistoryPage() {
  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description: "M.A.M. College of Engineering was established with a vision to provide technical education to rural students.",
      icon: <Building className="text-brand-primary" size={24} />
    },
    {
      year: "2002",
      title: "First Batch Graduation",
      description: "The first batch of engineering students successfully graduated, marking a significant milestone for the institution.",
      icon: <GraduationCap className="text-brand-primary" size={24} />
    },
    {
      year: "2008",
      title: "Postgraduate Programs Introduced",
      description: "Expanded academic offerings by introducing M.E., M.B.A., and M.C.A. programs.",
      icon: <BookOpen className="text-brand-primary" size={24} />
    },
    {
      year: "2015",
      title: "NAAC Accreditation",
      description: "Received accreditation from NAAC, recognizing the institution's commitment to quality education.",
      icon: <Award className="text-brand-primary" size={24} />
    },
    {
      year: "Present",
      title: "Continuing Excellence",
      description: "Over two decades of excellence, continuing to adapt to modern educational needs and producing top-tier engineers.",
      icon: <History className="text-brand-primary" size={24} />
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Our History</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-brand-text/80 max-w-2xl mx-auto">A legacy of excellence in engineering education spanning over two decades.</p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-brand-secondary/30 -translate-x-1/2"></div>

        <div className="space-y-12 relative">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline dot */}
              <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white rounded-full border-4 border-brand-secondary flex items-center justify-center -translate-x-1/2 shadow-lg z-10">
                {milestone.icon}
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                  <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/20 text-brand-primary text-sm font-bold tracking-wider mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold text-text-dark mb-3">{milestone.title}</h3>
                  <p className="text-brand-text/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
