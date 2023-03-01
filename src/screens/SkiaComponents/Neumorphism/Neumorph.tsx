import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas, Fill, Group, Paint, RoundedRect, Shadow } from '@shopify/react-native-skia'

const PADDING = 32;
const SIZE = 256 - 64;
const R = 32;

const Neumorph = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="white" />
      <RoundedRect
        x={PADDING}
        y={PADDING}
        width={SIZE}
        height={SIZE}
        r={R}
        color="white"
      >
        <Shadow dx={12} dy={12} blur={25} color="rgba(0,0,0,0.2)" />
        <Shadow dx={-12} dy={-12} blur={25} color="#fff" />
      </RoundedRect>
      <RoundedRect
        x={PADDING}
        y={ 2 * PADDING + 192}
        width={SIZE}
        height={SIZE}
        r={R}
        color="white"
      >
        <Shadow dx={12} dy={12} blur={25} color="rgba(0,0,0,0.2)" inner />
        <Shadow dx={-12} dy={-12} blur={25} color="#fff" inner />
      </RoundedRect>
    </Canvas>
  );
}

export default Neumorph

const styles = StyleSheet.create({})