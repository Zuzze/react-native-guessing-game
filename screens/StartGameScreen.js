import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";

/** Layout to start game */
const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isNumberConfirmed, setIsNumberConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumberChange = value => {
    // drop all non-number values
    console.log(value);
    setEnteredValue(value.replace(/[^0-9]/g, ""));
  };

  const handleNumberReset = () => {
    console.log("resetting");
    setEnteredValue("");
    setIsNumberConfirmed(false);
    console.log(enteredValue);
  };

  const handleNumberConfirm = () => {
    console.log("confirming");
    const chosenNumber = parseInt(enteredValue);
    console.log(chosenNumber, enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1-99", [
        { text: "Okay", style: "destructive", onPress: handleNumberReset }
      ]);
      return;
    }
    setIsNumberConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue(""); // this will be queued by react but will trigger in next render cycle so we can still access value inside this function
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (isNumberConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" color={Colors.primary} />
      </Card>
    );
  }

  // Keyboard.dismiss() closes soft keyboard when user clicks outside input
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a Number</Text>
          <Input
            style={{ width: 100, textAlign: "center" }}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleNumberChange}
          />
          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Reset"
                onPress={handleNumberReset}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="Confirm"
                onPress={handleNumberConfirm}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 100
  },
  input: {
    backgroundColor: Colors.input,
    shadowOffset: { width: -2, height: -2 },
    shadowRadius: 6, // iOS
    shadowColor: Colors.shadow,
    elevation: 3, // Android
    shadowOpacity: 0.26,
    width: 300,
    maxWidth: "80%",
    borderRadius: 30,
    margin: 10
  },
  inputContainer: {
    width: 300,
    marginBottom: 20,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttons: {
    margin: 10,
    marginBottom: 30,
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;
