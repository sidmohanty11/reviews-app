import React, { useState } from "react";
import { View } from "react-native";
import Home from "./screens/home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    "spartan-regular": require("./assets/fonts/Spartan-Regular.ttf"),
    "spartan-bold": require("./assets/fonts/Spartan-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <View>
        <Home />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
