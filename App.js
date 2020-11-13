import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Theme from "./constants/themes";
import { AppLoading } from "expo";

// Custom font
import * as Font from "expo-font";

const fetchFonts = () => {
  console.log("fonts async");
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    // font fetch is async function and to make sure it will render in initial render, we use expo's AppLoading
    console.info("loading fonts...");
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        // onError={err => console.log(err)}
      />
    );
  }
  console.log("fonts loaded");

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

  // Tip: In top most components use SafeAreaView instead of View to avoid native elements like phone native nav etc overlapping with the view
  // Some navigation libraries use this automatically
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Game of Games" />
      {content}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background
    // alignItems: "center",
    // width: "100%"
  }
});
