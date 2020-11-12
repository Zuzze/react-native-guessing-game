import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Title from "../components/Title";

const GameOverScreen = props => {
  return (
    <View style={styles.container}>
      <Title>Game over</Title>
      <Text>Your score {50 - props.rounds}</Text>
      <Text>The number was {props.answer}</Text>
      <Button title="Start new game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
