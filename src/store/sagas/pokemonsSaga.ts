import { call, put, takeLatest, spawn } from "redux-saga/effects";
import { PokemonService } from "../../api/services/PokemonService";
import { PokemonListResponse } from "../../models/Pokemon";
import { loadPokemons as loadPokemonsAction, loadPokemonsSuccess, loadPokemonsError } from "../slices/pokemonsSlice";
import { AxiosError } from "axios";

const loadPokemonsWorker = function*({ payload }: any) {
  const { offset = 0, limit = 20 } = payload;

  try {
    const response: PokemonListResponse = yield call(() => PokemonService().getAll(offset, limit));
    yield put(loadPokemonsSuccess(response));
  } catch (error) {
    yield put(loadPokemonsError((error as AxiosError).message));
  };
};

export const loadPokemonsWatcher = function*() {
  yield takeLatest(loadPokemonsAction, loadPokemonsWorker);
};

export const pokemonsSaga = function*() {
  yield spawn(loadPokemonsWatcher);
};
