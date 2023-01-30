import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

interface Props extends ViewProps {
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Screen: React.FC<Props> = ({ scroll, style, children }) => {
  return scroll ? (
      <ScrollView testID="scrollview-screen" style={[styles.container, style]}>
        {children}
      </ScrollView>
  ) : (
          <View testID="view-screen" style={[styles.container, style]}>
            {children}
          </View>
  );
};
export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 14,
    //backgroundColor: 'red'
  },
  contentContainer: {
    paddingBottom: 36,
  },
});
