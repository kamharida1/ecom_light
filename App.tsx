import "react-native-gesture-handler";

import { LogBox } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { ActivityIndicator, Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoadAssets from "./src/components/LoadAssets";
import { ThemeProvider } from "./src/components/Theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Example from "./src/Example";
import Router, { RootNavigator } from "./src/router/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";
 
const uri =
  "https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-concrete_1258-48234.jpg?w=360";

const fonts = {
  "Airbnb-Bold": require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
  "Airbnb-Regular": require("./assets/fonts/AirbnbCereal_W_Bk.otf"),
  "Airbnb-Semibold": require("./assets/fonts/AirbnbCereal_W_Blk.otf"),
  "Airbnb-Medium": require("./assets/fonts/AirbnbCereal_W_Md.otf"),
  "Airbnb-Light": require("./assets/fonts/AirbnbCereal_W_Lt.otf"),
};

export default function App() {
  let [fontsLoaded] = useFonts({
    "Airbnb-Bold": require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
    "Airbnb-Regular": require("./assets/fonts/AirbnbCereal_W_Bk.otf"),
    "Airbnb-Semibold": require("./assets/fonts/AirbnbCereal_W_Blk.otf"),
    "Airbnb-Medium": require("./assets/fonts/AirbnbCereal_W_Md.otf"),
    "Airbnb-Light": require("./assets/fonts/AirbnbCereal_W_Lt.otf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    // <ThemeProvider>
    //   <LoadAssets {...{ fonts }}>

    //         {/* <View style={styles.container}>
    // //         <BlurView intensity={20} tint="light" style={styles.blurContainer}>
    // //           <Text style={{
    // //             fontFamily: "Airbnb-Medium",
    // //             fontSize: 20,
    // //             color: "rgba(255, 255, 255, 0.8)"
    // //           }}>
    // //             {text}
    // //           </Text>
    // //         </BlurView>
    // //       </View> */}
    //         <RootNavigator />
    //       <StatusBar style="dark" />
    //    </LoadAssets>
    //  </ThemeProvider>
    // <Router colorScheme={colorScheme} />
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,1000, 0.8)",
    //alignItems: "center",
    justifyContent: "flex-start",
  },
  blurContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
});
