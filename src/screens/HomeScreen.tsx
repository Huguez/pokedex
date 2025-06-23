
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavHook } from '../infrastructure'
import { Text, Button } from 'react-native-paper'
import { useQuery } from '@tanstack/react-query'
import { getPokemons } from '../actions'

export const HomeScreen = () => {
   const navigation = useNavigation<NavHook>()

   const { isLoading, data: pokemons, error } = useQuery({ 
      queryKey: ['pokemons'], 
      queryFn: getPokemons,
      staleTime: 1000*60*60 // 1 hour
   })


   return (
      <View>
         <Text variant={'displayMedium'}>HomeScreen</Text>

         <View style={{ marginVertical: 15 }}></View>
         
         {
            isLoading && <ActivityIndicator />
         }

         <Button mode="contained" onPress={()=> navigation.navigate('Pokedex') }>
            PokedexScreen
         </Button>
         
         <View style={{ marginVertical: 15 }}></View>

         <Button mode="contained" onPress={()=> navigation.navigate('Search') }>
            SearchScreen
         </Button>
      </View>
   )
}
