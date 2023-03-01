import React, { useState } from "react";
import { Switch } from "react-native";
import {
  ThemeProvider,
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const palette = {
  purple: "#5A31F4",
  white: "#FFF",
  black: "#111",
  darkGray: "#333",
  lightGray: "#EEE",
  myWhite: "#F0F0F3",
};

const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
  },
  colors: {
    mainBackground: palette.lightGray,
    mainForeground: palette.black,
    white1: palette.myWhite,
    white2: palette.lightGray,
    primaryCardBackground: palette.purple,
    secondaryCardBackground: palette.white,
    primaryCardText: palette.white,
    secondaryCardText: palette.black,
  },
  breakpoints: {},
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "mainForeground",
    },
  },
  cardVariants: {
    primary: {
      backgroundColor: "primaryCardBackground",
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: "secondaryCardBackground",
      shadowOpacity: 0.1,
    },
  },
});

type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,

    secondaryCardBackground: palette.darkGray,
    secondaryCardText: palette.white,
  },
};

const Box = createBox<Theme>();
const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Box padding="m" backgroundColor="mainBackground" flex={1}>
        <Box
          backgroundColor="primaryCardBackground"
          margin="s"
          padding="m"
          flexGrow={1}
        >
          <Text variant="body" color="primaryCardText">
            Primary Card
          </Text>
        </Box>
        <Box
          backgroundColor="secondaryCardBackground"
          margin="s"
          padding="m"
          flexGrow={1}
        >
          <Text variant="body" color="secondaryCardText">
            Secondary Card
          </Text>
        </Box>
        <Box marginTop="m">
          <Switch
            value={darkMode}
            onValueChange={(value: boolean) => setDarkMode(value)}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
