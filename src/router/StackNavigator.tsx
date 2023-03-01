import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { ColorSchemeName } from "react-native";
import { StatusBar } from "expo-status-bar";
import OnboardingNavigation from "./OnBoardingNavigator";
import MainNavigator from "./MainNavigator";
import ShoppingNavigation from "./ShoppingNavigator";
import ProfileNavigation from "./ProfileNavigator";
import CustomBottomTab from "./CustomBottomTab";
import { AuthContext } from "../contexts/AuthContext";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFD952",
    background: "#fff",
  },
};

export default function Router() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const [checcking, setIsChecking] = React.useState();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Main" component={CustomBottomTab} />
          <Stack.Screen name="Shopping" component={ShoppingNavigation} />
          <Stack.Screen name="UserProfile" component={ProfileNavigation} />
        </>
      ) : (
        <>
          <Stack.Screen name="Root" component={OnboardingNavigation} />
        </>
      )}
    </Stack.Navigator>
  );
}
