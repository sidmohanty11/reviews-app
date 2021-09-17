import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/aboutStack";

const getFonts = () => {
  return Font.loadAsync({
    "spartan-regular": require("./assets/fonts/Spartan-Regular.ttf"),
    "spartan-bold": require("./assets/fonts/Spartan-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
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
