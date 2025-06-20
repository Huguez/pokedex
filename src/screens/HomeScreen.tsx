
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { NavHook } from '../infrastructure'
import { Button } from 'react-native-paper'

export const HomeScreen = () => {
   const navigation = useNavigation<NavHook>()
   return (
      <View>
         <Text>HomeScreen</Text>

         <View style={{ marginVertical: 15 }}></View>
         
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
