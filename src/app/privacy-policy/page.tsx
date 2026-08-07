import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import legalData from '@/data/legal.json';

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout 
      title="Privacy Policy" 
      breadcrumbTitle="Privacy Policy"
      sidebarLinks={[]}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div 
          className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6 html-content"
          dangerouslySetInnerHTML={{ __html: legalData.privacy }}
        />
      </div>
    </InnerPageLayout>
  );
}
