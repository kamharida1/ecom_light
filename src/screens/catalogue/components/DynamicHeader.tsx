import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HEADER_MAX_HEIGHT = 160;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DynamicHeader = ({ animHeaderValue }) => {
  const animatedHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  })
  const animatedHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: ['blue', 'red'],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={[styles.header,
        {
          height: animatedHeaderHeight,
          backgroundColor: animatedHeaderBackgroundColor
        }
      ]}
    >
      <Text style={styles.headerText}>
        A List of Books
      </Text>
    </Animated.View>
  );
}

export default DynamicHeader

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    //top: 50,

    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 10
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});