
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { NavHook } from '../infrastructure'
import { Text } from 'react-native-paper'
import { useQuery } from '@tanstack/react-query'
import { getPokemons } from '../actions'
import { PokeballBg, PokemonCard } from '../components'
import { Pokemon } from '../domain'

export const HomeScreen = () => {
   const navigation = useNavigation<NavHook>()

   const { isLoading, data: pokemons, error } = useQuery({ 
      queryKey: ['pokemons'], 
      queryFn: () => getPokemons(),
      staleTime: 1000*60*60 // 1 hour
   })

   const onRenderItem = ( { item }: { item: Pokemon } ) => (
      <PokemonCard pokemon={ item } />
   )


   return (
      <View>
         <PokeballBg style={ styles.imgPosition } />

         <FlatList
            data={ pokemons }
            keyExtractor={ ( pokemon, index ) => `${ pokemon.id.toString() }-${ index }` }
            numColumns={ 2 }
            style={{  }}
            ListHeaderComponent={ () => (
               <Text variant={ 'displayMedium' }> Pokedex </Text>
            )}
            renderItem={ onRenderItem }
         />
      </View>
   )
}


const styles = StyleSheet.create({
   imgPosition: {
      position: 'absolute',
      top: -100,
      right: -100,
   }
})