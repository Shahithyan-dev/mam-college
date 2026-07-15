import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';

export default function CoePage() {
  const sidebarLinks = [
    {
        "label": "About US",
        "href": "#",
        "isActive": true
    },
    {
        "label": "Notifications",
        "href": "#"
    },
    {
        "label": "Exam Schedule",
        "href": "#"
    },
    {
        "label": "Student Login",
        "href": "#"
    },
    {
        "label": "Examination Manual",
        "href": "#"
    }
];

  return (
    <InnerPageLayout title="COE" sidebarLinks={sidebarLinks}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="bg-brand-primary p-4 text-white">
           <h3 className="text-xl font-medium">{sidebarLinks.find(l => l.isActive)?.label || 'COE'}</h3>
        </div>
        <div className="p-8 text-brand-text/80 leading-relaxed space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>The office of The Controller of Examinations (COE) has been established from the month of June 2024 since the conferment of Autonomous to the institution.</li>
            <li>The Office of the Controller of Examinations shall be responsible for assessing continuous learning process of the students by maintaining best quality and standard in examination process and ensuring confidentiality. It is the duty of the COE to arrange, prepare, schedule, conduct, publish and maintain records of IAT and End Semester Examinations of the students of all UG and PG programmes.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">The other responsibilities of the office are:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Collection of student bio data from the students.</li>
            <li>Mapping Electives from the students for the current semester.</li>
            <li>Conducting Internal Assessment Examinations and End Semester Examinations for the students of various UG/PG Programmes.</li>
            <li>Preparation of exam schedule, Hall allocation and Seating arrangements for IAT.</li>
            <li>Collection of Question Papers from the departments, printing and disseminating for Internal Assessment Examinations and End Semester Examinations</li>
            <li>Collecting Practical examination schedule from the departments.</li>
            <li>Appointment of External Examiners for practical examinations.</li>
            <li>Ensuring students attendance percentage during semester.</li>
            <li>Lack of attendance, debarred and withdrawal Panel of Examiners preparation from various Institution/Universities.</li>
            <li>Exam schedule preparation for Semester End Semester Examinations.</li>
            <li>Appointment of Hall Invigilators, Hall Chart, Seating arrangements, Squad and Chief Superintendent etc.</li>
            <li>Appointment of Evaluators, Chief Examiners and Chairman for Valuation.</li>
            <li>Publication of Results.</li>
            <li>Conducting Malpractice meeting, if any in the semester by Malpractice Committee.</li>
            <li>Conducting of revaluation and issuing photocopy to the students.</li>
            <li>Publishing revaluation results and Review process.</li>
            <li>Conduction of Special Supplementary examination.</li>
            <li>Printing of Statement of Grades, Consolidated Statement of Grades.</li>
            <li>Issue of Duplicate Grade Sheet/ Certificate etc.,</li>
            <li>Issue of Transcripts, CGPA to percentage conversion, Medium of Instruction, WES request etc.,</li>
            <li>Conduction of graduation day and issuing degree certificate.</li>
            <li>Assisting in student background verification.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Our Team</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="p-3 border border-brand-primary">S.No.</th>
                  <th className="p-3 border border-brand-primary">Name</th>
                  <th className="p-3 border border-brand-primary">Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">1</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr. M.Pandian</td>
                  <td className="p-3 border border-gray-200">Controller of Examinations</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">2</td>
                  <td className="p-3 border border-gray-200 font-semibold">Prof.M.Chandrasekar</td>
                  <td className="p-3 border border-gray-200">Deputy COE</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200">3</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.Balamurugan</td>
                  <td className="p-3 border border-gray-200">Deputy COE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
