import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function ELearningPage() {
  const sidebarLinks = [
    {
        "label": "E-Library",
        "href": "#",
        "isActive": true
    },
    {
        "label": "E-Resources",
        "href": "#"
    },
    {
        "label": "J-Gate",
        "href": "#"
    },
    {
        "label": "DELNET",
        "href": "#"
    },
    {
        "label": "INFLIBNET",
        "href": "#"
    },
    {
        "label": "NDLI",
        "href": "#"
    },
    {
        "label": "SWAYAM",
        "href": "#"
    },
    {
        "label": "NPTEL",
        "href": "#"
    },
    {
        "label": "edX",
        "href": "#"
    },
    {
        "label": "Coursera",
        "href": "#"
    },
    {
        "label": "Saylor.org",
        "href": "#"
    },
    {
        "label": "Commonwealth of Learning",
        "href": "#"
    },
    {
        "label": "BC Campus",
        "href": "#"
    },
    {
        "label": "Open Stax",
        "href": "#"
    },
    {
        "label": "Libre Texts",
        "href": "#"
    },
    {
        "label": "SKILLS COMMONS",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="E-LEARNING" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'E-LEARNING'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the E-LEARNING page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'E-LEARNING'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
