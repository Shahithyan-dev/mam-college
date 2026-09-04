import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import { Download, FileText } from 'lucide-react';
import { mandatoryDisclosureHtml } from '@/data/mandatoryDisclosureHtml';

export default function MandatoryDisclosurePage() {
  return (
    <InnerPageLayout 
      title="Mandatory Disclosure" 
      breadcrumbTitle="Mandatory Disclosure"
      sidebarLinks={[]}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-2">Mandatory Disclosure</h2>
              <p className="text-gray-600">Official Mandatory Disclosure document of M.A.M. School of Engineering.</p>
            </div>
            
            <a 
              href="/Mandatory Disclosure.docx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-brand-primary transition-colors whitespace-nowrap shadow-sm hover:shadow"
            >
              <Download size={20} />
              Download DOCX
            </a>
          </div>
          
          {/* HTML Content Viewer */}
          <div className="w-full bg-white text-gray-800 
            [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-brand-primary [&_h1]:mb-6 [&_h1]:mt-8
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-primary [&_h2]:mb-4 [&_h2]:mt-6
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand-secondary [&_h3]:mb-3 [&_h3]:mt-5
            [&_p]:mb-4 [&_p]:leading-relaxed
            [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
            [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6
            [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-100 [&_th]:p-3 [&_th]:font-semibold [&_th]:text-left
            [&_td]:border [&_td]:border-gray-300 [&_td]:p-3
            [&_img]:max-w-full [&_img]:h-auto [&_img]:my-4 [&_img]:rounded
            [&_strong]:font-semibold
          ">
            <div dangerouslySetInnerHTML={{ __html: mandatoryDisclosureHtml }} />
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
