import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Ethan Chapman",
  description: "Learn more about my background, experience, and skills in computer science, AI, machine learning, and information technology.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">About Me</h1>

      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">Introduction</h2>
          <div className="prose max-w-none space-y-4 text-gray-700">
            <p className="text-lg">
              IT Specialist at WSJ Enterprises, LLC and recent Computer Science graduate from Auburn University. 
              Experienced with mobile app development, software engineering, and IT infrastructure management. 
              Passionate about artificial intelligence, machine learning, and building innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg">
              My expertise spans across iOS and Android development, system administration, network design, and 
              full-stack software development. I&apos;m always excited to learn new technologies and take on challenging projects.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                {["SwiftUI", "iOS", "Android", "Xcode", "Android Studio", "JSON"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "C++", "R", "JavaScript", "TypeScript"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">IT & Systems</h3>
              <div className="flex flex-wrap gap-2">
                {["Windows", "Mac OS X", "Linux", "Network Security", "Hardware Support", "Microsoft 365"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Software Development</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Algorithms", "Data Structures", "Operating Systems", "QA Testing", "Debugging"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-6">Experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-dark">Information Technology Specialist</h3>
              <p className="text-gray-600 mb-2">WSJ Enterprises, LLC • Aug 2025 - Present</p>
              <p className="text-gray-700 mb-3">
                Lafayette, Alabama
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Install, configure and support workstation software, hardware, printers, and phones</li>
                <li>Execute systems and network design, documentation, implementation, testing, and administration</li>
                <li>Maintain essential IT operations including operating systems, security tools, and applications</li>
                <li>Serve as subject-matter expert supporting Mac OS X, Windows, and software applications (Microsoft, Adobe, Google Workspace)</li>
                <li>Train employees in using software, hardware, printers, and phones</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-dark">Mobile Software Engineer Intern</h3>
              <p className="text-gray-600 mb-2">OCV, LLC • May 2024 - Aug 2024</p>
              <p className="text-gray-700 mb-3">
                Opelika, Alabama
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Used SwiftUI, Xcode, Android Studio, and JSON to build and customize apps</li>
                <li>Collaborated with developers to resolve technical challenges and complete larger-scale projects</li>
                <li>Conducted QA testing across various iOS and Android devices and OS versions</li>
                <li>Managed app deployment and updates on Apple App Store and Google Play Store</li>
                <li>Example Project: Kendall County Circuit Clerk (Android and iOS)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-6">Education</h2>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold text-dark">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 mb-2">Auburn University, Samuel Ginn College of Engineering • Aug 2021 - May 2025</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Dean&apos;s List:</span> Spring 2025
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Coursework:</span> Java, Python, C++, R, 
              Discrete Structures, Programming Languages, Algorithms, 
              Operating Systems, Software Modeling & Design
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-6">Certifications</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-dark">CompTIA A+</h3>
              <p className="text-gray-600 mb-2">CompTIA • Issued Sep 2025 - Expires Sep 2028</p>
              <p className="text-gray-700">
                Industry-standard certification covering IT fundamentals, hardware, networking, security, 
                and troubleshooting.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/#contact"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full inline-block transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
