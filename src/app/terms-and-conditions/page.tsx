import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function TermsAndConditionsPage() {
  return (
    <InnerPageLayout 
      title="Terms & Conditions" 
      breadcrumbTitle="Terms & Conditions"
      sidebarLinks={[]}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-brand-primary mb-2">Terms and Conditions</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Welcome to M.A.M. School of Engineering. By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <h3 className="text-xl font-semibold text-brand-secondary pt-4">Usage Restrictions</h3>
            <p>
              You are specifically restricted from all of the following:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Publishing any website material in any other media without prior permission.</li>
                <li>Selling, sublicensing and/or otherwise commercializing any website material.</li>
                <li>Using this website in any way that is or may be damaging to this website.</li>
                <li>Using this website contrary to applicable laws and regulations.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
