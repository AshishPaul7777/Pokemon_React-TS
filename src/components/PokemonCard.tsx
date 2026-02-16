import type { Pokemon } from "../Features/Pokemon/PokemonTypes"

interface Props {
  pokemon: Pokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemon.sprites.other.dream_world.front_default ?? ""}
          alt={pokemon.name}
        />
      </figure>

      <h1>{pokemon.name}</h1>

      <p>
        {pokemon.types.map(t => t.type.name).join(", ")}
      </p>

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Speed: {pokemon.stats[5]?.base_stat}</p>
    </li>
  )
}