import { useState, useMemo, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { SearchBar } from "@/components/SearchBar"
import { PokemonCard } from "@/components/PokemonCard"
import { SkeletonCard } from "@/components/SkeletonCard"
import { useInfinitePokemon } from "@/Hooks/UseInfinitePokemon"

export const PokemonPage = () => {
  const [search, setSearch] = useState("")
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfinitePokemon()

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  const allPokemon = data?.pages.flat() ?? []

  const filteredPokemon = useMemo(() => {
    return allPokemon.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [allPokemon, search])

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Pakudo Pakudo chal Pakudo Pakudo
      </h1>

      <div className="flex justify-center mb-8">
        <SearchBar value={search} onChange={setSearch} />
      </div>

     
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : filteredPokemon.map(pokemon => (
              <li key={pokemon.id}>
                <Link
                  to={`/pokemon/${pokemon.id}`}
                  className="block cursor-pointer"
                >
                  <PokemonCard pokemon={pokemon} />
                </Link>
              </li>
            ))}
      </ul>
{/* 
    // Sentinel for infinite scrolling */}
      <div ref={loadMoreRef} className="h-10" />

      {/* Loading next page */}
      {isFetchingNextPage && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={`more-${i}`} />
          ))}
        </div>
      )}
    </main>
  )
}