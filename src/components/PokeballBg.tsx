import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'
import { useTheme } from '../context'

interface props {
   style?: StyleProp<ImageStyle> 
}


export const PokeballBg = ( { style = {} }:props ) => {

   const { isDark } = useTheme()

   const pokeballImg = isDark ? require("../assets/pokeball-dark.png") : require("../assets/pokeball-light.png")

   return (
      <Image 
         source={ pokeballImg }
         style={ [ {}, {
            width: 300,
            height: 300,
            opacity: 0.4
         } ] }
      />
   )
}

