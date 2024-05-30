import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PokemonDetail,
  PokemonResponse,
  RawPokemonDetail,
} from "./pokemonresponse/PokemonResponse";
import { PokemonRequest } from "./pokemonrequest/PokemonRequest";

const Pokemonservice = createApi({
  reducerPath: "Pokemonservice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getListPokemons: builder.query<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit.toString(),
          offset: data.offset.toString(),
        });
        return `pokemon?${params}`;
      },
    }),
    getPokemonByID: builder.query<PokemonDetail, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: RawPokemonDetail, _meta, arg) => {
        const resultAbility = response.abilities.map((item) => {
          return item.ability.name;
        });

        const resultStats = response.stats.map((item) => {
          return {
            baseStats: item.base_stat,
            name: item.stat.name,
          };
        });

        const resultType = response.types.map((item) => {
          return {
            name: item.type.name,
          };
        });

        const _response: PokemonDetail = {
          Name: arg,
          abilities: resultAbility,
          base_experience: response.base_experience,
          image: {
            mainimg: response.sprites.other["official-artwork"].front_default,
            back_img: response.sprites.back_default,
            shining_back_img: response.sprites.back_shiny,
            front_img: response.sprites.front_default,
            shining_front_img: response.sprites.front_shiny,
          },
          stats: resultStats,
          id: response.id,
          types: resultType,
        };

        return _response;
      },
    }),
    getListPokemons2: builder.mutation<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit.toString(),
          offset: data.offset.toString(),
        });
        return {
          url: `pokemon?${params}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetListPokemonsQuery,
  useGetListPokemons2Mutation,
  useLazyGetPokemonByIDQuery,
  useGetPokemonByIDQuery,
} = Pokemonservice;
export default Pokemonservice;
