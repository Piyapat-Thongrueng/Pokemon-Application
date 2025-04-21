import { useEffect } from "react";
import { pokemonListServices, pokemonDetailServices } from "@/services";

const useSearchForm = () => {
  const callData = async () => {
    const responseList = await pokemonListServices.getPokemonList()
    const pokeList = []
    if (responseList.status === 200) {
      const responseResults = responseList.data.result || []
      for (const pokemon of responseResults) {
        const response = await pokemonDetailServices.getPokemonDetail(pokemon.name)
        const pokeData = response.data
        pokeList.push({ ...pokeData })
      }
      console.log("pokeList", pokeList)
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return {}

}

export { useSearchForm }