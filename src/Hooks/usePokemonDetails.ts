import { useQuery } from "@tanstack/react-query"
import { fetchPokemonDetails } from "@/api/Pokemon.api"
export const usePokemonDetails = (
  identifier: string
) => {
  return useQuery({
    queryKey: ["pokemon", identifier],
    queryFn: () => fetchPokemonDetails(identifier),
    enabled: !!identifier,
  })
}