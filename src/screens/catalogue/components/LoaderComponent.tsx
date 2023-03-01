import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContentLoader from "rn-content-loader";
import { Circle, Rect } from 'react-native-svg';

export const deviceWidth = Dimensions.get('window').width;
console.log(deviceWidth)

const LoaderComponent = (props) => (
  <ContentLoader
    height={200}
    width={(deviceWidth - 70) / 2}
    speed={2}
    primaryColor="#000"
    secondaryColor="#ecebeb"
    {...props}
  >
    <Rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
    <Rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
    <Rect x="0" y="80" rx="3" ry="3" width="250" height="6.4" />
    <Rect x="0" y="100" rx="3" ry="3" width="250" height="6.4" />
    <Rect x="0" y="120" rx="3" ry="3" width="250" height="6.4" />
    <Circle cx="30" cy="30" r="30" />
  </ContentLoader>
);

export { LoaderComponent }

const styles = StyleSheet.create({})