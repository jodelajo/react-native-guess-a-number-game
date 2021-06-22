import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";

import MainButton from "../components/MainButton";

export default function GameOverScreen({
  guessRounds,
  userNumber,
  configureNewGameHandler,
}) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={defaultStyles.title}>The game is over.</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
            //   source={{uri: 'https://jodelajo.nl/portfolio/jodelajo_2020.png'}}
            resizeMode="cover"
          />
        </View>

        <View style={styles.textContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <MainButton
          onPress={configureNewGameHandler}
          buttonText="NEW GAME"
        ></MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.6) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginHorizontal: 30,
    // marginVertical: Dimensions.get('window').height / 40
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 600 ? 16 : 20,
    marginVertical: 10,
  },
});
