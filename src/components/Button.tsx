import { Dimensions, StyleSheet} from 'react-native'
import React from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { Text, useTheme } from './Theme'

interface ButtonProps {
  variant: "default" | "primary";
  label?: string;
  onPress: () => void;
  style?: RectButtonProperties["style"]
}

const {width, height} = Dimensions.get("window")

const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === "primary" ? colors.primary : colors.background2;
  const color = variant === "primary" ? colors.background : colors.secondary;

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default"}

export default Button

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})