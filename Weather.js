import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SideMenu = require('react-native-side-menu');


export function HomeScreen({navigation, route, temperature: temperature, condition: condition}){
	return(
		<View style={styles.container}>
			<Text>May Weather</Text>
			<TouchableOpacity style={styles.button} onPress={() => {
				navigation.navigate('weatherScreen', {temperature: temperature, condition: condition})
			}}
			>
				<Text style={{ color: '#FFF' }}>날씨정보</Text>
			</TouchableOpacity>
		</View>
	);
}

/*
function Air(){
	return(
		<View>
			<Text>미세먼지</Text>
		</View>
	);
}
*/

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temperature: {
		fontSize: 40,
		color: 'white',
		marginTop: 10,
	},
	Title: {
		color: 'white',
		fontSize: 50,
		fontWeight: '200',
		marginBottom: 20,
		textAlign: 'left',
	},
	SubTitle: {
		color: 'white',
		fontWeight: '800',
		fontSize: 25,
		textAlign: 'left',
	},
	TextContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start',
	},
	button: {
		marginTop: 32,
		backgroundColor: '#23A6D9',
		paddingVertical: 12,
		width: 250,
		borderRadius: 12,
		alignItems: "center"
	}
});

class Application extends React.Component {
	render() {
		const menu = <Menu navigator={navigator} />;

		return (
			<SideMenu menu={menu}>
				<ContentView />
			</SideMenu>
		);
	}
}
