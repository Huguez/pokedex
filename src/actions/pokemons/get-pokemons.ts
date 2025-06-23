import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain";
import { PokeAPIPokemon, PokeMapper, type PokeApiPaginatedResponse } from "../../infrastructure";


export const getPokemons = async ( page: number = 0, limit: number = 20 ): Promise<Pokemon[]> => {
   try {

      const url = `/pokemon?offset=${ page*10 }&limit=${ limit }`
      const { data } = await pokeApi.get<PokeApiPaginatedResponse>( url);

      const pokemonPromises = data.results.map( ( info ) => {
         return pokeApi.get<PokeAPIPokemon>( info.url );
      } )

      const APIpokemons = await Promise.all( [ ...pokemonPromises ] )
      
      const pokemons = APIpokemons.map( ( resp ) => PokeMapper.pokeAPItoEntity( resp.data ) )

      return pokemons;
   } catch (error) {
      console.log( error );
      throw new Error("Error in actions getPokemons");
   }
}