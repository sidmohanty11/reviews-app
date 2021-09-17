import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/1bg.jpg")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>ReviewsApp</Text>
        <AntDesign
          style={{ backgroundColor: "#eee" }}
          name="heart"
          color="red"
          size={24}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    backgroundColor: "#eee",
  },
  icon: {
    position: "absolute",
    left: 16,
    backgroundColor: "#eee",
  },
  headerWrapper: {
    flexDirection: "row",
  },
});
