# Ibrahim Byiringiro: personal website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Portfolio, resume and an MDX blog.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Where to edit things

| What | Where |
| --- | --- |
| Name, tagline, email, social links | `data/site.ts` (`site`) |
| About text and stats | `data/site.ts` (`about`) |
| Jobs, skills, education, certifications | `data/site.ts` |
| Resume PDF | replace `public/resume.pdf` |
| Photo | put it in `public/img/`, then swap the placeholder block in `components/Hero.tsx` for `next/image` |
| Blog posts | add `.mdx` files in `content/posts/` (see the two samples) |
| Colors | `accent` in `tailwind.config.ts` |

**Do first:** replace the placeholder LinkedIn and GitHub URLs in `data/site.ts`, and replace or delete the two sample blog posts.

## Contact form

1. Create a free form at https://formspree.io and copy its ID.
2. Put it in `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`.

Until then, the form falls back to opening the visitor's email app.

## Deploy (free)

1. Push to GitHub: `git init && git add . && git commit -m "Initial site"`, then add the remote and push.
2. On https://vercel.com, import the repo and deploy.
3. Add `NEXT_PUBLIC_FORMSPREE_ID` and `NEXT_PUBLIC_SITE_URL` under Project Settings → Environment Variables.
4. Add your custom domain under Settings → Domains.

## Blog post format

```mdx
---
title: "My post"
date: "2026-11-05"
summary: "One sentence shown in the list"
tags: ["SQL"]
draft: false   # set true to hide a post
---
Your Markdown here.
```

## Photo placement (two spots)

Put your photo at `public/img/portrait.jpg`, then:
1. `components/Sidebar.tsx`: small round avatar at the top of the sidebar (replace the initials, see the comment in the file).
2. `components/Hero.tsx`: large circular portrait on the home page (see the comment in the file).

Tip: a square photo works best, and black-and-white looks great on the dark theme.

## Theme colors

Edit the `colors` block in `tailwind.config.ts`: `accent` (green), `ink` (dark page background), `sidebar`, `panel` (cards) and `line` (borders).
The hero typing animation uses the `roles` list in `data/site.ts`.

## Design notes

- Layout idea: fixed sidebar + sections (hero, about, experience, skills, contact).
- Own identity: teal/amber on navy, Inter + Space Grotesk fonts, numbered section headings, initials tiles with tool tags on experience cards, floating stat chips, scroll-progress bar.
- Job cards: each job in `data/site.ts` has `short` (tile text), `type` (badge) and `tags` (chips). To use a company logo instead, put it in `public/img/` and swap the tile in `components/Experience.tsx` for `next/image`.
- The contact map is a keyless Google Maps embed of `site.location` (city level only).
