import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from './constants/Colors';

const StartButton = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Text style={styles.button}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
		backgroundColor: Colors.primary,
		paddingHorizontal: 20,
		paddingVertical: 15,
		fontSize: 20,
		borderRadius: 10,
		color: 'white',
		fontFamily: 'open-sans',
	},
});

export default StartButton;
