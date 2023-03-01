import { StyleSheet, Text, SafeAreaView, Dimensions, FlatList } from "react-native";
import React, { useCallback, useState } from 'react'
import { Canvas, ColorMatrix, Image, Paint, useImage } from '@shopify/react-native-skia'
import { StatusBar } from "expo-status-bar";

const { height, width } = Dimensions.get('window');

// Color Matrix
const filters = {
  Juno: [
    1, 0, 0, 0, 0, -0.4, 1.3, -0.4, 0.2, -0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
  ],
  Sepia: [
    0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131,
    0, 0, 0, 0, 0, 1, 0,
  ],
  Greyscale: [
    0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152,
    0.0722, 0, 0, 0, 0, 0, 1, 0,
  ],
  Gingham: [2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0.5, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  Mayfair: [1, 1, 0.5, 0, 0, 0, 0.5, 1, 0, 0, 0.5, 0.5, 1, 0, 0, 0, 0, 0, 1, 0],
  Valencia: [
    1, 0, 0, 0, 0, -0.2, 1, 0, 0, 0, -0.8, 1.6, 1, 0, 0, 0, 0, 0, 1, 0,
  ],
  ['No Filter']: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
};

const Skia_ImageFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState('Juno');

  const handlePress = useCallback(
    (item: string)=> () => {
      setSelectedFilter(item);
    },
    [],
  );

  const image = useImage("https://picsum.photos/1920/1080");
  if (image === null) return null;
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Text style={styles.title}>Image Filters</Text>
      <Canvas style={styles.canvas}>
        <Image
          image={image}
          x={0}
          y={0}
          width={width - 32}
          height={height - 350}
          fit="cover"
        >
          <ColorMatrix
            matrix={filters[selectedFilter as keyof typeof filters]}
          />
        </Image>
      </Canvas>
      <FlatList
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        data={Object.keys(filters)}
        renderItem={({ item }) => (
          <Text
            style={[
              styles.item,
              selectedFilter === item && styles.selectedItem,
            ]}
            onPress={handlePress(item)}
          >
            {item}
          </Text>
        )}
        style={{ margin: 16 }}
      />
    </SafeAreaView>
  );
}

export { Skia_ImageFilters }

const styles = StyleSheet.create({
  title: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontWeight: "700",
    fontFamily: "Airbnb-Medium",
    fontSize: 32,
    // letterSpacing: 1,
  },
  canvas: {
    height: height - 350,
    marginHorizontal: 16,
    width: width - 32,
  },
  item: {
    width: '33%',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '600',
    fontFamily: 'Airbnb-Light',
    fontSize: 18
  },
  selectedItem: {
    color: '#ea4c89',
    borderWidth: 1,
    borderColor: '#ea4c89',
    borderRadius: 12
  },
});