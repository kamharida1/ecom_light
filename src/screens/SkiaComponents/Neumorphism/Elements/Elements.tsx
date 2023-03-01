import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import BoxShadow from '../BoxShadow'
import Switch from './components/Switch'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Canvas, Fill, runTiming, useTouchHandler, useValue } from '@shopify/react-native-skia';

const PADDING = 32;
const x = PADDING;
const y = 75;

const Neumorphism = () => {
  const { width } = useWindowDimensions();
  const size = width - PADDING * 2;
  const pressed = useValue(0);
  const onTouch = useTouchHandler({
    onStart: () => {
      runTiming(pressed, pressed.current ? 0 : 1, { duration: 150 })
    },
  });
  return (
    <Canvas style={{flex: 1}} onTouch={onTouch}>
      <Fill color="#F0F0F3" />
      <Switch x={x} y={y} width={size} pressed={pressed} />
    </Canvas>
  );
}

export { Neumorphism };

const styles = StyleSheet.create({})