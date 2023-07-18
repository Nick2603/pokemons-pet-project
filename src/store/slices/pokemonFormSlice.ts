import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PokemonForm } from "../../models/PokemonForm";

export interface PokemonFormState {
  pokemonForm: PokemonForm;
  isLoading: boolean;
  error: string;
}

const initialState: PokemonFormState = {
  pokemonForm: {
    name: "",
    sprites: {},
  },
  isLoading: false,
  error: "",
};

export const pokemonFormSlice = createSlice({
  name: "pokemonForm",
  initialState,
  reducers: {
    loadPokemonForm: (state) => {
      state.isLoading = true;
    },

    loadPokemonFormSuccess: (state, action: PayloadAction<PokemonForm>) => {
      state.pokemonForm.name = action.payload.name;
      state.pokemonForm.sprites = action.payload.sprites;
      state.isLoading = false;
      state.error = "";
    },

    loadPokemonFormError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { loadPokemonForm, loadPokemonFormSuccess, loadPokemonFormError } =
  pokemonFormSlice.actions;

const GET_POKEMON_FORM = "pokemonForm/getPokemonForm";

export const getPokemonForm = createAction<{ id: string }>(GET_POKEMON_FORM);

export const selectPokemonForm = (state: RootState) =>
  state.pokemonForm.pokemonForm;

export const selectRequestData = (state: RootState) => ({
  isLoading: state.pokemonForm.isLoading,
  error: state.pokemonForm.error,
});

export default pokemonFormSlice.reducer;
