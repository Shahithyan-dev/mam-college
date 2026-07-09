import React from 'react';
import { Building2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">About MAMCE</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 text-gray-700 text-lg leading-relaxed">
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
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 bg-brand-secondary/20 rounded-full flex items-center justify-center border-8 border-white shadow-xl">
            <Building2 size={80} className="text-brand-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
