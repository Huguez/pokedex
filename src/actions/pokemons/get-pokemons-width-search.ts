import { pokeApi } from "../../config";

export const getPokemonsWithSearch = async () => {
   try {
      const url = `pokemon?limit=${ 1000 }`
      const { data } = await pokeApi.get<any>( url )

      return data.results.map( ( info: any ) => ({
         id: Number( info.url.split('/')[6] ),
         name: info.name,
      }) )
   } catch (error) {
      console.log( error );
      throw new Error("Error - getPokemonsWithSearch");
   }     
}