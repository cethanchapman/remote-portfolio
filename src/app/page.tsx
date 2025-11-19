import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    id: "sports-prediction",
    title: "Sports Prediction Site",
    slug: "sports-prediction",
    img: "/assets/project1.png",
    desc: "AI-powered sports prediction platform leveraging machine learning models for game outcome analysis.",
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"],
    featured: true,
  },
  {
    id: "stock-tracking",
    title: "Stock Tracking Site",
    slug: "stock-tracking",
    img: "/assets/project2.png",
    desc: "Real-time stock market tracking and portfolio management application with advanced analytics.",
    tags: ["React", "TypeScript", "Financial APIs", "Data Visualization"],
    featured: true,
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-dark">
          Hi, I&apos;m <span className="text-primary">Ethan Chapman</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Computer Science | AI & Machine Learning | App Development | Information Technology | Hardware, Software & Coding
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
            Welcome to my portfolio! I&apos;m passionate about computer science and technology, with a focus 
            on artificial intelligence and machine learning. I love exploring the intersection of hardware 
            and software, building intelligent systems that solve real-world problems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            From coding innovative applications to diving deep into AI algorithms and IT infrastructure, 
            I&apos;m constantly expanding my knowledge and skills. My projects range from sports prediction 
            systems to financial tracking tools, all powered by modern technologies and data-driven insights.
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
          I&apos;m always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:cethanchapman@gmail.com" className="text-primary hover:underline">
              cethanchapman@gmail.com
            </a>
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/cethanchapman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cethanchapman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
