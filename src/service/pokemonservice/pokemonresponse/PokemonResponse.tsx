export type PokemonResponse = {
  count: number;
  next?: string;
  previous?: string;
  results?: ResultsType[];
};

export type ResultsType = {
  name: string;
  url: string;
};

interface Ability {
  name: string;
  url: string;
}

interface AbilityInfo {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  Name: string;
  abilities: string[];
  base_experience: number;
  image: {
    mainimg: string;
    front_img: string;
    back_img: string;
    shining_front_img: string;
    shining_back_img: string;
  };
  stats: {
    baseStats: number;
    name: string;
  }[];
  id: number;
  types: {
    name: string;
  }[];
}
export interface RawPokemonDetail {
  abilities: AbilityInfo[];
  base_experience: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
  };
  stats: stats[];
  id: number;
  types: types[];
}