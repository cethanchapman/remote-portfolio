export interface Project {
  id: string;
  title: string;
  slug: string;
  img: string;
  desc: string;
  longDesc?: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  metrics?: {
    users?: string;
    stars?: number;
    downloads?: string;
  };
}

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    slug: "project-one",
    img: "/assets/project1.png",
    desc: "A sample project description showcasing innovative solutions and modern tech stack.",
    longDesc: `This is a comprehensive full-stack application built with modern technologies. 
    The project demonstrates best practices in software architecture, including scalable backend design, 
    responsive frontend, and efficient database management.`,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-one",
    metrics: {
      users: "10K+",
      stars: 245,
    },
  },
  {
    id: "project-two",
    title: "Project Two",
    slug: "project-two",
    img: "/assets/project2.png",
    desc: "Another sample project description highlighting scalable architecture.",
    longDesc: `A modern web application that showcases advanced features like real-time updates, 
    authentication, and data visualization. Built with performance and user experience in mind.`,
    tags: ["Next.js", "Tailwind", "PostgreSQL", "Prisma"],
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-two",
    metrics: {
      downloads: "5K+",
      stars: 180,
    },
  },
  {
    id: "project-three",
    title: "Project Three",
    slug: "project-three",
    img: "/assets/project3.png",
    desc: "An open-source tool that helps developers streamline their workflow.",
    longDesc: `A developer tool designed to improve productivity and code quality. 
    Features include automated testing, code analysis, and integration with popular IDEs.`,
    tags: ["Python", "Docker", "AWS", "Redis"],
    featured: false,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-three",
    metrics: {
      stars: 420,
      downloads: "15K+",
    },
  },
];
