import { AntDesign, Feather } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { Text, useTheme as Retheme } from "../components/Theme";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function BottomTabs({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  // const { colors } = useTheme();
  const {primary} = Retheme().colors
  const getIcon = (label: string, isFocused: boolean) => {
    if (label === "Catalogue") {
      return (
        <AntDesign
          name="search1"
          size={24}
          color={isFocused ? primary : "white"}
        />
      );
    }
    if (label === "Profile") {
      return (
        <AntDesign
          name="user"
          size={24}
          color={isFocused ? primary : "white"}
        />
      );
    }
    if (label === "Cart") {
      return (
        <Feather
          name="shopping-bag"
          size={24}
          color={isFocused ? primary : "white"}
        />
      );
    }
    return (
      <AntDesign
        name="home"
        size={24}
        color={isFocused ? primary : "white"}
      />
    );
  };

  return (
    <View style={styles.bottomTab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            (navigation as any).navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
            key={index}
          >
            {getIcon(label as string, isFocused)}

            <Text
              style={{
                color: isFocused ? primary : "white",
                marginTop: 4,
                fontSize: 13,
              }}
              variant="tabBar"
            >
              {label === "Shoppr" ? "Home" : label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: "#1F1F26",
    padding: 12,
    flexDirection: "row",
    margin: 18,
    
    borderRadius: 16,
  },
});
