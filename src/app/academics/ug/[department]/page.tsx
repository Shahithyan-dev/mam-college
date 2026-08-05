"use client";

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import departmentsData from '@/data/departments.json';
import { motion } from 'framer-motion';

export default function UGDepartmentPage() {
  const params = useParams();
  const departmentKey = params.department as string;
  
  // @ts-ignore
  const departmentData = departmentsData.ug[departmentKey];
  
  const [activeTab, setActiveTab] = useState('Introduction');

  const tabs = useMemo(() => {
    if (!departmentData || !departmentData.sections) return [];
    
    // Sort tabs logically, Introduction first
    const sections = Object.keys(departmentData.sections);
    const logicalOrder = [
      'Introduction',
      'Objectives',
      'Outcomes',
      'Lab Facilities',
      'Faculty',
      'Student_s Achievements',
      'Faculty Achievements',
      'Faculty Publications',
      'Student Publications',
      'Books Published',
      'Invited Talk',
      'Seminars and Conferences',
      'Placements',
      'Innovative Projects',
      'Internships',
      'MOUs',
      'Value Added Courses - Certificate Courses',
      'Professional Bodies',
      'Opportunities',
      'Question Bank',
      'Research Consultancy and Patents'
    ];

    const sorted = sections.sort((a, b) => {
      const indexA = logicalOrder.indexOf(a);
      const indexB = logicalOrder.indexOf(b);
      
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
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
    
    // Smart Parsing for raw text
    const rawParagraphs = contentText.split('\n\n').map(p => p.trim()).filter(Boolean);
    const elements: { type: string, key?: string, val?: string, content?: string }[] = [];
    
    let i = 0;
    while (i < rawParagraphs.length) {
      if (i + 1 < rawParagraphs.length && rawParagraphs[i+1] === ':') {
        const key = rawParagraphs[i];
        const val = i + 2 < rawParagraphs.length ? rawParagraphs[i+2] : '';
        elements.push({ type: 'kv', key, val });
        i += 3;
      } else {
        elements.push({ type: 'text', content: rawParagraphs[i] });
        i++;
      }
    }

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
          {elements.map((el, idx) => {
            if (el.type === 'kv') {
              return (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded transition-colors">
                  <span className="font-bold text-brand-primary sm:w-1/3 shrink-0 text-sm md:text-base">{el.key}</span>
                  <span className="hidden sm:inline-block mr-4 text-brand-secondary">:</span>
                  <span className="text-gray-700 flex-1 text-sm md:text-base">{el.val}</span>
                </div>
              );
            } else if (el.type === 'text' && el.content) {
              if (el.content.match(/^[0-9]+[.)]|^[•-]/)) {
                return (
                  <div key={idx} className="pl-4 border-l-2 border-brand-secondary my-2 bg-gray-50/50 p-2 rounded-r">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{el.content.replace(/^[0-9]+[.)]|^[•-]/, '').trim()}</p>
                  </div>
                );
              }
              if (el.content === ':') return null;
              
              if (el.content.trim().startsWith('<table') || el.content.trim().startsWith('<div')) {
                return <div key={idx} className="my-4 w-full" dangerouslySetInnerHTML={{ __html: el.content }} />;
              }
              
              return <p key={idx} className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">{el.content}</p>;
            }
            return null;
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <InnerPageLayout 
      title={`B.E./B.Tech. ${departmentData.name}`}
      breadcrumbTitle={validActiveTab}
      sidebarLinks={sidebarLinks}
    >
      {renderContent()}
    </InnerPageLayout>
  );
}
