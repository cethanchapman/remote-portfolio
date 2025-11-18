import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    id: "project-one",
    title: "Project One",
    slug: "project-one",
    img: "/assets/project1.png",
    desc: "A sample project description showcasing innovative solutions and modern tech stack.",
    tags: ["React", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    id: "project-two",
    title: "Project Two",
    slug: "project-two",
    img: "/assets/project2.png",
    desc: "Another sample project description highlighting scalable architecture.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    featured: true,
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-dark">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          I build beautiful and functional software that solves real problems.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="#projects"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white p-8 md:p-12 rounded-card shadow-lg">
        <h2 className="text-3xl font-bold text-dark mb-4">About Me</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to my portfolio! I'm a passionate developer with expertise in building 
            modern web applications. I love creating elegant solutions to complex problems 
            and continuously learning new technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            With experience in full-stack development, I specialize in React, Next.js, 
            TypeScript, and modern cloud technologies. I'm always excited to take on new 
            challenges and collaborate on innovative projects.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="text-primary hover:text-primary-dark font-semibold inline-flex items-center"
          >
            Learn more about me →
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white p-8 md:p-12 rounded-card shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-dark">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-primary hover:text-primary-dark font-semibold"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white p-8 md:p-12 rounded-card shadow-lg">
        <h2 className="text-3xl font-bold text-dark mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:your.email@example.com" className="text-primary hover:underline">
              your.email@example.com
            </a>
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
