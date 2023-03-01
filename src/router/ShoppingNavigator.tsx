import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShoppingStackList } from "../../types";
import React from "react";
import {CatalogueDetails} from "../screens/catalogueDetails";
import {Filter} from "../screens/filter";
import {FilterCustom} from "../screens/filterCustom";
import {ProductDetails} from "../screens/productDetails";

const ShoppingStack = createNativeStackNavigator<ShoppingStackList>();

export default function ShoppingNavigation() {
  return (
    <ShoppingStack.Navigator screenOptions={{
      headerTransparent: true,
      
    }}>
      <ShoppingStack.Screen
        name="Catalogue"
        component={CatalogueDetails}
      ></ShoppingStack.Screen>
      <ShoppingStack.Screen
        name="Filter"
        component={Filter}
        options={{ headerTitleAlign: "center" }}
      ></ShoppingStack.Screen>
      <ShoppingStack.Screen
        name="CustomFilter"
        component={FilterCustom}
        options={{ headerTitleAlign: "center" }}
      ></ShoppingStack.Screen>
      <ShoppingStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerTransparent: true, headerTitle: "" }}
      ></ShoppingStack.Screen>
    </ShoppingStack.Navigator>
  );
}
