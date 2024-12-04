import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    tags: z.array(z.string()),
    color: z.string(),
  }),
});
export const collections = { posts };