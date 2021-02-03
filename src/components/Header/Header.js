import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store from './../../context';

export default function App() {

  return (
    <Store.Consumer>
      {(store) => (
        <View style={styles.container}>
          <Text>{store.main.value}</Text>
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
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "blue",
  },
});