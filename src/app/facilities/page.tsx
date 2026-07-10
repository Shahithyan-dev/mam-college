import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function FacilitiesPage() {
  const sidebarLinks = [
    {
        "label": "Library",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Smart Class Room",
        "href": "#"
    },
    {
        "label": "Class Rooms",
        "href": "#"
    },
    {
        "label": "Computing Facilities and Laboratories",
        "href": "#"
    },
    {
        "label": "Medical Centre",
        "href": "#"
    },
    {
        "label": "Hostel",
        "href": "#"
    },
    {
        "label": "Transport",
        "href": "#"
    },
    {
        "label": "Canteen",
        "href": "#"
    },
    {
        "label": "Gymnasium",
        "href": "#"
    },
    {
        "label": "Tennis Courts",
        "href": "#"
    },
    {
        "label": "Volleyball Courts",
        "href": "#"
    },
    {
        "label": "Basketball Court",
        "href": "#"
    },
    {
        "label": "Indoor Stadium",
        "href": "#"
    },
    {
        "label": "Reprographic Facility",
        "href": "#"
    },
    {
        "label": "Laundry",
        "href": "#"
    },
    {
        "label": "Insurance",
        "href": "#"
    },
    {
        "label": "Mentor/Mentee System",
        "href": "#"
    },
    {
        "label": "Learning Management System",
        "href": "#"
    },
    {
        "label": "Differently Abled (Divyangjan) Friendliness",
        "href": "#"
    },
    {
        "label": "Alternate Energy Initiatives",
        "href": "#"
    },
    {
        "label": "Waste Management",
        "href": "#"
    },
    {
        "label": "E-Governance",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="FACILITIES" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'FACILITIES'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <p>
            Welcome to the FACILITIES page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || 'FACILITIES'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
