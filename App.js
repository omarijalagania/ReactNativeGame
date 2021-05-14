import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header';
import GameScreen from './Components/screens/GameScreen';
import StartGameScreen from './Components/screens/StartGameScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHander = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen startGameHander={startGameHander}/>;

  if(userNumber) {
    content = <GameScreen userChoice={userNumber}/>
  }

  return (
    <View style={styles.screen}>
     <Header title="Guess a Number"/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
