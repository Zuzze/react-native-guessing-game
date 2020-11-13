import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Theme from "../constants/themes";
import PropTypes from "prop-types";

/**
 * Secondary button component
 * On android button will use native ripple effect on click
 * On iOS button will use opacity effect on click
 * @param {*} props
 */
const AccentButton = props => {
  let ButtonComponent = TouchableOpacity;

  // use ripple effect on new android models
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  // Custom component variables MUST start with capital letter to work
  // Android Ripple effect will be always square in the button, if border radius is wanted, set it in wrapper View
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

AccentButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

AccentButton.defaultProps = {
  onPress: () => {},
  text: "sample text"
};

const styles = StyleSheet.create({
  // Ripple effect won't have border radius unless you wrap the button in a View
  buttonContainer: {
    borderRadius: Theme.buttonBorderRadius,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Theme.accent,
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
