import { useEffect } from "react";
import { pokemonListServices, pokemonDetailServices } from "@/services";
import SearchForm from "@/components/SearchForm";

const HomePage = () => {
  const callData = async () => {
    const data = await pokemonDetailServices.getPokemonDetail("ditto");
    console.log("data", data.data);
  };

  useEffect(() => {
    callData();
  }, []);

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
    </div>
  );
};

export default HomePage;
