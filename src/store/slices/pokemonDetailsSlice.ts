import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { PokemonDetails } from "../../models/Pokemon";
import { RootState } from "../store";

export interface PokemonDetailsState {
  pokemon: PokemonDetails;
  isLoading: boolean;
  error: string;
}

const initialState: PokemonDetailsState = {
  pokemon: {
    name: "",
    abilities: [],
    sprites: {},
    forms: [],
  },
  isLoading: false,
  error: "",
};

export const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {
    loadPokemonDetails: (state) => {
      state.isLoading = true;
    },

    loadPokemonDetailsSuccess: (
      state,
      action: PayloadAction<PokemonDetails>,
    ) => {
      state.pokemon.name = action.payload.name;
      state.pokemon.abilities = action.payload.abilities;
      state.pokemon.sprites = action.payload.sprites;
      state.pokemon.forms = action.payload.forms;
      state.isLoading = false;
      state.error = "";
    },

    loadPokemonDetailsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  loadPokemonDetails,
  loadPokemonDetailsSuccess,
  loadPokemonDetailsError,
} = pokemonDetailsSlice.actions;

const GET_POKEMON_DETAILS = "pokemonDetails/getPokemonDetails";

export const getPokemonDetails = createAction<{ id: string }>(
  GET_POKEMON_DETAILS,
);

export const selectPokemonDetails = (state: RootState) =>
  state.pokemonDetails.pokemon;

export const selectRequestData = (state: RootState) => ({
  isLoading: state.pokemonDetails.isLoading,
  error: state.pokemonDetails.error,
});

export default pokemonDetailsSlice.reducer;
