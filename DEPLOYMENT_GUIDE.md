# Complete Deployment Guide for Sports Prediction & Stock Tracking Projects

This guide provides step-by-step instructions for deploying your Sports Prediction Site and Stock Tracking Site to Railway, along with setting up CI/CD pipelines, basic QA, and version control workflows.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure Setup](#project-structure-setup)
3. [Version Control with Git & GitHub](#version-control-with-git--github)
4. [Railway Deployment Setup](#railway-deployment-setup)
5. [CI/CD Pipeline Configuration](#cicd-pipeline-configuration)
6. [Basic QA Setup](#basic-qa-setup)
7. [Environment Variables & Secrets](#environment-variables--secrets)
8. [Custom Domains & SSL](#custom-domains--ssl)
9. [Monitoring & Logs](#monitoring--logs)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Accounts
- **GitHub Account**: For version control and code hosting
- **Railway Account**: For application deployment (sign up at [railway.app](https://railway.app))
- **Domain Registrar** (Optional): For custom domain names

### Required Tools
- **Git**: Version control system
- **Node.js & npm**: For running and building projects locally
- **Code Editor**: VS Code (already using)
- **Terminal**: PowerShell (already configured)

### Required Knowledge
- Basic understanding of Git commands
- Familiarity with environment variables
- Understanding of REST APIs (for external services)

---

## Project Structure Setup

### 1. Organize Your Projects

Create a separate repository for each project:

```
projects/
├── sports-prediction/
│   ├── src/
│   ├── requirements.txt (Python)
│   ├── package.json (if Node.js)
│   ├── .gitignore
│   ├── railway.json
│   ├── README.md
│   └── .github/
│       └── workflows/
│           └── deploy.yml
│
└── stock-tracking/
    ├── src/
    ├── package.json
    ├── .gitignore
    ├── railway.json
    ├── README.md
    └── .github/
        └── workflows/
            └── deploy.yml
```

### 2. Create Essential Files

#### For Sports Prediction (Python-based):

**requirements.txt** - List all Python dependencies:
```txt
flask==3.0.0
numpy==1.24.3
pandas==2.0.3
scikit-learn==1.3.0
python-dotenv==1.0.0
gunicorn==21.2.0
```

**Procfile** - Tells Railway how to run your app:
```
web: gunicorn app:app
```

**railway.json** - Railway configuration:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "gunicorn app:app",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

#### For Stock Tracking (Node.js/React-based):

**package.json** - Ensure you have build scripts:
```json
{
  "name": "stock-tracking",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

**railway.json**:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 3. Create .gitignore Files

#### Python .gitignore:
```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/
ENV/

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/

# Logs
*.log

# OS
.DS_Store
Thumbs.db

# Data files (if large)
*.csv
*.db
*.sqlite
```

#### Node.js .gitignore:
```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Production
build/
dist/
.next/
out/

# Environment variables
.env
.env*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Testing
coverage/
.nyc_output/
```

---

## Version Control with Git & GitHub

### 1. Initialize Git Repositories

For each project (Sports Prediction and Stock Tracking):

```powershell
# Navigate to project directory
cd C:\Users\echap\projects\sports-prediction

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Sports Prediction project setup"
```

### 2. Create GitHub Repositories

1. Go to [github.com](https://github.com) and click "New repository"
2. Create repository: `sports-prediction`
   - Description: "AI-powered sports prediction platform"
   - Keep it Public or Private (your choice)
   - Don't initialize with README (you already have one)
3. Repeat for `stock-tracking` repository

### 3. Link Local Repos to GitHub

```powershell
# Add remote origin (replace with your actual GitHub URLs)
git remote add origin https://github.com/cethanchapman/sports-prediction.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Branch Strategy (Simple)

For home projects, use a simple branching strategy:

- **main** - Production-ready code
- **dev** - Development branch
- **feature/** - Feature branches (optional)

```powershell
# Create and switch to dev branch
git checkout -b dev

# Push dev branch to GitHub
git push -u origin dev
```

**Workflow**:
1. Make changes in `dev` branch
2. Test locally
3. Merge to `main` when ready
4. `main` branch auto-deploys to Railway

---

## Railway Deployment Setup

### 1. Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click "Login" and sign in with GitHub
3. Authorize Railway to access your GitHub account

### 2. Deploy Sports Prediction Project

#### Step-by-Step:

1. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `sports-prediction` repository
   - Railway will automatically detect it's a Python project

2. **Configure Build Settings**
   - Railway will auto-detect using Nixpacks
   - Build command: Automatically determined
   - Start command: `gunicorn app:app` (or your main file)

3. **Add Environment Variables**
   - Click on your service
   - Go to "Variables" tab
   - Add required variables (see Environment Variables section)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Railway will provide a URL: `https://sports-prediction-production.up.railway.app`

### 3. Deploy Stock Tracking Project

Repeat the same process:

1. Click "New Project" in Railway dashboard
2. Select "Deploy from GitHub repo"
3. Choose `stock-tracking` repository
4. Railway auto-detects Node.js/Next.js
5. Add environment variables
6. Deploy

### 4. Get Deployment URLs

After deployment, Railway provides URLs like:
- Sports Prediction: `https://sports-prediction-production-xxxx.up.railway.app`
- Stock Tracking: `https://stock-tracking-production-yyyy.up.railway.app`

### 5. Update Portfolio Links

Update your portfolio `projects.ts` file:

```typescript
export const projects: Project[] = [
  {
    id: "sports-prediction",
    title: "Sports Prediction Site",
    slug: "sports-prediction",
    img: "/assets/project1.png",
    desc: "AI-powered sports prediction platform leveraging machine learning models for game outcome analysis.",
    longDesc: `An advanced sports analytics platform...`,
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"],
    featured: true,
    demoUrl: "https://sports-prediction-production-xxxx.up.railway.app", // Update this
    githubUrl: "https://github.com/cethanchapman/sports-prediction",
    metrics: {
      users: "Live",
    },
  },
  {
    id: "stock-tracking",
    title: "Stock Tracking Site",
    slug: "stock-tracking",
    img: "/assets/project2.png",
    desc: "Real-time stock market tracking and portfolio management application with advanced analytics.",
    longDesc: `A comprehensive stock tracking platform...`,
    tags: ["React", "TypeScript", "Financial APIs", "Data Visualization"],
    featured: true,
    demoUrl: "https://stock-tracking-production-yyyy.up.railway.app", // Update this
    githubUrl: "https://github.com/cethanchapman/stock-tracking",
    metrics: {
      users: "Live",
    },
  },
];
```

---

## CI/CD Pipeline Configuration

### Overview

Set up automatic deployments when you push code to GitHub:
- Push to `main` branch → Auto-deploy to production
- Push to `dev` branch → Auto-deploy to staging (optional)

### 1. Railway Automatic Deployments

Railway automatically sets up CI/CD when you connect GitHub:

**Automatic Features**:
- Watches your `main` branch
- Builds and deploys on every push
- Rolls back if deployment fails

**Configure Deployment Settings**:
1. Go to Railway project
2. Click on service → "Settings"
3. Under "Deploys":
   - **Source**: `main` branch
   - **Auto-deploy**: Enabled ✓
   - **PR Deploys**: Optional (creates preview URLs for PRs)

### 2. GitHub Actions (Optional - Advanced CI/CD)

Create `.github/workflows/deploy.yml` for additional checks:

#### For Sports Prediction:

```yaml
name: Deploy to Railway

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install pytest flake8
      
      - name: Lint with flake8
        run: |
          flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
      
      - name: Run tests
        run: |
          pytest tests/ --verbose
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Railway
        run: echo "Railway auto-deploys from main branch"
```

#### For Stock Tracking:

```yaml
name: Deploy to Railway

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run type-check
      
      - name: Lint
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Railway
        run: echo "Railway auto-deploys from main branch"
```

### 3. Basic Deployment Workflow

**Daily Development Flow**:

```powershell
# 1. Make changes in dev branch
git checkout dev

# 2. Make your code changes
# ... edit files ...

# 3. Test locally
npm run dev  # or python app.py

# 4. Commit changes
git add .
git commit -m "Add new feature: description"

# 5. Push to dev branch (doesn't deploy yet)
git push origin dev

# 6. When ready for production, merge to main
git checkout main
git merge dev

# 7. Push to main (triggers auto-deployment)
git push origin main

# Railway automatically:
# - Pulls latest code
# - Runs build
# - Deploys new version
# - Health checks
# - Routes traffic to new deployment
```

---

## Basic QA Setup

### 1. Pre-Deployment Checks

Create a checklist for yourself before deploying:

**Pre-Deploy Checklist** (`DEPLOY_CHECKLIST.md`):
```markdown
# Deployment Checklist

## Before Pushing to Main

- [ ] All tests pass locally
- [ ] No console errors in browser/terminal
- [ ] Code linted and formatted
- [ ] Environment variables documented
- [ ] README updated (if needed)
- [ ] No sensitive data in code
- [ ] Database migrations ready (if any)
- [ ] API endpoints tested

## After Deployment

- [ ] Site loads correctly
- [ ] All features work as expected
- [ ] No errors in Railway logs
- [ ] Performance acceptable
- [ ] Mobile responsive (if web app)
```

### 2. Automated Testing

#### Sports Prediction (Python - pytest):

Create `tests/test_basic.py`:
```python
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_endpoint(client):
    """Test that health check endpoint works"""
    response = client.get('/health')
    assert response.status_code == 200
    assert b'healthy' in response.data.lower()

def test_home_page(client):
    """Test that home page loads"""
    response = client.get('/')
    assert response.status_code == 200

def test_prediction_endpoint(client):
    """Test prediction API endpoint"""
    response = client.post('/api/predict', json={
        'team1': 'Lakers',
        'team2': 'Warriors'
    })
    assert response.status_code == 200
    data = response.get_json()
    assert 'prediction' in data
```

#### Stock Tracking (JavaScript - Jest):

Create `tests/api.test.js`:
```javascript
describe('API Endpoints', () => {
  test('Health check returns 200', async () => {
    const response = await fetch('http://localhost:3000/api/health');
    expect(response.status).toBe(200);
  });

  test('Home page loads', async () => {
    const response = await fetch('http://localhost:3000');
    expect(response.status).toBe(200);
  });

  test('Stock data endpoint works', async () => {
    const response = await fetch('http://localhost:3000/api/stocks/AAPL');
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('symbol');
  });
});
```

### 3. Manual Testing Guide

Create `TESTING_GUIDE.md`:
```markdown
# Manual Testing Guide

## Sports Prediction Site

### Critical Paths
1. **Home Page**
   - [ ] Page loads without errors
   - [ ] All sections visible
   - [ ] Navigation works

2. **Prediction Feature**
   - [ ] Can select teams
   - [ ] Prediction generates
   - [ ] Results display correctly

3. **API Endpoints**
   - [ ] `/health` returns 200
   - [ ] `/api/predict` accepts POST requests

## Stock Tracking Site

### Critical Paths
1. **Home Page**
   - [ ] Page loads without errors
   - [ ] Stock list displays
   - [ ] Search works

2. **Stock Details**
   - [ ] Individual stock page loads
   - [ ] Charts render
   - [ ] Real-time data updates

3. **Portfolio**
   - [ ] Can add stocks
   - [ ] Portfolio calculates correctly
   - [ ] Data persists
```

### 4. Monitoring & Alerts

**Railway Built-in Monitoring**:
- Go to your Railway project
- Click "Observability"
- Monitor:
  - Response times
  - Error rates
  - Memory usage
  - CPU usage

**Set Up Alerts** (Optional):
- Railway can send alerts to Discord/Slack
- Configure in Project Settings → Integrations

---

## Environment Variables & Secrets

### 1. Identify Required Variables

Create `.env.example` file (commit this):

**Sports Prediction .env.example**:
```env
# Server Configuration
PORT=8000
FLASK_ENV=production
DEBUG=False

# Database (if using)
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# API Keys (if using external services)
SPORTS_API_KEY=your_api_key_here
SPORTS_API_URL=https://api.sportsdata.com

# Security
SECRET_KEY=your_secret_key_here
JWT_SECRET=your_jwt_secret_here

# Model Configuration
MODEL_PATH=/app/models/prediction_model.pkl
CONFIDENCE_THRESHOLD=0.75
```

**Stock Tracking .env.example**:
```env
# App Configuration
NEXT_PUBLIC_APP_URL=https://your-app.railway.app
NODE_ENV=production

# API Keys
NEXT_PUBLIC_ALPHA_VANTAGE_KEY=your_key_here
FINNHUB_API_KEY=your_key_here

# Database
DATABASE_URL=postgresql://user:pass@host:5432/stockdb

# Authentication (if using)
NEXTAUTH_URL=https://your-app.railway.app
NEXTAUTH_SECRET=your_secret_here

# Rate Limiting
API_RATE_LIMIT=100
API_RATE_WINDOW=900000
```

### 2. Never Commit Actual .env Files

Your `.gitignore` should include:
```gitignore
.env
.env.local
.env.production
.env.development
```

### 3. Add Variables to Railway

For each project in Railway:

1. Go to project → Click service
2. Click "Variables" tab
3. Click "Add Variable"
4. Add each variable from your `.env.example`
5. Click "Add" for each one

**Important Variables to Set**:
- `PORT` (Railway provides this automatically)
- `NODE_ENV=production`
- `PYTHON_VERSION=3.11` (for Python projects)
- All API keys
- Database URLs
- Secret keys

### 4. Generate Secure Secrets

For SECRET_KEY and JWT_SECRET:

```powershell
# Generate random secret (PowerShell)
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))

# Or use online: https://generate-secret.vercel.app/32
```

---

## Custom Domains & SSL

### 1. Using Railway Domains (Free)

Railway provides free subdomains:
- `your-app-production.up.railway.app`
- SSL automatically configured
- No setup needed

### 2. Add Custom Domain (Optional)

If you own a domain like `ethanchapman.com`:

#### In Railway:
1. Go to project → Service
2. Click "Settings"
3. Scroll to "Domains"
4. Click "Add Domain"
5. Enter: `sports.ethanchapman.com`

#### In Your Domain Registrar:
1. Add CNAME record:
   - Name: `sports`
   - Value: `your-app.up.railway.app`
   - TTL: 3600

2. Wait for DNS propagation (5-30 minutes)
3. Railway auto-provisions SSL certificate

**Example DNS Records**:
```
sports.ethanchapman.com  →  sports-prediction.up.railway.app
stocks.ethanchapman.com  →  stock-tracking.up.railway.app
```

### 3. Update Portfolio Links

Once custom domains are set:

```typescript
demoUrl: "https://sports.ethanchapman.com",
demoUrl: "https://stocks.ethanchapman.com",
```

---

## Monitoring & Logs

### 1. View Railway Logs

**Real-time Logs**:
1. Go to Railway project
2. Click on service
3. Click "Deployments"
4. Click "View Logs" on latest deployment

**Log Types**:
- **Build logs**: Shows npm install, compilation
- **Deploy logs**: Shows startup, runtime logs
- **Error logs**: Shows crashes, exceptions

### 2. Common Log Commands

Add logging to your applications:

**Python (Flask)**:
```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    logger.info(f"Prediction request received: {request.json}")
    # ... your code ...
    logger.info(f"Prediction completed: {result}")
    return jsonify(result)
```

**Node.js**:
```javascript
console.log('[INFO] Server started on port', process.env.PORT);
console.error('[ERROR] Failed to fetch stock data:', error);
console.warn('[WARN] API rate limit approaching');
```

### 3. Health Check Endpoints

Add health check endpoints for monitoring:

**Python**:
```python
@app.route('/health')
def health():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0'
    })
```

**Node.js**:
```javascript
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});
```

### 4. Set Up Monitoring Dashboard

**Simple Monitoring Checklist**:
- Check Railway dashboard daily
- Monitor error rates
- Watch memory/CPU usage
- Review logs for errors

**Tools** (Optional):
- Railway built-in metrics
- Sentry for error tracking (free tier)
- LogRocket for session replay (optional)

---

## Troubleshooting

### Common Issues & Solutions

#### 1. Build Fails

**Symptoms**: Deployment shows "Build Failed"

**Solutions**:
```bash
# Check Railway build logs
# Common issues:

# Missing dependencies
# Fix: Update requirements.txt or package.json

# Wrong Python/Node version
# Fix: Add to railway.json or package.json:
"engines": {
  "node": "18.x"
}

# Port issues
# Fix: Use Railway's PORT environment variable
const port = process.env.PORT || 3000;
```

#### 2. App Crashes on Startup

**Symptoms**: Deployment succeeds but app immediately crashes

**Solutions**:
- Check start command in railway.json
- Verify environment variables are set
- Check logs for error messages
- Test locally with production settings

#### 3. Database Connection Fails

**Symptoms**: "Cannot connect to database" errors

**Solutions**:
```bash
# Ensure DATABASE_URL is set in Railway
# Format: postgresql://user:pass@host:5432/dbname

# Check Railway postgres addon is running
# Verify connection string is correct
# Check firewall/network settings
```

#### 4. Slow Performance

**Solutions**:
- Upgrade Railway plan if needed
- Add caching (Redis)
- Optimize database queries
- Reduce API calls
- Add loading states in frontend

#### 5. CORS Errors

**Symptoms**: "CORS policy blocked" in browser console

**Python Fix**:
```python
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
```

**Node.js Fix**:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
```

#### 6. Environment Variables Not Working

**Checklist**:
- [ ] Variables added in Railway dashboard
- [ ] Service redeployed after adding variables
- [ ] Variable names match code exactly
- [ ] No quotes around values in Railway
- [ ] Using correct prefix (NEXT_PUBLIC_ for Next.js client)

---

## Quick Reference Commands

### Git Workflow
```powershell
# Daily development
git checkout dev
git pull origin dev
# ... make changes ...
git add .
git commit -m "Description of changes"
git push origin dev

# Deploy to production
git checkout main
git merge dev
git push origin main
# Railway auto-deploys
```

### Local Testing
```powershell
# Sports Prediction (Python)
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python app.py

# Stock Tracking (Node.js)
npm install
npm run dev
```

### Check Deployment Status
```powershell
# View Git status
git status

# View recent commits
git log --oneline -5

# Check remote URL
git remote -v
```

---

## Deployment Checklist for Agent

When working with an agent to deploy, provide them with:

### Information to Share:

1. **Repository URLs**:
   - Sports Prediction: `https://github.com/cethanchapman/sports-prediction`
   - Stock Tracking: `https://github.com/cethanchapman/stock-tracking`

2. **Technology Stack**:
   - Sports Prediction: Python, Flask, scikit-learn
   - Stock Tracking: Next.js, React, TypeScript

3. **Environment Variables** (from `.env.example`)

4. **Deployment Platform**: Railway

5. **Current Status**: 
   - "Projects are in GitHub, ready for Railway deployment"
   - "Need CI/CD pipeline configured"
   - "Need production environment variables set"

### Tasks for Agent:

- [ ] Connect GitHub repos to Railway
- [ ] Configure build and deploy settings
- [ ] Set up environment variables
- [ ] Enable automatic deployments from main branch
- [ ] Set up GitHub Actions for testing (optional)
- [ ] Configure custom domains (if desired)
- [ ] Set up monitoring and alerts
- [ ] Test deployment and verify functionality
- [ ] Update portfolio links with live URLs
- [ ] Create deployment documentation

---

## Next Steps

1. **Prepare Your Projects**:
   - Ensure both projects run locally
   - Create `requirements.txt` or `package.json`
   - Add health check endpoints
   - Create `.env.example` files

2. **Push to GitHub**:
   - Create repositories
   - Push code
   - Create dev branch

3. **Connect to Railway**:
   - Sign up for Railway
   - Connect GitHub account
   - Deploy first project

4. **Test & Iterate**:
   - Verify deployment works
   - Test all features
   - Fix any issues

5. **Update Portfolio**:
   - Add live URLs to projects.ts
   - Test links from portfolio
   - Share with others!

---

## Support Resources

- **Railway Docs**: https://docs.railway.app
- **GitHub Actions**: https://docs.github.com/actions
- **Flask Deployment**: https://flask.palletsprojects.com/en/latest/deploying/
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

**Last Updated**: November 17, 2025  
**Author**: Ethan Chapman  
**Purpose**: Home side projects deployment guide
