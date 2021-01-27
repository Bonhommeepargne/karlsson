import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Context from "./src/context";
import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";
import Menu from "./src/components/Menu/Menu";

export default function App() {

  const [store, setStore] = useState({
    compteur: {
      value: 4,
      change: changeCompteur,
    },
    lol: 2,
  });

  function changeCompteur(newValue) {
    setStore((oldState) => {
      console.log("oldState :> ", oldState);
      const NewCompteur = oldState.compteur;
      NewCompteur.value = newValue;
      return { ...oldState, compteur: NewCompteur };
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Context.Provider value={store}>
        <NavigationContainer>
          <View style={styles.header}>
            <Header />
          </View>

          <Main style={styles.main} />

          <View style={styles.menu}>
            <Menu />
          </View>
          </NavigationContainer>
      </Context.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 55,
    width: "100%",
  },
  main: {
    width: "100%",
  },
  menu: {
    height: 95,
    width: "100%",
  }
});
