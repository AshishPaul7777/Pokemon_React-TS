import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchPokemonPage } from "../api/Pokemon.api"

export const useInfinitePokemon = () => {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      fetchPokemonPage(pageParam as number),
    getNextPageParam: (_lastPage, pages) =>
      pages.length * 20,
    staleTime: 0,
    gcTime: 0
  })
}