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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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
    paddingVertical: 5,
    minWidth: 100,

    paddingHorizontal: 20
  },
  buttonText: {
    textAlign: "center",

    fontSize: 18,
    color: Theme.buttonText
  }
});

export default PrimaryButton;
