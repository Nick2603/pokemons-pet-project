export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonFromList[];
};

export interface PokemonFromList {
  name: string;
  url: string;
};
