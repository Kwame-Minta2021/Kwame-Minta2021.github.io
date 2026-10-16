// Generates clearly labelled placeholder images. Safe to re-run: existing files are NOT overwritten.
// Usage: node scripts/make-placeholders.mjs
import sharp from 'sharp';
import { mkdirSync, existsSync, readdirSync } from 'node:fs';
import { dirname } from 'node:path';

const projects = ['arap', 'prosthetic-gesture-interface', 'wireless-blasting', 'edge-ai-crop-disease', 'anidaso', 'farmlynco-agri-iot'];
const jobs = [];
for (const p of projects) {
  // Skip projects that already have real media.
  if (existsSync(`src/assets/images/projects/${p}`) && readdirSync(`src/assets/images/projects/${p}`).some((f) => !/^(hero|photo-\d)\.jpg$/.test(f))) continue;
  jobs.push({ path: `src/assets/images/projects/${p}/hero.jpg`, w: 1600, h: 900, label: 'PROJECT IMAGE PLACEHOLDER', sub: `Replace src/assets/images/projects/${p}/hero.jpg` });
  for (const n of [1, 2]) {
    jobs.push({ path: `src/assets/images/projects/${p}/photo-${n}.jpg`, w: 1200, h: 800, label: `PHOTO ${n} PLACEHOLDER`, sub: `src/assets/images/projects/${p}/photo-${n}.jpg` });
  }
}

for (const j of jobs) {
  if (existsSync(j.path)) continue;
  mkdirSync(dirname(j.path), { recursive: true });
  const fs = Math.round(j.w / 22);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${j.w}" height="${j.h}">
    <rect width="100%" height="100%" fill="#e6ebea"/>
    <path d="M0 0L${j.w} ${j.h}M${j.w} 0L0 ${j.h}" stroke="#c9d3d1" stroke-width="2"/>
    <rect x="${j.w * 0.08}" y="${j.h / 2 - fs * 1.6}" width="${j.w * 0.84}" height="${fs * 3.2}" fill="#e6ebea"/>
    <text x="50%" y="${j.h / 2}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs}" font-weight="700" fill="#0f5f5c">${j.label}</text>
    <text x="50%" y="${j.h / 2 + fs * 1.2}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs * 0.5}" fill="#3d4a48">${j.sub}</text>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toFile(j.path);
  console.log('created', j.path);
}

// Social share card (public/og-image.png), 1200x630
if (!existsSync('public/og-image.png')) {
  const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="100%" height="100%" fill="#faf9f6"/>
    <rect x="0" y="0" width="16" height="630" fill="#0f5f5c"/>
    <text x="90" y="250" font-family="Georgia, serif" font-size="72" fill="#14181a">Frederick Kwame Minta</text>
    <text x="90" y="330" font-family="Georgia, serif" font-style="italic" font-size="38" fill="#0f5f5c">Building robots that know when not to trust their own senses.</text>
    <text x="90" y="430" font-family="Arial, sans-serif" font-size="28" fill="#3d4a48">Embedded autonomy · Perception-aware planning · Hardware-aware reliability</text>
    <text x="90" y="480" font-family="Arial, sans-serif" font-size="28" fill="#3d4a48">Research Assistant, Ashesi University, Ghana</text>
  </svg>`;
  await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
  console.log('created public/og-image.png');
}
