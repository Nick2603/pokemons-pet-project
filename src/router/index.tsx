import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/Home";
import { PokemonDetailsPage } from "../pages/PokemonDetails";

export enum RouteNames {
  HOME_PAGE = "/",
  POKEMON_DETAILS_PAGE = "/pokemon/:pokemonId",
};

export const router = createBrowserRouter([
  {
    path: RouteNames.HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: RouteNames.POKEMON_DETAILS_PAGE,
    element: <PokemonDetailsPage />,
  },
]);
