import React, { useState } from 'react';
import  {View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberContainer from '../NumberContainer';
import Card from '../Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if(rndNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    }else {
        return rndNumber;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));

    const nextGuessHandler = direction => {
         if((direction === 'lower' && currentGuess < props.userChoice) || direction === 'greater' && currentGuess > props.userChoice) {
            Alert.alert('Do Not Lie!!!', [{ text: 'Sorry', style: 'cancel' }]);
            return;
         }

        //  if(){

        //  }
    }

     return(
         <View style={styles.screen}>
             <Text>Opponent's Guess</Text>
             <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.btnContainer}>
                    <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                    <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
                </Card>
         </View>
     )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;