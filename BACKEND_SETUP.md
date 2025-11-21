# Backend Setup Guide

## Step 1: Create Supabase Account & Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub or email
4. Click "New project"
5. Fill in:
   - **Name**: mut-website
   - **Database Password**: (create a strong password and save it!)
   - **Region**: Choose closest to you
6. Click "Create new project" (takes ~2 minutes)

## Step 2: Get Your Supabase Credentials

1. In your Supabase project dashboard, click **Settings** (gear icon)
2. Click **API** in the sidebar
3. Copy these values:
   - **Project URL** (starts with https://)
   - **anon public** key
   - **service_role** key (click "Reveal" first)

## Step 3: Run Database Schema

1. In Supabase dashboard, click **SQL Editor** in the sidebar
2. Click "+ New  query"
3. Copy **ALL** the content from `database/schema.sql`
4. Paste it into the SQL editor
5. Click **"Run"** (bottom right)
6. You should see "Success. No rows returned"

## Step 4: Set Up Environment Variables

1. In your project, copy `.env.local.example` to `.env.local`:
   ```bash
   cd C:\Users\Gathonjia\Documents\Antigravity\mut-website
   copy .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   
   # We'll add email later
   RESEND_API_KEY=
   ADMIN_EMAIL=admin@mut.ac.ke
   ```

## Step 5: Install Dependencies

```bash
npm install
```

## Step 6: Test Database Connection

We'll create a simple test page to verify everything works.

---

## Next: Create Resend Account (for emails)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for free account
3. Verify your email
4. Go to **API Keys** page
5. Create new API key
6. Copy it to `.env.local` under `RESEND_API_KEY`

**Note:** Free tier allows 100 emails/day, perfect for testing!

---

## Troubleshooting

**If database connection fails:**
- Check your environment variables are correct
- Make sure `.env.local` is in the project root
- Restart your dev server (`npm run dev`)

**If SQL script fails:**
- Make sure you copied the ENTIRE schema.sql file
- Run sections one at a time if needed
