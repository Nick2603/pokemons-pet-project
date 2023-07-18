import { PokemonFromList, PokemonListResponse } from "../../models/Pokemon";
import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PokemonsState {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonFromList[];
  isLoading: boolean;
  error: string;
}

const initialState: PokemonsState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  isLoading: false,
  error: "",
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    loadPokemons: (state) => {
      state.isLoading = true;
    },

    loadPokemonsSuccess: (
      state,
      action: PayloadAction<PokemonListResponse>,
    ) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
      state.isLoading = false;
      state.error = "";
    },

    loadPokemonsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { loadPokemons, loadPokemonsSuccess, loadPokemonsError } =
  pokemonsSlice.actions;

const GET_POKEMONS = "pokemons/getPokemons";

export const getPokemons = createAction<{ offset?: number; limit?: number }>(
  GET_POKEMONS,
);

export const selectPokemons = (state: RootState) => state.pokemons.results;

export const selectTotalCount = (state: RootState) => state.pokemons.count;

export const selectRequestData = (state: RootState) => ({
  isLoading: state.pokemons.isLoading,
  error: state.pokemons.error,
});

export default pokemonsSlice.reducer;
