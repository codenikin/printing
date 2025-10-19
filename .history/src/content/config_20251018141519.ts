import { z, defineCollection } from "astro:content";

const heroCollection = defineCollection({
  schema: z.object({
    title: z.string().min(2).max(100),
    heading: z.string().min(2).max(200),
    description: z.string().max(300),
    image: z.string(),
    backgroundimage: z.string().optional(),
    date: z.date(),
    author: z.string().min(2).max(100),
  }),
});

export const collections = {
  hero: heroCollection,
};
