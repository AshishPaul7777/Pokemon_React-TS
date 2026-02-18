import { Link, useParams } from "react-router-dom"
import { usePokemonDetails } from "@/Hooks/usePokemonDetails"
import { Skeleton } from "@/components/ui/skeleton"

export const PokemonDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, error } = usePokemonDetails(id!)

 // Loading State
  if (isLoading) {
    return (
      <main className="min-h-screen bg-muted/30 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-6" />
          <div className="bg-background rounded-2xl shadow-lg p-6 space-y-6">
            <Skeleton className="h-48 w-48 rounded-full mx-auto" />
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </main>
    )
  }

// Error State
  if (error || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">
            Pokémon not found
          </p>
          <Link
            to="/"
            className="text-primary underline"
          >
            Go back
          </Link>
        </div>
      </main>
    )
  }

 // Selecting the image
  const imageUrl =
    data.sprites.other?.["official-artwork"]?.front_default ??
    data.sprites.other?.dream_world?.front_default

  // My UI
  return (
    <main className="min-h-screen bg-muted/30 py-10">
      <div className="max-w-4xl mx-auto px-4">
      
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-muted-foreground hover:underline"
        >
          ← Back to Pokédex
        </Link>

       
        <div className="bg-background rounded-2xl shadow-lg p-6 md:p-10">
         
          <div className="flex flex-col md:flex-row items-center gap-8">
          
            {imageUrl && (
              <div className="w-48 h-48 flex items-center justify-center rounded-full bg-muted">
                <img
                  src={imageUrl}
                  alt={data.name}
                  className="h-40 w-40 object-contain"
                />
              </div>
            )}

           
            <div className="text-center md:text-left space-y-3">
              <h1 className="text-4xl font-bold capitalize">
                {data.name}
              </h1>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {data.types.map(t => (
                  <span
                    key={t.type.name}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary capitalize"
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>

            
              <div className="flex justify-center md:justify-start gap-6 text-sm text-muted-foreground">
                <span>Height: {data.height}</span>
                <span>Weight: {data.weight}</span>
                <span>XP: {data.base_experience}</span>
              </div>
            </div>
          </div>

    
          <div className="my-8 h-px bg-border" />

        
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Base Stats
            </h2>

            <div className="space-y-3">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <span className="w-24 text-sm capitalize text-muted-foreground">
                    Stat {index + 1}
                  </span>

                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{
                        width: `${Math.min(
                          stat.base_stat,
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <span className="w-10 text-sm font-medium text-right">
                    {stat.base_stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}