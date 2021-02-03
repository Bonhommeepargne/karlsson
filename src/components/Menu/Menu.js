import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as RootNavigation from './../../RootNavigation';

export default function Menu() {

  const [ namePage, setNamePage ] = useState('');
  useEffect(() => {
    setNamePage(RootNavigation.getCurrentRoute().name);
  }, [ ]);

  return (
    <View style={styles.container}>
      <Button
        title='Company'
        onPress={() => { RootNavigation.navigate('Company'); console.log("route :> ", RootNavigation.getCurrentRoute().name); }}
      />
      <Button
        title='Screenings'
        onPress={() => { RootNavigation.navigate('Screening'); console.log("route :> ", RootNavigation.getCurrentRoute().name); }}
      />
      <Button
        title='compteur'
        onPress={() => { console.log('c') }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
});
