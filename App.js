import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const handleStartNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const handleGameOver = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen guessedNumber={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        answer={userNumber}
        onRestart={handleStartNewGame}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Game of Games" />
      {content}
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
