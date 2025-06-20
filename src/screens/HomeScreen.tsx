
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { NavHook } from '../infrastructure'

export const HomeScreen = () => {
   const navigation = useNavigation<NavHook>()
   return (
      <View>
         <Text>HomeScreen</Text>
         
         <Pressable onPress={()=> navigation.navigate('Pokedex') }>
            <Text>PokedexScreen</Text>
         </Pressable>

         <Pressable onPress={()=> navigation.navigate('Search') }>
            <Text>SearchScreen</Text>
         </Pressable>

      </View>
   )
}
