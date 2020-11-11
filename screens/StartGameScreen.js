import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Select a Number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button color={Colors.primary} title="Reset" onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button color={Colors.accent} title="Confirm" onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
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
    maxWidth: "80%",
    alignItems: "center"
  },
  buttons: {
    margin: 10,
    marginBottom: 30,
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between"
  }
});

export default StartGameScreen;
