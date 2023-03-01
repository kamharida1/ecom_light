import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { BackdropBlur, Blur, Canvas, Circle, Fill, Group, Paint, rect, RoundedRect, rrect, Text, useFont, vec } from '@shopify/react-native-skia'

const Skia_Background = () => {
  const { width, height } = useWindowDimensions();
   const center = vec(width / 2 - 50, height / 2 - 100);
   const blurClipPath = rrect(rect(24, center.y, width - 48, 200), 12, 12);
  const font = useFont(require('../../../../assets/fonts/AirbnbCereal_W_Bk.otf'), 30)
  if (font === null) {
    return null
  }
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Fill color={"#fff"} />
        <Circle
          cx={210}
          cy={256}
          r={10}
          color="#ffa"
          style="stroke"
          strokeWidth={20}
        />
        <Circle cx={210} cy={512} r={128} color="#444" />
        <Text font={font} text="Hello World" x={20} y={300} />
        <Group>
          <RoundedRect
            x={24}
            y={center.y}
            width={width - 48}
            height={200}
            color="#00000022"
            r={12}
          >
            <Paint color="rgba(0, 0, 0, 0.3)" style="stroke" strokeWidth={1} />
          </RoundedRect>
          <BackdropBlur blur={60} clip={blurClipPath}>
            <Fill color={"rgba(122, 122, 122, 0.3)"} />
          </BackdropBlur>
          <Text
            x={center.x - 50}
            y={center.y + 110}
            text="Hello Skia"
            font={font}
            color="#fff"
            style="stroke"
          />
        </Group>
      </Canvas>
    </View>
  );
}

export { Skia_Background }

const styles = StyleSheet.create({})