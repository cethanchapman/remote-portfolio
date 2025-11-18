# 🚀 Quick Commands Reference

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Common Tasks

### Adding a New Project

1. Open `src/data/projects.ts`
2. Add new project object to the array:
```typescript
{
  id: "my-new-project",
  title: "My New Project",
  slug: "my-new-project",
  img: "/assets/my-project.png",
  desc: "Short description here",
  longDesc: "Detailed description for the project page",
  tags: ["React", "Node.js"],
  featured: true,
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo",
  metrics: { stars: 100, users: "5K+" }
}
```
3. Add project image to `public/assets/my-project.png`

### Updating Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_HEX_COLOR",
    dark: "#DARKER_SHADE",
    light: "#LIGHTER_SHADE",
  }
}
```

### Adding a New Page

1. Create `src/app/your-page/page.tsx`:
```typescript
export default function YourPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1>Your Page</h1>
    </main>
  );
}
```

2. Add link in `src/components/Header.tsx`
3. Add link in `src/components/Footer.tsx`

## Deployment Commands

### Railway (Recommended)

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

**Or use Railway Dashboard** (easier):
1. Go to railway.app
2. Deploy from GitHub repo
3. Done! See RAILWAY_DEPLOY.md for details

### Vercel (Also Great)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Build and Export

```bash
# Build for production
npm run build

# The output will be in .next/ folder
```

## Git Commands

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git remote add origin https://github.com/yourusername/remote-portfolio.git
git branch -M main
git push -u origin main
```

## Troubleshooting

### Port already in use
```bash
# Run on different port
npm run dev -- -p 3001
```

### Clear cache and reinstall
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Fix dependency vulnerabilities
```bash
npm audit fix
```

### TypeScript errors in editor
- Reload VS Code: Ctrl+Shift+P → "Reload Window"
- Or restart TypeScript server: Ctrl+Shift+P → "TypeScript: Restart TS Server"

## File Locations Cheat Sheet

| What to Edit | File Path |
|-------------|-----------|
| Your Name | `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx` |
| Projects | `src/data/projects.ts` |
| About Info | `src/app/about/page.tsx` |
| Contact Info | `src/app/page.tsx` (Contact section) |
| Colors | `tailwind.config.ts` |
| Social Links | `src/components/Footer.tsx`, `src/app/page.tsx` |
| Site Title | `src/app/layout.tsx` (metadata) |

## Important URLs

- Local dev: http://localhost:3000
- GitHub repo: https://github.com/cethanchapman/remote-portfolio
- Deploy on Vercel: https://vercel.com

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ⏳ Update personal info (name, email, bio)
4. ⏳ Add your projects to `src/data/projects.ts`
5. ⏳ Add project images to `public/assets/`
6. ⏳ Customize colors (optional)
7. ⏳ Test on mobile/tablet
8. ⏳ Deploy to Vercel
9. ⏳ Add custom domain (optional)
10. ⏳ Share with the world! 🎉
