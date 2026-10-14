import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    context: z.string(),
    date: z.string(),
    order: z.number(),
    cover: z.string(),
    coverAlt: z.string(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    team: z.string().optional(),
    tools: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
    prototypes: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    reflection: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const reflections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reflections' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    course: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    coverAlt: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { projects, reflections };
