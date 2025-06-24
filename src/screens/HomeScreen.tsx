import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { FAB, Text, useTheme } from 'react-native-paper'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { getPokemons } from '../actions'
import { PokeballBg, PokemonCard } from '../components'
import { Pokemon } from '../domain'
import { globalStyles } from '../config'
import { HomeScreenProps } from '../infrastructure'


export const HomeScreen = ( { navigation }: HomeScreenProps ) => {
   const queryClient =  useQueryClient()

   const theme = useTheme()


   // before: useQuery
   const { data, fetchNextPage } = useInfiniteQuery({ 
      queryKey: ['pokemons', 'infinite'], 
      initialPageParam: 0,
      queryFn: async ( params ) => {
         const pokemons = await getPokemons( params.pageParam )
         
         pokemons.forEach( pokemon => {
            queryClient.setQueryData( [ "pokemon", pokemon.id ], pokemon )
         } )

         return pokemons
      },
      getNextPageParam: (lastPage, _ ) => lastPage.length,
      staleTime: 1000*60*60,
   })

   const onRenderItem = ( { item }: { item: Pokemon } ) => (
      <PokemonCard pokemon={ item } />
   )


   return (
      <View>
         <PokeballBg style={ styles.imgPosition } />

         <FlatList
            data={ data?.pages.flat() ?? [] }
            keyExtractor={ ( pokemon, index ) => `${ pokemon.id.toString() }-${ index }` }
            numColumns={ 2 }
            ListHeaderComponent={ () => (
               <Text variant={ 'displayMedium' }> Pokedex </Text>
            )}
            renderItem={ onRenderItem }
            onEndReachedThreshold={ 0.5 }
            onEndReached={ () => fetchNextPage() }
            showsVerticalScrollIndicator={ false }
         />

         <FAB 
            label='Search'
            style={[ globalStyles.fab, { backgroundColor: theme.colors.primary } ]}
            mode={ 'elevated' }
            color={ theme.dark ? 'dark' : 'white' }
            onPress={ () => { navigation.navigate( 'Search' ) } }
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