import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';

export default function AccreditationPage() {
  const pdfs = [
    { label: 'NAAC A Certificate', href: '/documents/NAAC A Certificate.pdf' },
  ];

  return <GenericContentPage title="Accreditation" data={{}} pdfs={pdfs} />;
}
