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
    id: "sports-prediction",
    title: "Sports Prediction Site",
    slug: "sports-prediction",
    img: "/assets/project1.png",
    desc: "AI-powered sports prediction platform leveraging machine learning models for game outcome analysis.",
    longDesc: `An advanced sports analytics platform that uses machine learning algorithms to predict game outcomes. 
    The system analyzes historical data, player statistics, and real-time factors to generate accurate predictions.`,
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"],
    featured: true,
    demoUrl: "#coming-soon",
    githubUrl: "https://github.com/cethanchapman/sports-prediction",
    metrics: {
      users: "Coming Soon",
    },
  },
  {
    id: "stock-tracking",
    title: "Stock Tracking Site",
    slug: "stock-tracking",
    img: "/assets/project2.png",
    desc: "Real-time stock market tracking and portfolio management application with advanced analytics.",
    longDesc: `A comprehensive stock tracking platform that provides real-time market data, portfolio management, 
    and advanced analytics. Features include price alerts, trend analysis, and personalized investment insights.`,
    tags: ["React", "TypeScript", "Financial APIs", "Data Visualization"],
    featured: true,
    demoUrl: "#coming-soon",
    githubUrl: "https://github.com/cethanchapman/stock-tracking",
    metrics: {
      users: "Coming Soon",
    },
  },
  {
    id: "network-dashboard",
    title: "Custom Network Monitoring Dashboard Builder",
    slug: "network-dashboard",
    img: "/assets/project3.png",
    desc: "SaaS platform that generates custom-branded network monitoring dashboards for IT professionals, MSPs, and businesses.",
    longDesc: `A revolutionary "Dashboard-as-a-Service" platform where IT consultants and managed service providers can configure, customize, and deploy fully-branded network monitoring dashboards for their clients. Think "Shopify for Network Monitoring" - users configure their needs through a web interface, customize branding, and generate deployable dashboard instances.`,
    tags: ["Next.js", "Docker", "Network Monitoring", "SaaS", "Multi-tenant"],
    featured: true,
    demoUrl: "#coming-soon",
    githubUrl: "https://github.com/cethanchapman/network-dashboard-builder",
    metrics: {
      users: "In Development",
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
    githubUrl: "https://github.com/cethanchapman/project-three",
    metrics: {
      stars: 420,
      downloads: "15K+",
    },
  },
];
