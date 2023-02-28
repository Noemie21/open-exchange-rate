import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import CurrencyScreen from './src/Screens/CurrencyScreen';
import TabBarNavigator from "./src/Router/TabBarNavigator";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Open Exchange Rate" component={TabBarNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;