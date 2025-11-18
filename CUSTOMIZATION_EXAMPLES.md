# 🎨 Customization Examples

## Example 1: Change Color Scheme to Purple

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#8b5cf6", // Purple
    dark: "#7c3aed",
    light: "#a78bfa",
  },
  // ... rest of colors
}
```

## Example 2: Add a Service/Consulting Page

**File:** `src/app/services/page.tsx`

```typescript
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Your Name",
  description: "Professional services and consulting offerings.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web applications built with modern technologies.",
      price: "Starting at $5,000"
    },
    {
      title: "Consulting",
      desc: "Technical consulting and code reviews for your projects.",
      price: "$150/hour"
    },
    {
      title: "Maintenance",
      desc: "Ongoing support and maintenance for existing applications.",
      price: "$500/month"
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Services</h1>
      <p className="text-xl text-gray-600 mb-12">
        Professional web development and consulting services
      </p>

      <div className="grid gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-card shadow-lg">
            <h2 className="text-2xl font-bold text-dark mb-3">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.desc}</p>
            <p className="text-primary font-semibold text-lg">{service.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/#contact"
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full inline-block transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
```

Don't forget to add the link to Header and Footer!

## Example 3: Add Social Media Icons

First install icons library:
```bash
npm install lucide-react
```

**File:** `src/components/Footer.tsx`

```typescript
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// In the social links section, replace with:
<ul className="space-y-2">
  <li>
    <a href="https://github.com/yourusername" className="flex items-center gap-2">
      <Github size={20} />
      <span>GitHub</span>
    </a>
  </li>
  <li>
    <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2">
      <Linkedin size={20} />
      <span>LinkedIn</span>
    </a>
  </li>
  {/* ... more links */}
</ul>
```

## Example 4: Add a Contact Form Component

**File:** `src/components/ContactForm.tsx`

```typescript
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // Add your form submission logic here
    // For example, using FormSpree or a custom API route
    
    setTimeout(() => {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
      >
        Send Message
      </button>

      {status && <p className="text-gray-700">{status}</p>}
    </form>
  );
}
```

Then import and use in your page:
```typescript
import ContactForm from "@/components/ContactForm";

// In your JSX:
<ContactForm />
```

## Example 5: Add Dark Mode Toggle

**File:** `tailwind.config.ts`
```typescript
export default {
  darkMode: 'class', // Enable dark mode with class strategy
  // ... rest of config
}
```

**File:** `src/components/ThemeToggle.tsx`
```typescript
"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference saved
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}
```

Add to Header component and update styles to support dark mode.

## Example 6: Add Google Analytics

**File:** `src/app/layout.tsx`

Add this script component:
```typescript
import Script from "next/script";

// Inside the <body> tag, add:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

## Example 7: Add Animation on Scroll

Install Framer Motion:
```bash
npm install framer-motion
```

**File:** `src/components/AnimatedSection.tsx`
```typescript
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
```

Wrap sections with this component for fade-in animations.

## Example 8: Add Project Filters

**File:** `src/app/projects/page.tsx`

```typescript
"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  
  const allTags = ["all", ...new Set(projects.flatMap(p => p.tags))];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === tag 
                ? "bg-primary text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
```

## Tips for Customization

1. **Always test changes locally** before deploying
2. **Keep backups** of working code before major changes
3. **Use Git commits** to track changes
4. **Check responsive design** after style changes
5. **Keep accessibility in mind** (alt text, semantic HTML, keyboard nav)
6. **Optimize images** before adding to the site
7. **Test on different browsers** (Chrome, Firefox, Safari)

## Need More Help?

- Check official Next.js docs: https://nextjs.org/docs
- Tailwind CSS reference: https://tailwindcss.com/docs
- TypeScript handbook: https://www.typescriptlang.org/docs
