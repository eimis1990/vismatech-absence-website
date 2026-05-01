# VismaTech Absence Manager

A sleek landing page for the VismaTech Absence Manager Chrome Extension — the fastest way for VismaTech employees to manage their leave requests.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88ce02)

## Features

- **Modern Stack** — Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations** — Parallax scroll effects powered by GSAP
- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Legal Pages** — Includes Terms of Service and Privacy Policy

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/eimis1990/vismatech-absence-website.git
cd vismatech-absence-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── components/
│   │   └── FeaturesSection.tsx   # Parallax scroll features
│   ├── privacy/
│   │   └── page.tsx              # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx              # Terms of Service page
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── public/
│   └── images/                   # Extension screenshots & assets
├── tailwind.config.ts
└── package.json
```

## Design System

| Token    | Value     | Usage                    |
|----------|-----------|--------------------------|
| `--ink`  | `#14161a` | Primary text color       |
| `--lime` | `#bbf146` | Accent / highlights      |
| `--mint` | `#ddfbe2` | Light accent             |
| `--cloud`| `#f6f7f2` | Background               |
| `--violet`| `#6c63ff`| Secondary accent         |

## Chrome Extension

The landing page promotes the VismaTech Absence Manager Chrome Extension, which allows employees to:

- View remaining leave days at a glance
- Submit absence requests directly from the browser
- Track history of past registrations

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/vismatech-absence-manager/fdpakcjcihhjeiaimmkfoldhkgglanhe)

## License

MIT

## Contact

For questions or support, reach out at [e.kudarauskas@gmail.com](mailto:e.kudarauskas@gmail.com)
