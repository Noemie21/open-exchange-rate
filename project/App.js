import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

let baseUrl = 'https://openexchangerates.org/api/'
let appId = '1608d107308145bbad120bcbfc321e35'
export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(baseUrl+'latest.json?app_id='+appId)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  // console.log(data)
  return (
    <SafeAreaView style={styles.container}>
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text style={styles.title}>Base Currency : {data.base}</Text>
          <ScrollView style={styles.test}>
            {Object.entries(data.rates).map(([key,value]) => {
              return (
                  <Text>{key}:{value}</Text>
              );
            })}
          </ScrollView>
        </>
        )}
    </View>
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
