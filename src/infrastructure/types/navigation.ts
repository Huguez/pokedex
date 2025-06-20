import type { NavigationProp,ParamListBase, RouteProp } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";


export interface NavProps {
   route: RouteProp<ParamListBase, string>;
   navigation: StackNavigationProp<ParamListBase, string, undefined>;
}

export type RootStackParam = {
   Home: undefined;
   Search: undefined;
   Pokedex: undefined;
}

export type NavHook = NavigationProp<RootStackParam>


export type SettingsNavigation = NativeStackNavigationOptions | ((props: NavProps ) => NativeStackNavigationOptions) | undefined;