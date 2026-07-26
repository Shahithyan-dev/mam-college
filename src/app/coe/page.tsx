import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import coeData from '@/data/coe.json';

export default function COEPage() {
  return <GenericContentPage title="Controller of Examinations" data={coeData} />;
}
