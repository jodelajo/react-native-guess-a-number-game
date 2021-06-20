import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import defaultStyles from '../constants/default-styles'

export default function GameOverScreen({guessRounds, userNumber, configureNewGameHandler}) {

    
    return <View style={styles.screen}>
        <Text style={defaultStyles.title}>The game is over.</Text>
        <Image style={styles.image} source={require('../assets/success.png')} />
        
        <Text style={defaultStyles.bodyText}>Number of rounds: {guessRounds} </Text>
        <Text style={defaultStyles.bodyText}>Number was: {userNumber}</Text>
        <Button title="New Game" onPress={configureNewGameHandler}/>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: 300
    }
})