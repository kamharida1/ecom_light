import { createStackNavigator } from "@react-navigation/stack";
import {Splash} from "../screens/splash";
import { OnBoardingStackList } from "../../types";
import React from "react";
import {Login} from "../screens/login";
import { Register } from "../screens/register";
import { ForgotPassword } from "../screens/forgotPassword";
import { PasswordChanged } from "../screens/passwordChanged/PasswordChanged";

const OnboardStack = createStackNavigator<OnBoardingStackList>();

export default function OnboardingNavigation() {
  return (
    <OnboardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardStack.Screen
        name="Splash"
        component={Splash}
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
