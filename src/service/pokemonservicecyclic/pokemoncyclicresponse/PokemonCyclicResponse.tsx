export type PokemonCyclicResponse = {
  status: string;
  results: number;
  data: {
    data: Pokemon[];
  };
};

export interface Pokemon {
  no: string;
  name: string;
  species: string;
  type: TypePokemon;
  stats: StatPokemon;
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
}
export interface StatPokemon {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special: number;
  total: number;
}

/* type TypePokemonV2 =
  "bug" |
  "dragon" |
  "fire" |
  "ghost" |
  "ground" |
  "normal" |
  "psychic" |
  "electric" |
  "fighting" |
  "flying" |
  "grass" |
  "ice" |
  "poison" |
  "rock" |
  "water";

type ColorPokemonV2 = {
  [key in TypePokemonV2] : string
} */

export const ColorPokemon= {
  bug: "#729F3F",
  dragon: "rgb(241,110,87)",
  fire: "rgb(253,125,36)",
  ghost: "rgb(123,98,163)",
  ground: "rgb(171,152,66)",
  normal: "rgb(164,172,175)",
  psychic: "rgb(243,102,185)",
  electric: "rgb(238,213,53)",
  fighting: "rgb(213,103,35)",
  flying: "rgb(157, 225, 244)",
  grass: "rgb(155,204,80)",
  ice: "rgb(81,196,231)",
  poison: "rgb(185,127,201)",
  rock: "rgb(123, 103, 14)",
  water: "rgb(69,146,196)",
};

export type TypePokemon = keyof typeof ColorPokemon;

export interface useDataPokemon {
  name: string;
  no: string;
  species: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    total: number;
  };
  type: string[];
}

export interface RawPokemon {
  data: {
    data: {
      name: string;
      no: string;
      species: string;
      stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        special: number;
        total: number;
      };
      type: TypePokemon[];
    }[];
  };
}

export interface Move {
  move: string;
  type: TypeMove[];
  category: string;
  pp: number;
  power: number | null;
  accuracy: number | null;
  effect: string;
}

export interface EvolutionStage {
  stage: number;
  method: string;
  no: string;
  name: string;
  url: string;
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
}

export interface PokemonDetail {
  no: string;
  name: string;
  species: string;
  type: TypePokemon;
  stats: StatPokemon;
  moves: {
    byLevelUp: Move[];
    byTm: Move[];
    byHm: Move[];
  };
  evolution: EvolutionStage[];
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
}
export interface PokemonApiResponse {
  status: string;
  requestedAt: string;
  data: {
    data: PokemonDetail[];
  };
}

export interface useDataPokemonDetail {
  name: string;
  no: string;
  species: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    total: number;
  };
  type: string[];
  evolution: {
    method: string;
    no: string;
    name: string;
  }[];
  moves: {
    move: string;
    type: TypeMove[];
  }[];
}

export type TypeMove = keyof typeof ColorPokemon;

export interface RawPokemonDetail {
  data: {
    data: {
      name: string;
      no: string;
      species: string;
      stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        special: number;
        total: number;
      };
      type: TypePokemon[];
      evolution: EvolutionStage[];
      moves: {
        byLevelUp: Move[];
        byTm: Move[];
        byHm: Move[];
      };
    }[];
  };
}
