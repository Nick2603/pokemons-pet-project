import axios, { AxiosResponse } from 'axios';

export class PokemonService {
  private readonly baseURL: string;

  constructor() {
    this.baseURL = "https://pokeapi.co/api/v2/";
  };

  public async getAll(): Promise<any> {
    const endpoint = "pokemon";

    try {
      const response: AxiosResponse = await axios.get(`${this.baseURL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("getAll request failed:", error);
      throw error;
    };
  };
};
