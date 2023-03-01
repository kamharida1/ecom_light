import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, useTheme } from "../../../components/Theme";
import { Canvas } from "@shopify/react-native-skia";
import { LinearGradient } from "expo-linear-gradient";
import { border } from "@shopify/restyle";
import { BlurView } from "expo-blur";

const Background = () => {
  const { colors } = useTheme();
  return (
    <Box backgroundColor="bgDark" flex={1}>
      <Box
        position="absolute"
        top={350}
        height={200}
        width={200}
        borderRadius="xxl"
        backgroundColor="background2"
      >
        <LinearGradient
          colors={["#4c669f", "blue"]}
          style={[StyleSheet.absoluteFillObject, { borderRadius: 100 }]}
        />
      </Box>
      <Box
        position="absolute"
        top={150}
        right={30}
        height={200}
        width={200}
        borderRadius="xxl"
        backgroundColor="background2"
      >
        <LinearGradient
          colors={["pink", "rgba(255, 64, 100, 0.9)"]}
          style={[StyleSheet.absoluteFillObject, { borderRadius: 100 }]}
        />
      </Box>
      <Box
        position="absolute"
        top={200}
        left={50}
        height={100}
        width={100}
        borderRadius="xxl"
        backgroundColor="background2"
      >
        <LinearGradient
          colors={["rgba(200, 50, 200, 0.5)", "rgba(255, 255, 100, 0.9)"]}
          style={[StyleSheet.absoluteFillObject, { borderRadius: 100 }]}
        />
      </Box>
      <Box
        style={{
          alignSelf: "center",
          top: 250,
          position: "absolute",
          width: 360,
          borderRadius: 25,
          height: 230,
          marginHorizontal: 15,
          backgroundColor: "transparent",
        }}
      >
        <LinearGradient
          colors={["rgba(255,255,255,0.4)", "rgba(255, 255, 255, 0.1)"]}
          style={[StyleSheet.absoluteFillObject, { borderRadius: 25 }]}
        />
        <BlurView
          style={[
            StyleSheet.absoluteFillObject,
            {
              borderWidth: 0.2,
              borderColor: "white",
              padding: 15,
              borderRadius: 25,
              overflow: "hidden",
            },
          ]}
          intensity={40}
          tint="dark"
        >
          <Text style={{ color: "rgba(255,255,255, 0.5)" }} variant="medium">
            MEMBERSHIP
          </Text>
        </BlurView>
      </Box>
    </Box>
  );
};

export { Background };

const styles = StyleSheet.create({});
