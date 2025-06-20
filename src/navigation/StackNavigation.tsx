import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParam, SettingsNavigation } from '../infrastructure';
import { HomeScreen, PokemonScreen, SearchScreen } from '../screens';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParam>();

export const StackNavigation = () => {
  
  const settings: SettingsNavigation = {
     headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={ settings }>
        <Stack.Screen  name='Home' component={ HomeScreen } />
        <Stack.Screen  name="Search"  component={ SearchScreen } />
        <Stack.Screen  name="Pokedex"  component={ PokemonScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
