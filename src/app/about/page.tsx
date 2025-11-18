import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Your Name",
  description: "Learn more about my background, experience, and skills.",
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
            <p>
              Hi! I'm a passionate software developer with a love for creating elegant 
              solutions to complex problems. With experience across the full stack, I 
              specialize in building modern web applications that are fast, accessible, 
              and user-friendly.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best practices. 
              I'm constantly learning and staying up-to-date with the latest technologies 
              and industry trends.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Tools & Platform</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "AWS", "Vercel", "CI/CD"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-3">Other</h3>
              <div className="flex flex-wrap gap-2">
                {["Agile", "Testing", "UI/UX", "SEO", "Performance"].map((skill) => (
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
              <h3 className="text-xl font-semibold text-dark">Senior Developer</h3>
              <p className="text-gray-600 mb-2">Company Name • 2022 - Present</p>
              <p className="text-gray-700">
                Leading development of modern web applications using React, Next.js, and TypeScript. 
                Mentoring junior developers and establishing best practices.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-dark">Full Stack Developer</h3>
              <p className="text-gray-600 mb-2">Previous Company • 2020 - 2022</p>
              <p className="text-gray-700">
                Built and maintained full-stack applications. Worked with Node.js, React, 
                and PostgreSQL to deliver high-quality solutions.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-dark">Junior Developer</h3>
              <p className="text-gray-600 mb-2">First Company • 2018 - 2020</p>
              <p className="text-gray-700">
                Started my professional journey building web applications and learning 
                best practices in software development.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-6">Education</h2>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold text-dark">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 mb-2">University Name • 2014 - 2018</p>
            <p className="text-gray-700">
              Graduated with honors. Focused on software engineering, algorithms, and web development.
            </p>
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
