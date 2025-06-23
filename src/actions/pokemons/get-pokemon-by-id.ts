import { pokeApi } from "../../config";
import { Pokemon } from "../../domain";
import { PokeAPIPokemon, PokeMapper } from "../../infrastructure";

export const getPokemonById = async ( id: number ): Promise<Pokemon> => {
   try {
      const url = `/pokemon/${ id }`
      
      const { data } = await pokeApi.get<PokeAPIPokemon>( url );

      return await PokeMapper.pokeAPItoEntity( data )
   } catch (error) {
      console.log( error );
      throw new Error("error in GetPokemonById")
   }
}