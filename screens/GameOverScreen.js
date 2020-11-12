import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Title from "../components/Title";
import Theme from "../constants/themes";

const GameOverScreen = props => {
  return (
    <View style={styles.container}>
      <Title>Game over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          /*source={{
            uri:
              "https://www.cowgirlsuntamed.com/images/White_Duster_Boho_Kimono_1b.jpg"
          }}*/
          source={require("../assets/logo.png")}
        />
      </View>
      <Text>Your score {50 - props.rounds}</Text>
      <Text>The number was {props.answer}</Text>
      <View style={{ margin: 10 }}>
        <Button
          title="Start new game"
          color={Theme.primary}
          onPress={props.onRestart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Theme.primary,
    overflow: "hidden",
    marginVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default GameOverScreen;
