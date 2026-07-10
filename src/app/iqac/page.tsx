import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function IqacPage() {
  const sidebarLinks = [
    {
        "label": "About IQAC",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Composition",
        "href": "#"
    },
    {
        "label": "NAAC",
        "href": "#"
    },
    {
        "label": "NBA",
        "href": "#"
    },
    {
        "label": "AQAR",
        "href": "#"
    },
    {
        "label": "Academic and Administrative Audit (AAA)",
        "href": "#"
    },
    {
        "label": "Student Satisfaction Survey",
        "href": "#"
    },
    {
        "label": "Minutes",
        "href": "#"
    },
    {
        "label": "Strategic Plans",
        "href": "#"
    },
    {
        "label": "Initiatives",
        "href": "#"
    },
    {
        "label": "Best Practices",
        "href": "#"
    },
    {
        "label": "Institutional Distinctiveness",
        "href": "#"
    },
    {
        "label": "Feedback Analysis and Action Taken Reports",
        "href": "#"
    },
    {
        "label": "Academic Calendar",
        "href": "#"
    },
    {
        "label": "AISHE",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="IQAC" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'IQAC'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the IQAC page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'IQAC'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
