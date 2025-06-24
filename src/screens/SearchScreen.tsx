import React, { useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import { Pokemon } from '../domain'
import { useQuery } from '@tanstack/react-query'
import { getPokemonsWithSearch } from '../actions'
import { FullScreenLoader, PokemonCard } from '../components'
import { getPokemonsByIds } from '../actions/pokemons/get-pokemons-by-ids'
import { useDebounceValue } from '../hooks'

export const SearchScreen = () => {
   const [ searchTerm, setSearchTerm ] = useState<string>( "" ) 
   const { debounceValue } = useDebounceValue( searchTerm )
   
   const { isLoading, data: Pokemons = [] } = useQuery({
      queryKey: ["pokemon", 'all'],
      queryFn: () => getPokemonsWithSearch()
   })

   const pokemonList = useMemo( () => {
      
      if ( debounceValue.length === 0 ) return []

      if ( !isNaN( Number( debounceValue ) ) ) {
      const pokemon = Pokemons.find( ( pokemon: any ) => pokemon.id === Number( debounceValue ) )
      return pokemon ? [pokemon] : []
      }

      return Pokemons.filter( 
      ( pokemon: any ) => pokemon.name.includes( debounceValue.toLocaleLowerCase() )
      )

   }, [ debounceValue ] )

   const onRenderItem = ({ item }: { item: Pokemon }) => (<>
      <PokemonCard pokemon={ item } />
   </>)

   const { isLoading: isLoadingPokemons, data: dataPokemons = [] } = useQuery( {
      queryKey: [ "pokemons", "by", pokemonList ],
      queryFn: () => getPokemonsByIds( pokemonList.map( (p: any ) => p.id ) ),
      staleTime: 1000*60*60
   } )



   if ( isLoading ) {
      return <FullScreenLoader />
   }

   return (
      <View>
         <TextInput
            placeholder='Search pokemon'
            onChangeText={ ( value ) => setSearchTerm( value ) }
            mode='flat'
            autoFocus
            autoCorrect={false}
            value={ searchTerm }
         />
         
         {
            isLoadingPokemons && <ActivityIndicator />
         }

         <FlatList
            data={ dataPokemons }
            keyExtractor={ ( pokemon: Pokemon, index ) => `${ pokemon.id.toString() }-${ index }` }
            numColumns={ 2 }
            ListHeaderComponent={ () => (
               <Text variant={ 'displayMedium' }> Pokedex </Text>
            )}
            renderItem={ onRenderItem }
            onEndReachedThreshold={ 0.5 }
            showsVerticalScrollIndicator={ false }
         />

      </View>
   )
}
