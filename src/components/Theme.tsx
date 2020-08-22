import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

export const palette = {
  white: "white",
};

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#FF0058",
    body: "rgba(12, 13, 52, 0.7)",
    background: palette.white,
    grey: "rgba(12, 13, 52, 0.05)",
    lightGrey: "#F4F0EF",
    whiteGrey: "#FAFAFA",
    darkGrey: "#8A8D90",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontFamily: "SFProDisplay-Bold",
      fontSize: 80,
      lineHeight: 80,
      color: "background",
      textAlign: "center",
    },
    title1: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 28,
      color: "secondary",
    },
    title2: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
    },
    title3: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 16,
      color: "secondary",
    },
    body: {
      fontFamily: "SFProDisplay-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
    button: {
      fontFamily: "SFProDisplay-Medium",
      fontSize: 15,
      color: "secondary",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);
export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
