import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

import propTypes from 'prop-types';

import {HomeScreen} from './Weather';

import {WeatherView} from './View/WeatherView.js';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const API_KEY = '43bf7802f3e1ec3e2f1fe2117a88cb5f';

const Main = createStackNavigator();

const weatherTypes = {
	condition: [
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Clear',
		'Clouds',
		'Mist',
		'Smoke',
		'Haze',
		'Dust',
		'Fog',
		'Sand',
		'Dust',
		'Ash',
		'Squall',
		'Tornado',
	]
};

export default class extends React.Component {
	state = {
		isLoading: true,
	};

	getWeather = async (latitude, longitude) => {
		const {
			data: {
				main: { temp },
				weather,
			},
		} = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
		);
		this.setState({ isLoading: false, condition: weather[0].main, temp });
	};

	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync({});
			this.getWeather(latitude, longitude);

			// Send to Api get Weather
		} catch (error) {
			Alert.alert("Can't find you", 'So sad.');
		}
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const { isLoading, temp, condition } = this.state;

		return isLoading ? (
			<Loading />
		) : (
			<NavigationContainer>
			<Main.Navigator initialRouteName="homeScreen">
				<Main.Screen name='homeScreen'>
					{props => <HomeScreen {...props} temperature={Math.round(temp)} condition={condition}/> }
				</Main.Screen>
				<Main.Screen name='weatherScreen' component={WeatherView}/>
			</Main.Navigator>
			</NavigationContainer>
		);
	}
}
