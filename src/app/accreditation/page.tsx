import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import accreditationData from '@/data/accreditation.json';

export default function AccreditationPage() {
  return <GenericContentPage title="Accreditation" data={accreditationData} />;
}
