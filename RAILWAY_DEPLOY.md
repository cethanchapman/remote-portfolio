# Railway Deployment Guide for Your Portfolio

## ✅ Railway Compatibility

Your Next.js portfolio is **100% compatible** with Railway! All necessary configurations have been added.

## 🚀 How to Deploy to Railway

### Option 1: Deploy via Railway Dashboard (Easiest)

1. **Create a Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `remote-portfolio` repository
   - Click "Deploy Now"

3. **Railway will automatically:**
   - Detect it's a Next.js project
   - Install dependencies with `npm ci`
   - Build with `npm run build`
   - Start with `npm start`
   - Assign a public URL

4. **Get Your URL**
   - Your site will be live at: `https://your-project.up.railway.app`
   - You can add a custom domain in settings

### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project (run in your project directory)
railway init

# Deploy
railway up
```

## 📝 Configuration Files Added

✅ **`railway.json`** - Railway-specific deployment config
✅ **`nixpacks.toml`** - Build configuration for Nixpacks
✅ **`package.json`** - Added Node.js engine requirements

## 🔧 Environment Variables (Optional)

If you need environment variables later:

1. Go to your Railway project dashboard
2. Click on your service
3. Go to "Variables" tab
4. Add variables like:
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_API_URL=your-api-url`

## ⚙️ Railway Configuration Details

### Build Process
- **Builder:** Nixpacks (automatic)
- **Node Version:** 20.x
- **Install:** `npm ci` (faster than npm install)
- **Build:** `npm run build`
- **Start:** `npm start`

### Deployment Settings
- **Auto-deploy:** Enabled (deploys on every git push)
- **Restart Policy:** On failure
- **Max Retries:** 10

## 🌐 Custom Domain Setup

1. Go to your Railway project
2. Click "Settings"
3. Scroll to "Domains"
4. Click "Add Domain"
5. Enter your custom domain
6. Add the provided DNS records to your domain registrar

Example DNS records:
```
Type: CNAME
Name: www (or @)
Value: your-project.up.railway.app
```

## 💰 Pricing

Railway offers:
- **Free Trial:** $5 credit for new users
- **Hobby Plan:** $5/month + usage-based pricing
- **Resource Usage:** ~$0.000463/GB-hour for memory

Your portfolio (Next.js static/SSR) typically costs:
- **~$2-5/month** for small traffic
- Includes 512MB RAM and reasonable CPU

Much more affordable than many alternatives!

## 🔍 Monitoring Your Deployment

In Railway Dashboard you can:
- View build logs
- Monitor memory/CPU usage
- See deployment history
- Check request metrics
- View application logs

## 🐛 Troubleshooting

### Build fails
Check build logs in Railway dashboard. Common fixes:
```bash
# Locally test the build
npm run build
npm start
```

### Port issues
Railway automatically assigns a PORT variable. Next.js handles this automatically.

### Environment variables not working
Make sure to prefix public variables with `NEXT_PUBLIC_`

## 📊 Deployment Checklist

- [x] Railway configuration files added
- [x] Node.js version specified
- [x] Build and start scripts configured
- [ ] Push code to GitHub
- [ ] Connect Railway to GitHub repo
- [ ] Click "Deploy"
- [ ] Wait for build (usually 2-5 minutes)
- [ ] Visit your Railway URL
- [ ] (Optional) Add custom domain

## 🎉 Advantages of Railway

✅ **Automatic HTTPS** - SSL certificates included
✅ **Auto-deploys** - Every git push deploys automatically
✅ **Easy rollbacks** - One-click rollback to previous versions
✅ **Zero config** - Just works with Next.js
✅ **Logs & Metrics** - Built-in monitoring
✅ **Fast deploys** - Usually under 3 minutes
✅ **Great DX** - Developer-friendly dashboard

## 🔄 Continuous Deployment

Once connected, Railway automatically deploys when you:
1. Push to your main branch on GitHub
2. Merge a pull request
3. Click "Deploy" in Railway dashboard

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Check build logs in Railway dashboard
- Your app logs are available in the "Deployments" tab

---

**You're all set for Railway deployment!** 🚂✨

Just push your code to GitHub and connect it to Railway. Your portfolio will be live in minutes!
