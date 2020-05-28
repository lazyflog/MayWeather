import React from 'react';
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


import {getWeatherType} from '../Components/WeatherTypes.js';

export function WeatherView({navigation, route}){
	let temperature = route.params.temperature;
	let condition = route.params.condition;

	let WeatherTypes = getWeatherType();

	return(
		<LinearGradient
			colors={WeatherTypes[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.container}>
				<View style={styles.container2}>
					<MaterialCommunityIcons
						size={86}
						name={WeatherTypes[condition].iconName}
						color="white"
					/>
					<Text style={styles.temperature}>{temperature}˚</Text>
					<Text style={styles.Title}>{WeatherTypes[condition].title}</Text>
				</View>
				<View style={{ ...styles.container2, ...styles.TextContainer }}>
					<View>
						<Text style={styles.SubTitle}>
							{WeatherTypes[condition].subTitle}
						</Text>
						<TouchableOpacity style={styles.button} onPress={() => {
							navigation.goBack();
						}}
						>
							<Text style={{ color: '#FFF' }}>홈으로 돌아가기</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</LinearGradient>
	);
}


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


