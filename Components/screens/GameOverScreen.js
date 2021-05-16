import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import StartButton from '../StartButton';
import { Ionicons } from '@expo/vector-icons';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>Game Over!</Text>
			<View style={styles.imageContainer}>
				<Image
					// source={require('./../../assets/success.png')}
					source={{
						uri: 'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg',
					}}
					style={styles.image}
				/>
			</View>
			<Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
			<Text style={styles.text}>Number was: {props.userNumber}</Text>
			<StartButton onPress={props.onRestart}>
				<Ionicons name='refresh-outline' size={25} />
			</StartButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontFamily: 'open-sans',
	},

	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 2,
		marginVertical: 30,
		borderColor: 'black',
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default GameOverScreen;
