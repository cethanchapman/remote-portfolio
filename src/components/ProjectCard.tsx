import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  slug: string;
  img: string;
  desc: string;
  tags?: string[];
  featured?: boolean;
  githubUrl?: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col md:flex-row items-start gap-6 p-6 border border-gray-200 rounded-card hover:shadow-lg transition-shadow">
      <div className="w-full md:w-64 h-48 relative rounded-card overflow-hidden bg-gray-200 flex-shrink-0">
        <Image
          src={project.img}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-dark mb-2">{project.title}</h3>
        
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-700 mb-4 leading-relaxed">{project.desc}</p>

        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-primary hover:text-primary-dark font-semibold inline-flex items-center"
          >
            View Details →
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-dark font-semibold inline-flex items-center"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
