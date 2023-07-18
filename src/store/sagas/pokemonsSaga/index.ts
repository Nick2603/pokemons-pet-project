import { call, put, takeLatest, spawn } from "redux-saga/effects";
import { PokemonService } from "../../../api/services/PokemonService";
import { PokemonListResponse } from "../../../models/Pokemon";
import {
  getPokemons,
  loadPokemons,
  loadPokemonsSuccess,
  loadPokemonsError,
} from "../../slices/pokemonsSlice";
import { AxiosError } from "axios";

type Payload = { offset?: number; limit?: number };

const loadPokemonsWorker = function* ({ payload }: { payload: Payload }) {
  const { offset = 0, limit = 20 } = payload;

  yield put(loadPokemons());

  try {
    const response: PokemonListResponse = yield call(() =>
      PokemonService().getAll(offset, limit),
    );
    yield put(loadPokemonsSuccess(response));
  } catch (error) {
    yield put(loadPokemonsError((error as AxiosError).message));
  }
};

export const loadPokemonsWatcher = function* () {
  yield takeLatest(getPokemons, loadPokemonsWorker);
};

export const pokemonsSaga = function* () {
  yield spawn(loadPokemonsWatcher);
};
