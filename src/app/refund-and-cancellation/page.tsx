import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function RefundCancellationPage() {
  return (
    <InnerPageLayout 
      title="Refund & Cancellation" 
      breadcrumbTitle="Refund & Cancellation"
      sidebarLinks={[]}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-brand-primary mb-2">Refund & Cancellation Policy</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              M.A.M. School of Engineering strives to provide transparent financial policies for all our students and applicants.
            </p>
            <h3 className="text-xl font-semibold text-brand-secondary pt-4">Fee Payments</h3>
            <p>
              Fees once paid through the online portal or directly to the institution are generally non-refundable unless specified under particular circumstances guided by AICTE and Anna University regulations.
            </p>
            <h3 className="text-xl font-semibold text-brand-secondary pt-4">Cancellation of Admission</h3>
            <p>
              If a student chooses to withdraw their admission, the refund of fees will be processed strictly in accordance with the guidelines set forth by the governing educational bodies for the current academic year. Please contact the administrative office for detailed procedures.
            </p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
