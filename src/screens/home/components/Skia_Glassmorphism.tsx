import { StyleSheet,useWindowDimensions, View } from 'react-native'
import React from 'react'
import { BackdropBlur, Canvas, Fill, Group, Image, mix, Paint, rect, RoundedRect, rrect, Text, useComputedValue, useFont, useImage, useLoop, vec } from '@shopify/react-native-skia';
import { Rect } from 'react-native-svg';

const Skia_Glassmorphism = () => {
  const { width, height } = useWindowDimensions();
  const center = vec(width / 2 - 50, height / 2 - 100);
  const blurClipPath = rrect(rect(24, center.y, width - 48, 200), 12, 12);
  const image = useImage(require('../../../components/assets/img1.jpg'));
  const blurProgress = useLoop({ duration: 2000 });
  const blur = useComputedValue(progress => mix(progress, 0, 10), [blurProgress]);
  const font = useFont(require('../../../../assets/fonts/AirbnbCereal_W_Bk.otf'), 40);
  if (font === null){return null}
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Group>
            {image && (
              <Image
                image={image}
                fit="cover"
                x={0}
                y={0}
                width={width}
                height={height}
              />
            )}
        </Group>
        <Group>
          <RoundedRect
            x={24}
            y={center.y}
            width={width - 48}
            height={200}
            color="#00000022"
            r={12}
          >
            <Paint
              color="rgba(0, 0, 0, 0.3)"
              style="stroke"
              strokeWidth={1}
            />
          </RoundedRect>
          <BackdropBlur blur={50}  clip={blurClipPath}>
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

export { Skia_Glassmorphism }

const styles = StyleSheet.create({})