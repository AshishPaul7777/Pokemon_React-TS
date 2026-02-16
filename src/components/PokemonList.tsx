import type { Pokemon } from "../Features/Pokemon/PokemonTypes"
import { PokemonCard } from "./PokemonCard"

interface Props {
  data: Pokemon[]
}

export const PokemonList = ({ data }: Props) => {
  return (
    <ul className="cards">
      {data.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </ul>
  )
}