import { StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

export const lightColors: ThemeColors = {
  primary: "#5856D6",
  text: "black",

  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
};

export const globalStyles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
})