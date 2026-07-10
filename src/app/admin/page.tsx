import React from 'react';
import { User, Users } from 'lucide-react';

export default function AdminPage() {
  const management = [
    {
      name: "Dr. M. A. Maluk Mohamed",
      role: "Chairman",
      message: "Our aim is to provide excellent education, training, and research facilities to produce globally competent and ethically strong professionals."
    },
    {
      name: "Mrs. Fathima Bathool Maluk",
      role: "Secretary & CEO",
      message: "We are committed to nurturing innovation, creativity, and leadership skills among our students to help them succeed in all spheres of life."
    }
  ];

  const administration = [
    { name: "Dr. S. Rajasekaran", role: "Principal" },
    { name: "Dr. K. Sridharan", role: "Vice Principal" },
    { name: "Mr. T. Murugesan", role: "Administrative Officer" },
    { name: "Mrs. V. Lakshmi", role: "Controller of Examinations" }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Administration</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-brand-text/80 max-w-2xl mx-auto">Meet the visionary leaders and dedicated administrators who guide MAMCE towards excellence.</p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-dark mb-10 text-center flex justify-center items-center gap-3">
          <AwardIcon /> Management
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {management.map((person, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center relative pt-16">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-brand-secondary/20 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                <User size={40} className="text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-2">{person.name}</h3>
              <p className="text-brand-secondary font-bold text-lg mb-6">{person.role}</p>
              <div className="relative">
                <span className="text-4xl text-gray-200 absolute -top-4 -left-2 leading-none font-serif">"</span>
                <p className="text-brand-text/80 italic leading-relaxed px-4">{person.message}</p>
                <span className="text-4xl text-gray-200 absolute -bottom-6 -right-2 leading-none font-serif">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-base rounded-3xl p-10 md:p-16 border border-gray-100">
        <h2 className="text-3xl font-bold text-text-dark mb-10 text-center flex justify-center items-center gap-3">
          <Users className="text-brand-primary" size={32} /> Key Administrators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {administration.map((admin, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-secondary/30 transition-colors">
                <User size={24} className="text-brand-primary" />
              </div>
              <h4 className="font-bold text-lg text-text-dark mb-1">{admin.name}</h4>
              <p className="text-sm text-gray-500 font-medium">{admin.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
