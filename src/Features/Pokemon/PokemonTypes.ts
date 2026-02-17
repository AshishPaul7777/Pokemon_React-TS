export interface PokemonType {
    type: {
      name: string
    }
  }
  
  export interface PokemonStat {
    base_stat: number
  }
  
  export interface PokemonAbility {
    ability: {
      name: string
    }
  }
  
  export interface PokemonSprites {
    other: {
      dream_world: {
        front_default: string | null
      }
      "official-artwork"?: {
        front_default: string | null
      }

    }
  }
  
  export interface Pokemon {
    id: number
    name: string
    height: number
    weight: number
    base_experience: number
    sprites: PokemonSprites
    stats: PokemonStat[]
    types: PokemonType[]
    abilities: PokemonAbility[]
  }