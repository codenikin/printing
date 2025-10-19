import { z, defineCollection } from "astro:content";

const heroCollection = defineCollection({
  schema: z.object({
    title: z.string().min(2).max(100),
    heading: z.string().min(2).max(200),
    description: z.string().max(300),
    image: z.string().optional(),
    backgroundimage: z.string().optional(),
    date: z.date(),
    author: z.string().min(2).max(100),
  }),
});

const featureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    shapeImage: z.string(),
    buttonText: z.string(),
    buttonLink: z.string(),
  }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    mainImage: z.string(),
    videoThumb: z.string(),
    videoUrl: z.string(),
    services: z.array(z.string()),
    phoneNumber: z.string(),
    authorImage: z.string(),
  }),
});

const servicesCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    image: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const productsCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    image: z.string(),
    title: z.string(),
    price: z.string(),
    salePrice: z.string().optional(),
    offerText: z.string().optional(),
    category: z.string(),
  }),
});

export const collections = {
  hero: heroCollection,
  features: featureCollection,
  about: aboutCollection,
  services: servicesCollection,
  products: productsCollection,
};
