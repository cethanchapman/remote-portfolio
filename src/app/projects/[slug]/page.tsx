import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Your Name`,
    description: project.desc,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link
        href="/projects"
        className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-8"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              View Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </header>

      {/* Project Image */}
      <div className="w-full h-96 bg-gray-200 rounded-card mb-12 flex items-center justify-center">
        <span className="text-gray-400">Project Screenshot</span>
      </div>

      {/* Project Details */}
      <div className="space-y-8">
        {/* Overview */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{project.longDesc || project.desc}</p>
        </section>

        {/* Metrics */}
        {project.metrics && (
          <section className="bg-white p-8 rounded-card shadow-lg">
            <h2 className="text-2xl font-bold text-dark mb-6">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.users && (
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{project.metrics.users}</p>
                  <p className="text-gray-600 mt-2">Users</p>
                </div>
              )}
              {project.metrics.stars && (
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{project.metrics.stars}</p>
                  <p className="text-gray-600 mt-2">GitHub Stars</p>
                </div>
              )}
              {project.metrics.downloads && (
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{project.metrics.downloads}</p>
                  <p className="text-gray-600 mt-2">Downloads</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Problem */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">The Problem</h2>
          <p className="text-gray-700 leading-relaxed">
            [Describe the problem this project solves. What was the challenge? 
            Who was affected? Why was it important to solve?]
          </p>
        </section>

        {/* Solution */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">The Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            [Describe your approach to solving the problem. What technologies did you use? 
            What were the key features?]
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Feature 1: Description</li>
            <li>Feature 2: Description</li>
            <li>Feature 3: Description</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.tags.map((tech) => (
              <div key={tech} className="flex items-center gap-3 p-4 bg-gray-50 rounded-card">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">Lessons Learned</h2>
          <p className="text-gray-700 leading-relaxed">
            [Share what you learned from this project. What challenges did you overcome? 
            What would you do differently? What skills did you develop?]
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="text-primary hover:text-primary-dark font-semibold text-lg"
        >
          View More Projects →
        </Link>
      </div>
    </main>
  );
}
