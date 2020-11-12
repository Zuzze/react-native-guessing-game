import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from "../constants/themes";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={StyleSheet.headerTitle}>{props.title}</Text>
    </View>
  );
};

Header.propTypes = {
  /** allows custom styling via props that will overwrite original style */
  style: PropTypes.object,
  /** Title displayed on a header */
  title: PropTypes.string
};

Header.defaultProps = {
  style: {},
  title: "Sample Title"
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Theme.header,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 18
  }
});

export default Header;
