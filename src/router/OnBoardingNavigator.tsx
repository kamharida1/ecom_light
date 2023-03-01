import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Splash} from "../screens/splash";
import { OnBoardingStackList } from "../../types";
import React from "react";
import {Login} from "../screens/login";
import { Register } from "../screens/register";
import { ForgotPassword } from "../screens/forgotPassword";
import { PasswordChanged } from "../screens/passwordChanged/PasswordChanged";
import Example from "../Example"
import { ImageBackground } from "react-native";
import { position } from "@shopify/restyle";
import { Landing } from "../screens/landing";
import { ConfirmSignUp } from "../screens/confirmSignUp";
import { ForgotPassSubmit } from "../screens/forgotPassSubmit";

const OnboardStack = createNativeStackNavigator<OnBoardingStackList>();

export default function OnboardingNavigation() {
  return (
    <OnboardStack.Navigator
      screenOptions={{
        // headerShown: false,
        headerTransparent: true,
        headerTintColor: "#000",
        headerBlurEffect: "systemMaterialLight",
        headerLargeTitle: true,
      }}
      initialRouteName="ConfirmSignUp"
    >
      <OnboardStack.Screen
        name="Splash"
        component={Splash}
        //options={{ headerShown: false }}
      />
      <OnboardStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
        //options={{ headerShown: false }}
      />
      <OnboardStack.Screen
        name="Landing"
        component={Landing}
        //options={{ headerShown: false }}
      />
      <OnboardStack.Screen
        name="ForgotPassSubmit"
        component={ForgotPassSubmit}
        //options={{ headerShown: false }}
      />
      <OnboardStack.Screen
        name="Login"
        component={Login}
        // options={{ title: "Login" }}
      />
      <OnboardStack.Screen
        name="Register"
        component={Register}
        //options={{ title: "Register" }}
      />
      <OnboardStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        //options={{ title: "Register" }}
      />
      <OnboardStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
        //options={{ title: "Register" }}
      />
    </OnboardStack.Navigator>
  );
}
