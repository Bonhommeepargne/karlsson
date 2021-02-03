import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Store from './../../../context';
import firebase from "./../../../firebase";

export default function Company(props) {

    // FIRE BASE
  const db = firebase.firestore();

  async function add(id, body) {
    const docRef = db.collection('test').doc(id);
    await docRef.set(body);
  }

  async function del(id) {
    await db.collection('test').doc(id).delete();
  }
  async function get(id) {
    return db.collection('test').doc(id).get();
  }

  async function read() {
    const docs = await db.collection('test').get();
    docs.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  }
  async function findAndUpdate() {
    const docs = await db.collection('test').get();
    docs.forEach(async (doc) => {
      if (doc.data().durée == 42) {
        const docRef = db.collection('test').doc(doc.id);
        await docRef.set({
          ...doc.data(),
          titre: "lol2"
        });
      }
    });
  }

  async function main() {
    const body = await get("Jim");
    console.log("body.data() :> ", body.data());
    await read();
    await add("Jim", {...body.data(), c: 0}); // Ajoute sans tout remplacer
    await read();

  }

  main();
  return (
    <Store.Consumer>
    {(store) => (
      <View style={styles.container}>
        <Text>Company</Text>
        <Text>Open up App.js to start working on your app! </Text>
        <Button
          title="To Increment"
          onPress={() => {}}
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
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "green",
  },
});