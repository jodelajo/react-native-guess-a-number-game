import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"
import MainButton from "../components/MainButton";


export default function GameOverScreen({
  guessRounds,
  userNumber,
  configureNewGameHandler,
}) {
  return (
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
    <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></BodyText>

    </View>
      <MainButton  onPress={configureNewGameHandler} buttonText="NEW GAME"></MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
      marginHorizontal: 30
  },
  highlight: {
      color: Colors.primary,
      fontFamily: 'open-sans-bold',
     
  },
  resultText: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 10
  }
});
