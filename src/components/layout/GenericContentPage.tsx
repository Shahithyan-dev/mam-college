"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

interface GenericContentPageProps {
  title: string;
  data: Record<string, any>;
  pdfs?: { label: string; href: string }[];
  pdfTabLabel?: string;
}

function GenericContentInner({ title, data, pdfs = [], pdfTabLabel = 'Documents & Downloads' }: GenericContentPageProps) {
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab');

  const tabs = useMemo(() => [
    ...Object.keys(data).map(section => ({ label: section, id: section })),
    ...(pdfs.length > 0 ? [{ label: pdfTabLabel, id: 'Documents' }] : [])
  ], [data, pdfs, pdfTabLabel]);

  
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  useEffect(() => {
    if (tabQuery && tabs.some(t => t.id === tabQuery)) {
      
      setActiveTab(tabQuery);
    }
  }, [tabQuery, tabs]);

  const sidebarLinks = tabs.map(tab => ({
    label: tab.label,
    href: '#',
    isActive: activeTab === tab.id,
    onClick: () => setActiveTab(tab.id)
  }));

  const renderContent = () => {
    if (activeTab === 'Documents') {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">
            {pdfTabLabel}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pdfs.map((pdf, idx) => (
              <a 
                key={idx} 
                href={pdf.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 group-hover:text-brand-primary transition-colors">{pdf.label}</h4>
                  <p className="text-sm text-gray-500">PDF Document</p>
                </div>
                <Download size={20} className="text-gray-400 group-hover:text-brand-secondary" />
              </a>
            ))}
          </div>
        </motion.div>
      );
    }

    const contentData = data[activeTab];
    if (!contentData) return null;
    
    // Normalize to array of objects/strings
    let items: any[] = [];
    if (typeof contentData === 'string') {
      items = contentData.split('\n\n').filter(Boolean);
    } else if (Array.isArray(contentData)) {
      items = contentData;
    }

    return (
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3 }}
        className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <h2 className="text-3xl font-bold text-brand-primary border-b-2 border-brand-secondary pb-2 mb-6 inline-block">
          {activeTab}
        </h2>
        <div className="space-y-6">
          {items.map((item, i) => {
            if (typeof item === 'string') {
              if (item.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-bold text-brand-primary mt-6 mb-2">
                    {item.replace('### ', '')}
                  </h3>
                );
              }
              if (item.trim().match(/^[•-]/)) {
                return (
                  <div key={i} className="pl-4 border-l-2 border-brand-secondary my-2">
                    <p className="text-gray-700 leading-relaxed text-lg">{item.replace(/^[•-]/, '').trim()}</p>
                  </div>
                );
              }
              if (item.trim().startsWith('<') && !item.startsWith('### ')) {
                return <div key={i} className="html-content space-y-4" dangerouslySetInnerHTML={{ __html: item }} />;
              }
              if (item.startsWith('**') && item.endsWith('**')) {
                return <p key={i} className="text-gray-900 font-bold leading-relaxed text-lg whitespace-pre-wrap mt-4">{item.replace(/\*\*/g, '')}</p>;
              }
              return <p key={i} className="text-gray-700 leading-relaxed text-lg text-justify whitespace-pre-wrap">{item}</p>;
            } else if (item && item.type === 'table') {
              return (
                <div key={i} className="mt-8 mb-6">
                  {item.title && (
                    <h3 className="text-xl font-bold text-brand-primary mb-4">{item.title}</h3>
                  )}
                  <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#0b335c] text-white">
                          {item.headers.map((h: string, hi: number) => (
                            <th key={hi} className="p-4 font-bold border-b border-white/20 whitespace-pre-wrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {item.rows.map((row: string[], ri: number) => (
                          <tr key={ri} className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${ri % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                            {row.map((cell: string, ci: number) => (
                              <td key={ci} className="p-4 text-gray-700 font-medium whitespace-pre-wrap">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-0">
      <InnerPageLayout 
        title={title.toUpperCase()}
        breadcrumbTitle={activeTab === 'Documents' ? pdfTabLabel : activeTab}
        sidebarLinks={sidebarLinks}
      >
        {renderContent()}
      </InnerPageLayout>
    </div>
  );
}


export default function GenericContentPage(props: GenericContentPageProps) {
  return (
    <React.Suspense fallback={<div className="flex justify-center items-center h-[50vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div></div>}>
      <GenericContentInner {...props} />
    </React.Suspense>
  );
}
