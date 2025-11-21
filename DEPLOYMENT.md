# Deployment Guide - Vercel

## Quick Deployment via Vercel Dashboard (Recommended)

Since we're experiencing some PATH issues with the terminal, here's the easiest way to deploy:

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** button in the top right → **"New repository"**
3. Name it: `mut-website`
4. Keep it **Public** (or Private if you have a paid account)
5. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open a **NEW PowerShell window** in your project directory and run:

```bash
cd C:\Users\Gathonjia\Documents\Antigravity\mut-website
git init
git add .
git commit -m "Initial commit - MUT Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mut-website.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

If you don't have Git installed, download it from: [git-scm.com](https://git-scm.com/download/win)

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (you can sign up with your GitHub account)
3. Once logged in, click **"Add New Project"**
4. Click **"Import Git Repository"**
5. Select your `mut-website` repository
6. Vercel will auto-detect it's a Next.js project
7. Click **"Deploy"**
8. Wait 1-2 minutes ⏳
9. **Your site is live!** 🎉

You'll get a URL like: `https://mut-website-username.vercel.app`

---

## Alternative: Deploy via Vercel CLI

If GitHub is too complex, you can use the Vercel CLI. Open a **NEW** PowerShell window and run:

```bash
cd C:\Users\Gathonjia\Documents\Antigravity\mut-website
npm install -g vercel
vercel login
vercel
```

Follow the prompts:
- Link to existing project? **No**
- Project name? Press **Enter** (default)
- Directory? Press **Enter** (default)
- Modify settings? **No**

Your site will be deployed in ~2 minutes!

---

## What You'll Get

- Live URL: `https://your-project.vercel.app`
- Automatic HTTPS
- Global CDN
- Auto-deployments on every push (if using GitHub)
- Free hosting forever!

---

**Need help?** Let me know which method you'd like to use and I'll guide you through it step by step! 🚀
