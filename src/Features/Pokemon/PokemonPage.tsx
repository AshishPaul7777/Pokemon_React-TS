import { useState, useMemo } from "react"
import { SearchBar } from "../../components/SearchBar"
import { PokemonList } from "../../components/PokemonList"
import { useInfinitePokemon } from "../../Hooks/UseInfinitePokemon"

export const PokemonPage = () => {
  const [search, setSearch] = useState("")
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useInfinitePokemon()

  const allPokemon = data?.pages.flat() ?? []

  const filteredPokemon = useMemo(() => {
    return allPokemon.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [allPokemon, search])

  if (isLoading) return <h1>Loading...</h1>

  return (
    <section className="container">
      <h1>Pakudo Pakudo chal Pakudo Pakudo</h1>

      <SearchBar value={search} onChange={setSearch} />
      <PokemonList data={filteredPokemon} />

      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          Load More
        </button>
      )}
    </section>
  )
}