import { PokemonSchema } from "../Features/Pokemon/PokemonSchema"
import type { Pokemon } from "../Features/Pokemon/PokemonTypes"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemonPage = async (
  offset: number,
  limit = 1200
): Promise<Pokemon[]> => {
  const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`)
  const data = await res.json()

  const detailedRequests = data.results.map(
    async (item: { url: string }) => {
      const res = await fetch(item.url)
      const pokemon = await res.json()
      return PokemonSchema.parse(pokemon)
    }
  )

  return Promise.all(detailedRequests)
}