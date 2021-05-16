import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './Components/Header';
import GameScreen from './Components/screens/GameScreen';
import StartGameScreen from './Components/screens/StartGameScreen';
import GameOverScreen from './Components/screens/GameOverScreen';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const [fontLoader, setFontLoader] = useState(false);

	if (!fontLoader) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoader(true)}
				onError={(error) => {
					console.log(error);
				}}
			/>
		);
	}

	const configNewGame = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHander = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numberOfRounds) => {
		setGuessRounds(numberOfRounds);
	};

	let content = <StartGameScreen startGameHander={startGameHander} />;

	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onRestart={configNewGame}
			/>
		);
	}

	return (
		<View style={styles.screen}>
			<Header title='Guess a Number' />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default App;
