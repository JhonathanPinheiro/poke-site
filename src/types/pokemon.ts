export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface PokemonDetailResponse {
  name: string;
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
