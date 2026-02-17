import type { Pokemon } from "../Features/Pokemon/PokemonTypes"
import { PokemonCard } from "./PokemonCard"
import { Link } from "react-router-dom"

interface Props {
  data: Pokemon[]
}

export const PokemonList = ({ data }: Props) => {
  console.log(data)
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {data.map(pokemon => (
         
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
  )
}