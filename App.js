import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Game of Games" />
      <Text>Guess a number</Text>
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row"
  }
});
