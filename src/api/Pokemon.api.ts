import { PokemonSchema } from "../Features/Pokemon/PokemonSchema"
import type { Pokemon } from "../Features/Pokemon/PokemonTypes"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

/**
 * 🔹 Fetch paginated Pokémon (for infinite scroll list)
 */
export const fetchPokemonPage = async (
  offset: number,
  limit = 20
): Promise<Pokemon[]> => {
  const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`)

  if (!res.ok) {
    throw new Error("Failed to fetch pokemon list")
  }

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

/**
 * 🔹 Fetch Pokémon DETAILS (by name or id)
 * Used for the Pokémon Details Page
 */
export const fetchPokemonDetails = async (
  identifier: string | number
): Promise<Pokemon> => {
  const res = await fetch(`${BASE_URL}/${identifier}`)

  if (!res.ok) {
    throw new Error("Pokemon not found")
  }

  const data = await res.json()
  return PokemonSchema.parse(data)
}