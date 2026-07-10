import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function ClubsPage() {
  const sidebarLinks = [
    {
        "label": "Department Associations",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Technical Clubs/Co-Curricular Clubs",
        "href": "#"
    },
    {
        "label": "Extra-Curricular and Social Clubs",
        "href": "#"
    },
    {
        "label": "Professional Society Linked Clubs",
        "href": "#"
    },
    {
        "label": "College Level / Common Centres / Forums",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="CLUBS" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'CLUBS'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the CLUBS page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'CLUBS'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
