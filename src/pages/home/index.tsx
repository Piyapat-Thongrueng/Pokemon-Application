import SearchForm from "@/components/SearchForm";
import { usePokemonListStore } from "@/store/pokemonList";

const HomePage = () => {
  const { pokemon } = usePokemonListStore();

  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          alt="logo"
          className="max-h-[80px] mt-[20px]"
        />
      </div>
      <SearchForm />

      <div>
        {pokemon.data?.map((item)=> {
          return <div className="text-white" key={`pokemon-${item.id}`}>{item.name}</div>
        })}
      </div>
    </div>
  );
};

export default HomePage;
