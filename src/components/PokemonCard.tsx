import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { Pokemon } from "@/Features/Pokemon/PokemonTypes"

interface Props {
  pokemon: Pokemon
}

export const PokemonCard = memo(({ pokemon }: Props) => {
  const imageUrl =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.other?.dream_world?.front_default ??
    null

  return (
    <Card className="hover:shadow-lg transition-transform hover:scale-[1.02]">
      <CardContent className="p-4 flex flex-col items-center gap-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={pokemon.name}
            loading="lazy"
            className="h-32 w-32 object-contain"
          />
        )}

        <h2 className="text-lg font-semibold capitalize">
          {pokemon.name}
        </h2>

        <p className="text-sm text-muted-foreground capitalize">
          {pokemon.types.map(t => t.type.name).join(", ")}
        </p>

        <div className="grid grid-cols-3 gap-2 text-xs text-center mt-2">
          <div>
            <p className="font-semibold">Ht</p>
            <p>{pokemon.height}</p>
          </div>
          <div>
            <p className="font-semibold">Wt</p>
            <p>{pokemon.weight}</p>
          </div>
          <div>
            <p className="font-semibold">Spd</p>
            <p>{pokemon.stats[5]?.base_stat}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})