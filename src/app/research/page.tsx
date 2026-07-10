import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function ResearchPage() {
  const sidebarLinks = [
    {
        "label": "Academic Research",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Sponsored Research",
        "href": "#"
    },
    {
        "label": "Hackathons",
        "href": "#"
    },
    {
        "label": "Anna University Recognized Supervisors",
        "href": "#"
    },
    {
        "label": "IPR Cell",
        "href": "#"
    },
    {
        "label": "R&D Cell",
        "href": "#"
    },
    {
        "label": "Innovation Awards",
        "href": "#"
    },
    {
        "label": "Research Policy",
        "href": "#"
    },
    {
        "label": "Code of Ethics for Research",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="RESEARCH" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'RESEARCH'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the RESEARCH page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'RESEARCH'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
