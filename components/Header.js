import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Theme from "../constants/themes";
import PropTypes from "prop-types";

const Header = props => {
  // an example of platform specific styling with Platform.select()
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
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
  headerBase: {
    width: "100%",
    height: 80,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    // example of inline platform specific styling
    borderBottomColor: Platform.OS === "ios" ? "gray" : "transparent"
  },
  headerAndroid: {
    backgroundColor: Theme.header
  },
  headerIOS: {
    backgroundColor: Theme.background
  },
  headerTitle: {
    fontSize: 18,
    color: Platform.OS === "ios" ? "gray" : Theme.headerText
  }
});

export default Header;
