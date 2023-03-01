import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { deviceWidth } from './LoaderComponent'

const SearchComponent = (props) => {
  return (
    <Animated.View style={[
      styles.container,
    ]}>
      <TextInput
        placeholder='Search'
        style={styles.formField}
        placeholderTextColor={'#888888'}
      />
    </Animated.View>
  )
}

export { SearchComponent }

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    width: deviceWidth - 40,
    left: 20,
    backgroundColor: 'white',
    zIndex: 99,
    borderRadius: 20
  },
  formField: {
    height: 50,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: '#dde',
    borderWidth: 1,
    fontSize: 18,
  }
})