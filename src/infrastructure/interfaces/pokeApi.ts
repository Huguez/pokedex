
export interface PokeApiPaginatedResponse {
   count:      number;
   next:       string;
   previous:   string;
   results:    Result[];
};

export interface Result {
   name: string;
   url: string;
}

// ToDo: change this for real interface
export type PokeAPIPokemon = any;
