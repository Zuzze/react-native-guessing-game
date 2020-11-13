import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";
import Title from "../components/Title";
import Theme from "../constants/themes";

const GameOverScreen = props => {
  return (
    <ScrollView>
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
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your score {50 - props.rounds}</Text>
          <Text>The number was {props.answer}</Text>
          <View style={{ margin: 10 }}>
            <Button
              title="Start new game"
              color={Theme.primary}
              onPress={props.onRestart}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Theme.primary,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
