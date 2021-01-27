import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Store from './../../context';
// import Context from "./src/Context";

export default function Main() {

  return (
    <Store.Consumer>
    {(store) => (
      <View style={styles.container}>
        <Text>Main</Text>
        <Text>Open up App.js to start working on your app! {store.compteur.value}</Text>
        <Button
          title="To Increment"
          onPress={() => {store.compteur.change(store.compteur.value + 1)}}
        />
      </View>
    )}
    </Store.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "green",
  },
});