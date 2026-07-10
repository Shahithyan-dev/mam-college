import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function IicPage() {
  const sidebarLinks = [
    {
        "label": "About IIC",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Composition",
        "href": "#"
    },
    {
        "label": "Activity Reports",
        "href": "#"
    },
    {
        "label": "Certificates",
        "href": "#"
    },
    {
        "label": "Innovation Ambassadors",
        "href": "#"
    },
    {
        "label": "Yukti",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="IIC" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'IIC'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the IIC page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'IIC'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
