import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, excludedNumber) => {
  min = Math.ceil(min); // integer
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === excludedNumber) {
    return generateRandomBetween(min, max, excludedNumber);
  } else {
    return randomNumber;
  }
};

const GameScreen = props => {
  // call first number that is never the final number
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.guessedNumber)
  );
  const [rounds, setRounds] = useState(0);

  // useRef values survives even component is re-rendered
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // destruct as if yo put props into useEffect, all prop changes trigger it
  const { guessedNumber, onGameOver } = props;

  // use effect trriggers AFTER render
  useEffect(() => {
    if (currentGuess === guessedNumber) {
      onGameOver(rounds);
    }
    // trigger when only currentGuess changes not otherwise
  }, [currentGuess, guessedNumber, onGameOver]);

  /**
   * @param {string} direction lower OR greater
   */
  const handleNextGuess = direction => {
    if (
      (direction === "lower" && currentGuess < props.guessedNumber) ||
      (direction === "greater" && currentGuess > props.guessedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={handleNextGuess.bind(this, "lower")}
        ></Button>
        <Button
          title="GREATER"
          onPress={handleNextGuess.bind(this, "greater")}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
