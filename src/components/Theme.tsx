import React, { ReactNode } from "react";
import { Dimensions, ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

const { width } = Dimensions.get("window");
export const aspectRatio = width / 374;

export const palette = {
  white: "#FFFFFF",
  cyan: "rgba(0,0,1000,0.5)",
  lightCyan: "#E7F9F7",
  darkBlue: "#0C0D34",
  orange: "#FE5E33",
  yellow: "#FFC641",
  blue: "#3B71F3",
  pink: "#FF87A2",
  darkPink: "#FF0058",
  violet: "#442CB9",
  lightBlue: "#BFEAF5",
  grey: "#F4F0EF",
  darkGrey: "#808080",
 
};

const theme = createTheme({
  colors: {
    background: palette.white,
    background2: palette.grey,
    primary: palette.blue,
    primaryLight: palette.lightCyan,
    secondary: palette.darkBlue,
    info: palette.darkGrey,
    edit: palette.lightBlue,
    danger: palette.darkPink,
    body: "rgba(12, 13, 52, 0.7)",
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 60,
    xxxl: 80
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    defaults: {
      fontFamily: "Airbnb-Medium",
      fontSize: 16,
      color: "secondary"
    },
    hero: {
      fontFamily: "Airbnb-Bold",
      fontSize: 80,
      lineHeight: 80,
      color: "background",
      textAlign: "center",
    },
    medium: {
      fontFamily: "Airbnb-Bold",
      fontSize: 24,
      lineHeight: 40,
      color: "secondary",
      textAlign: "center",
    },
    title1: {
      fontFamily: "Airbnb-Semibold",
      fontSize: 28,
      color: "secondary",
    },
    tabBar: {
      fontFamily: "Airbnb-Light",
      fontSize: 16,
      color: "background",
    },
    title2: {
      fontFamily: "Airbnb-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
    },
    title3: {
      fontFamily: "Airbnb-Semibold",
      fontSize: 16,
      color: "secondary",
    },
    body: {
      fontFamily: "Airbnb-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
    button: {
      fontFamily: "Airbnb-Medium",
      fontSize: 15,
      color: "secondary",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "Airbnb-Semibold",
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

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
