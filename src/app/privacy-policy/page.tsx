import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout 
      title="Privacy Policy" 
      breadcrumbTitle="Privacy Policy"
      sidebarLinks={[]}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-brand-primary mb-2">Privacy Policy</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At M.A.M. School of Engineering, we take your privacy seriously. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
            </p>
            <h3 className="text-xl font-semibold text-brand-secondary pt-4">Information Collection</h3>
            <p>
              We collect information to provide better services to all our users. Information is collected when you fill out forms on our website, such as admission inquiries or contact forms.
            </p>
            <h3 className="text-xl font-semibold text-brand-secondary pt-4">Use of Information</h3>
            <p>
              The information we collect is used to communicate with you, process applications, and improve our educational services. We do not sell or share your personal information with third parties without your consent, except as required by law.
            </p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
