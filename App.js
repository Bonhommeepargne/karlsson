import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Context from "./src/context";
import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";
import Menu from "./src/components/Menu/Menu";
import { navigationRef } from './src/RootNavigation';

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
      const NewCompteur = oldState.compteur;
      NewCompteur.value = newValue;
      return { ...oldState, compteur: NewCompteur };
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Context.Provider value={store}>
        <NavigationContainer ref={navigationRef}>
          <View style={styles.header}>
            <Header />
          </View>

          <View style={styles.main}>
            <Main />
          </View>

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
  },
  header: {
    height: 55,
    width: "100%",
  },
  main: {
    flex: 1,
    width: "100%",
  },
  menu: {
    height: 95,
    width: "100%",
  }
});
