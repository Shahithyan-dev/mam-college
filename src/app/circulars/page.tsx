import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function CircularsPage() {
  const sidebarLinks = [
    {
        "label": "Circulars & Notices",
        "href": "#",
        "isActive": true
    }
];

  return (
    <InnerPageLayout title="CIRCULARS" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'CIRCULARS'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the CIRCULARS page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'CIRCULARS'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
