import { z, defineCollection } from 'astro:content'

const indexCollection = defineCollection({
  type: 'data',
  schema: ({image}) => z.object({
    title: z.string(),
    author: z.string(),
    image: image(),
    sections: z.array(z.string()),
    repository_url: z.string()
  })
})

const technologysCollection = defineCollection({
  type: 'data',
  schema: ({image}) => z.array(
    z.object({
      title: z.string(),
      content: z.array(image())
    })
  )
})

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string()
    }))
})

export const collections = {
  'index': indexCollection,
  'technologys': technologysCollection,
  'projects': projectsCollection
}