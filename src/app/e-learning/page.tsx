import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function ELearningPage() {
  const sidebarLinks = [
    {
        "label": "E-Library",
        "href": "#",
        "isActive": true
    },
    {
        "label": "E-Resources",
        "href": "#"
    },
    {
        "label": "J-Gate",
        "href": "#"
    },
    {
        "label": "DELNET",
        "href": "#"
    },
    {
        "label": "INFLIBNET",
        "href": "#"
    },
    {
        "label": "NDLI",
        "href": "#"
    },
    {
        "label": "SWAYAM",
        "href": "#"
    },
    {
        "label": "NPTEL",
        "href": "#"
    },
    {
        "label": "edX",
        "href": "#"
    },
    {
        "label": "Coursera",
        "href": "#"
    },
    {
        "label": "Saylor.org",
        "href": "#"
    },
    {
        "label": "Commonwealth of Learning",
        "href": "#"
    },
    {
        "label": "BC Campus",
        "href": "#"
    },
    {
        "label": "Open Stax",
        "href": "#"
    },
    {
        "label": "Libre Texts",
        "href": "#"
    },
    {
        "label": "SKILLS COMMONS",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="E-LEARNING" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'E-LEARNING'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-6">
          <p>
            The E-Library at M.A.M.School of Engineering serves as a dynamic and comprehensive digital knowledge hub designed to meet the evolving academic and research needs of engineering students and faculty. Aligned with our vision of fostering excellence in education through technology, the E-Library provides seamless access to a wide array of electronic resources that support curriculum, innovation, and lifelong learning.
          </p>

          <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">Key Features of our E-Library:</h3>
          
          <h4 className="font-semibold text-brand-secondary">24/7 Access to Digital Resources</h4>
          <p>
            Students and faculty can access the E-Library round the clock via campus network or remote login, enabling flexible and uninterrupted learning.
          </p>

          <h4 className="font-semibold text-brand-secondary">Vast Collection of E-Resources</h4>
          <p>The E-Library hosts a rich repository of:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>E-books across all engineering disciplines</li>
            <li>National and international journals</li>
            <li>E-magazines and technical newsletters</li>
            <li>Project reports, theses, and dissertations</li>
            <li>Multimedia content like video lectures, tutorials, and webinars</li>
          </ul>

          <h4 className="font-semibold text-brand-secondary">Subscribed Databases and Digital Platforms</h4>
          <p>The college subscribes to reputed databases and platforms such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>J-Gate</li>
            <li>DELNET / NDL (National Digital Library of India)</li>
            <li>SWAYAM / NPTEL video lectures</li>
            <li>E-ShodhSindhu</li>
          </ul>

          <h4 className="font-semibold text-brand-secondary">User-Friendly Interface</h4>
          <p>
            The E-Library platform is equipped with an intuitive and responsive interface, making it easy to search, browse, and download resources.
          </p>

          <h4 className="font-semibold text-brand-secondary">Support and Services:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Online public access catalog (OPAC)</li>
            <li>Digital reference services</li>
            <li>E-learning support and training sessions</li>
            <li>Plagiarism checking tools</li>
          </ul>
        </div>
      </div>
    </InnerPageLayout>
  );
}
