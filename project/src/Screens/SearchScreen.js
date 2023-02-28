import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
// import { TextInput } from "@react-native-material/core";

import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';

let baseUrl = 'https://openexchangerates.org/api/'
let appId = '1608d107308145bbad120bcbfc321e35'


function SearchScreen() {
const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Search Currency"
            value={text}
        />
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
  input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchScreen;