import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

let baseUrl = 'https://openexchangerates.org/api/'
let appId = '1608d107308145bbad120bcbfc321e35'


function CurrencyScreen({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Currency Page</Text>
        <Text>{route.params.id}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  test: {
    height: '60%',
  }
});

export default CurrencyScreen;