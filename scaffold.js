const fs = require('fs');
const path = require('path');

const pages = [
  {
    route: 'approvals',
    title: 'APPROVALS',
    sidebar: [
      { label: 'AICTE', href: '#', isActive: true },
      { label: 'Anna University', href: '#' },
      { label: 'UGC', href: '#' }
    ]
  },
  {
    route: 'accreditation',
    title: 'ACCREDITATION',
    sidebar: [
      { label: 'NAAC', href: '#', isActive: true },
      { label: 'ISO', href: '#' }
    ]
  },
  {
    route: 'autonomous',
    title: 'AUTONOMOUS',
    sidebar: [
      { label: 'UGC Approval', href: '#', isActive: true },
      { label: 'Anna University Approval', href: '#' },
      { label: 'Academic Council', href: '#' },
      { label: 'Board of Studies', href: '#' },
      { label: 'Curriculum and Syllabus', href: '#' }
    ]
  },
  {
    route: 'coe',
    title: 'COE',
    sidebar: [
      { label: 'About US', href: '#', isActive: true },
      { label: 'Notifications', href: '#' },
      { label: 'Exam Schedule', href: '#' },
      { label: 'Student Login', href: '#' },
      { label: 'Examination Manual', href: '#' }
    ]
  },
  {
    route: 'e-learning',
    title: 'E-LEARNING',
    sidebar: [
      { label: 'E-Library', href: '#', isActive: true },
      { label: 'E-Resources', href: '#' },
      { label: 'J-Gate', href: '#' },
      { label: 'DELNET', href: '#' },
      { label: 'INFLIBNET', href: '#' },
      { label: 'NDLI', href: '#' },
      { label: 'SWAYAM', href: '#' },
      { label: 'NPTEL', href: '#' },
      { label: 'edX', href: '#' },
      { label: 'Coursera', href: '#' },
      { label: 'Saylor.org', href: '#' },
      { label: 'Commonwealth of Learning', href: '#' },
      { label: 'BC Campus', href: '#' },
      { label: 'Open Stax', href: '#' },
      { label: 'Libre Texts', href: '#' },
      { label: 'SKILLS COMMONS', href: '#' }
    ]
  },
  {
    route: 'students-corner',
    title: "STUDENT'S CORNER",
    sidebar: [
      { label: 'Cultural Events', href: '#', isActive: true },
      { label: 'Sports', href: '#' },
      { label: 'Technical Events', href: '#' },
      { label: 'NSS', href: '#' },
      { label: 'Student Support', href: '#' },
      { label: 'Forms', href: '#' },
      { label: 'Internship', href: '#' },
      { label: 'Job Openings', href: '#' }
    ]
  },
  {
    route: 'alumni',
    title: 'ALUMNI',
    sidebar: [
      { label: 'Alumni Registration', href: '#', isActive: true },
      { label: 'Alumni Directory', href: '#' },
      { label: 'Events & Reunions', href: '#' },
      { label: 'News & Updates', href: '#' },
      { label: 'Give Back', href: '#' },
      { label: 'Career Support', href: '#' },
      { label: 'Stories & Spotlights', href: '#' },
      { label: 'Contact & Help', href: '#' }
    ]
  },
  {
    route: 'research',
    title: 'RESEARCH',
    sidebar: [
      { label: 'Academic Research', href: '#', isActive: true },
      { label: 'Sponsored Research', href: '#' },
      { label: 'Hackathons', href: '#' },
      { label: 'Anna University Recognized Supervisors', href: '#' },
      { label: 'IPR Cell', href: '#' },
      { label: 'R&D Cell', href: '#' },
      { label: 'Innovation Awards', href: '#' },
      { label: 'Research Policy', href: '#' },
      { label: 'Code of Ethics for Research', href: '#' }
    ]
  },
  {
    route: 'facilities',
    title: 'FACILITIES',
    sidebar: [
      { label: 'Library', href: '#', isActive: true },
      { label: 'Smart Class Room', href: '#' },
      { label: 'Class Rooms', href: '#' },
      { label: 'Computing Facilities and Laboratories', href: '#' },
      { label: 'Medical Centre', href: '#' },
      { label: 'Hostel', href: '#' },
      { label: 'Transport', href: '#' },
      { label: 'Canteen', href: '#' },
      { label: 'Gymnasium', href: '#' },
      { label: 'Tennis Courts', href: '#' },
      { label: 'Volleyball Courts', href: '#' },
      { label: 'Basketball Court', href: '#' },
      { label: 'Indoor Stadium', href: '#' },
      { label: 'Reprographic Facility', href: '#' },
      { label: 'Laundry', href: '#' },
      { label: 'Insurance', href: '#' },
      { label: 'Mentor/Mentee System', href: '#' },
      { label: 'Learning Management System', href: '#' },
      { label: 'Differently Abled (Divyangjan) Friendliness', href: '#' },
      { label: 'Alternate Energy Initiatives', href: '#' },
      { label: 'Waste Management', href: '#' },
      { label: 'E-Governance', href: '#' }
    ]
  },
  {
    route: 'clubs',
    title: 'CLUBS',
    sidebar: [
      { label: 'Department Associations', href: '#', isActive: true },
      { label: 'Technical Clubs/Co-Curricular Clubs', href: '#' },
      { label: 'Extra-Curricular and Social Clubs', href: '#' },
      { label: 'Professional Society Linked Clubs', href: '#' },
      { label: 'College Level / Common Centres / Forums', href: '#' }
    ]
  },
  {
    route: 'erp',
    title: 'ERP LOGIN',
    sidebar: [
      { label: 'Student Login', href: '#', isActive: true },
      { label: 'Faculty Login', href: '#' }
    ]
  },
  {
    route: 'cia',
    title: 'CENTRE FOR INTERNATIONAL AFFAIRS',
    sidebar: [
      { label: 'About', href: '#', isActive: true },
      { label: "MoU's", href: '#' },
      { label: 'Higher Studies Abroad', href: '#' },
      { label: 'Placements Abroad', href: '#' },
      { label: 'Student and Faculty Exchange', href: '#' }
    ]
  },
  {
    route: 'iqac',
    title: 'IQAC',
    sidebar: [
      { label: 'About IQAC', href: '#', isActive: true },
      { label: 'Composition', href: '#' },
      { label: 'NAAC', href: '#' },
      { label: 'NBA', href: '#' },
      { label: 'AQAR', href: '#' },
      { label: 'Academic and Administrative Audit (AAA)', href: '#' },
      { label: 'Student Satisfaction Survey', href: '#' },
      { label: 'Minutes', href: '#' },
      { label: 'Strategic Plans', href: '#' },
      { label: 'Initiatives', href: '#' },
      { label: 'Best Practices', href: '#' },
      { label: 'Institutional Distinctiveness', href: '#' },
      { label: 'Feedback Analysis and Action Taken Reports', href: '#' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'AISHE', href: '#' }
    ]
  },
  {
    route: 'nirf',
    title: 'NIRF',
    sidebar: [
      { label: 'NIRF Reports', href: '#', isActive: true }
    ]
  },
  {
    route: 'iic',
    title: 'IIC',
    sidebar: [
      { label: 'About IIC', href: '#', isActive: true },
      { label: 'Composition', href: '#' },
      { label: 'Activity Reports', href: '#' },
      { label: 'Certificates', href: '#' },
      { label: 'Innovation Ambassadors', href: '#' },
      { label: 'Yukti', href: '#' }
    ]
  },
  {
    route: 'nisp',
    title: 'NISP',
    sidebar: [
      { label: 'Core Team', href: '#', isActive: true },
      { label: 'Policy Documents', href: '#' },
      { label: 'Events', href: '#' }
    ]
  },
  {
    route: 'circulars',
    title: 'CIRCULARS',
    sidebar: [
      { label: 'Circulars & Notices', href: '#', isActive: true }
    ]
  },
  {
    route: 'grievance',
    title: 'GRIEVANCE',
    sidebar: [
      { label: 'Grievance Redressal', href: '#', isActive: true },
      { label: 'Anti-Ragging', href: '#' },
      { label: 'Internal Complaints Committee', href: '#' }
    ]
  }
];

const appDir = path.join(__dirname, 'src', 'app');

pages.forEach(page => {
  const dirPath = path.join(appDir, page.route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, 'page.tsx');
  
  const content = `import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function ${page.route.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^[a-z]/, (g) => g.toUpperCase())}Page() {
  const sidebarLinks = ${JSON.stringify(page.sidebar, null, 4)};

  return (
    <InnerPageLayout title="${page.title}" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || '${page.title}'}</h3>
        </div>
        <div className="p-8 text-gray-600 leading-relaxed space-y-4">
          <p>
            Welcome to the ${page.title} page. This section is currently under development.
          </p>
          <p>
            Please check back later for full updates on {sidebarLinks.find(l => l.isActive)?.label || '${page.title}'}.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
`;

  fs.writeFileSync(filePath, content);
  console.log('Created: ' + filePath);
});
