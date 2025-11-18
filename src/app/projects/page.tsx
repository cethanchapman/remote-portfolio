import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Your Name",
  description: "Browse my portfolio of web development projects and case studies.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Projects</h1>
      <p className="text-xl text-gray-600 mb-12">
        A collection of my work showcasing various technologies and problem-solving approaches.
      </p>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8">Featured Projects</h2>
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-dark mb-8">More Projects</h2>
          <div className="space-y-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
