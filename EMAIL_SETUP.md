# Email Setup Guide

## Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click **"Start Building"** or **"Sign Up"**
3. Sign up with your email or GitHub
4. Verify your email address

## Step 2: Get Your API Key

1. After logging in, you'll be on the dashboard
2. Click **"API Keys"** in the left sidebar
3. Click **"Create API Key"** button
4. Give it a name like "MUT Website Dev"
5. Click **"Create"**
6. **COPY THE API KEY** (you'll only see it once!)

## Step 3: Add to Environment Variables

1. Open `.env.local` in your project
2. Add or update the line:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
3. Save the file

## Step 4: Restart Development Server

**Important:** You must restart your dev server for the new environment variable to load!

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 5: Test Email

1. Go to `http://localhost:3000/test-email`
2. Enter your email address
3. Click "Send Test Email"
4. Check your inbox (and spam folder!)

---

## Free Tier Limits

Resend free tier includes:
- ✅ **100 emails per day**
- ✅ **Unlimited team members**
- ✅ **All features available**

Perfect for development and testing!

---

## Troubleshooting

**"RESEND_API_KEY not configured"**
- Make sure you added the key to `.env.local`
- Make sure you restarted the dev server
- Check for typos in the variable name

**Email not received**
- Check your spam folder
- Verify the email address is correct
- Free tier sends from `onboarding@resend.dev` (may be flagged as spam)

**To send from your own domain:**
1. Add and verify your domain in Resend dashboard
2. Update the `from` field in the API route
3. Requires DNS configuration (check Resend docs)

---

## Next Steps

Once email is working, we'll implement:
- ✅ Contact form with email notifications
- ✅ Application confirmation emails
- ✅ Admin notification system
