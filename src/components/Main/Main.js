import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { StyleSheet, Text, View, Button } from 'react-native';
import Company from './Company/Company';
import Screening from './Screening/Screening';
import News from './News/News';
import Notifications from './Notifications/Notifications';
import User from './User/User';
import Store from './../../context';

export default function Main() {

  return (
    <Store.Consumer>
      {(store) => (
        <View style={styles.container}>
          {store.main.value == "Company" && <Company />}
          {store.main.value == "Screening" && <Screening />}
          {store.main.value == "News" && <News />}
          {store.main.value == "Notifications" && <Notifications />}
          {store.main.value == "User" && <User />}
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
    borderWidth: 1,
    borderColor: "green",
  },
});