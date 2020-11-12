import React from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Input = props => {
  // spread props to get access to native TextInput props from parent
  // TextInput built-in props are visible in https://reactnative.dev/docs/textinput#props
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

Input.propTypes = {
  /** allows custom styling via props that will overwrite original style */
  style: PropTypes.object
};

Input.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
});

export default Input;
