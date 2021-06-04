import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function GameOverScreen({guessRounds, userNumber, configureNewGameHandler}) {

    
    return <View style={styles.screen}>
        <Text>The game is over.</Text>
        <Text>Number of rounds: {guessRounds} </Text>
        <Text>Number was: {userNumber}</Text>
        <Button title="New Game" onPress={configureNewGameHandler}/>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})