import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return (
        <LinearGradient
        colors={['#12c2e9', '#c471ed', '#f64f59']}
        style={styles.container}
        >
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
            <View style={styles.container2}>
                <MaterialCommunityIcons name="weather-cloudy" size={150} color="white"/>
                <Text style={styles.text}>May Weather</Text>
            </View>
            
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: "#E9E4F0",
        fontSize: 20,
        marginBottom: 30
    }
});