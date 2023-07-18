import { call, put, takeLatest, spawn } from "redux-saga/effects";
import { AxiosError } from "axios";
import { PokemonService } from "../../../api/services/PokemonService";
import {
  getPokemonDetails,
  loadPokemonDetails,
  loadPokemonDetailsSuccess,
  loadPokemonDetailsError,
} from "../../slices/pokemonDetailsSlice";
import { PokemonDetails } from "../../../models/Pokemon";

type Payload = { id: string };

export const loadPokemonDetailsWorker = function* ({
  payload,
}: {
  payload: Payload;
}) {
  const { id } = payload;

  yield put(loadPokemonDetails());

  try {
    const response: PokemonDetails = yield call(() =>
      PokemonService().getById(id),
    );
    yield put(loadPokemonDetailsSuccess(response));
  } catch (error) {
    yield put(loadPokemonDetailsError((error as AxiosError).message));
  }
};

export const loadPokemonDetailsWatcher = function* () {
  yield takeLatest(getPokemonDetails, loadPokemonDetailsWorker);
};

export const pokemonDetailsSaga = function* () {
  yield spawn(loadPokemonDetailsWatcher);
};
