import React from 'react'
import { add, BlurMask, Circle, Group, LinearGradient, Paint, vec, Vector } from '@shopify/react-native-skia'
interface BallProps {
  c: Vector;
  r: number;
}
const Ball = ({ c, r }: BallProps) => {
  
  return (
    <Group>
      <Group>
        <Circle c={c} r={r}>
          <LinearGradient
            start={add(c, vec(-r, 0))}
            end={add(c, vec(r, 0))}
            colors={["#FBE1FF", "#E1ABED"]}
          />
          <BlurMask blur={5} style="solid" />
        </Circle>
      </Group>
    </Group>
  );
}

export default Ball
