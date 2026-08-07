import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import { Download, FileText } from 'lucide-react';

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
              href="/documents/Mandatory Disclosure.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-brand-primary transition-colors whitespace-nowrap shadow-sm hover:shadow"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
          
          {/* PDF Viewer */}
          <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center relative">
            <object 
              data="/documents/Mandatory Disclosure.pdf" 
              type="application/pdf" 
              width="100%" 
              height="100%"
              className="w-full h-full z-10"
            >
              <div className="p-8 text-center flex flex-col items-center justify-center h-full text-gray-500">
                <FileText size={64} className="mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-4">Your browser doesn't support built-in PDF viewing.</p>
                <a 
                  href="/documents/Mandatory Disclosure.pdf"
                  className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition-colors"
                >
                  Click here to download the PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
