import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Theme from "../constants/themes";
import PropTypes from "prop-types";

const PrimaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

PrimaryButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string
};

PrimaryButton.defaultProps = {
  onPress: () => {},
  text: "sample text"
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.button,
    borderRadius: Theme.buttonBorderRadius,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 5,
    minWidth: 80
  },
  buttonText: {
    textAlign: "center",
    color: Theme.buttonText
  }
});

export default PrimaryButton;
