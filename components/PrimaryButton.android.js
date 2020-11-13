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
 * Main button component
 * On android button will use native ripple effect on click if version supports it
 * If ripple not supported, uses opacity effect
 * NOTE: use `import Primarybutton from "../components/PrimaryButton"` and do NOT add .android, system will do this automatically
 * @param {*} props
 */
const PrimaryButton = props => {
  let ButtonComponent = TouchableOpacity;

  // use ripple effect on new android models
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  // Custom component variables MUST start with capital letter to work
  // Android Ripple effect will be always square in the button, if border radius is wanted, set it in wrapper View
  // in some android versions at least you must also set `background={TouchableNativeFeedback.Ripple("<your_ripple_color>", true)}`
  // syntax: static Ripple(color: string, borderless: boolean, rippleRadius: ?number)
  // static Ripple(color: string, borderless: boolean, rippleRadius: ?number)
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent
        onPress={props.onPress}
        activeOpacity={0.6}
        background={TouchableNativeFeedback.Ripple(Theme.button, true, 40)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </ButtonComponent>
    </View>
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
  // Ripple effect won't have border radius unless you wrap the button in a View
  buttonContainer: {
    borderRadius: Theme.buttonBorderRadius,
    overflow: "hidden"
  },
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
