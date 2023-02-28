import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import { ListItem } from "@react-native-material/core";

let baseUrl = 'https://openexchangerates.org/api/'
let appId = '1608d107308145bbad120bcbfc321e35'


function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);
  const [nameData, setNameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameLoading, setNameLoading] = useState(true);


  useEffect(() => {
    fetch(baseUrl+'latest.json?app_id='+appId)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(baseUrl+'currencies.json')
      .then((resp) => resp.json())
      .then((json) => setNameData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(nameData)

  return (
    <SafeAreaView style={styles.container}>
        <View>
        {loading ? (
            <Text>Loading...</Text>
        ) : (
            <>
            <Text style={styles.title}>Base Currency : {data.base}</Text>
            <ScrollView>
                {Object.entries(data.rates).map(([key,value]) => {
                    let nom = ''
                    Object.entries(nameData).map(([cle, valeur]) => {
                        if (key == cle) {
                            nom = valeur
                        }
                    })
                return (
                    <ListItem 
                        style={styles.list}
                        title={key +  ': ' + nom}
                        secondaryText={'change : ' + value}
                    //     onPress={() => 
                    //         Alert.alert(key, 'My Alert Msg', [
                    //         {text: 'OK'}
                    //       ])
                    //   }
                        onPress={() => navigation.navigate('CurrencyScreen', { id: key })}
                    />
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
  list: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default HomeScreen;