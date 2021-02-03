import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { StyleSheet, Text, View, Button } from 'react-native';
import Company from './Company/Company';
import Screening from './Screening/Screening';
import Menu from '../Menu/Menu';

export default function Main() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Company" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Company" component={Company} />
        <Stack.Screen name="Screening" component={Screening} />
      </Stack.Navigator>
    </View>
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