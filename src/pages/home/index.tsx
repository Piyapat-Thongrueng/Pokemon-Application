import { useEffect } from "react";
import { pokemonListServices, pokemonDetailServices } from "@/services";

const HomePage = () => {
  const callData = async () => {
    const data = await pokemonDetailServices.getPokemonDetail("ditto");
    console.log("data", data.data);
  };

  useEffect(() => {
    callData();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
