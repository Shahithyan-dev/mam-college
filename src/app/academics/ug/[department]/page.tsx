"use client";
import { useSearchParams } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import departmentsData from '@/data/departments.json';
import { motion } from 'framer-motion';

export default function UGDepartmentPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <UGDepartmentPageInner  />
    </React.Suspense>
  );
}

function UGDepartmentPageInner() {
  const params = useParams();
  const departmentKey = params.department as string;
  
  // @ts-ignore
  const departmentData = departmentsData.ug[departmentKey];
  
  const [activeTab, setActiveTab] = useState('Introduction');
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab');

  React.useEffect(() => {
    if (tabQuery) {
      setActiveTab(tabQuery);
    }
  }, [tabQuery]);

  const tabs = useMemo(() => {
    if (!departmentData || !departmentData.sections) return [];
    
    // Sort tabs logically matching the user's 21 folders
    const sections = Object.keys(departmentData.sections);
    const logicalOrder = [
      'Introduction',
      'Objectives',
      'Outcomes',
      'Opportunities',
      'Lab Facilities',
      'Faculty',
      'Student_s Achievements',
      'Faculty Achievements',
      'Seminars and Conferences',
      'Internships',
      'Value Added Courses - Certificate Courses',
      'Faculty Publications',
      'Student Publications',
      'Question Bank',
      'Innovative Projects',
      'Books Published',
      'Research Consultancy and Patents',
      'Invited Talk',
      'Professional Bodies',
      'MOUs',
      'Placements',
      'Prominent Alumni'
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
          {Array.isArray(contentText) ? (
            contentText.map((htmlString: string, idx: number) => (
              <div key={idx} dangerouslySetInnerHTML={{ __html: htmlString }} className="html-content-container" />
            ))
          ) : (
            <div dangerouslySetInnerHTML={{ __html: contentText }} className="html-content-container" />
          )}
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
