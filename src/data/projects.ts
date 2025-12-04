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
    title: "Sports Score Predictor",
    slug: "sports-prediction",
    img: "/assets/sports-predictor.png",
    desc: "AI-powered sports prediction platform with machine learning models for NBA, College Basketball, and Soccer matches.",
    longDesc: `A comprehensive sports analytics platform that uses machine learning algorithms to predict game outcomes across multiple sports leagues. 
    Features NBA predictions, College Basketball predictions with conference filters (SEC, Big 12, Big Ten, ACC, Big East, Pac-12), and Soccer predictions for Premier League, La Liga, Serie A, Champions League, and Europa League. 
    The system analyzes historical data, team statistics, and matchup factors to generate predictions for upcoming games. Users can predict individual games or bulk predict all games in a schedule.`,
    tags: ["Python", "Machine Learning", "TensorFlow", "Sports Analytics", "Railway"],
    featured: true,
    demoUrl: "https://predictor.up.railway.app/nba.html",
    githubUrl: "https://github.com/cethanchapman/pomV2",
    metrics: {
      users: "Live & Public",
    },
  },
  {
    id: "stock-tracking",
    title: "sideStonks - Pullback Trading Scanner",
    slug: "stock-tracking",
    img: "/assets/stock-tracker.png",
    desc: "Automated pullback trading setup scanner with real-time alerts, technical analysis, and risk/reward calculations.",
    longDesc: `An intelligent stock trading platform that automatically scans hundreds of stocks to identify high-quality pullback setups based on technical criteria. 
    Features include a real-time Scanner for discovering opportunities, a Dashboard for monitoring watchlist stocks, and browser notifications for trade alerts with calculated entry points, stop-loss levels, and take-profit targets.
    All setups maintain a minimum 2:1 risk/reward ratio. The system tracks setup states in real-time and provides historical alert performance data to help traders execute informed decisions.`,
    tags: ["Python", "Technical Analysis", "Real-time Alerts", "Trading Systems", "Railway"],
    featured: true,
    demoUrl: "https://stonks-track.up.railway.app/",
    githubUrl: "https://github.com/cethanchapman/stonks",
    metrics: {
      users: "Live & Public",
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
