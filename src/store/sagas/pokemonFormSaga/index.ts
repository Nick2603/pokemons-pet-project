import { call, put, takeLatest, spawn } from "redux-saga/effects";
import { AxiosError } from "axios";
import { PokemonService } from "../../../api/services/PokemonService";
import {
  getPokemonForm,
  loadPokemonForm,
  loadPokemonFormSuccess,
  loadPokemonFormError,
} from "../../slices/pokemonFormSlice";
import { PokemonForm } from "../../../models/PokemonForm";

type Payload = { id: string };

const loadPokemonFormWorker = function* ({ payload }: { payload: Payload }) {
  const { id } = payload;

  yield put(loadPokemonForm());

  try {
    const response: PokemonForm = yield call(() =>
      PokemonService().getFormById(id),
    );
    yield put(loadPokemonFormSuccess(response));
  } catch (error) {
    yield put(loadPokemonFormError((error as AxiosError).message));
  }
};

export const loadPokemonFormWatcher = function* () {
  yield takeLatest(getPokemonForm, loadPokemonFormWorker);
};

export const pokemonFormSaga = function* () {
  yield spawn(loadPokemonFormWatcher);
};
