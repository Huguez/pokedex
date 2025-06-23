
export interface Pokemon {
   id: number;
   name: string;
   types: string[];
   avatar: string;
   sprites: string[];
   color: string;

   games: string[];
   abilities: string[];
   stats: Stats;
   moves: Moves;
}

export type Stats = Stat[];

export interface Stat {
   name: string;
   value: number
}

export type Moves = Move[];

export interface Move{
   name: string;
   level: number;
}

export type Pokemons = Pokemon[];
