import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackList } from "../../types";
import BottomTabs from "./bottomTabNav";
import { Home } from "../screens/home";
import { Catalogue } from "../screens/catalogue";
import { Profile } from "../screens/profile";
import { Cart } from "../screens/cart";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const BottomNavigator = createBottomTabNavigator<MainStackList>();

export default function MainTabs() {
  return (
    <BottomNavigator.Navigator
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <BottomNavigator.Screen
        options={{
          title: "Home",
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <BottomNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="Catalogue"
        component={Catalogue}
      />
      <BottomNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <BottomNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="Cart"
        component={Cart}
      />
    </BottomNavigator.Navigator>
  );
}