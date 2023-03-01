import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { deviceWidth } from '../../catalogue/components';

const SearchComponent = ({ clampedScroll }) => {
  const searchBarTranslate = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
  const searchBarOpacity = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: searchBarTranslate
            }
          ],
           opacity: searchBarOpacity,
        }
      ]}
    >
      <TextInput
        placeholder='Search'
        style={styles.formField}
        placeholderTextColor={'#888888'}
      />
    </Animated.View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 99,
    width: deviceWidth - 40,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 20
  },
  formField: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: '#dde',
    fontSize: 18,
    //height: 50
  }
})