import type { NavigationProp,ParamListBase, RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export type NavHook = NavigationProp<RootStackParam>

export type RootStackParam = {
   Home: undefined;
   Pokemon: { id: number };
   Search: undefined;
}

export interface HomeScreenProps extends StackScreenProps<RootStackParam, 'Home'> {};
export interface PokemonScreenProps extends StackScreenProps<RootStackParam, 'Pokemon'> {};
export interface SearchScreenProps extends StackScreenProps<RootStackParam, 'Search'> {};

export interface ScreenNavProps {
   route: RouteProp<ParamListBase, string>;
   navigation: StackNavigationProp<ParamListBase, string, undefined>;
}

export type SettingsNavigation = NativeStackNavigationOptions | ((props: ScreenNavProps ) => NativeStackNavigationOptions) | undefined;