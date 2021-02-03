import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Store from './../../context';

export default function Menu() {

  return (
    <Store.Consumer>
      {(store) => (
        <View style={styles.container}>
          <Button
            title='Company'
            onPress={() => { store.main.change('Company') }}
          />
          <Button
            title='Screenings'
            onPress={() => { store.main.change('Screening') }}
          />
          <Button
            title='News'
            onPress={() => { store.main.change('News') }}
          />
          <Button
            title='Notifications'
            onPress={() => { store.main.change('Notifications') }}
          />
          <Button
            title='User'
            onPress={() => { store.main.change('User') }}
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
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
});
