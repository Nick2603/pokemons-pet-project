import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});
