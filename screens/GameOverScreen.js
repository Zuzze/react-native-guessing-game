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
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>{props.answer} was the right number!</Title>
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

          <View style={{ margin: 10 }}>
            <PrimaryButton title="Start new game" onPress={props.onRestart} />
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
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
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
    marginBottom: 20,
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
