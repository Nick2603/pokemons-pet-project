export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonFromList[];
}

export interface PokemonFromList {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  sprites: { [key: string]: string };
  abilities: Ability[];
  forms: Form[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}
