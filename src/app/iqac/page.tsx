import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import iqacData from '@/data/iqac.json';

export default function IQACPage() {
  return <GenericContentPage title="IQAC" data={iqacData} />;
}
