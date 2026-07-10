import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function CiaPage() {
  const sidebarLinks = [
    {
        "label": "About",
        "href": "#",
        "isActive": true
    },
    {
        "label": "MoU's",
        "href": "#"
    },
    {
        "label": "Higher Studies Abroad",
        "href": "#"
    },
    {
        "label": "Placements Abroad",
        "href": "#"
    },
    {
        "label": "Student and Faculty Exchange",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="CENTRE FOR INTERNATIONAL AFFAIRS" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'CENTRE FOR INTERNATIONAL AFFAIRS'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the CENTRE FOR INTERNATIONAL AFFAIRS page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'CENTRE FOR INTERNATIONAL AFFAIRS'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
