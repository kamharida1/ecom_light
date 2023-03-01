import React, {useState} from "react";
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from "react-native";
import Grid from "./Grid";

const keyExtractor = ({ uri }) => uri;

export default function ImageGrid({onPressImage}:{onPressImage: ()=> {}}) {
  const [images, setImages] = useState([
    { uri: 'https://picsum.photos/600/600?image=10' },
      { uri: 'https://picsum.photos/600/600?image=20' },
      { uri: 'https://picsum.photos/600/600?image=30' },
      { uri: 'https://picsum.photos/600/600?image=40' },
      { uri: 'https://picsum.photos/600/600?image=50' },
      { uri: 'https://picsum.photos/600/600?image=60' },
      { uri: 'https://picsum.photos/600/600?image=70' },
      { uri: 'https://picsum.photos/600/600?image=80' },
  ]);
  const renderItem = ({ item: { uri }, size, marginTop, marginLeft}) => {
    const style = {
      width: size,
      height: size + 70 ,
      marginLeft,
      marginTop
    };
    return (
      <View style={{flex: 1}}>
        <View style={style}>
          <Image source={{uri: uri}} style={{flex: 1}} />
          <View style={{flex: 1/2}}>
            <Text>Grow in our Midst</Text>
            <Text>$33.29</Text>
            <Text style={{}}> Not available </Text>
          </View>
        </View>
      </View>
    )
  }
  return (
      <Grid
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          position: 'absolute',
          left: 3,
          right: 10,
        }}
      />
    );
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
})