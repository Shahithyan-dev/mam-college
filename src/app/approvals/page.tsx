import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';

export default function ApprovalsPage() {
  const pdfs = [
    { label: 'AICTE Approval', href: '/documents/AICTE.PDF' },
    { label: 'Anna University Approval', href: '/documents/Anna University.pdf' },
    { label: 'UGC Approval', href: '/documents/UGC.pdf' },
  ];

  return <GenericContentPage title="Approvals" data={{}} pdfs={pdfs} />;
}
