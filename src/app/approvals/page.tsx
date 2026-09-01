import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import approvalsData from '@/data/approvals.json';

export default function ApprovalsPage() {
  return <GenericContentPage title="Approvals" data={approvalsData} />;
}
