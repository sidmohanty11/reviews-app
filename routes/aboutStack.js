import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import About from "../screens/about";
import Header from "../components/Header";

const Drawer = createDrawerNavigator();

export default function MyApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
        initialRouteName="HomeStack"
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
