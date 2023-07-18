import { all, spawn, call } from "redux-saga/effects";
import { pokemonsSaga } from "./pokemonsSaga";
import { pokemonDetailsSaga } from "./pokemonDetailsSaga";
import { pokemonFormSaga } from "./pokemonFormSaga";

export function* rootSaga() {
  const sagas = [pokemonsSaga, pokemonDetailsSaga, pokemonFormSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
