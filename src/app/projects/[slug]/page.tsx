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
    title: `${project.title} — Ethan Chapman`,
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
            {project.slug === "sports-prediction" ? (
              "Predicting sports outcomes is challenging due to the complexity of variables involved - player statistics, team dynamics, weather conditions, and historical performance. Traditional methods often fail to capture these intricate patterns, leading to inaccurate predictions."
            ) : project.slug === "stock-tracking" ? (
              "Individual investors often struggle to track their portfolios effectively and make informed decisions. Existing tools are either too complex for casual investors or lack the real-time insights needed for active trading. There's a need for an accessible platform that provides comprehensive market data and portfolio analytics."
            ) : project.slug === "network-dashboard" ? (
              <>
                <strong>Multiple Pain Points for IT Professionals:</strong>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li><strong>Managed Service Providers (MSPs)</strong> need to monitor dozens of client networks but can&apos;t afford $1000s for enterprise tools per client</li>
                  <li><strong>Generic tools don&apos;t show client branding</strong> - MSPs look unprofessional using third-party dashboards</li>
                  <li><strong>Enterprise solutions are overkill</strong> - PRTG, SolarWinds, Datadog cost thousands and have features small businesses never use</li>
                  <li><strong>Setup takes days/weeks</strong> - Complex configuration prevents quick deployment</li>
                  <li><strong>No customization options</strong> - Can&apos;t white-label or add company branding easily</li>
                  <li><strong>Poor mobile experience</strong> - Most monitoring tools have outdated interfaces that don&apos;t work well on phones</li>
                </ul>
                <p className="mt-4">
                  <strong>The Core Problem:</strong> IT professionals need professional, branded monitoring dashboards for their clients but can&apos;t build them from scratch and can&apos;t afford enterprise solutions.
                </p>
              </>
            ) : (
              "[Describe the problem this project solves. What was the challenge? Who was affected? Why was it important to solve?]"
            )}
          </p>
        </section>

        {/* Solution */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">The Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {project.slug === "sports-prediction" ? (
              "Developed an AI-powered prediction platform that uses machine learning algorithms to analyze vast amounts of historical data, player statistics, and real-time factors. The system employs multiple ML models to generate accurate game outcome predictions."
            ) : project.slug === "stock-tracking" ? (
              "Created a comprehensive stock tracking platform that combines real-time market data with portfolio management tools. The application features intuitive dashboards, price alerts, and advanced analytics to help investors make data-driven decisions."
            ) : project.slug === "network-dashboard" ? (
              <>
                <strong className="text-xl">A Revolutionary &quot;Dashboard-as-a-Service&quot; Platform</strong>
                <p className="mt-3">
                  Instead of building one monitoring tool, create a <strong>platform that generates custom monitoring dashboards</strong> for each client. Think &quot;Shopify for Network Monitoring&quot; or &quot;Canva for IT Dashboards.&quot;
                </p>
                <p className="mt-3">
                  <strong>How It Works:</strong>
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
                  <li><strong>Configure:</strong> Users select features they need through a visual builder (network monitoring, bandwidth tracking, alerts, etc.)</li>
                  <li><strong>Customize:</strong> Upload logo, choose colors, set company name - full white-label branding</li>
                  <li><strong>Generate:</strong> Platform automatically builds a custom Docker container or standalone app with their specifications</li>
                  <li><strong>Deploy:</strong> One-click deployment to cloud or download for self-hosting</li>
                </ol>
                <p className="mt-4">
                  Each generated dashboard is <strong>fully branded</strong>, includes only the features they need, and deploys in minutes instead of days.
                </p>
              </>
            ) : (
              "[Describe your approach to solving the problem. What technologies did you use? What were the key features?]"
            )}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.slug === "sports-prediction" ? (
              <>
                <li>Machine Learning Models: Multiple algorithms for accurate predictions</li>
                <li>Real-time Data Processing: Live updates and analysis</li>
                <li>Historical Analysis: Pattern recognition from past games</li>
                <li>User-friendly Interface: Easy-to-understand predictions and insights</li>
              </>
            ) : project.slug === "stock-tracking" ? (
              <>
                <li>Real-time Market Data: Live stock prices and market updates</li>
                <li>Portfolio Management: Track multiple investments in one place</li>
                <li>Advanced Analytics: Trend analysis and performance metrics</li>
                <li>Custom Alerts: Price notifications and market movement alerts</li>
              </>
            ) : project.slug === "network-dashboard" ? (
              <>
                <li><strong>Visual Configuration Builder:</strong> Drag-and-drop interface to select monitoring features</li>
                <li><strong>Smart Templating System:</strong> One codebase with feature flags generates unlimited unique dashboards</li>
                <li><strong>Automated Build Pipeline:</strong> Docker/GitHub Actions automatically compile and package custom builds</li>
                <li><strong>Multi-Tenant Architecture:</strong> Each dashboard is isolated but reports back for license validation</li>
                <li><strong>White-Label Ready:</strong> Complete branding removal for premium tiers</li>
                <li><strong>AI-Powered Insights:</strong> ML for anomaly detection and predictive alerts</li>
                <li><strong>Mobile-First Design:</strong> PWA with push notifications for monitoring on-the-go</li>
              </>
            ) : (
              <>
                <li>Feature 1: Description</li>
                <li>Feature 2: Description</li>
                <li>Feature 3: Description</li>
              </>
            )}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">Tech Stack</h2>
          {project.slug === "network-dashboard" ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Core Platform</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Next.js 14+</strong> - Main platform app with App Router</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>TypeScript</strong> - Type-safe configuration and code generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Tailwind CSS</strong> - UI framework for configuration builder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>tRPC</strong> - Type-safe API for config → dashboard communication</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Dashboard Generation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Docker</strong> - Containerization for isolated dashboard builds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>GitHub Actions</strong> - Automated build pipeline for custom dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Terraform/Pulumi</strong> - Infrastructure-as-Code for cloud deployments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Monitoring Tech</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Prometheus</strong> - Metrics collection and storage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>SNMP</strong> - Network device monitoring protocol</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>WebSockets</strong> - Real-time dashboard updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Redis</strong> - Caching layer for metric aggregation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Business Logic</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Stripe</strong> - Subscription billing and license management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>PostgreSQL</strong> - User accounts, configurations, analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>JWT</strong> - License key generation and validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Scikit-learn</strong> - ML for anomaly detection (Phase 2)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">🏗️ Architecture Overview</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>Configuration Platform</strong> (Next.js) → User selects features → 
                  <strong> Build Pipeline</strong> (GitHub Actions/Docker) → Generates custom app with feature flags → 
                  <strong> Distribution</strong> (CDN/Self-host) → <strong>Client Dashboard</strong> (Isolated instance) → 
                  <strong> License Validation</strong> (JWT callback) → Platform tracks usage/analytics
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.tags.map((tech) => (
                <div key={tech} className="flex items-center gap-3 p-4 bg-gray-50 rounded-card">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Lessons Learned */}
        <section className="bg-white p-8 rounded-card shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">
            {project.slug === "network-dashboard" ? "Business Model & Market Analysis" : "Lessons Learned"}
          </h2>
          {project.slug === "sports-prediction" ? (
            <p className="text-gray-700 leading-relaxed">
              This project deepened my understanding of machine learning algorithms and their practical applications. I learned the importance of data quality and preprocessing in building accurate predictive models. Working with large datasets taught me valuable lessons about optimization and scalability in AI systems.
            </p>
          ) : project.slug === "stock-tracking" ? (
            <p className="text-gray-700 leading-relaxed">
              Building this platform enhanced my skills in working with financial APIs and real-time data streams. I gained experience in creating responsive, data-intensive applications that handle frequent updates efficiently. The project also taught me about the importance of data visualization in making complex information accessible to users.
            </p>
          ) : project.slug === "network-dashboard" ? (
            <div className="space-y-6">
              {/* Target Market */}
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="mr-2">🎯</span> Target Market
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Primary: MSPs</h4>
                    <p className="text-sm text-gray-700">10-50 clients each, need branded dashboards per client without paying $50K+ for white-label enterprise</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Secondary: IT Consultants</h4>
                    <p className="text-sm text-gray-700">Freelancers who monitor 3-5 small businesses, want professional tools on a budget</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Tertiary: SMBs</h4>
                    <p className="text-sm text-gray-700">Small businesses (50-200 employees) with in-house IT but can&apos;t afford Datadog</p>
                  </div>
                </div>
              </div>

              {/* Pricing Strategy */}
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="mr-2">💰</span> Pricing Tiers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <h4 className="font-bold text-lg">Starter</h4>
                    <p className="text-2xl font-bold text-primary my-2">$49/mo</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ 1 custom dashboard</li>
                      <li>✓ Basic monitoring (ping, uptime)</li>
                      <li>✓ Email alerts</li>
                      <li>✓ Custom logo/colors</li>
                      <li>✗ White-label (shows &quot;Powered by&quot;)</li>
                    </ul>
                  </div>
                  <div className="p-4 border-2 border-primary rounded-lg relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                    <h4 className="font-bold text-lg">Professional</h4>
                    <p className="text-2xl font-bold text-primary my-2">$149/mo</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ 5 custom dashboards</li>
                      <li>✓ Advanced monitoring (bandwidth, CPU, disk)</li>
                      <li>✓ SMS + Webhook alerts</li>
                      <li>✓ Full white-label (remove branding)</li>
                      <li>✓ Custom domain support</li>
                    </ul>
                  </div>
                  <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <h4 className="font-bold text-lg">Enterprise</h4>
                    <p className="text-2xl font-bold text-primary my-2">$299/mo</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Unlimited dashboards</li>
                      <li>✓ AI anomaly detection</li>
                      <li>✓ Priority support</li>
                      <li>✓ Self-hosted option</li>
                      <li>✓ Custom integrations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Revenue Projections */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg mb-2 flex items-center text-green-900">
                  <span className="mr-2">📈</span> Year 1 Revenue Projection
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-green-700">Month 1-3 (Launch):</p>
                    <p className="font-bold text-green-900">10 customers → $1,490/mo</p>
                  </div>
                  <div>
                    <p className="text-green-700">Month 4-6 (Growth):</p>
                    <p className="font-bold text-green-900">35 customers → $5,215/mo</p>
                  </div>
                  <div>
                    <p className="text-green-700">Month 7-12 (Scale):</p>
                    <p className="font-bold text-green-900">85 customers → $12,665/mo</p>
                  </div>
                  <div>
                    <p className="text-green-700">Year 1 ARR:</p>
                    <p className="font-bold text-xl text-green-900">~$154,000</p>
                  </div>
                </div>
                <p className="text-xs text-green-800 mt-3">
                  *Assumes 70% Professional tier, 20% Starter, 10% Enterprise. Conservative growth targeting MSP communities and Reddit/Discord marketing.
                </p>
              </div>

              {/* Competitive Advantages */}
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="mr-2">🚀</span> Competitive Advantages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">⚡</span>
                    <div>
                      <h4 className="font-semibold">First-to-Market &quot;Dashboard-as-a-Service&quot;</h4>
                      <p className="text-sm text-gray-600">No competitors offer custom dashboard generation - only static tools</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💵</span>
                    <div>
                      <h4 className="font-semibold">10x Cheaper Than Enterprise</h4>
                      <p className="text-sm text-gray-600">$149/mo vs $15K-50K for PRTG/SolarWinds white-label licenses</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🎨</span>
                    <div>
                      <h4 className="font-semibold">Full Customization in Minutes</h4>
                      <p className="text-sm text-gray-600">Visual builder vs. weeks of configuration in legacy tools</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📱</span>
                    <div>
                      <h4 className="font-semibold">Modern Mobile-First Design</h4>
                      <p className="text-sm text-gray-600">PWA with push notifications - competitors stuck with desktop-only UIs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Roadmap */}
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="mr-2">🗺️</span> Development Roadmap
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                    <div className="flex-1">
                      <h4 className="font-semibold">MVP (Months 1-2): Basic Dashboard Generator</h4>
                      <p className="text-sm text-gray-600">Configuration UI, ping/uptime monitoring, Docker build pipeline, 3 templates, Stripe integration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                    <div className="flex-1">
                      <h4 className="font-semibold">Phase 2 (Months 3-4): Advanced Monitoring</h4>
                      <p className="text-sm text-gray-600">Bandwidth/CPU/disk monitoring, SNMP integration, custom alerting rules, mobile PWA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                    <div className="flex-1">
                      <h4 className="font-semibold">Phase 3 (Months 5-6): AI & Automation</h4>
                      <p className="text-sm text-gray-600">ML-powered anomaly detection, predictive alerts, auto-remediation workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 leading-relaxed">
              [Share what you learned from this project. What challenges did you overcome? What would you do differently? What skills did you develop?]
            </p>
          )}
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
