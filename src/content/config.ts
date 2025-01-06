import { defineCollection, z } from 'astro:content'

const ProjectPosts = defineCollection({
  schema: z.discriminatedUnion('isExternal', [
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.string().transform((str) => new Date(str)),
      isExternal: z.literal(true),
      externalUrl: z.string(),
      externalLabel: z.string(),
    }),
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.string().transform((str) => new Date(str)),
      isExternal: z.literal(false),
    }),
  ]),
})

export const collections = {
  project: ProjectPosts
}