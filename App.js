import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header';
import GameScreen from './Components/screens/GameScreen';
import StartGameScreen from './Components/screens/StartGameScreen';
import GameOverScreen from './Components/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHander = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  }

  let content = <StartGameScreen startGameHander={startGameHander}/>;

  if(userNumber && guessRounds <=0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configNewGame}/>
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
