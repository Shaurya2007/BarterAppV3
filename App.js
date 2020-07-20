import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppTabNavigator } from './component/AppTabNavigator';
import SignupLoginScreen from './screens/SignupLoginScreen'
import ExchangeScreen from './screens/ExchangeScreen'
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
<AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({

SignupLoginScreen:{screen:SignupLoginScreen},
BottomTab:{screen:AppTabNavigator}
})