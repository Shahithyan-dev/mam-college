"use client";

import React, { useState } from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import aboutData from '@/data/about.json';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { label: 'Overview', id: 'Overview' },
    { label: 'Vision & Mission', id: 'Vision & Mission' },
    { label: 'Milestones', id: 'Milestones' },
    { label: "Correspondent's Message", id: "Correspondent's Message" },
    { label: "Principal's Message", id: "Principal's Message" },
    { label: 'Governing Body', id: 'Governing Body' },
  ];

  const sidebarLinks = tabs.map(tab => ({
    label: tab.label,
    href: '#',
    isActive: activeTab === tab.id,
    onClick: () => setActiveTab(tab.id)
  }));

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
              <div className="w-16 h-16 bg-brand-tertiary/20 rounded-full flex items-center justify-center shrink-0">
                <Building2 size={32} className="text-brand-primary" />
              </div>
              <h2 className="text-3xl font-bold text-brand-primary">Overview</h2>
            </div>
            {aboutData.overview.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
            ))}
          </motion.div>
        );
      case 'Vision & Mission':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg italic bg-gray-50 p-6 border-l-4 border-brand-secondary rounded-r-lg">
                "{aboutData.vision}"
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">Our Mission</h2>
              <ul className="space-y-4">
                {aboutData.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold text-xl mt-1">•</span>
                    <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      case 'Milestones':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-8 inline-block">MAMSE Milestones</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-secondary before:to-transparent">
              {aboutData.milestones.map((milestone, i) => {
                const year = milestone.match(/^\d{4}/)?.[0] || '';
                const text = milestone.replace(/^\d{4}/, '').trim();
                if (!year) return null;
                return (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-primary text-brand-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-3 h-3 bg-brand-secondary rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-md hover:-translate-y-1 transition-transform">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-brand-primary text-xl">{year}</div>
                      </div>
                      <div className="text-gray-700 leading-relaxed">{text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      case "Correspondent's Message":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">Correspondent's Message</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="bg-gray-100 w-full aspect-[3/4] rounded-xl flex items-center justify-center overflow-hidden shadow-lg border-4 border-white">
                  {/* Photo Placeholder */}
                  <span className="text-gray-400 font-bold">Correspondent Photo</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                {aboutData.correspondentMessage.slice(3, -3).map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg text-justify">{para}</p>
                ))}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-bold text-brand-primary text-xl">{aboutData.correspondentMessage[0]}</p>
                  <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mt-1">{aboutData.correspondentMessage[1]}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "Principal's Message":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">Principal's Message</h2>
             <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="bg-gray-100 w-full aspect-[3/4] rounded-xl flex items-center justify-center overflow-hidden shadow-lg border-4 border-white">
                  <span className="text-gray-400 font-bold">Principal Photo</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                {aboutData.principalMessage.slice(0, -1).map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg text-justify">{para}</p>
                ))}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-bold text-brand-primary text-xl">Dr. P. Ranjith Kumar</p>
                  <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mt-1">Principal</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'Governing Body':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">Governing Body</h2>
            <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b335c] text-white">
                    <th className="p-4 font-bold border-b border-white/20 w-16 text-center">S.No</th>
                    <th className="p-4 font-bold border-b border-white/20">Name & Designation</th>
                    <th className="p-4 font-bold border-b border-white/20">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center font-bold text-gray-500">1</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Al Haj M.A. Peer Mohammed</div><div className="text-sm text-gray-500">Correspondent, M.A.M. School of Engineering</div></td>
                    <td className="p-4 text-gray-700 font-medium">Chair Person</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="p-4 text-center font-bold text-gray-500">2</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Ms. Khairunisa Peer Mohammed</div><div className="text-sm text-gray-500">CEO, M.A.M. School of Engineering</div></td>
                    <td className="p-4 text-gray-700 font-medium">Management Nominee</td>
                  </tr>
                   <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center font-bold text-gray-500">3</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Dr. P. Ranjith Kumar</div><div className="text-sm text-gray-500">Principal, M.A.M. School of Engineering</div></td>
                    <td className="p-4 text-gray-700 font-medium">Member Secretary</td>
                  </tr>
                   <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="p-4 text-center font-bold text-gray-500">4</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Dr. R. Srinivasan</div><div className="text-sm text-gray-500">Former Member Secretary, Tamil Nadu State Council for Science and Technology</div></td>
                    <td className="p-4 text-gray-700 font-medium">Management Nominee</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center font-bold text-gray-500">5</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Dr. V. Anadakrishnan</div><div className="text-sm text-gray-500">Professor, Dept. of Production Engg, NIT Trichy</div></td>
                    <td className="p-4 text-gray-700 font-medium">Educationalist nominated by Management</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="p-4 text-center font-bold text-gray-500">6</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Shri. V. Ramachandran</div><div className="text-sm text-gray-500">Senior Deputy General Manager, Kothari Sugars</div></td>
                    <td className="p-4 text-gray-700 font-medium">Management Nominee</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center font-bold text-gray-500">7</td>
                    <td className="p-4"><div className="font-bold text-brand-primary">Dr. P. Lilly Florence</div><div className="text-sm text-gray-500">Dean – S&H, M.A.M. School of Engineering</div></td>
                    <td className="p-4 text-gray-700 font-medium">Teachers of the College</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-[#0b335c]/5 rounded-xl border border-[#0b335c]/10">
              <h3 className="font-bold text-xl text-brand-primary mb-4">Deans</h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="font-bold text-gray-800">Prof. Dr. M. Pandian</div>
                  <div className="text-sm text-brand-secondary font-medium">Dean – Faculty of Mechanical Engineering</div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="font-bold text-gray-800">Prof. Dr. M. Paneer Selvam</div>
                  <div className="text-sm text-brand-secondary font-medium">Dean – Student Affairs</div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="font-bold text-gray-800">Prof. G. Thiraviya Suyambu</div>
                  <div className="text-sm text-brand-secondary font-medium">Dean – Academics</div>
                </li>
              </ul>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <InnerPageLayout 
      title="ABOUT US"
      breadcrumbTitle={activeTab}
      sidebarLinks={sidebarLinks}
    >
      {renderContent()}
    </InnerPageLayout>
  );
}
