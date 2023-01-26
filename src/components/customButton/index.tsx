import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Text } from '../Theme'

interface CustomButtonT {
  onPress: () => void;
  text: string;
  type?: string;
  bgColor?: string ;
  fgColor?: string;
}

export default function CustomButton({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor
}: CustomButtonT) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {}
        ]}
           variant="button">
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 20,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_TERTIARY: {},
  
  text: {
    color: "white",
    fontSize: 16,
  },
  text_TERTIARY: {
    color: 'gray'
  }
});