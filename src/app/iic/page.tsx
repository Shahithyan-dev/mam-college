import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import iicData from '@/data/iic.json';

export default function IICPage() {
  return <GenericContentPage title="Institution's Innovation Council" data={iicData} />;
}
