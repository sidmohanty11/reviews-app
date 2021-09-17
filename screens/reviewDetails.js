import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";
import { AntDesign } from "@expo/vector-icons";

export default function ReviewDetails({ navigation, route }) {
  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{route.params.title}</Text>
        <Text style={globalStyles.paragraph}>{route.params.body}</Text>
        <View>
          <Text style={globalStyles.paragraph}>Rating: </Text>
          <View style={styles.icon}>
            {Array(parseInt(item.rating))
              .fill()
              .map((_, idx) => (
                <AntDesign key={idx} name="heart" color="red" size={30} />
              ))}
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
