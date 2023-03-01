import { Animated, StyleSheet, View, Text, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchComponent } from './SearchComponent';
import { LoaderComponent } from './LoaderComponent';
import DynamicHeader from './DynamicHeader';
import { DATA } from '../data';

const MockCatalogue = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
      <View style={{flex: 1 }}>
        {/* <SearchComponent /> */}
        <DynamicHeader animHeaderValue={scrollOffsetY} />
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            {useNativeDriver: false}
          )}
        >
          {DATA.map((book, index) => {
            return (
              <Text style={{marginBottom: 100}} key={book.id}>{ book.title}</Text>
            )
          })}
        </ScrollView>
      </View>
  )
}

export { MockCatalogue }

const styles = StyleSheet.create({
})