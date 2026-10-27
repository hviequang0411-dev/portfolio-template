# Hoang Viet Quang - Developer Portfolio

A modern, responsive, and visual developer portfolio website designed for final-year Software Engineering student **Hoang Viet Quang**, tailored to target opportunities such as:
- **Java Backend Intern**
- **Java Backend Fresher**
- **Full Stack Developer Intern**

Built with the latest technologies including **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for smooth animations and transitions.

---

## 🚀 Key Features

- **Responsive Design**: Mobile-first responsive visual layout.
- **Visual Themes**: Integrated light and dark mode toggles with persistent `localStorage` saving.
- **Visual Showcase**: Beautiful mock browser-style cards highlighting 4 core projects.
- **Dynamic Content**: An interactive timeline component showing learning progression and academic timeline.
- **Animated Progress Bars**: Skills categorized into Backend, Frontend, Databases, and Tools with scroll-revealing animations.
- **Validated Contact Form**: High-fidelity contact form with client-side regex validations and mock API state management.
- **SEO Ready**: Proper primary SEO tags, Open Graph meta tags, robots.txt, and a sitemap.xml to assist search crawlers.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Router**: React Router Dom

---

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.svg      - Page favicon
│   ├── robots.txt       - SEO indexing guide
│   └── sitemap.xml      - Indexable route map
├── src/
│   ├── assets/          - Media and static assets
│   ├── components/      - Reusable UI elements (Navbar, Footer, Button, SkillBar, etc.)
│   ├── context/         - React context providers (ThemeContext)
│   ├── layouts/         - MainLayout routing template
│   ├── pages/           - Main page components (Home, About, Projects, Skills, Experience, etc.)
│   ├── types/           - TypeScript model definitions (index.ts)
│   ├── App.tsx          - App routing tree
│   ├── main.tsx         - React entry mount
│   └── index.css        - Tailwind v4 entry and global stylesheet
├── index.html           - Main HTML entry with SEO tags
├── package.json         - NPM packages and build scripts
├── vite.config.ts       - Vite and Tailwind plugins configuration
├── vercel.json          - SPA routing rewrites for Vercel
└── README.md            - Documentation & guides
```

---

## 💻 Local Development Setup

To run this project locally, follow these steps:

1. **Prerequisites**: Ensure you have Node.js (v18+) and npm installed on your system.
2. **Clone/Open Workspace**: Navigate to the project root directory.
   ```bash
   cd portfolio-website
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
5. **Open Browser**: Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## 📦 Build for Production

To build a minimized bundle for production:

```bash
npm run build
```

This compiles your TypeScript files and generates the HTML, CSS, and JS assets in the `dist/` directory.

---

## ☁️ Vercel Deployment Guide

To deploy this portfolio website to Vercel, follow these instructions:

### Option 1: Deploy using the Vercel CLI (Recommended for fast updates)
1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Run the deployment command inside the project root:
   ```bash
   vercel
   ```
   Follow the prompts to link the project and deploy it.
4. For production builds, run:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Git Integration (Recommended for CI/CD)
1. Push your code repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to the [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project**.
4. Import your Git repository.
5. In **Build & Development Settings**, Vercel will automatically detect **Vite** and configure the commands:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**. Vercel will automatically rebuild and deploy your portfolio whenever you push commits to your main branch.

> [!NOTE]
> The repository already includes a `vercel.json` file. This tells Vercel's edge routers to rewrite all requests to `index.html`, ensuring React Router client-side routing functions correctly when visitors refresh subpages (like `/about` or `/projects`).
