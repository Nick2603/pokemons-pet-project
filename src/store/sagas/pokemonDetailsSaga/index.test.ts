import { Saga, runSaga } from "redux-saga";
import { loadPokemonDetailsWorker } from ".";
import { PokemonService } from "../../../api/services/PokemonService";

jest.mock("../../../api/services/PokemonService");

it("should test loadPokemonDetailsWorker saga on success", async () => {
  const pokemonDetails = {
    name: "Pikachu",
    sprites: { backUrl: "backUrl" },
    abilities: [],
    forms: [],
  };

  const mockResponse = {
    data: pokemonDetails,
  };

  const mockedGetById = jest.fn().mockResolvedValueOnce(mockResponse);
  (PokemonService as jest.Mock).mockImplementation(() => ({
    getById: mockedGetById,
  }));

  const dispatched: any[] = [];

  const payload = { id: "1" };

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    loadPokemonDetailsWorker as Saga,
    { payload },
  ).toPromise();

  expect(dispatched[0].type).toEqual("pokemonDetails/loadPokemonDetails");

  expect(dispatched[1].type).toEqual(
    "pokemonDetails/loadPokemonDetailsSuccess",
  );
});
