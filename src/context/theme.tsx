import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLigthTheme } from "@react-navigation/native";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { type ColorSchemeName, useColorScheme } from "react-native";
import { adaptNavigationTheme, PaperProvider } from "react-native-paper";


const { LightTheme, DarkTheme } = adaptNavigationTheme({
   reactNavigationLight: NavigationLigthTheme,
   reactNavigationDark: NavigationDarkTheme,
})

export const ThemeContext = createContext({
   isDark: false,
   theme: LightTheme,
   changeTheme: ( _: ColorSchemeName ) => {}
})

export const useTheme = () => {
   return useContext( ThemeContext )
}


export const ThemeProvider = (props: PropsWithChildren ) => {
   const colorScheme: ColorSchemeName = useColorScheme()
   const [ isDark, setIsDark ] = useState<boolean>( colorScheme === 'dark' )
   const [ theme, setTheme ] = useState( LightTheme )

   const changeTheme = ( value: ColorSchemeName ) => {
      setIsDark( value === 'dark' )
      if ( value === 'dark' ) {
         setTheme( DarkTheme )
      }else{
         setTheme( LightTheme )
      }
   }

   const value = {
      isDark,
      theme: isDark ? DarkTheme: LightTheme,
      changeTheme
   }


   return <>
      <PaperProvider theme={ theme }>
         <NavigationContainer theme={ theme }>
            <ThemeContext.Provider  value={ value } { ...props} />
         </NavigationContainer>
      </PaperProvider>
   </>
}