import React from 'react';
import GenericContentPage from '@/components/layout/GenericContentPage';
import autonomousData from '@/data/autonomous.json';

export default function AutonomousPage() {
  const pdfs = [
    { label: 'AIDS R2024 Syllabus', href: '/documents/AIDS_R2024_SYLLABUS.pdf' },
    { label: 'BME Curriculum R2024', href: '/documents/BME CURRICULUM R2024 (1).pdf' },
    { label: 'ECE Curriculum R2024', href: '/documents/ECE CURRICULUM R2024 (1).pdf' },
    { label: 'IT R2024 Syllabus', href: '/documents/IT_R2024_SYLLABUS.pdf' },
    { label: 'Aero R2024 Syllabus', href: '/documents/R2024 - Aero.pdf' },
  ];

  return <GenericContentPage title="Autonomous" data={autonomousData} pdfs={pdfs} pdfTabLabel="Curriculum and Syllabus" />;
}
