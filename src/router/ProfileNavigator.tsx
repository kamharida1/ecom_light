import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {OrderHistory} from "../screens/orderHistory";
import { ProfileStackList } from "../../types";
import {OrderDetails} from "../screens/orderDetails";
import {Addresses} from "../screens/addresses";
import {AddAddress} from "../screens/addAddress";
import {PersonalInfo} from "../screens/personalInfo";

const ProfileStack = createStackNavigator<ProfileStackList>();

export default function ProfileNavigation() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{ title: "Order History" }}
      />
      <ProfileStack.Screen
        name="OrderDetails"
        component={OrderDetails}
      />
      <ProfileStack.Screen
        name="Addresses"
        component={Addresses}
        options={{ title: "Addresses" }}
      />
      <ProfileStack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{ title: "Add Address" }}
      />
      <ProfileStack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{ title: "Personal Info" }}
      />
    </ProfileStack.Navigator>
  );
}
