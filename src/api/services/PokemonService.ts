import axios, { AxiosResponse } from "axios";
import { PokemonListResponse } from "../../models/Pokemon";

export function PokemonService() {
  const BASE_URL = "https://pokeapi.co/api/v2";

  async function getAll(offset: number = 0, limit: number = 20): Promise<AxiosResponse<PokemonListResponse>> {
    const endpoint = "pokemon";

    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}/${endpoint}?offset=${offset}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("getAll request failed:", error);
      throw error;
    };
  };

  return {
    getAll,
  }
};
