import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function GrievancePage() {
  const sidebarLinks = [
    {
        "label": "Grievance Redressal",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Anti-Ragging",
        "href": "#"
    },
    {
        "label": "Internal Complaints Committee",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="GRIEVANCE" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'GRIEVANCE'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the GRIEVANCE page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'GRIEVANCE'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
