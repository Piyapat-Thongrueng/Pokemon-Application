import { IPokemonDetailResponse } from "@/interface/pokemonDetail";

interface PokemonCardProps {
  data: IPokemonDetailResponse;
}

const PokemonCard = ({ data }: PokemonCardProps) => {
  return (
    <div className="max-w-[275px]rounded-[20px] overflow-hidden shadow-sm dark:bg-gray-800 dark:border-gray-700 p-[16px] m-[auto]">
      <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-[20px]">
        <a href="#" className="bg-[url('/images/poke-card-bg.png')]">
          <img
            className="rounded-t-lg h-[218px] p-[40px] w-full"
            src={data.image}
            alt=""
          />
        </a>
      </div>

      <div className="pt-5">
        <div className="flex justify-between">
          <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            #{data.id}
          </h5>
        </div>
        <div className="flex gap-2 justify-end text-white mt-[16px]">
          {data.types.map((item) => {
            return (
              <span className="bg-violet-600 px-[14px] py-2 capitalize rounded-full">
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
