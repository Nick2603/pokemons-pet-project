import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { PokemonDetailsPage } from "../pages/PokemonDetails";
import { PokemonFormPage } from "../pages/PokemonForm";

export enum RouteNames {
  HOME_PAGE = "/",
  POKEMON_DETAILS_PAGE = "/pokemon/:pokemonId",
  POKEMON_FORM_PAGE = "/pokemon-form/:pokemonFormId",
}

export const router = createBrowserRouter([
  {
    path: RouteNames.HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: RouteNames.POKEMON_DETAILS_PAGE,
    element: <PokemonDetailsPage />,
  },
  {
    path: RouteNames.POKEMON_FORM_PAGE,
    element: <PokemonFormPage />,
  },
]);
