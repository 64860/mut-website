# MUT Website - Murang'a University of Technology

A modern, responsive website built with Next.js 14, TypeScript, and React.

## Features

- ✨ Built with Next.js 14 (App Router)
- 🎨 Styled with vanilla CSS for maximum flexibility
- 📱 Fully responsive design
- ⚡ Fast page loads and optimal performance
- 🎭 Smooth animations and transitions
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd mut-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

## Project Structure

```
mut-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── academics/
│   │   ├── admissions/
│   │   ├── contact/
│   │   ├── research/
│   │   ├── student-life/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/
├── package.json
└── next.config.js
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Font**: Google Fonts (Poppins)

## License

© 2025 Murang'a University of Technology
