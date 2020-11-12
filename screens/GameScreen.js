import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Alert
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

import Theme from "../constants/themes";

import { Ionicons } from "@expo/vector-icons";

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

const renderListItem = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <Text>
        Guess #{listLength - itemData.index}: {itemData.item}
      </Text>
    </View>
  );
};

const GameScreen = props => {
  // call first number that is never the final number
  const initialGuess = generateRandomBetween(1, 100, props.guessedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

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
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(past => [nextNumber.toString(), ...past]);
    setRounds(currentRounds => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <PrimaryButton
          title={<Ionicons name="md-remove" size={24} color="white" />}
          color={Theme.accent}
          onPress={handleNextGuess.bind(this, "lower")}
        ></PrimaryButton>
        <PrimaryButton
          title={<Ionicons name="md-add" size={24} color="white" />}
          color={Theme.primary}
          onPress={handleNextGuess.bind(this, "greater")}
        ></PrimaryButton>
      </Card>
      <View style={styles.listContainer}>
        {/*<ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => renderListItem(guess, index))}
        </ScrollView>*/}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
  },
  list: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  listContainer: {
    width: "100%",
    flex: 1 // Note! this is required to maake scroll inside view to work on android!
  },
  listItem: {
    margin: 10,
    width: "50%",
    flexDirection: "row",
    backgroundColor: Theme.danger,
    padding: 15,
    width: 200,
    justifyContent: "space-around"
  }
});

export default GameScreen;
