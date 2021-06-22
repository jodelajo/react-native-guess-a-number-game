import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Alert, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import defaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <BodyText>#{numOfRound}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);

export default function GameScreen({ userChoice, gameOverHandler }) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width)
      setAvailableDeviceHeight(Dimensions.get('window').height)
    }
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })
 

  useEffect(() => {
    if (currentGuess === userChoice) {
      gameOverHandler(pastGuesses.length);
    }
  }, [currentGuess, userChoice, gameOverHandler]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("aaaii", "You know that this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
  }

  if (availableDeviceHeight < 500){
    return ( <View style={styles.screen}>
      <Text style={defaultStyles.bodyText}>Opponent's guess</Text>
     
      <View style={styles.controls}>
        <MainButton
          buttonText={<Ionicons name="md-remove" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, "lower")}
        ></MainButton>
         <NumberContainer currentGuess={currentGuess} />
        <MainButton
          buttonText={<Ionicons name="md-add" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, "greater")}
        ></MainButton>
      </View>
      <View style={styles.listContainer}>
      <ScrollView contentContainerStyle={styles.list}>
        {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
      </ScrollView>
      </View>
     
    </View>)
  }

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.bodyText}>Opponent's guess</Text>
      <NumberContainer currentGuess={currentGuess} />
      <Card style={styles.buttonContainer}>
        <MainButton
          buttonText={<Ionicons name="md-remove" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, "lower")}
        ></MainButton>
        <MainButton
          buttonText={<Ionicons name="md-add" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, "greater")}
        ></MainButton>
      </Card>
      <View style={styles.listContainer}>
      <ScrollView contentContainerStyle={styles.list}>
        {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
      </ScrollView>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    width: 300,
    maxWidth: "90%",
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignItems: 'center'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  listContainer: {
    width: Dimensions.get('window').width > 350 ? '60%' : '80%',
    flex: 1,
  },
  list: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  }
});
