# Frederick Kwame Minta: academic portfolio

A static academic website built with [Astro](https://astro.build) and Tailwind CSS. It has no tracking, no cookies and almost no JavaScript. Live at **https://kwame-minta2021.github.io** (see [DEPLOY.md](DEPLOY.md)).

## Run locally

You need Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # type-checks and builds the site into dist/
npm run preview    # serves the built dist/ folder
```

## Where things live

| What | File |
| --- | --- |
| Name, tagline, links, email, research interests, experience, education, skills, teaching, awards | `src/data/site.ts` |
| Projects (one file each) | `src/content/projects/*.md` |
| Publications (one file each) | `src/content/publications/*.md` |
| News items (optional) | `src/content/news/*.md` |
| Headshot and project images | `src/assets/images/` |
| CV, paper PDFs, favicon, social image | `public/` |
| Colours and fonts | `src/styles/global.css` |
| Section layouts | `src/components/*.astro` |

## Add a publication

Create a new file in `src/content/publications/`, e.g. `2026-my-new-paper.md`:

```md
---
title: My New Paper Title
authors: [F. K. Minta, A. Coauthor, B. Coauthor]
venue: IEEE Robotics and Automation Letters, 11(2)
year: 2026
status: journal          # under-review | in-preparation | journal | conference | presentation
note: Oral presentation  # optional, shown in teal after the venue
pdf: /papers/my-new-paper.pdf             # optional: put the file in public/papers/
doi: 10.1109/LRA.2026.0000000             # optional: bare DOI or full URL
code: https://github.com/Kwame-Minta2021/repo   # optional
order: 1                 # optional: tie-breaker within the same year (lower comes first)
---
```

- Your name is bolded automatically when it is written exactly as `F. K. Minta`.
- The PDF / DOI / Code buttons appear only for the fields you fill in, so there are no dead buttons.
- When a paper moves from under review to published, just change `status` (and add `year` and `doi`).

## Add a project

1. Make an image folder: `src/assets/images/projects/<slug>/` with at least `hero.jpg`. Running `npm run placeholders` creates labelled placeholders for the six existing projects; for a new project, copy a placeholder or add your own photo.
2. Copy an existing file in `src/content/projects/` to `<slug>.md` and edit it. The file name becomes the URL: `/projects/<slug>/`.
3. Key fields:
   - `order`: position on the home page (1 = first).
   - `featured: true`: shows the project as the large card at the top (use it for one project only).
   - `heroImage` / `gallery[].src`: paths relative to the Markdown file, e.g. `../../assets/images/projects/<slug>/hero.jpg`.
   - `video`: any YouTube link, e.g. a share link like `https://youtu.be/VIDEO_ID`. It shows as a thumbnail with a play button, and YouTube's player (privacy-enhanced mode) only loads when a visitor clicks play.
   - `links`: `github`, `paper`, `hardware` (all optional, full URLs).
4. Write the technical write-up as normal Markdown below the frontmatter.

The build checks every field, so a typo shows up as a clear error instead of a broken page.

## Add a news item (optional)

Copy `src/content/news/template-example.md`, give it a date and title, and set `draft: false`. The News list appears under the hero only when at least one non-draft item exists.

## Replace placeholder images

All placeholders are grey images labelled "PLACEHOLDER" with their file path. Replace each file **with the same name**, and the site picks it up on the next build:

| Image | Path | Recommended |
| --- | --- | --- |
| Portrait (hero) | `src/assets/images/portrait-cutout.png` | transparent PNG with the background removed, head to waist, at least 700 px wide |
| Project hero | `src/assets/images/projects/<slug>/hero.jpg` | landscape 16:9, at least 1600×900 px |
| Project photos | `src/assets/images/projects/<slug>/photo-1.jpg`, `photo-2.jpg` | landscape 3:2, at least 1200×800 px |
| Social share card | `public/og-image.png` | exactly 1200×630 px |

Astro resizes and converts images to WebP at build time, so you can drop in full-quality JPGs. Update the `heroAlt` and gallery `alt` text in each project file to describe the real photo. To use a different file name or format (e.g. `.png`), update the path in the project's frontmatter. To add more gallery photos, add entries under `gallery:`.

## Files you need to add

- `public/Frederick_Kwame_Minta_CV.pdf`: the "Download CV" buttons link here.
- Paper PDFs (optional): put them in `public/papers/` and set `pdf: /papers/<file>.pdf`.

## Notes

- **Fonts** (Source Serif 4 and Inter) are self-hosted through Fontsource, so there are no requests to Google.
- **Dark mode** follows the system setting until a visitor uses the toggle. Their choice is remembered in `localStorage`, which is not a cookie and is never sent anywhere.
- **Motion:** sections fade in on scroll, and this is turned off for visitors who set "reduce motion".
