# Riyaz Portfolio — Next.js + Tailwind

A fast, SEO‑friendly portfolio tailored to your resume. Built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
# open http://localhost:3000

# 3) Build
npm run build
npm start
```

## Deploy on Vercel

1. Push this folder to a new GitHub repo.
2. Import the repo in Vercel → Accept defaults → Deploy.
3. In `app/layout.tsx`, change `metadataBase` to your real domain.
4. Replace `/public/og-cover.png` and `/public/favicon.ico` with real assets.
5. Optional: place your PDF resume at `/public/Riyaz_Dudekula_Resume.pdf`.

## Customize

- Update content in:
  - `app/(site)/components/*` (Hero, Skills, Experience, Projects, Education, Contact)
- SEO:
  - Edit `metadata` in `app/layout.tsx`
  - Update `public/robots.txt` and `public/sitemap.xml`
