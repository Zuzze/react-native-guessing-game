import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Colors from "../constants/colors";

/**
 * Presentational card component to display content
 * @param {*} props
 */
const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

Card.propTypes = {
  /** allows custom styling via props that will overwrite original style */
  style: PropTypes.object
};

Card.defaultProps = {
  style: {}
};

const shadow = {
  shadowColor: Colors.gray,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6, // iOS
  elevation: 10, // Android
  shadowOpacity: 0.26
};

const styles = StyleSheet.create({
  card: {
    ...shadow,
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: Colors.cardBorderRadius
  }
});

export default Card;
