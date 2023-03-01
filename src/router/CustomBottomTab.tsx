import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackList } from "../../types";
import {Entypo, FontAwesome5} from '@expo/vector-icons'
import { Home } from "../screens/home";
import { Catalogue } from "../screens/catalogue";
import { Profile } from "../screens/profile";
import { Cart } from "../screens/cart";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "../components/Theme";

const BottomNavigator = createBottomTabNavigator<MainStackList>();

export default function CustomBottomTab() {
  const { colors } = useTheme();
  return (
    <BottomNavigator.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={90}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <BottomNavigator.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomNavigator.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" color={color} size={25} />
          ),
          headerShown: false,
        }}
        name="Catalogue"
        component={Catalogue}
      />
      <BottomNavigator.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" color={color} size={25} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <BottomNavigator.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
          headerShown: false,
        }}
        name="Cart"
        component={Cart}
      />
    </BottomNavigator.Navigator>
  );
}
