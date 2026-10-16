import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string().optional(),
      summary: z.string(),
      period: z.string(),
      affiliation: z.string().optional(),
      supervisor: z.string().optional(),
      funding: z.string().optional(),
      role: z.string(),
      highlights: z.array(z.string()),
      results: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      /** Key numbers shown (with a count-up) on the featured card. */
      stats: z
        .array(
          z.object({
            value: z.number(),
            decimals: z.number().default(0),
            prefix: z.string().default(''),
            suffix: z.string().default(''),
            label: z.string(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      order: z.number(),
      heroImage: image(),
      heroAlt: z.string(),
      /** Optional image for the home-page card (e.g. a portrait shot for the tall featured card). */
      cardImage: image().optional(),
      cardAlt: z.string().optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            /** Span the full content width (for annotated figures with small labels). */
            wide: z.boolean().default(false),
          }),
        )
        .default([]),
      /** Optional table of measured characteristics on the project page. */
      specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      /** Optional limitations / honest caveats shown under Results. */
      limitations: z.array(z.string()).default([]),
      /** Any YouTube link (shown click-to-load), or another embed URL (shown as an iframe). */
      video: z.url().optional(),
      links: z
        .object({
          github: z.url().optional(),
          paper: z.url().optional(),
          hardware: z.url().optional(),
        })
        .default({}),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().optional(),
    status: z.enum(['under-review', 'in-preparation', 'journal', 'conference', 'presentation']),
    note: z.string().optional(),
    pdf: z.string().optional(),
    doi: z.string().optional(),
    code: z.url().optional(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    link: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, publications, news };
