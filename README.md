# NexusGrowths — Marketing Site

Official marketing website for [NexusGrowths](https://nexusgrowths.com), a software studio specializing in AI workflow automation, full-stack web development, and mobile applications for B2B and healthcare operations.

**Live site:** [nexusgrowths.com](https://nexusgrowths.com)

---

## Overview

This repository contains the source for the NexusGrowths landing page — a single-page experience that showcases services, team, case studies, and the delivery process. Content is driven by typed configuration files so copy, stats, and team profiles can be updated without touching layout code.

### Highlights

- **Hero & trust signals** — Value proposition, workflow preview, and social proof
- **Capabilities** — Service pillars (AI automation, web, mobile, dashboards, operational scaling)
- **Team** — Founder and engineering profiles with skills and LinkedIn links
- **Case study demo** — Telehealth workflow automation walkthrough
- **Process** — Discovery → Architect → Deploy → Scale delivery model
- **Contact** — Inquiry form and direct email CTA
- **Motion & polish** — Framer Motion animations and Lenis smooth scrolling

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Linting | ESLint + typescript-eslint |

---

## Prerequisites

- **Node.js** 20+ (recommended)
- **npm** 10+ (or compatible package manager)

---

## Getting Started

Clone the repository and install dependencies from the `site` directory:

```bash
cd site
npm install
```

Start the development server with hot module replacement:

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Production build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
site/
├── public/                 # Static assets (logo, team photos)
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── providers/      # Smooth scroll wrapper
│   │   ├── sections/       # Page sections (Hero, Capabilities, Team, etc.)
│   │   └── ui/             # Reusable UI primitives
│   ├── config/
│   │   └── site.ts         # Brand, contact, founder, and global metadata
│   ├── constants/
│   │   ├── capabilities.ts # Service pillars and stats
│   │   ├── navigation.ts   # Nav and footer links
│   │   ├── process.ts      # Delivery process steps
│   │   └── team.ts         # Team member profiles
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities (e.g. class name helper)
│   ├── types/              # Shared TypeScript types
│   ├── App.tsx             # Page composition
│   ├── main.tsx            # Application entry
│   └── index.css           # Global styles and Tailwind
├── index.html
├── vite.config.ts
└── package.json
```

---

## Configuration

Most site-wide content lives in a small set of config files. Update these to change copy without modifying components.

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Company name, tagline, contact email, social links, founder bio |
| `src/constants/capabilities.ts` | Service offerings, capability stats |
| `src/constants/team.ts` | Team members, roles, skills, photos |
| `src/constants/process.ts` | Four-step delivery process |
| `src/constants/navigation.ts` | Header nav and footer link groups |
| `index.html` | Page title, meta description, fonts |

Team photos are stored in `public/team/` and referenced by path in `team.ts`.

---

## Deployment

The site is a static SPA. Build with `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

Ensure your host serves `index.html` for all routes if you add client-side routing in the future.

---

## Contact

- **Website:** [nexusgrowths.com](https://nexusgrowths.com)
- **Email:** [muzammil@nexusgrowths.com](mailto:muzammil@nexusgrowths.com)
- **LinkedIn:** [NexusGrowths](https://www.linkedin.com/company/nexusgrowths/)

---

## License

This project is private and proprietary. All rights reserved by NexusGrowths.
