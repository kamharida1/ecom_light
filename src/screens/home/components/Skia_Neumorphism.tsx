import { Dimensions, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import data2 from '../../catalogue/data2'
import { Canvas, Group, Paint, RoundedRect, Shadow, Text, useFont } from '@shopify/react-native-skia';

const { width } = Dimensions.get('window');

const NeumorphicCard = ({
  data, index, font, bodyFont
}) => {
  return (
    <Canvas style={{height: 140, width}} key={index}>
      <Group>
        <RoundedRect
          x={16}
          y={20}
          width={width - 32}
          height={100}
          r={12}
          color="#EFEEEE">
          <Paint
            color="rgba(255, 255, 255, 0.6)"
            style="stroke"
            strokeWidth={1}
          />
          <Shadow dx={6} dy={6} blur={4} color="rgba(0,0,0,0.4)" inner />
          <Shadow dx={-6} dy={-6} blur={4} color="rgba(255,255,255,1)" inner />
        </RoundedRect>
      </Group>
      <Text x={32} y={56} text={data?.name} font={font} />
      <Text x={32} y={92} text={data?.body} font={bodyFont} />
    </Canvas>
  )
}

const Skia_Neumorphism = () => {
  const font = useFont(require('../../../../assets/fonts/AirbnbCereal_W_Md.otf'), 20)
  const bodyFont = useFont(
    require("../../../../assets/fonts/AirbnbCereal_W_Lt.otf"),
    14
  );
  if (font === null || bodyFont === null) {
    return null;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#EFEEEE" }}
      contentContainerStyle={{
        paddingTop: Platform.OS === "ios" ? 40 : 0,
        paddingBottom: 40,
      }}
    >
      {data2?.map((item) => (
        <Pressable key={item.id} onPress={()=>console.warn('Clicked!!!')}>
          <NeumorphicCard
            key={item.id}
            data={item}
            font={font}
            bodyFont={bodyFont}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

export { Skia_Neumorphism }

const styles = StyleSheet.create({})