import {
  getPokemons,
  loadPokemons,
  loadPokemonsSuccess,
  loadPokemonsError,
} from "../store/slices/pokemonsSlice";
import {
  getPokemonDetails,
  loadPokemonDetails,
  loadPokemonDetailsSuccess,
  loadPokemonDetailsError,
} from "../store/slices/pokemonDetailsSlice";
import {
  getPokemonForm,
  loadPokemonForm,
  loadPokemonFormSuccess,
  loadPokemonFormError,
} from "../store/slices/pokemonFormSlice";

export const allActions = {
  getPokemons,
  loadPokemons,
  loadPokemonsSuccess,
  loadPokemonsError,
  getPokemonDetails,
  loadPokemonDetails,
  loadPokemonDetailsSuccess,
  loadPokemonDetailsError,
  getPokemonForm,
  loadPokemonForm,
  loadPokemonFormSuccess,
  loadPokemonFormError,
};
