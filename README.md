# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase projects, skills, and professional experience with a clean, minimal aesthetic.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## 📦 Features

- ✨ Modern, responsive design with mobile-first approach
- 🎨 Custom color theme with teal accent colors
- 📱 Fully responsive navigation and layout
- 🎯 SEO-optimized with metadata
- 📊 Project showcase with detailed case studies
- 🔗 Dynamic routing for project pages
- 🎨 Clean, minimal UI with professional aesthetics
- ♿ Accessible and semantic HTML

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cethanchapman/remote-portfolio.git
cd remote-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
remote-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog page
│   │   ├── projects/          # Projects listing and detail pages
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   └── ProjectCard.tsx    # Project card component
│   └── data/                  # Data and content
│       └── projects.ts        # Project data and types
├── public/                    # Static assets
│   └── assets/               # Project images
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary (Teal):** `#06b6d4` - Used for CTAs, links, and accents
- **Dark Navy:** `#0f172a` - Header, footer, and text
- **Off-white:** `#f8fafc` - Background and light surfaces
- **Gray scale:** Various gray tones for text hierarchy

### Typography
- System font stack for optimal performance
- Clear hierarchy with defined heading sizes
- 16px base font size with responsive scaling

### Spacing
- 4px base unit
- Consistent 8/16/24/32px spacing scale
- 8px border radius for cards

## 📝 Customization Guide

### 1. Update Personal Information

Edit the following files to add your information:

**`src/app/layout.tsx`** - Update metadata (title, description)
**`src/app/page.tsx`** - Update hero text, about section, contact info
**`src/components/Header.tsx`** - Update name/logo
**`src/components/Footer.tsx`** - Update name and social links

### 2. Add Projects

Edit **`src/data/projects.ts`** to add your projects:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  slug: "project-slug",
  img: "/assets/project-image.png",
  desc: "Short description",
  longDesc: "Detailed description",
  tags: ["React", "TypeScript"],
  featured: true,
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo",
  metrics: {
    users: "10K+",
    stars: 245
  }
}
```

### 3. Add Project Images

Place project images in **`public/assets/`** directory and reference them in your project data.

### 4. Customize Colors

Edit **`tailwind.config.ts`** to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#06b6d4", // Your accent color
    dark: "#0891b2",
    light: "#22d3ee",
  },
  // ... other colors
}
```

### 5. Update About Page

Edit **`src/app/about/page.tsx`** to add:
- Your bio and introduction
- Skills and technologies
- Work experience
- Education

## 🚀 Deployment

Your portfolio is ready to deploy to multiple platforms!

### Deploy to Railway (Recommended)

**Railway configuration included!** ✅

1. Push your code to GitHub
2. Visit [railway.app](https://railway.app) and sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository and click "Deploy"
5. Railway auto-detects Next.js and deploys automatically

Your site will be live at `https://your-project.up.railway.app`

**See [RAILWAY_DEPLOY.md](RAILWAY_DEPLOY.md) for detailed Railway deployment guide.**

**Cost:** ~$2-5/month for typical portfolio traffic

### Deploy to Vercel (Also Great)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

**Cost:** Free for personal projects

### Custom Domain (Railway or Vercel)

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain and follow DNS configuration instructions

## 📈 Future Enhancements

- [ ] Add MDX support for blog posts
- [ ] Implement contact form with API route
- [ ] Add dark mode toggle
- [ ] Integrate analytics (Plausible or Google Analytics)
- [ ] Add animations with Framer Motion
- [ ] Create resume/CV download functionality
- [ ] Add project filtering by technology
- [ ] Implement search functionality
- [ ] Add RSS feed for blog
- [ ] Setup newsletter subscription

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Credits

Design inspiration from modern portfolio sites and the [Sujar Henry portfolio](https://github.com/Sujar-Henry/Main_portfolio-test).

Built with ❤️ using Next.js and Tailwind CSS.

---

**Need help?** Check out the [Next.js Documentation](https://nextjs.org/docs) or [Tailwind CSS Documentation](https://tailwindcss.com/docs).
Portfolio website that I designed to showcase some of my projects and achievements throughout the years. 
