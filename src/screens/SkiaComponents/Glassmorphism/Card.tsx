import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React, { useMemo } from 'react'
import Background from './components/Background'
import Ball from './components/Ball'
import { BackdropBlur, Canvas, LinearGradient, Paint, Rect, rect, rrect, runDecay, Text, useComputedValue, useFont, useTouchHandler, useValue, vec } from '@shopify/react-native-skia'

const Glassmorphism = () => {
  const titleFont = useFont(
    require("../../../../assets/fonts/AirbnbCereal_W_Blk.otf"), 24);
  const subtitleFont = useFont(
    require("../../../../assets/fonts/AirbnbCereal_W_Blk.otf"),
    18
  );
  const font = useFont(
    require("../../../../assets/fonts/AirbnbCereal_W_Blk.otf"),
    12
  );
  const { width, height } = useWindowDimensions();
  const CARD_WIDTH = width - 64; // 364
  const CARD_HEIGHT = CARD_WIDTH * 0.61; // 222
  const clip = useMemo(
    () => rrect(rect(0, 0, CARD_WIDTH, CARD_HEIGHT), 20, 20),
    [CARD_HEIGHT, CARD_WIDTH]
  );
  const x = useValue((width - CARD_WIDTH) / 2); // x : 32
  const y = useValue((height - CARD_HEIGHT) / 2) // y : 352
  const offsetX = useValue(0);
  const offsetY = useValue(0);
  const onTouch = useTouchHandler({
    onStart: (pos) => {
      offsetX.current = x.current - pos.x;
      offsetY.current = y.current - pos.y;
    },
    onActive: (pos) => {
      x.current = offsetX.current + pos.x;
      y.current = offsetY.current + pos.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      runDecay(x, { velocity: velocityX });
      runDecay(y, { velocity: velocityY })
    }
  });
  const transform = useComputedValue(
    () => [{ translateY: y.current }, { translateX: x.current }],
    [x, y]
  );
  if (titleFont === null || subtitleFont === null || font === null) {
    return null
  }
  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch} debug>
      <Background />
      <Ball r={100} c={vec(75, 75)} />
      <Ball r={50} c={vec(width - 40, height / 2)} />
      <Ball r={100} c={vec(150, height - 200)} />
      <Ball r={75} c={vec(300, height / 2 - 200)} />
      <BackdropBlur
        clip={clip}
        //color="rgba(0, 0, 0, 0.5)"
        blur={10}
        transform={transform}
      >
        <Rect x={0} y={CARD_HEIGHT - 70} width={CARD_WIDTH} height={70}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(CARD_WIDTH, 0)}
            colors={["#5DA7D2ee", "#B848D9ee"]}
          />
        </Rect>
        <Text text="SUPERBANK" x={20} y={40} font={titleFont} />
        <Text x={20} y={90} text="1234 5678 1234 5678" font={titleFont} />
        <Text text="VALID THRU" x={20} y={165} color="white" font={font} />
        <Text text="12/29" x={20} y={180} color="white" font={font} />
        <Text
          text="JOHN DOE"
          x={20}
          y={200}
          color="white"
          font={subtitleFont}
        />
      </BackdropBlur>
    </Canvas>
  );
}

export default Glassmorphism;

const styles = StyleSheet.create({})