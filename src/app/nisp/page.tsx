import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function NispPage() {
  const sidebarLinks = [
    {
        "label": "Core Team",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Policy Documents",
        "href": "#"
    },
    {
        "label": "Events",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="NISP" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'NISP'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the NISP page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'NISP'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
