import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MockCatalogue } from "../catalogue/components";
import SearchComponent from "./components/SearchComponent";
import { Search } from "./Search";
import ImageGrid from "../../components/FlatGrid/ImageGrid";
import { SafeAreaView } from "react-native-safe-area-context";
import { Skia_Example } from "./Skia_Example";
import BoxShadows from "../SkiaComponents/Neumorphism/BoxShadow";
import Neumorph from "../SkiaComponents/Neumorphism/Neumorph";
import { Neumorphism } from "../SkiaComponents/Neumorphism/Elements/Elements";
import Glassmorphism from "../SkiaComponents/Glassmorphism/Card";

const Home = () => {
  return (
    <>
      <Glassmorphism />
    </>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
