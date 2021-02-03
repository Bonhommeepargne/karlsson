import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Context from "./src/context";
import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";
import Menu from "./src/components/Menu/Menu";

export default function App() {

  const [store, setStore] = useState({
    main: {
      value: 'Company',
      change: changeMain,
    },
  });

  function changeMain(newValue) {
    setStore((oldState) => {
      oldState.main.value = newValue;
      return { ...oldState };
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Context.Provider value={store}>
          <View style={styles.header}>
            <Header />
          </View>

          <View style={styles.main}>
            <Main />
          </View>

          <View style={styles.menu}>
            <Menu />
          </View>
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
