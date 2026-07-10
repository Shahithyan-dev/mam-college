import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function AlumniPage() {
  const sidebarLinks = [
    {
        "label": "Alumni Registration",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Alumni Directory",
        "href": "#"
    },
    {
        "label": "Events & Reunions",
        "href": "#"
    },
    {
        "label": "News & Updates",
        "href": "#"
    },
    {
        "label": "Give Back",
        "href": "#"
    },
    {
        "label": "Career Support",
        "href": "#"
    },
    {
        "label": "Stories & Spotlights",
        "href": "#"
    },
    {
        "label": "Contact & Help",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="ALUMNI" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'ALUMNI'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the ALUMNI page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'ALUMNI'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
