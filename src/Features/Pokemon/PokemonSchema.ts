import { z } from "zod"

export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  base_experience: z.number(),
  sprites: z.object({
    other: z.object({
      dream_world: z.object({
        front_default: z.string().nullable(),
      }),
    }),
  }),
  stats: z.array(z.object({ base_stat: z.number() })),
  types: z.array(z.object({ type: z.object({ name: z.string() }) })),
  abilities: z.array(
    z.object({ ability: z.object({ name: z.string() }) })
  ),
})