import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Context from "./src/Context";

export default function App() {

  return (
    <View style={styles.container}>
        <Text>Header</Text>
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
    borderColor: "blue",
  },
});