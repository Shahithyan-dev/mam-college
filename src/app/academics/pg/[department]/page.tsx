"use client";
import { useSearchParams } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import departmentsData from '@/data/departments.json';
import { motion } from 'framer-motion';

export default function PGDepartmentPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PGDepartmentPageInner  />
    </React.Suspense>
  );
}

function PGDepartmentPageInner() {
  const params = useParams();
  const departmentKey = params.department as string;
  
  // @ts-ignore
  const departmentData = departmentsData.pg[departmentKey];
  
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
    
    const sections = Object.keys(departmentData.sections);
    const sorted = sections.sort((a, b) => {
      const numA = parseInt(a.match(/^\d+/)?.[0] || '999', 10);
      const numB = parseInt(b.match(/^\d+/)?.[0] || '999', 10);
      
      if (numA !== numB) {
        return numA - numB;
      }
      return a.localeCompare(b);
    });
    
    return sorted.map(section => ({
      label: section.replace(/^\d+\s*/, ''), // Strip the number from the UI label to make it cleaner
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
      title={`M.E./M.Tech. ${departmentData.name}`}
      breadcrumbTitle={validActiveTab}
      sidebarLinks={sidebarLinks}
    >
      {renderContent()}
    </InnerPageLayout>
  );
}
