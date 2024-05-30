import { SortType } from "@pokemon/Homepokemon";
import { TypePokemon } from "../pokemoncyclicresponse/PokemonCyclicResponse";

export type PokemonCyclicRequest = {
  limit: number;
  offset: number;
};

export type GetPokemon = {
  type: TypePokemon | "";
  sort: SortType;
};

 /* export type GetTypePokemon = {
  type: TypePokemon | "";
};
  */