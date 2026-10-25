# ASSC Open Painting Competition 2026

**Theme: MAN, MOON & FUTURE**

The official website for the Astronomy & Space Study Center (ASSC) Open Painting Competition 2026. Built with Next.js, TypeScript, and Tailwind CSS.

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
git clone <your-repository-url>
cd assc-painting-competition
npm install
```

### Environment Setup

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
NEXT_PUBLIC_REGISTRATION_STATUS=open
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npx tsc --noEmit
```

---

## Project Structure

```
assc-painting-competition/
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # Homepage (all sections)
│   │   ├── layout.tsx           # Root layout with fonts & metadata
│   │   ├── globals.css          # Design system & global styles
│   │   ├── register/page.tsx    # Registration page
│   │   ├── guidelines/page.tsx  # Competition guidelines
│   │   ├── privacy/page.tsx     # Privacy & data use
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── sitemap.ts           # Dynamic sitemap generation
│   │   └── robots.ts            # Dynamic robots.txt
│   ├── components/
│   │   ├── home/                # Homepage section components
│   │   ├── layout/              # Header & Footer
│   │   ├── registration/        # Registration page content
│   │   └── ui/                  # Reusable UI components
│   └── config/
│       └── competition.ts       # Central competition configuration
├── .env.example                 # Environment variable template
├── GOOGLE_FORM_SETUP.md         # Google Form creation guide
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page with hero, about, categories, prizes, theme, art media, AI policy, how to participate, deadline, FAQ, and final CTA |
| `/register` | Registration page with embedded Google Form |
| `/guidelines` | Full competition guidelines and rules |
| `/privacy` | Privacy and data use information |

---

## Configuration

All competition data is centralised in `src/config/competition.ts`. Organisers can update:

- Competition name, theme, and dates
- Prize amounts and categories
- FAQ entries
- AI policy details
- Registration status (`open` / `coming_soon` / `closed`)
- Contact information and social links (when available)

**No component code needs to change** when updating competition details.

---

## Registration System

### How It Works

1. The `/register` page embeds the official Google Form.
2. Participants complete registration details and upload their artwork directly in the submission section.
3. Responses and uploaded files are automatically recorded in the linked Google Sheet and Google Drive folder.
4. Organisers review entries and verify compliance with competition guidelines.

### Setup

See [GOOGLE_FORM_SETUP.md](./GOOGLE_FORM_SETUP.md) for complete instructions on:

- Configuring the registration and artwork submission sections
- Setting up Google Sheets integration and Google Drive file uploads
- Configuring section branching for minors
- Obtaining form URLs
- Managing the review and evaluation workflow

### Registration States

The website handles three registration states:

| State | Behaviour |
|-------|-----------|
| `open` | Shows the embedded Google Form (if configured) |
| `coming_soon` | Shows a "Registration Opening Soon" message |
| `closed` | Shows a "Registration Closed" message |

If form URLs are not configured, a setup instruction message is shown instead of a broken iframe.

---

## Design System

### Colour Palette

| Name | Hex | Usage |
|------|-----|-------|
| Midnight Navy | `#081526` | Primary dark backgrounds |
| Deep Space Blue | `#112B46` | Secondary dark backgrounds |
| Lunar Ivory | `#F6F3EA` | Light text, light section backgrounds |
| Moon Gold | `#E9B95B` | Primary accent, CTAs, highlights |
| Nebula Lavender | `#A99CFF` | Secondary accent |
| Artistic Coral | `#F78E7A` | Tertiary accent |

### Typography

- **Headlines:** Space Grotesk (Google Fonts)
- **Body text:** DM Sans (Google Fonts)

### Key Features

- CSS-only starfield backgrounds
- Original SVG Moon illustration
- Scroll-triggered reveal animations (Motion)
- Gold/Silver/Bronze prize tier styling
- Accessible accordion FAQ
- Responsive mobile navigation
- Reduced motion support

---

## Deployment to Vercel

### Step-by-step

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect Next.js — accept the defaults.
4. Add environment variables in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_GOOGLE_FORM_URL`
   - `NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL`
   - `NEXT_PUBLIC_REGISTRATION_STATUS`
   - `NEXT_PUBLIC_SITE_URL` (set to your production domain)
5. Deploy.
6. Test the registration page on the live site.

### Custom Domain

1. In Vercel, go to **Settings → Domains**.
2. Add your custom domain.
3. Update `NEXT_PUBLIC_SITE_URL` to match.
4. Update DNS records as instructed by Vercel.

---

## Updating Competition Details

### Change deadline, prizes, or categories

Edit `src/config/competition.ts` and redeploy.

### Change registration status

Update `NEXT_PUBLIC_REGISTRATION_STATUS` in Vercel environment variables and redeploy.

### Add contact email or social links

Update the `contactEmail` and `socialLinks` fields in `src/config/competition.ts`.

---

## Technology Stack

- **Next.js 16** — App Router, server components
- **React 19** — UI framework
- **TypeScript** — strict type checking
- **Tailwind CSS 4** — utility-first styling
- **Motion** — scroll-triggered animations
- **Lucide React** — icons
- **Google Fonts** — Space Grotesk, DM Sans (via `next/font`)
- **Google Forms** — registration form
- **Google Sheets** — response storage

---

## Pre-Launch Checklist

- [ ] Google Form created with all 23 questions
- [ ] Google Sheets linked and tracking columns added
- [ ] Environment variables configured on Vercel
- [ ] Registration form tested on desktop and mobile
- [ ] All competition information verified for accuracy
- [ ] Contact email added (when available)
- [ ] Privacy policy reviewed by organisers
- [ ] Artwork submission workflow documented for organisers
- [ ] Custom domain configured (if applicable)
- [ ] SEO metadata reviewed and `NEXT_PUBLIC_SITE_URL` updated

---

## License

This project is created for the Astronomy & Space Study Center (ASSC). All rights reserved.
