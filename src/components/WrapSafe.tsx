import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lightColors } from '../config/theme';

interface props {
   children: React.JSX.Element | ReactNode;
}

export const WrapSafe = ( { children }: props ) => {
   const { left, right, top, bottom } =  useSafeAreaInsets()
   const edge = 15;

   const margins = { 
      paddingTop: top, 
      paddingBottom: bottom, 
      paddingLeft:  left > 0 ? left  : edge,
      paddingRight: right > 0 ? right : edge,
      flex: 1,
      backgroundColor: lightColors.background 
   }

   return (
      <View style={ [ { flex: 1, backgroundColor: lightColors.background } ] }>
         <View style={ [ , margins ] }>
            { children }
         </View>
      </View>
   )
}