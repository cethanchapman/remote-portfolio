# Quick Start Guide

## Initial Setup Checklist

Follow these steps to customize your portfolio:

### 1. Install Dependencies ✅
```bash
npm install
```

### 2. Update Personal Information

- [ ] **`src/app/layout.tsx`**
  - Change "Your Name" in metadata
  - Update description

- [ ] **`src/app/page.tsx`**
  - Update hero section name
  - Replace elevator pitch text
  - Update email address
  - Add your social media links

- [ ] **`src/components/Header.tsx`**
  - Replace "Your Name" with your name/logo

- [ ] **`src/components/Footer.tsx`**
  - Update name
  - Update all social links (GitHub, LinkedIn, Twitter)
  - Update email address

### 3. Add Your Projects

- [ ] Edit **`src/data/projects.ts`**
  - Replace sample projects with your real projects
  - Add project descriptions, tags, links
  - Set featured projects

- [ ] Add project images to **`public/assets/`**
  - Create the assets folder
  - Add project screenshots (PNG or JPG)
  - Update image paths in projects.ts

### 4. Customize About Page

- [ ] Edit **`src/app/about/page.tsx`**
  - Write your bio
  - Add your skills
  - Update work experience
  - Add education details

### 5. Customize Design (Optional)

- [ ] **`tailwind.config.ts`** - Change color scheme if desired
- [ ] **`src/app/globals.css`** - Adjust global styles

### 6. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and review your site

### 7. Deploy to Vercel

```bash
# Push to GitHub first
git add .
git commit -m "Initial portfolio setup"
git push

# Then deploy via Vercel dashboard or CLI
npm i -g vercel
vercel
```

## Common Customizations

### Change Primary Color

Edit `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "#YOUR_COLOR", // Change this
  dark: "#DARKER_SHADE",
  light: "#LIGHTER_SHADE",
}
```

### Add a New Page

1. Create `src/app/your-page/page.tsx`
2. Add link to `src/components/Header.tsx`
3. Add link to `src/components/Footer.tsx`

### Add More Project Details

Edit individual project pages at `src/app/projects/[slug]/page.tsx`

## Troubleshooting

**Error: Module not found**
```bash
npm install
```

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Build errors**
```bash
npm run build
```

## Next Steps

- [ ] Add Google Analytics
- [ ] Setup contact form
- [ ] Add blog posts
- [ ] Create downloadable resume
- [ ] Add animations
- [ ] Setup dark mode
