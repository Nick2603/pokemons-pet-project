import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";
import pokemonDetailsReducer from "./slices/pokemonDetailsSlice";
import pokemonFormReducer from "./slices/pokemonFormSlice";

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
  pokemonForm: pokemonFormReducer,
});
