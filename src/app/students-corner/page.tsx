import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function StudentsCornerPage() {
  const sidebarLinks = [
    {
        "label": "Cultural Events",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Sports",
        "href": "#"
    },
    {
        "label": "Technical Events",
        "href": "#"
    },
    {
        "label": "NSS",
        "href": "#"
    },
    {
        "label": "Student Support",
        "href": "#"
    },
    {
        "label": "Forms",
        "href": "#"
    },
    {
        "label": "Internship",
        "href": "#"
    },
    {
        "label": "Job Openings",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="STUDENT'S CORNER" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || "STUDENT'S CORNER"}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the STUDENT'S CORNER page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || "STUDENT'S CORNER"}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
