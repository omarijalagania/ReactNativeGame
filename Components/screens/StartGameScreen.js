import React, {useState} from 'react';

import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native';

import Card from '../../Components/Card';
import Colors from '../constants/Colors';
import Input from '../Input';

const StartGameScreen = (props) => {

    const [userInput, setUserInput] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [inputNumber, setInputNumber] = useState();

    const inputHandler = inputText => {
        setUserInput(inputText.replace(/[^0-9]/g, ''))
    };

    const inputResetHandler = () => {
        setUserInput('');
        setConfirmed(false);
    }

    const inputConfirmHandler = () => {
        const choosenNumber = parseInt(userInput);

        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid number!', 'must be between 1 - 99', [{text: 'Okay', style: 'destructive', onPress: inputResetHandler}])
        }

        setConfirmed(true);
        setUserInput('');
        setInputNumber(choosenNumber);
    }

        let confirmedNumber;

        if(confirmed) {
            confirmedNumber = 
            <Card style={styles.confirm}>
                <Text>Selected number</Text>
                <View style={styles.confirmNumber}>
                    <Text>{inputNumber}</Text>
                </View>
            </Card>
        }
    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input} 
                    keyboardType="number-pad" 
                    maxLength={2} 
                    blurOnSubmit
                    onChangeText={inputHandler}
                    value={userInput}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}><Button color={Colors.secondary} title="Reset" onPress={inputResetHandler}/></View>
                        <View style={styles.btn}><Button color={Colors.primary} title="Confirm" onPress={inputConfirmHandler}/></View>
                    </View>
                </Card>
                {confirmedNumber}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    title:{
        fontSize: 20,
        marginVertical: 10
    },

    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },

    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    btn: {
        width: 80,
    },
    input: {
        width: 60,
        textAlign: 'center',
    },
    confirm: {
        marginTop: 20
    },
    confirmNumber: {
        alignItems: 'center'
    }

})

export default StartGameScreen;