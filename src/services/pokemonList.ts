import axios from "axios";
import { POKEMON_BASE_URL } from "@/utils/constant";
import { IPokemonListResponse } from "@/interface/pokemonList";
import { handleResponse, Iresponse } from "@/utils/handleResponse";

interface IGetPokemonListResponse extends Iresponse {
  status: number | undefined;
  data?: IPokemonListResponse;
}

export const pokemonListServices = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonListResponse> => {
    try {
      const response = await axios.get(
        `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${
          offset || 0
        }`
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
