import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function MandatoryDisclosurePage() {
  return (
    <InnerPageLayout 
      title="Mandatory Disclosure" 
      breadcrumbTitle="Mandatory Disclosure"
      sidebarLinks={[]}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Mandatory Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Mandatory Disclosure for M.A.M. School of Engineering is currently being updated for the latest academic year.
            Please check back soon or contact the administration office for more details.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
