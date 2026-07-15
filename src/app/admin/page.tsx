import React from 'react';
import InnerPageLayout from '@/components/layout/InnerPageLayout';
import { Users, UserCircle2 } from 'lucide-react';

export default function AdminPage() {
  const sidebarLinks = [
    { label: "Overview", href: "/about" },
    { label: "Vision, Mission", href: "#" },
    { label: "MAMSE Milestones", href: "/history" },
    { label: "Administration", href: "/admin", isActive: true },
    { label: "Code of Conduct", href: "#" },
    { label: "Awards and Recognition", href: "#" },
  ];

  return (
    <InnerPageLayout title="ADMINISTRATION" sidebarLinks={sidebarLinks}>
      <div className="space-y-12">
        {/* Correspondent's Message */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
              <UserCircle2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-brand-primary">Correspondent’s Message</h2>
          </div>
          <div className="text-brand-text/90 text-lg leading-relaxed space-y-4">
            <p>
              It gives me immense pleasure to welcome you to the official website of our esteemed institution. As Correspondent, I take great pride in the journey our college has undertaken from its humble beginnings in 2010 to becoming an autonomous Institution in 2024. We strives to create centre of excellence in education, innovation, and holistic development.
            </p>
            <p>
              Our vision has always been to empower students with the knowledge, skills, and values necessary to succeed in a rapidly changing world. We believe that education is not just about academic excellence, but also about nurturing creativity, critical thinking, and ethical leadership. With a team of dedicated faculty members, a dynamic student body, and a strong administrative foundation, we are committed to fostering a learning environment that inspires curiosity, innovation, and lifelong learning.
            </p>
            <p>
              We are proud of the milestones we have achieved, including our active Institution’s Innovation Council (IIC), the vibrant incubation center that supports budding entrepreneurs, and our continued recognition for excellence by national bodies such as NAAC. These achievements are a testament to our unwavering focus on quality, integrity, and inclusiveness.
            </p>
            <p>
              I invite you to explore our website and learn more about our programs, initiatives, and the vibrant community that makes our institution a special place to learn and grow. Together, let us continue to build a future rooted in knowledge, innovation, and social responsibility.
            </p>
            <div className="pt-4 font-semibold text-brand-primary">
              <p>With warm greetings,</p>
              <p>AL HAJ M.A. PEER MOHAMED, B.E, M.B.A</p>
              <p className="text-sm text-gray-500 font-normal">CORRESPONDENT</p>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
              <UserCircle2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-brand-primary">Principal’s Message</h2>
          </div>
          <div className="text-brand-text/90 text-lg leading-relaxed space-y-4">
            <p>
              It is with great pride and pleasure that I welcome you to M.A.M.School of Engineering, a vibrant hub of learning, innovation, and transformation.
            </p>
            <p>
              At our institution, we believe that education is not merely the acquisition of knowledge, but the foundation for building character, confidence, and a commitment to service. Since its inception, the college has grown into a center of academic excellence, thanks to the collective efforts of dedicated faculty, talented students, and a visionary management.
            </p>
            <p>
              Our academic programs are thoughtfully designed to equip students with the skills and values required to meet the demands of the modern world. We emphasize a balanced approach that combines classroom learning, hands-on training, research, and community engagement. With strong industry linkages, an active Institution’s Innovation Council (IIC), and an incubation ecosystem, we foster an environment that encourages creativity, critical thinking, and entrepreneurship.
            </p>
            <p>
              Research and innovation remain central to our mission. With over 250 publications, multiple patents, and significant research funding from bodies like AICTE, DST, and TNSCST, our faculty and students are making meaningful contributions to knowledge and society. As a research supervisor and lifelong learner, I take immense pride in mentoring scholars and guiding them toward impactful research outcomes.
            </p>
            <p>
              Our aim is to nurture responsible global citizens who not only excel in their careers but also uphold ethical values and contribute to nation-building. I invite all students, parents, and stakeholders to be a part of our journey towards excellence and transformation.
            </p>
            <div className="pt-4 font-semibold text-brand-primary">
              <p>Warm wishes,</p>
              <p>Dr. P. Ranjith Kumar</p>
              <p className="text-sm text-gray-500 font-normal">Principal, M.A.M.School of Engineering</p>
            </div>
          </div>
        </section>

        {/* Governing Body & Deans */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 bg-brand-tertiary/10 rounded-full flex items-center justify-center text-brand-tertiary">
              <Users size={24} />
            </div>
            <h2 className="text-2xl font-bold text-brand-primary">Administration Members</h2>
          </div>

          <h3 className="text-xl font-bold text-brand-primary mt-6 mb-4">Deans</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-text/90 mb-8">
            <li><strong>Prof.Dr.M.Pandian</strong> - Dean, Faculty of Mechanical Engineering</li>
            <li><strong>Prof.Dr.M.Paneer Selvam</strong> - Dean, Student Affairs</li>
            <li><strong>Prof.G.Thiraviya Suyambu</strong> - Dean, Academics</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-primary mb-4">Members of Governance Council</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="p-3 border border-brand-primary font-semibold">S.No</th>
                  <th className="p-3 border border-brand-primary font-semibold">Name of the Member</th>
                  <th className="p-3 border border-brand-primary font-semibold">Designation</th>
                  <th className="p-3 border border-brand-primary font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="text-sm text-brand-text/90">
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">1</td>
                  <td className="p-3 border border-gray-200 font-semibold">Al Haj M.A.Peer Mohammed</td>
                  <td className="p-3 border border-gray-200">Correspondent, M.A.M. School of Engineering</td>
                  <td className="p-3 border border-gray-200">Chair Person of Governing Body</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">2</td>
                  <td className="p-3 border border-gray-200 font-semibold">Ms.Khairunisa Peer Mohammed</td>
                  <td className="p-3 border border-gray-200">CEO, M.A.M. School of Engineering</td>
                  <td className="p-3 border border-gray-200">Management Nominee</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">3</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.P.Ranjith Kumar</td>
                  <td className="p-3 border border-gray-200">Principal, M.A.M. School of Engineering</td>
                  <td className="p-3 border border-gray-200">Member Secretary of Governing Body</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">4</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.R.Srinivasan</td>
                  <td className="p-3 border border-gray-200">Former Member Secretary, Tamil Nadu State Council for Science and Technology</td>
                  <td className="p-3 border border-gray-200">Management Nominee</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">5</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.V.Anadakrishnan</td>
                  <td className="p-3 border border-gray-200">Professor, Dept of Production Engineering, NIT, Tiruchirappalli</td>
                  <td className="p-3 border border-gray-200">Educationalist nominated by Management</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">6</td>
                  <td className="p-3 border border-gray-200 font-semibold">Shri.V.Ramachandran</td>
                  <td className="p-3 border border-gray-200">Senior Deputy General Manager, Kothari Sugars and Chemicals Ltd, Kattur, Trichy</td>
                  <td className="p-3 border border-gray-200">Management Nominee</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">7</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.P.Lilly Florence</td>
                  <td className="p-3 border border-gray-200">Dean – S&H, M.A.M. School of Engineering</td>
                  <td className="p-3 border border-gray-200">Teachers of the College</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">8</td>
                  <td className="p-3 border border-gray-200 font-semibold">Prof.R.Ramanathan</td>
                  <td className="p-3 border border-gray-200">Associate Professor, Dept of Mechanical Engineering, MAMSE</td>
                  <td className="p-3 border border-gray-200">Teachers of the College</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">9</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.U.Natarajan</td>
                  <td className="p-3 border border-gray-200">Professor (CAS), Dept of Mechanical Engineering, GCE Srirangam</td>
                  <td className="p-3 border border-gray-200">Nominee from Dept of Technical Education, Govt. of Tamil Nadu</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">10</td>
                  <td className="p-3 border border-gray-200 font-semibold">Dr.T.Senthilkumar</td>
                  <td className="p-3 border border-gray-200">Professor and Dean, Dept of Automobile Engineering, UCE, BIT Campus, Tiruchirappalli</td>
                  <td className="p-3 border border-gray-200">Nominee from Anna University, Chennai</td>
                </tr>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-3 border border-gray-200">11</td>
                  <td className="p-3 border border-gray-200 font-semibold">Shri.A.Manoharan</td>
                  <td className="p-3 border border-gray-200">Advocate, Tiruchirappalli</td>
                  <td className="p-3 border border-gray-200">Management Nominee</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200">12</td>
                  <td className="p-3 border border-gray-200 font-semibold">Shri.M.Vivekananthan</td>
                  <td className="p-3 border border-gray-200">Chairman, Moral Resource and Research Foundation (NGO), Trichy</td>
                  <td className="p-3 border border-gray-200">Management Nominee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
