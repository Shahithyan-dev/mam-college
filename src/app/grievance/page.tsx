import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import grievanceData from '@/data/grievance.json';

export default function GrievancePage() {
  return <GenericContentPage title="Grievance Redressal" data={grievanceData} />;
}
