import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skia_Background, Skia_Glassmorphism } from './components'
import { Canvas } from '@shopify/react-native-skia'

const Skia_Example = () => {
  return (
    <View style={{ flex: 1 }}>
      <Skia_Background />
    </View>
  );
}

export { Skia_Example }

const styles = StyleSheet.create({})