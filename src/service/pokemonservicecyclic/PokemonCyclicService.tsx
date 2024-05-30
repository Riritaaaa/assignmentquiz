import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  useDataPokemon,
  RawPokemon,
  useDataPokemonDetail,
  RawPokemonDetail,
} from "./pokemoncyclicresponse/PokemonCyclicResponse";
import { GetPokemon } from "./pokemoncyclicrequest/PokemonCyclicRequest";

const PokemonCyclicService = createApi({
  reducerPath: "PokemonCyclicService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokemon-api.cyclic.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getListPokemonCyclic: builder.query<useDataPokemon[], GetPokemon>({
      query: ({ type }) => {
        const params = new URLSearchParams({
          type,
        });
        if (type) {
          return `pokemon?${params}`;
        }
        return `pokemon`;
      },
      transformResponse: (response: RawPokemon, _meta, arg) => {
        const _response: useDataPokemon[] = response.data.data.map((item) => ({
          name: item.name,
          no: item.no,
          species: item.species,
          stats: {
            hp: item.stats.hp,
            attack: item.stats.attack,
            defense: item.stats.defense,
            speed: item.stats.speed,
            special: item.stats.special,
            total: item.stats.total,
          },
          type: item.type,
        }));

        if (arg.sort === "Highest") {
          _response.sort((a, b) => parseInt(b.no) - parseInt(a.no));
        } else if (arg.sort === "Lowest") {
          _response.sort((a, b) => parseInt(a.no) - parseInt(b.no));
        } else if (arg.sort === "A-Z") {
          _response.sort((a, b) => a.name.localeCompare(b.name));
        } else if (arg.sort === "Z-A") {
          _response.sort((a, b) => b.name.localeCompare(a.name));
        }

        return _response;
      },
    }),

    getPokemonCyclicByID: builder.query<useDataPokemonDetail, string>({
      query: (no) => `pokemon/${no}`,
      transformResponse: (response2: RawPokemonDetail, _meta, _arg) => {
        const _response2: useDataPokemonDetail[] = response2.data.data.map(
          (item) => {
            return {
              name: item.name,
              no: item.no,
              species: item.species,
              stats: {
                hp: item.stats.hp,
                attack: item.stats.attack,
                defense: item.stats.defense,
                speed: item.stats.speed,
                special: item.stats.special,
                total: item.stats.total,
              },
              type: item.type,
              evolution: item.evolution.map((item) => {
                return {
                  method: item.method,
                  no: item.no,
                  name: item.name,
                };
              }),
              moves: item.moves.byLevelUp.map((item) => {
                return {
                  move: item.move,
                  type: item.type,
                };
              }),
            };
          }
        );
        return _response2[0];
      },
    }),
  }),
});

export const { useGetListPokemonCyclicQuery, useGetPokemonCyclicByIDQuery ,useLazyGetPokemonCyclicByIDQuery } =
  PokemonCyclicService;
export default PokemonCyclicService;
