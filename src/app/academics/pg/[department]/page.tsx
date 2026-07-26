"use client";

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import departmentsData from '@/data/departments.json';
import { motion } from 'framer-motion';

export default function PGDepartmentPage() {
  const params = useParams();
  const departmentKey = params.department as string;
  
  // @ts-ignore
  const departmentData = departmentsData.pg[departmentKey];
  
  const [activeTab, setActiveTab] = useState('Introduction');

  const tabs = useMemo(() => {
    if (!departmentData || !departmentData.sections) return [];
    
    // Sort tabs logically, Introduction first
    const sections = Object.keys(departmentData.sections);
    const sorted = sections.sort((a, b) => {
      if (a === 'Introduction') return -1;
      if (b === 'Introduction') return 1;
      return a.localeCompare(b);
    });
    
    return sorted.map(section => ({
      label: section,
      id: section
    }));
  }, [departmentData]);

  if (!departmentData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl text-gray-500">Department Not Found</h1>
      </div>
    );
  }

  const sidebarLinks = tabs.map(tab => ({
    label: tab.label,
    href: '#',
    isActive: activeTab === tab.id,
    onClick: () => setActiveTab(tab.id)
  }));

  // Ensure activeTab is valid, fallback to first tab
  const validActiveTab = tabs.find(t => t.id === activeTab) ? activeTab : (tabs[0]?.id || '');

  const renderContent = () => {
    if (!validActiveTab) return null;
    
    const contentText = departmentData.sections[validActiveTab];
    if (!contentText) return null;
    
    // Simple parsing to split by newlines for paragraphs
    const paragraphs = contentText.split('\n\n').filter(Boolean);

    return (
      <motion.div 
        key={validActiveTab}
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3 }}
        className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">
          {validActiveTab}
        </h2>
        <div className="space-y-4">
          {paragraphs.map((para: string, i: number) => {
            // Check if it looks like a list item
            if (para.trim().match(/^[0-9]+[.)]|^[•-]/)) {
              return (
                <div key={i} className="pl-4 border-l-2 border-brand-secondary">
                  <p className="text-gray-700 leading-relaxed text-lg">{para.replace(/^[0-9]+[.)]|^[•-]/, '').trim()}</p>
                </div>
              );
            }
            return <p key={i} className="text-gray-700 leading-relaxed text-lg text-justify">{para}</p>;
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <InnerPageLayout 
      title={`M.E./M.Tech. ${departmentData.name}`}
      breadcrumbTitle={validActiveTab}
      sidebarLinks={sidebarLinks}
    >
      {renderContent()}
    </InnerPageLayout>
  );
}
