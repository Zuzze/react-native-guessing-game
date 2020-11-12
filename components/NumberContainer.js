import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from "../constants/themes";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Theme.primary,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: Theme.accent,
    fontSize: 22
  }
});

export default NumberContainer;
