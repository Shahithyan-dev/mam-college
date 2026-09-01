import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import erpData from '@/data/erp.json';

export default function ErpPage() {
  return <GenericContentPage title="ERP & LMS" data={erpData} />;
}
