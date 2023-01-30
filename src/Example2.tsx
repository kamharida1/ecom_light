import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "./components/Theme";
import CustomButton from "./components/customButton"

const Example2 = () => {
  return (
    <Box flex={1} padding="xl" pt="xl">
      <Box flex={1} pt="xl">
        <Text mb="xl" variant="medium">
          Splash
        </Text>
        <CustomButton text="Success" onPress={() => {}} />
        <CustomButton
          text="Forgot Password"
          type="TERTIARY"
          onPress={() => {}}
        />
        <CustomButton
          text="Sign In with Facebook"
          type="TERTIARY"
          onPress={() => {}}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Google"
          type="TERTIARY"
          onPress={() => {}}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          type="TERTIARY"
          onPress={() => {}}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
      </Box>
    </Box>
  );
};

export default Example2;

const styles = StyleSheet.create({});
