import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages live in src/content/docs/<language>/<section>/<page>.mdx. The English tree is the master list; a language only needs the
// pages it has translated, and the rest fall back to English.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.enum(['getting-started', 'using', 'extending', 'reference']), // sidebar group; its label comes from src/i18n
    order: z.number().default(100), // position inside the group
  }),
});

export const collections = { docs };
