import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Theme from "../constants/themes";
import PropTypes from "prop-types";

/**
 * Main button component
 * On android button will use native ripple effect on click
 * On iOS button will use opacity effect on click
 * NOTE: use `import Primarybutton from "../components/PrimaryButton"` and do NOT add .android, system will do this automatically
 * @param {*} props
 */
const PrimaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
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
