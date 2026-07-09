import React from 'react';
import Link from 'next/link';
import { Laptop, Atom, ShieldCheck, Cpu, Leaf, HeartPulse, Building2, Globe } from 'lucide-react';

export default function CoursesPage() {
  const ugCourses = [
    { title: "B.E Computer Science and Engg", icon: <Laptop size={24} />, color: "text-blue-600 bg-blue-50" },
    { title: "B.E Electronics and Communication", icon: <Cpu size={24} />, color: "text-indigo-600 bg-indigo-50" },
    { title: "B.Tech AI and Data Science", icon: <Atom size={24} />, color: "text-purple-600 bg-purple-50" },
    { title: "B.E Cyber Security", icon: <ShieldCheck size={24} />, color: "text-green-600 bg-green-50" },
    { title: "B.E Civil Engineering", icon: <Building2 size={24} />, color: "text-orange-600 bg-orange-50" },
    { title: "B.Tech Agricultural Engineering", icon: <Leaf size={24} />, color: "text-emerald-600 bg-emerald-50" },
    { title: "B.E Biomedical Engineering", icon: <HeartPulse size={24} />, color: "text-red-600 bg-red-50" },
    { title: "B.Tech Information Technology", icon: <Globe size={24} />, color: "text-cyan-600 bg-cyan-50" },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Academic Programs</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Explore our diverse range of undergraduate and postgraduate courses designed to equip you with the skills for the future.</p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-text-dark mb-8 border-l-4 border-brand-primary pl-4">Undergraduate (UG) Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ugCourses.map((course, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${course.color}`}>
                {course.icon}
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2 leading-tight group-hover:text-brand-primary transition-colors">{course.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-text-dark mb-8 border-l-4 border-brand-primary pl-4">Postgraduate (PG) Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <h3 className="font-bold text-text-dark text-lg mb-2 leading-tight group-hover:text-brand-primary transition-colors">M.B.A Master of Business Admin</h3>
            <p className="text-gray-500 text-sm">Develop leadership and management skills for the corporate world.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <h3 className="font-bold text-text-dark text-lg mb-2 leading-tight group-hover:text-brand-primary transition-colors">M.C.A Master of Computer Apps</h3>
            <p className="text-gray-500 text-sm">Advanced computer applications and software engineering concepts.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <h3 className="font-bold text-text-dark text-lg mb-2 leading-tight group-hover:text-brand-primary transition-colors">M.E Environmental Engineering</h3>
            <p className="text-gray-500 text-sm">Specialized studies in environmental protection and sustainability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
