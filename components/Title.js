import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Theme from "../constants/themes";

const Title = props => {
  return (
    <Text {...props} style={{ ...styles.title, ...props.style }}>
      {props.children}
    </Text>
  );
};

Title.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Theme.titleFontFamily,
    fontSize: 20,
    marginVertical: 10,
    color: Theme.titleFontColor
  }
});

export default Title;
