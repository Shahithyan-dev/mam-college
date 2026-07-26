import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import admissionData from '@/data/admission.json';

export default function AdmissionPage() {
  return <GenericContentPage title="Admission" data={admissionData} />;
}
