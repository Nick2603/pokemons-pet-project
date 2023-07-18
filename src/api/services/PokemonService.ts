import { AxiosResponse } from "axios";
import { PokemonDetails, PokemonListResponse } from "../../models/Pokemon";
import { getFetch } from "../getFetch";
import { PokemonForm } from "../../models/PokemonForm";

export function PokemonService() {
  const BASE_URL = "https://pokeapi.co/api/v2";

  async function getAll(
    offset: number = 0,
    limit: number = 20,
  ): Promise<AxiosResponse<PokemonListResponse>> {
    return getFetch(`${BASE_URL}/pokemon`, { offset, limit });
  }

  async function getById(id: string): Promise<AxiosResponse<PokemonDetails>> {
    return getFetch(`${BASE_URL}/pokemon/${id}`);
  }

  async function getFormById(id: string): Promise<AxiosResponse<PokemonForm>> {
    return getFetch(`${BASE_URL}/pokemon-form/${id}`);
  }

  return {
    getAll,
    getById,
    getFormById,
  };
}
