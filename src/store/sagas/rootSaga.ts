import { all, spawn, call } from "redux-saga/effects";
import { pokemonsSaga } from "./pokemonsSaga";

export function* rootSaga () {
  const sagas = [pokemonsSaga];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        };
      };
    })),
  );
};
