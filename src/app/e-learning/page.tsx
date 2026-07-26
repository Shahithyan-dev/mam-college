import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import elearningData from '@/data/elearning.json';

export default function ELearningPage() {
  return <GenericContentPage title="E-Learning" data={elearningData} />;
}
