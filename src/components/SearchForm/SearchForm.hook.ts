import { useEffect } from "react";
import { pokemonListServices, pokemonDetailServices } from "@/services";
import { useForm } from "react-hook-form";
import { usePokemonListStore } from "@/store/pokemonList";

const useSearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setFetchPokemonList, fetchPokemon, setPokemonList } =
    usePokemonListStore();
  const keyword = watch("keyword");

  const callData = async () => {
    const responseList = await pokemonListServices.getPokemonList();
    const pokeList = [];
    setFetchPokemonList({ data: [], loading: true, error: null });

    if (responseList.status === 200) {
      const responseResults = responseList.data?.results || [];
      for (const pokemon of responseResults) {
        const response = await pokemonDetailServices.getPokemonDetail(
          pokemon.name
        );
        const pokeData = response.data;
        pokeList.push({ ...pokeData });
      }
      setFetchPokemonList({ data: pokeList, loading: false, error: null });
    } else {
      setFetchPokemonList({
        data: [],
        loading: false,
        error: responseList.error,
      });
    }
  };

  useEffect(() => {
    callData();
  }, []);

  useEffect(() => {
    const data = fetchPokemon.data.filter((item) =>
      item.name.toLocaleLowerCase().includes(keyword?.toLocaleLowerCase())
    );
    setPokemonList({
      data: data,
      loading: false,
      error: null,
    });
  }, [keyword]);

  return {
    fieldKeyword: register("keyword"),
  };
};

export { useSearchForm };
