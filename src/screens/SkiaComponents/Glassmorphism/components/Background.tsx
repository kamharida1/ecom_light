import { StyleSheet, useWindowDimensions} from 'react-native'
import React from 'react'
import { Fill, Group, Paint, Rect, rect } from '@shopify/react-native-skia';
import { BilinearGradient } from './BilinearGradient';

const Background = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Group>
      <Rect x={0} y={0} width={width} height={height}>
        <BilinearGradient
          colors={["#FAC6C0", "#EBBFF6", "#F5DFE6", "#F2DCF6"]}
          rect={rect(0, 0, width, height)}
        />
      </Rect>
      
    </Group>
  );
}

export default Background

const styles = StyleSheet.create({})